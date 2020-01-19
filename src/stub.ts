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

/**
  Identifies either a NamespaceSchema or TypeSchema, and helps
  create schemaIds for references to other TypeSchemas.
 */
class SchemaId {
  name: string;
  isTypeSchema: boolean;

  constructor(name: string, isTypeSchema: boolean) {
    this.name = name;
    this.isTypeSchema = isTypeSchema;
  }

  get namespace(): string {
    if (this.isTypeSchema) {
      return this.name.substring(0, this.name.lastIndexOf('.'));
    } else {
      return this.name;
    }
  }

  withRef(refName: string): SchemaId {
    const name = refName.includes('.')
      ? refName
      : `${this.namespace}.${refName}`;
    return new SchemaId(name, true);
  }

  static withNamespace(namespace: NamespaceSchema): SchemaId {
    return new SchemaId(namespace.namespace, false);
  }
}

export class BrowserBuilder {
  public sandbox: sinon.SinonSandbox;
  public browser: BrowserOut;
  public aliases: Map<string, string>;
  public types: Map<string, TypeSchema>;

  constructor(types: Map<string, TypeSchema>) {
    this.sandbox = sinon.createSandbox();
    this.aliases = new Map();
    this.browser = {
      sinonSandbox: this.sandbox,
    };
    this.types = new Map(types);
  }

  public namespace(namespace: NamespaceSchema): void {
    this.schema(SchemaId.withNamespace(namespace), namespace);
  }

  private schema(schemaId: SchemaId, schema: AnySchema): StubOut | undefined {
    if (schema.$import) {
      this.aliases.set(schemaId.name, schema.$import);
      return undefined;
    }

    let stub = this.browser[schemaId.name];
    if (!stub) {
      stub = this.browser[schemaId.name] = {};
    }

    if (schema.properties) {
      Object.keys(schema.properties).forEach(propertyName => {
        if (!schema.properties) return;

        const property = schema.properties[propertyName];
        stub[propertyName] = this.property(schemaId, property);
      });
    }

    if (schema.events) {
      schema.events.forEach(event => {
        if (!event.name || event.type !== 'function') {
          return;
        }
        stub[event.name] = this.event();
      });
    }

    if (schema.functions) {
      schema.functions.forEach(fn => {
        if (!fn.name || fn.type !== 'function') {
          return;
        }
        stub[fn.name] = this.fn(schemaId, fn);
      });
    }

    return stub;
  }

  private property(
    schemaId: SchemaId,
    schema: TypeSchema
  ): StubOut | undefined {
    if (schema.value) {
      return schema.value;
    } else if (schema.$ref) {
      return this.ref(schemaId.withRef(schema.$ref));
    } else if (schema.type) {
      switch (schema.type) {
        case 'function':
          return this.fn(schemaId, schema);
      }
    }
  }

  private ref(schemaId: SchemaId): StubOut | undefined {
    if (this.browser[schemaId.name]) {
      return this.browser[schemaId.name];
    } else {
      const schema = this.types.get(schemaId.name);
      if (schema) {
        return this.schema(schemaId, schema);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Ref not found '${schemaId.name}'`);
        }
      }
    }
  }

  private fn(schemaId: SchemaId, schema: TypeSchema): StubOut | undefined {
    let stub = this.sandbox.stub();
    if (schema.returns && schema.returns.$ref) {
      const value = this.ref(schemaId.withRef(schema.returns.$ref));
      if (value) stub = stub.returns(value);
    }
    return stub;
  }

  private event(): StubOut {
    return {
      addListener: this.sandbox.stub(),
      removeListener: this.sandbox.stub(),
      hasListener: this.sandbox.stub(),
    };
  }
}
