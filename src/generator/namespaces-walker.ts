import { SchemaNamespaces } from 'webextensions-schema';
import { capitalize } from './helper';
import {
  SchemaId,
  SchemaType,
  SchemaWalker,
  SchemaWalkerDelegate,
  SchemaWalkerValue,
} from '../walker';

export type OutTypeSchema = {
  parent: Array<string>;
  childTypes: Array<string>;
};
export type OutNamespaces = Map<string, OutTypeSchema>;
export type Imports = { [key: string]: string }[];

type TypeId = { shortName: string; fullName: string };

class Utils {
  static typeIdWithSchemaId(schemaId: SchemaId): TypeId {
    const nameParts = schemaId.name.split('.').map(name => capitalize(name));
    const lastName = nameParts.pop();
    const firstName = nameParts.shift();
    const middleName = nameParts.join('');
    return {
      shortName: `${lastName}`,
      fullName: `${firstName}${middleName}["${lastName}"]`,
    };
  }
}

export class NamespacesSchemaWalker implements SchemaWalkerDelegate {
  private outNamespaces: OutNamespaces;
  private imports: Imports;

  constructor(outNamespaces: OutNamespaces, imports: Imports) {
    this.outNamespaces = outNamespaces;
    this.imports = imports;
  }

  walk(schemaNamespaces: SchemaNamespaces): void {
    new SchemaWalker(this).walk(schemaNamespaces);
  }

  handleImport(schemaId: SchemaId, name: string): void {
    if (schemaId.type === SchemaType.Namespace) {
      this.imports.push({
        name: capitalize(schemaId.name),
        import: capitalize(name),
      });
    }
  }

  createNamespaceValue(schemaId: SchemaId): SchemaWalkerValue {
    const nameParts = schemaId.name.split('.');
    const interfaceName = nameParts.map(name => capitalize(name)).join('');
    const out = {
      parent: [],
      childTypes: [],
    };
    this.outNamespaces.set(interfaceName, out);
    return out;
  }

  startObjectPropertyValue(
    schemaId: SchemaId,
    out: OutTypeSchema
  ): SchemaWalkerValue {
    return {
      parent: [],
      childTypes: out.childTypes,
    };
  }

  finishObjectPropertyValue(
    schemaId: SchemaId,
    out: OutTypeSchema
  ): SchemaWalkerValue {
    const fields = out.parent.sort().join('\n');
    return `{\n${fields}\n}`;
  }

  valueForInvalidRef(): SchemaWalkerValue {
    return 'any';
  }

  valueForCircularType(schemaId: SchemaId): SchemaWalkerValue {
    return Utils.typeIdWithSchemaId(schemaId).fullName;
  }

  finishTypeValue(
    schemaId: SchemaId,
    value: unknown,
    out: OutTypeSchema
  ): SchemaWalkerValue {
    const typeId = Utils.typeIdWithSchemaId(schemaId);
    out.parent.push(`${typeId.shortName}: ${value};`);
    return typeId.fullName;
  }

  createEnumValue(
    schemaId: SchemaId,
    type: string,
    choices: string[],
    out: SchemaWalkerValue
  ): SchemaWalkerValue {
    if (type === 'string') {
      choices = choices.map(choice => `'${choice}'`);
    }
    const enumValue = choices.join('|');

    if (schemaId.type !== SchemaType.Type) {
      return enumValue;
    } else {
      const enumName = schemaId.name
        .split('.')
        .map(name => capitalize(name))
        .join('');
      out.childTypes.push(`${enumName} = ${enumValue};`);
      return enumName;
    }
  }

  createPlainValue(
    schemaId: SchemaId,
    type: string,
    isArray: boolean
  ): SchemaWalkerValue {
    let typeName;
    switch (type) {
      case 'integer':
        typeName = 'number';
        break;
      case 'choices':
        typeName = 'any';
        break;
      default:
        typeName = type;
    }
    return typeName + (isArray ? '[]' : '');
  }

  createEventValue(): SchemaWalkerValue {
    return 'Events["Event"]';
  }

  createFnValue(
    schemaId: SchemaId,
    returnValue: SchemaWalkerValue
  ): SchemaWalkerValue {
    if (returnValue !== undefined) {
      return `sinon.SinonStub<any[], ${returnValue}>`;
    } else {
      return 'sinon.SinonStub';
    }
  }

  handleField(
    schemaId: SchemaId,
    name: string,
    value: unknown,
    optional: boolean,
    out: OutTypeSchema
  ): void {
    out.parent.push(`${name}${optional ? '?' : ''}: ${value};`);
  }
}
