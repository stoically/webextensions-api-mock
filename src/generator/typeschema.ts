import {
  TypeSchema,
  Enum,
  NamespaceSchema,
  Indexable,
} from 'webextensions-schema';
import { capitalize, underscoreToCamelCase } from './helper';

export type OutTypeSchema = {
  parent: Array<string>;
  childTypes: Array<string>;
  extendsInterfaceName?: string;
};

export type OutWorking = {
  interfaceOrTypeNames: Set<string>;
  childObjectTypeSchemas: Array<TypeSchema>;
};

export class TypeSchemaGenerator {
  private topLevelName: string;
  private interfaceName: string;
  private name = '';
  private out: OutTypeSchema;
  private working: OutWorking;

  constructor(
    topLevelName: string,
    interfaceName: string,
    namespace: NamespaceSchema,
    out: OutTypeSchema,
    working: OutWorking
  ) {
    this.topLevelName = topLevelName;
    this.interfaceName = interfaceName;
    this.out = out;
    this.working = working;

    this.namespaceExtends(namespace);

    this.typeSchemasArray(namespace.functions);
    this.typeSchemasArray(namespace.events, 'event');
    this.typeSchemasArray(namespace.types, undefined, true);
    this.typeSchemasObject(namespace.properties);
  }

  /**
    Used when the supplied namespace is in reality a child TypeSchema
    nested in a genuine NamespaceSchema.

    The TypeSchema should be of 'object' type, and may declare
    optional properties 'isInstanceOf' or '$import', which are handled here.
   */
  private namespaceExtends(namespace: NamespaceSchema): void {
    const typeSchema = namespace as TypeSchema;
    const extendsInterfaceName = typeSchema.isInstanceOf || typeSchema.$import;
    if (extendsInterfaceName) {
      const refCode = this.refCode(extendsInterfaceName);
      this.out.extendsInterfaceName = refCode;
    }
  }

  private typeSchemasArray(
    typeSchemas?: TypeSchema[],
    type?: string,
    isInterfaceOrType?: boolean
  ): void {
    if (!typeSchemas) return;

    typeSchemas.forEach(typeSchema => {
      if (type) typeSchema.type = type;
      const name = typeSchema.id || typeSchema.name;
      if (name) {
        this.typeSchema(name, typeSchema, this.out.parent, isInterfaceOrType);
      }
    });
  }

  private typeSchemasObject(typeSchemas?: Indexable<TypeSchema>): void {
    if (!typeSchemas) return;

    Object.keys(typeSchemas).forEach(typeSchemaName => {
      if (!typeSchemas) return;
      const typeSchema = typeSchemas[typeSchemaName];
      typeSchema.name = typeSchemaName;
      this.typeSchema(typeSchemaName, typeSchema, this.out.parent);
    });
  }

  private typeSchema(
    name: string,
    typeSchema: TypeSchema,
    out: string[],
    isInterfaceOrType = false
  ): void {
    if (isInterfaceOrType) {
      this.interfaceOrType(name, typeSchema);
    } else {
      this.property(name, typeSchema, out);
    }
  }

  private interfaceOrType(name: string, typeSchema: TypeSchema): void {
    if (typeSchema.type === 'object') {
      this.working.childObjectTypeSchemas.push(typeSchema);
    } else if (typeSchema.enum) {
      this.enum(name, typeSchema);
    } else {
      const childName = this.refName(name);
      const childType = this.propertyValue(typeSchema);
      this.out.childTypes.push(`type ${childName} = ${childType};`);
      this.working.interfaceOrTypeNames.add(childName);
    }
  }

  private enum(name: string, typeSchema: TypeSchema): string {
    if (!typeSchema.enum) throw new Error('Invalid arg: missing enum property');
    const enumName = this.refName(name);
    const enums: Enum[] = typeSchema.enum;
    const enumValue = enums
      .reduce<any[]>((result, entry) => {
        let value;
        if (typeof entry === 'object') {
          value = entry.name;
        } else {
          value = entry;
        }
        if (value !== undefined && value !== null) {
          result.push(value);
        }
        return result;
      }, [])
      .join("' | '");

