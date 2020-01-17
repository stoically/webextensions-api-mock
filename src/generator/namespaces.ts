import { TypeSchemaGenerator, OutTypeSchema, OutWorking } from './typeschema';
import { SchemaNamespaces, NamespaceSchema } from 'webextensions-schema';
import { capitalize, capitalizeArray, isCapitalized } from './helper';

const OUT_PREFIX = `
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import sinon from 'sinon';

`;

const SUBSTITUTE_REGEX = /\%\%([^\%]+)\%\%/g;

export type OutNamespaces = Map<string, OutTypeSchema>;

export class NamespacesGenerator {
  private outNamespaces: OutNamespaces = new Map();
  private outBrowser: Map<string, string> = new Map([
    ['sinonSandbox', 'sinon.SinonSandbox;'],
  ]);
  private imports: {
    [key: string]: string;
  }[] = [];

  private working: OutWorking = {
    // Contains names of all valid interfaces and types.
    // Used to substitute references after generation.
    // Initialise with any built-in javascript classes that are referenced
    // in the schema data.
    interfaceOrTypeNames: new Set(['ImageData']),
    childObjectTypeSchemas: [],
  };

  constructor(namespaces: SchemaNamespaces) {
    Object.keys(namespaces).forEach(namespaceName => {
      namespaces[namespaceName].forEach(namespace => this.namespace(namespace));
    });

    this.substituteReferences();
  }

  private namespace(namespace: NamespaceSchema): void {
    const nameParts = namespace.namespace.split('.');
    const [topLevelName] = nameParts;
    const interfaceName = nameParts.map(name => capitalize(name)).join('');
    this.working.interfaceOrTypeNames.add(interfaceName);

    if (!this.outBrowser.has(topLevelName)) {
      this.outBrowser.set(topLevelName, capitalize(topLevelName));
    }

    let out = this.outNamespaces.get(interfaceName);
    if (!out) {
      out = {
        parent: [],
        childTypes: [],
        extendsInterfaceName: undefined,
      };
      this.outNamespaces.set(interfaceName, out);
    }

    if (nameParts.length > 1) {
      let lastName = '';
      nameParts.forEach((namePart, index) => {
        if (index > 0 && !isCapitalized(namePart)) {
          this.outNamespaces
            .get(lastName)
            ?.parent.push(`${namePart}: ${lastName + capitalize(namePart)};`);
        }
        lastName += capitalize(namePart);
      });
    }

    new TypeSchemaGenerator(
      topLevelName,
      interfaceName,
      namespace,
      out,
      this.working
    );

    const childObjectTypeSchemas = this.working.childObjectTypeSchemas;
    this.working.childObjectTypeSchemas = [];
    childObjectTypeSchemas.forEach(typeSchema => {
      const typeSchemaName = typeSchema.id || typeSchema.name;
      if (typeSchemaName) {
        const namespace = typeSchema as NamespaceSchema;
        namespace.namespace = `${topLevelName}.${typeSchemaName}`;
        this.namespace(namespace);
      }
    });
  }

  private substituteReferences(): void {
    this.outNamespaces.forEach((outInterface, interfaceName) => {
      outInterface.parent.forEach((line, index, array) => {
        array[index] = this.substituteReference(line);
      });
      if (outInterface.extendsInterfaceName) {
        outInterface.extendsInterfaceName = this.substituteReference(
          outInterface.extendsInterfaceName
        );
      }
      outInterface.childTypes.forEach((line, index, array) => {
        array[index] = this.substituteReference(line);
      });
    });
  }

  private substituteReference(line: string): string {
    return line.replace(SUBSTITUTE_REGEX, (a, ref) => {
      const refParts = capitalizeArray(ref.split('.'));
      let newRef = refParts.slice(1).join('');
      if (!this.working.interfaceOrTypeNames.has(newRef)) {
        newRef = refParts.join('');
        if (!this.working.interfaceOrTypeNames.has(newRef)) {
          console.warn(`Ref not found: '${ref}'`);
          return 'any';
        }
      }
      return newRef;
    });
  }

  public out(): string {
    const out: string[] = [OUT_PREFIX];

    out.push(`export interface BrowserMock {`);
    this.outBrowser.forEach((value, key) => {
      out.push(`${key}: ${value}`);
    });
    out.push(`}\n`);

    this.outNamespaces.forEach((outInterface, interfaceName) => {
      const extendsInterface = outInterface.extendsInterfaceName
        ? ` extends ${outInterface.extendsInterfaceName}`
        : '';
      out.push(`export interface ${interfaceName}${extendsInterface} {`);
      outInterface.parent.forEach(value => {
        if (value.startsWith('eval:')) {
          out.push('// @ts-ignore');
        }

        out.push(value);
      });
      const ignoreEmpty =
        outInterface.parent.length > 0
          ? ''
          : ' // eslint-disable-line @typescript-eslint/no-empty-interface';
      out.push(`}${ignoreEmpty}\n`);

      outInterface.childTypes.forEach(value => {
        out.push(`export ${value}\n`);
      });
    });

    return out.join('\n');
  }
}
