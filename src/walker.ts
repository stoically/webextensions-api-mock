import {
  SchemaNamespaces,
  NamespaceSchema,
  TypeSchema,
  Indexable,
} from 'webextensions-schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SchemaWalkerValue = any;

type SchemaWalkerType = {
  typeschema: TypeSchema;
  locked?: boolean; // For detecting circular references
};

export interface SchemaWalkerDelegate {
  handleImport(schemaId: SchemaId, name: string, out: SchemaWalkerValue): void;

  createNamespaceValue(
    schemaId: SchemaId,
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  startObjectPropertyValue(
    schemaId: SchemaId,
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  finishObjectPropertyValue(
    schemaId: SchemaId,
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  valueForInvalidRef(schemaId: SchemaId): SchemaWalkerValue;

  valueForCircularType(schemaId: SchemaId): SchemaWalkerValue;

  finishTypeValue(
    schemaId: SchemaId,
    value: unknown,
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  createEnumValue(
    schemaId: SchemaId,
    type: string,
    choices: string[],
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  createPlainValue(
    schemaId: SchemaId,
    type: string,
    isArray: boolean,
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  createEventValue(
    schemaId: SchemaId,
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  createFnValue(
    schemaId: SchemaId,
    returnValue: SchemaWalkerValue,
    out: SchemaWalkerValue
  ): SchemaWalkerValue;

  handleField(
    schemaId: SchemaId,
    name: string,
    value: unknown,
    optional: boolean,
    out: SchemaWalkerValue
  ): void;
}

type AnySchema = {
  $import?: string;
  functions?: TypeSchema[];
  properties?: Indexable<TypeSchema>;
  events?: TypeSchema[];
};

export enum SchemaType {
  Namespace = 1,
  Type,
  ObjectProperty,
}

/**
  Identifies either a NamespaceSchema or TypeSchema, and helps
  create schemaIds for references to other TypeSchemas.
 */
export class SchemaId {
  name: string;
  type: SchemaType;

  constructor(name: string, type: SchemaType) {
    this.name = name;
    this.type = type;
  }

  get namespace(): string {
    if (this.type === SchemaType.Namespace) {
      return this.name;
    } else {
      return this.name.substring(0, this.name.lastIndexOf('.'));
    }
  }

  get namespaceId(): SchemaId {
    return this.type === SchemaType.Namespace
      ? this
      : new SchemaId(this.namespace, SchemaType.Namespace);
  }

  toString(): string {
    return `${SchemaType[this.type]}::${this.name}`;
  }

  withRef(refName: string): SchemaId {
    const name = refName.includes('.')
      ? refName
      : `${this.namespace}.${refName}`;
    return new SchemaId(name, SchemaType.Type);
  }

  withObjectProperty(propertyName?: string): SchemaId {
    const suffix = propertyName || '{object}';
    const name = `${this.name}::${suffix}`;
    return new SchemaId(name, SchemaType.ObjectProperty);
  }

  static withNamespace(namespace: NamespaceSchema): SchemaId {
    return new SchemaId(namespace.namespace, SchemaType.Namespace);
  }

  static withType(name: string): SchemaId {
    return new SchemaId(name, SchemaType.Type);
  }
}

export enum SchemaWalkerFlags {
  None,
  SuppressWarnings = 1 << 1,
  NoTypeValueReuse = 1 << 2,
}

export class SchemaWalker {
  private types: Map<string, SchemaWalkerType> = new Map();
  private outs: Map<string, SchemaWalkerValue> = new Map();
  private delegate: SchemaWalkerDelegate;
  private flags: SchemaWalkerFlags;

  constructor(delegate: SchemaWalkerDelegate, flags?: SchemaWalkerFlags) {
    this.delegate = delegate;
    this.flags = flags || SchemaWalkerFlags.None;
  }

  public walk(schemaNamespaces: SchemaNamespaces): void {
    this.extractTypes(schemaNamespaces);
    this.extractNamespaces(schemaNamespaces);
  }

  private extractTypes(schemaNamespaces: SchemaNamespaces): void {
    Object.values(schemaNamespaces).forEach(namespaces =>
      namespaces.forEach(namespace => {
        if (!namespace.types) {
          return;
        }

        namespace.types.forEach(type => {
          if (!type.id) return;
          const typeId = type.id.includes('.')
            ? type.id
            : `${namespace.namespace}.${type.id}`;
          this.types.set(typeId, { typeschema: type });
        });
      })
    );

    this.types.forEach((value, key) => {
      this.schema(SchemaId.withType(key), value.typeschema);
    });
  }

  private extractNamespaces(schemaNamespaces: SchemaNamespaces): void {
    Object.values(schemaNamespaces).forEach(namespaces =>
      namespaces.forEach(namespace =>
        this.schema(SchemaId.withNamespace(namespace), namespace)
      )
    );
  }

  private schema(
    schemaId: SchemaId,
    schema: AnySchema,
    out?: SchemaWalkerValue
  ): SchemaWalkerValue {
    if (schema.$import) {
      this.delegate.handleImport(schemaId, schema.$import, out);
      return undefined;
    }

    switch (schemaId.type) {
      case SchemaType.Namespace: // Fall through
      case SchemaType.ObjectProperty:
        return this.namespaceOrObjectProperty(schemaId, schema, out);
      case SchemaType.Type:
        return this.type(schemaId, schema as TypeSchema);
    }
  }

  private namespaceOrObjectProperty(
    schemaId: SchemaId,
    schema: AnySchema,
    out: SchemaWalkerValue
  ): SchemaWalkerValue {
    let node: SchemaWalkerValue;
    if (schemaId.type === SchemaType.Namespace) {
      node = this.outs.get(schemaId.name);
      if (!node) {
        node = this.delegate.createNamespaceValue(schemaId, out);
        this.outs.set(schemaId.name, node);
      }
    } else {
      node = this.delegate.startObjectPropertyValue(schemaId, out);
    }
    if (!node) return;

    if (schema.properties) {
      Object.keys(schema.properties).forEach(propertyName => {
        if (!schema.properties) return;

        const property = schema.properties[propertyName];
        const optional = property.optional || property.unsupported;
        const value = this.value(schemaId, property, node, propertyName);
        this.field(schemaId, propertyName, value, !!optional, node);
      });
    }

    if (schema.functions) {
      schema.functions.forEach(fn => {
        if (!fn.name || fn.type !== 'function') {
          return;
        }
        const optional = fn.optional || fn.unsupported;
        const value = this.fn(schemaId, fn, node);
        this.field(schemaId, fn.name, value, !!optional, node);
      });
    }

    if (schema.events) {
      schema.events.forEach(event => {
        if (!event.name || event.type !== 'function') {
          return;
        }
        const value = this.event(schemaId, node);
        this.field(schemaId, event.name, value, false, node);
      });
    }

    if (schemaId.type === SchemaType.ObjectProperty) {
      const newNode = this.delegate.finishObjectPropertyValue(schemaId, node);
      if (newNode) node = newNode;
    }

    return node;
  }

  private field(
    schemaId: SchemaId,
    name: string,
    value: SchemaWalkerValue,
    optional: boolean,
    out: SchemaWalkerValue
  ): void {
    if (value === undefined) {
      return;
    }
    this.delegate.handleField(schemaId, name, value, optional, out);
  }

  private type(schemaId: SchemaId, schema: TypeSchema): SchemaWalkerValue {
    let node: SchemaWalkerValue = this.outs.get(schemaId.name);
    if (!node || this.flags & SchemaWalkerFlags.NoTypeValueReuse) {
      // Circular-reference check
      const type = this.types.get(schemaId.name);
      if (type) {
        if (type.locked) {
          return this.delegate.valueForCircularType(schemaId);
        } else {
          type.locked = true;
        }
      }

      // Create namespace if needed
      let out = this.outs.get(schemaId.namespace);
      if (!out) {
        out = this.schema(schemaId.namespaceId, {});
      }

      // Create type value
      node = this.value(schemaId, schema, out);
      if (node) {
        const newNode = this.delegate.finishTypeValue(schemaId, node, out);
        if (newNode) node = newNode;
        this.outs.set(schemaId.name, node);
      }

      if (type) type.locked = false;
    }
    return node;
  }

  private value(
    schemaId: SchemaId,
    schema: TypeSchema,
    out: SchemaWalkerValue,
    name?: string
  ): SchemaWalkerValue {
    if (schema.value) {
      return schema.value;
    } else if (schema.$ref) {
      return this.ref(schemaId.withRef(schema.$ref));
    } else if (schema.enum) {
      const enums = schema.enum.map(enumObj => {
        return typeof enumObj === 'object' ? enumObj.name : enumObj;
      });
      return this.delegate.createEnumValue(
        schemaId,
        schema.type || 'string',
        enums,
        out
      );
    } else if (schema.type) {
      switch (schema.type) {
        case 'string': // Fall through
        case 'boolean': // Fall through
        case 'integer': // Fall through
        case 'number': // Fall through
        case 'any': // Fall through
        case 'choices': // Fall through
          return this.delegate.createPlainValue(
            schemaId,
            schema.type,
            false,
            out
          );

        case 'array':
          const items = schema.items;
          if (items) {
            const arrayType = this.value(schemaId, items, out, name) || 'any';
            return this.delegate.createPlainValue(
              schemaId,
              arrayType,
              true,
              out
            );
          } else {
            return undefined;
          }

        case 'function':
          return this.fn(schemaId, schema, out);

        case 'event':
          return this.event(schemaId, out);

        case 'object':
          return this.schema(schemaId.withObjectProperty(name), schema, out);
      }
    } else if (schema.choices) {
      return this.delegate.createPlainValue(schemaId, 'choices', false, out);
    }
  }

  private event(schemaId: SchemaId, out: SchemaWalkerValue): SchemaWalkerValue {
    return this.delegate.createEventValue(schemaId, out);
  }

  private fn(
    schemaId: SchemaId,
    schema: TypeSchema,
    out: SchemaWalkerValue
  ): SchemaWalkerValue {
    let returnValue = undefined;
    if (schema.returns && schema.returns.$ref) {
      returnValue = this.ref(schemaId.withRef(schema.returns.$ref));
    }
    return this.delegate.createFnValue(schemaId, returnValue, out);
  }

  private ref(schemaId: SchemaId): SchemaWalkerValue {
    const schema = this.types.get(schemaId.name)?.typeschema;
    if (schema) {
      return this.schema(schemaId, schema);
    } else {
      if (
        process?.env?.NODE_ENV !== 'production' &&
        !(this.flags & SchemaWalkerFlags.SuppressWarnings)
      ) {
        console.warn(`Ref not found '${schemaId.name}'`);
      }
      return this.delegate.valueForInvalidRef(schemaId);
    }
  }
}