    this.out.childTypes.push(`type ${enumName} = '${enumValue}';`);

    this.working.interfaceOrTypeNames.add(enumName);

    return enumName;
  }

  private property(name: string, typeSchema: TypeSchema, out: string[]): void {
    const propertyName = this.propertyKey(
      name,
      typeSchema.optional || typeSchema.unsupported
    );
    const propertyValue = typeSchema.enum
      ? this.enum(name, typeSchema)
      : this.propertyValue(typeSchema);
    if (propertyValue) {
      out.push(`${propertyName}: ${propertyValue};`);
    } else {
      console.warn(`Unhandled type: ${typeSchema.type} for ${name}`);
    }
  }

  private propertyKey(name: string, optional?: boolean): string {
    return `${name}${optional ? '?' : ''}`;
  }

  private propertyValue(typeSchema?: TypeSchema): string | undefined {
    if (!typeSchema) {
      return 'any';
    } else if (typeSchema.$ref) {
      return this.refCode(typeSchema.$ref);
    } else if (typeSchema.value) {
      return `${typeSchema.value}`;
    } else if (typeSchema.type) {
      switch (typeSchema.type) {
        case 'string': // Fall through
        case 'boolean': // Fall through
        case 'integer': // Fall through
        case 'number': // Fall through
        case 'any': // Fall through
        case 'choices': // Fall through
          let type;
          switch (typeSchema.type) {
            case 'integer':
              type = 'number';
              break;
            case 'choices':
              type = 'any';
              break;
            default:
              type = typeSchema.type;
          }
          return type;

        case 'array':
          const arrayType = this.propertyValue(typeSchema.items) || 'any';
          return `${arrayType}[]`;

        case 'function':
          return this.fnValue(typeSchema);

        case 'event':
          return this.eventValue(typeSchema);

        case 'object':
          return this.objValue(typeSchema);
      }
    } else if (typeSchema.choices) {
      return 'any';
    }
  }

  private fnValue(fn: TypeSchema): string {
    if (fn.returns && fn.returns.$ref) {
      return `() => ${this.refCode(fn.returns.$ref)}`;
    } else {
      return 'sinon.SinonStub';
    }
  }

  private eventValue(event: TypeSchema): string {
    return 'EventsEvent';
  }

  private objValue(obj: TypeSchema): string {
    const out: string[] = ['{'];
    if (obj.functions) {
      obj.functions.forEach(fn => {
        if (fn.name) {
          if (!fn.type) fn.type = 'function';
          this.typeSchema(fn.name, fn, out);
        }
      });
    }

    if (obj.events) {
      obj.events.forEach(event => {
        if (event.name) {
          if (!event.type) event.type = 'event';
          this.typeSchema(event.name, event, out);
        }
      });
    }

    if (obj.properties) {
      Object.keys(obj.properties).forEach(propertyName => {
        if (!obj.properties) return;
        const property = obj.properties[propertyName];
        this.typeSchema(propertyName, property, out);
      });
    }

    out.push('}');
    return out.join('\n');
  }

  /**
    Used for inserting '%%namespace.somePropertyName%%' in the output. This should
    then be processed in a later step to substitute the correct interface name.
   */
  private refCode(ref: string): string {
    ref = underscoreToCamelCase(ref);
    return `%%${this.topLevelName}.${ref}%%`;
  }

  /**
    Used when inserting childTypes, which don't require any later processing step
    and therefore can have their 'final names' calculated immediately, instead of
    requiring a later substitution step.
   */
  private refName(ref: string): string {
    ref = capitalize(underscoreToCamelCase(ref));
    const refParts = ref.split('.');
    let interfaceName, nestedType;
    if (refParts.length === 1) {
      interfaceName = capitalize(this.topLevelName);
      nestedType = ref;
    } else {
      nestedType = refParts.pop();
      interfaceName = refParts.map(refPart => capitalize(refPart)).join('');
    }
    return `${interfaceName}${nestedType}`;
  }
}
