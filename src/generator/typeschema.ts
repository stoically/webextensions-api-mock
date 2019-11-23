import {
  TypeSchema,
  Enum,
  NamespaceSchema,
  Indexable,
} from 'webextensions-schema';
import { capitalize } from './helper';

export type OutTypeSchema = {
  parent: Array<string>;
  childTypes: Array<string>;
};

export class TypeSchemaGenerator {
  private interfaceName: string;
  private name = '';
  private out: OutTypeSchema;

  constructor(
    interfaceName: string,
    namespace: NamespaceSchema,
    out: OutTypeSchema
  ) {
    this.interfaceName = interfaceName;
    this.out = out;

    this.typeSchemasArray(namespace.functions);
    this.typeSchemasArray(namespace.events, 'event');
    this.typeSchemasArray(namespace.types);
    this.typeSchemasObject(namespace.properties);
  }

  private typeSchemasArray(typeSchemas?: TypeSchema[], type?: string): void {
    if (!typeSchemas) return;

    typeSchemas.forEach(typeSchema => {
      if (type) typeSchema.type = type;
      this.typeSchema(typeSchema);
    });
  }

  private typeSchemasObject(typeSchemas?: Indexable<TypeSchema>): void {
    if (!typeSchemas) return;

    Object.keys(typeSchemas).forEach(typeSchemaName => {
      if (!typeSchemas) return;
      const typeSchema = typeSchemas[typeSchemaName];
      typeSchema.name = typeSchemaName;
      this.typeSchema(typeSchema);
    });
  }

  private typeSchema(typeSchema: TypeSchema): void {
    const name = typeSchema.id || typeSchema.name;
    if (!name) return;
    this.name = name;

    if (typeSchema.$ref) {
      const refParts = typeSchema.$ref.split('.');
      if (refParts.length === 1) {
        this.out.parent.push(
          `${this.name}: ${this.interfaceName}["${typeSchema.$ref}"];`
        );
      } else {
        const last = refParts.pop();
        this.out.parent.push(
          `${this.name}: ${refParts
            .map(refPart => capitalize(refPart))
            .join('')}["${last}"];`
        );
      }
    }

    if (typeSchema.type === 'string') {
      this.out.parent.push(
        `${this.name}: ${this.string(
          this.name,
          !!typeSchema.optional,
          typeSchema.enum
        )};`
      );
    }

    if (typeSchema.type === 'function') {
      const fnOut = this.fn(typeSchema);
      if (fnOut) this.out.parent.push(fnOut);
    }

    if (typeSchema.type === 'event') {
      const eventOut = this.event(typeSchema);
      if (eventOut) this.out.parent.push(eventOut);
    }

    if (typeSchema.type === 'object') {
      this.object(typeSchema);
    }
  }

  private object(obj: TypeSchema): void {
    const out: string[] = ['{'];
    if (obj.functions) {
      obj.functions.forEach(fn => {
        const fnOut = this.fn(fn);
        if (fnOut) out.push(fnOut);
      });
    }

    if (obj.events) {
      obj.events.forEach(event => {
        const eventOut = this.event(event);
        if (eventOut) out.push(eventOut);
      });
    }

    if (obj.properties) {
      Object.keys(obj.properties).forEach(propertyName => {
        if (!obj.properties) return;
        const property = obj.properties[propertyName];
        if (!property.type) return;

        this.objectProperty(out, propertyName, property);
      });
    }

    out.push('}');
    this.out.parent.push(`${this.name}: ${out.join('\n')};`);
  }

  private fn(fn: TypeSchema): string | false {
    if (!fn.name || fn.unsupported) return false;
    return `${fn.name}: sinon.SinonStub;`;
  }

  private event(event: TypeSchema): string | false {
    if (!event.name || event.unsupported) return false;
    return `${event.name}: SinonEventStub;`;
  }

  private string(name: string, optional: boolean, enums?: Enum[]): string {
    return enums ? this.enum(name, optional, enums) : 'string[]';
  }

  private objectProperty(
    out: string[],
    propertyName: string,
    property: TypeSchema
  ): void {
    if (
      property.type &&
      ['string', 'boolean', 'integer', 'any'].includes(property.type)
    ) {
      const type = property.type === 'integer' ? 'number' : property.type;
      if (property.type === 'any') {
        out.push(
          '// eslint-disable-next-line @typescript-eslint/no-explicit-any'
        );
      }
      out.push(`${this.key(propertyName, property.optional)} ${type};`);
    }

    if (property.type === 'array' && property.items?.type === 'string') {
      out.push(
        `${this.key(propertyName, property.optional)} ${this.string(
          propertyName,
          !!property.optional,
          property.items.enum
        )};`
      );
    }
  }

  private key(name: string, optional?: boolean): string {
    return `${name}${optional ? '?' : ''}:`;
  }

  private enum(name: string, optional: boolean, enums: Enum[]): string {
    const childName = `${this.interfaceName}${capitalize(name)}`;

    this.out.childTypes.push(
      `type ${childName} = '${enums
        .map(entry => {
          if (typeof entry === 'object') {
            return entry.name;
          } else {
            return entry;
          }
        })
        .join("' | '")}';`
    );

    return `${childName}[]`;
  }
}
