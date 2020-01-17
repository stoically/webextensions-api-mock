import { SchemaNamespaces } from 'webextensions-schema';
import { capitalize } from './helper';
import {
  Imports,
  NamespacesSchemaWalker,
  OutNamespaces,
} from './namespaces-walker';

const OUT_PREFIX = `
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import sinon from 'sinon';

`;

export class NamespacesGenerator {
  private outNamespaces: OutNamespaces = new Map();
  private outBrowser: Map<string, string> = new Map([
    ['sinonSandbox', 'sinon.SinonSandbox;'],
  ]);
  private imports: Imports = [];
  private namespaces: SchemaNamespaces;

  constructor(namespaces: SchemaNamespaces) {
    this.namespaces = namespaces;
  }

  public out(): string {
    const schemaWalker = new NamespacesSchemaWalker(
      this.outNamespaces,
      this.imports
    );
    schemaWalker.walk(this.namespaces);
    this.addNestedInterfaceProperties(this.namespaces);
    return this.buildOut();
  }

  // Add interfaces as properties of browser and of parent interfaces.
  private addNestedInterfaceProperties(
    schemaNamespaces: SchemaNamespaces
  ): void {
    Object.values(schemaNamespaces).forEach(namespaces =>
      namespaces.forEach(namespace => {
        const nameParts = namespace.namespace.split('.');
        const [topLevelName] = nameParts;
        if (!this.outBrowser.has(topLevelName)) {
          this.outBrowser.set(topLevelName, capitalize(topLevelName));
        }

        if (nameParts.length > 1) {
          let lastName = '';
          nameParts.forEach((namePart, index) => {
            if (index > 0) {
              this.outNamespaces
                .get(lastName)
                ?.parent.push(
                  `${namePart}: ${lastName + capitalize(namePart)};`
                );
            }
            lastName += capitalize(namePart);
          });
        }
      })
    );
  }

  private buildOut(): string {
    const out: string[] = [OUT_PREFIX];

    out.push(`export interface BrowserMock {`);
    Array.from(this.outBrowser.keys())
      .sort()
      .forEach(key => {
        const value = this.outBrowser.get(key);
        out.push(`${key}: ${value}`);
      });
    out.push(`}\n`);

    // For sorting interfaces/types by name
    const typescriptsByName: Map<string, string> = new Map();

    this.outNamespaces.forEach((outInterface, interfaceName) => {
      const out: string[] = [];
      out.push(`export interface ${interfaceName} {`);
      outInterface.parent.sort().forEach(value => {
        if (value.startsWith('eval:')) {
          out.push('// @ts-ignore');
        }

        out.push(value);
      });
      out.push(`}\n`);
      typescriptsByName.set(interfaceName, out.join('\n'));

      outInterface.childTypes.sort().forEach(value => {
        typescriptsByName.set(value, `export type ${value}\n`);
      });
    });

    this.imports
      .sort()
      .forEach(nsImport =>
        typescriptsByName.set(
          nsImport.name,
          `export type ${nsImport.name} = ${nsImport.import};`
        )
      );

    // Generate output from sorted interfaces/types
    Array.from(typescriptsByName.keys())
      .sort()
      .forEach(key => {
        const typescript = typescriptsByName.get(key);
        out.push(`${typescript}\n`);
      });

    return out.join('\n');
  }
}
