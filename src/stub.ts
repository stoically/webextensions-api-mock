import sinon from 'sinon';
import { NamespaceSchema, TypeSchema, Indexable } from 'webextensions-schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BrowserOut = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StubOut = any;

type AnySchema = {
  $import?: string;
  functions?: TypeSchema[];
  properties?: Indexable<TypeSchema>;
  events?: TypeSchema[];
};

export class BrowserBuilder {
  public sandbox: sinon.SinonSandbox;
  public browser: BrowserOut;
  public aliases: Map<string, string>;
  public types: Map<string, TypeSchema>;

  private namespaceName = '';

  constructor(types: Map<string, TypeSchema>) {
    this.sandbox = sinon.createSandbox();
    this.aliases = new Map();
    this.browser = {
      sinonSandbox: this.sandbox,
    };
    this.types = new Map(types);

    // Populate typenames without namespace prefix, in cases where no match is
    // found for lookups using fully-qualified names
    this.types.forEach((v, k, map) => {
      const indexOfDot = k.lastIndexOf('.');
      if (indexOfDot !== -1) {
        const shortKey = k.substring(indexOfDot + 1);
        if (shortKey.length > 0 && !map.has(shortKey)) {
          map.set(shortKey, v);
        }
      }
    });
  }

  public namespace(namespace: NamespaceSchema): void {
    this.namespaceName = namespace.namespace;
    this.browser[this.namespaceName] = this.schema(
      namespace,
      this.browser[this.namespaceName]
    );
    this.namespaceName = '';
  }

  private schema(schema: AnySchema, stubOut?: StubOut): StubOut | undefined {
    if (schema.$import) {
      this.aliases.set(this.namespaceName, schema.$import);
      return stubOut;
    }

    const stub: StubOut = stubOut || {};

    if (schema.properties) {
      Object.keys(schema.properties).forEach(propertyName => {
        if (!schema.properties) return;

        const property = schema.properties[propertyName];
        stub[propertyName] = this.property(property);
      });
    }

    if (schema.events) {
      schema.events.forEach(event => {
        if (!event.name || event.type !== 'function') {
          return;
        }
        stub[event.name] = this.event(event);
      });
    }

    if (schema.functions) {
      schema.functions.forEach(fn => {
        if (!fn.name || fn.type !== 'function') {
          return;
        }
        stub[fn.name] = this.fn(fn);
      });
    }

    return stub;
  }

  private property(schema: TypeSchema): StubOut | undefined {
    if (schema.value) {
      return schema.value;
    } else if (schema.$ref) {
      return this.ref(schema.$ref);
    } else if (schema.type) {
      switch (schema.type) {
        case 'function':
          return this.fn(schema);
      }
    }
  }

  private ref(refName: string): StubOut | undefined {
    const fullRefName = refName.includes('.')
      ? refName
      : `${this.namespaceName}.${refName}`;
    let ref = this.types.get(fullRefName);
    if (!ref) {
      ref = this.types.get(refName);
    }
    if (ref) {
      return this.schema(ref);
    } else {
      console.warn(
        `Ref not found '${refName}' in namespace '${this.namespaceName}'`
      );
    }
  }

  private fn(schema: TypeSchema): StubOut | undefined {
    let stub = this.sandbox.stub();
    if (schema.returns && schema.returns.$ref) {
      const value = this.ref(schema.returns.$ref);
      if (value) stub = stub.returns(value);
    }
    return stub;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private event(schema: TypeSchema): StubOut {
    return {
      addListener: this.sandbox.stub(),
      removeListener: this.sandbox.stub(),
      hasListener: this.sandbox.stub(),
    };
  }
}
