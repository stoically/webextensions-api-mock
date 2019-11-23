import { TypeSchemaGenerator, OutTypeSchema } from './typeschema';
import { SchemaNamespaces, NamespaceSchema } from 'webextensions-schema';
import { capitalize } from './helper';

const OUT_PREFIX = `
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import sinon from 'sinon';

export interface SinonEventStub {
  addListener: sinon.SinonStub;
  removeListener: sinon.SinonStub;
  hasListener: sinon.SinonStub;
}

`;

export type OutNamespaces = Map<string, OutTypeSchema>;

export class NamespacesGenerator {
  private outNamespaces: OutNamespaces = new Map();
  private outBrowser: Map<string, string> = new Map([
    ['sinonSandbox', 'sinon.SinonSandbox;'],
  ]);
  private imports: {
    [key: string]: string;
  }[] = [];

  constructor(namespaces: SchemaNamespaces) {
    Object.keys(namespaces).forEach(namespaceName => {
      namespaces[namespaceName].forEach(namespace => this.namespace(namespace));
    });
  }

  private namespace(namespace: NamespaceSchema): void {
    const nameParts = namespace.namespace.split('.');
    const [topLevelName] = nameParts;
    if (!this.outBrowser.has(topLevelName)) {
      this.outBrowser.set(topLevelName, capitalize(topLevelName));
    }

    if (namespace.$import) {
      this.imports.push({
        name: capitalize(namespace.namespace),
        import: capitalize(namespace.$import),
      });
      return;
    }

    const interfaceName = nameParts.map(name => capitalize(name)).join('');
    let out = this.outNamespaces.get(interfaceName);
    if (!out) {
      out = {
        parent: [],
        childTypes: [],
      };
      this.outNamespaces.set(interfaceName, out);
    }

    if (nameParts.length > 1) {
      let lastName = '';
      nameParts.forEach((namePart, index) => {
        if (index > 0) {
          this.outNamespaces
            .get(lastName)
            ?.parent.push(`${namePart}: ${lastName + capitalize(namePart)};`);
        }
        lastName += capitalize(namePart);
      });
    }

    new TypeSchemaGenerator(interfaceName, namespace, out);
  }

  public out(): string {
    const out: string[] = [OUT_PREFIX];

    out.push(`export interface BrowserMock {`);
    this.outBrowser.forEach((value, key) => {
      out.push(`${key}: ${value}`);
    });
    out.push(`}\n`);

    this.outNamespaces.forEach((outInterface, interfaceName) => {
      out.push(`export interface ${interfaceName} {`);
      outInterface.parent.forEach(value => {
        if (value.startsWith('eval:')) {
          out.push('// @ts-ignore');
        }

        out.push(value);
      });
      out.push(`}\n`);

      outInterface.childTypes.forEach(value => {
        out.push(`export ${value}\n`);
      });
    });

    this.imports.forEach(nsImport =>
      out.push(`export type ${nsImport.name} = ${nsImport.import};`)
    );

    return out.join('\n');
  }
}
