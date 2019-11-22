import { promises as fs } from 'fs';
import path from 'path';
import webExtensionsSchema, {
  SchemaNamespaces,
  TypeSchema,
  NamespaceSchema,
} from 'webextensions-schema';
import prettier from 'prettier';

const OUT_PREFIX = `
import sinon from 'sinon';

export interface SinonEventStub {
  addListener: sinon.SinonStub;
  removeListener: sinon.SinonStub;
  hasListener: sinon.SinonStub;
}

`;

declare global {
  interface String {
    capitalize: () => string;
  }
}

String.prototype.capitalize = function(): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

type OutInterface = Map<string, string>;

export class Update {
  private namespaces!: SchemaNamespaces;
  private prettierOptions: prettier.Options = {};
  private out: string[] = [OUT_PREFIX];
  private outNamespaces: Map<string, OutInterface> = new Map();
  private outBrowser: Map<string, string> = new Map([
    ['sinonSandbox', 'sinon.SinonSandbox;'],
  ]);
  private generatedDir = path.join(__dirname, 'generated');
  private imports: {
    [key: string]: string;
  }[] = [];

  async run(): Promise<SchemaNamespaces> {
    const schema = await webExtensionsSchema();
    console.log(`[webextensions-api-mock] updating to ${schema.tag()}`);

    const options = await prettier.resolveConfig('.');
    if (options) {
      this.prettierOptions = options;
    }

    this.namespaces = schema.namespaces();
    await Promise.all([this.updateSchema(), this.updateTypes()]);
    return this.namespaces;
  }

  async updateSchema(): Promise<void> {
    await fs.writeFile(
      path.join(this.generatedDir, 'schema.json'),
      prettier.format(JSON.stringify(this.namespaces), {
        ...this.prettierOptions,
        parser: 'json',
      })
    );
  }

  async updateTypes(): Promise<void> {
    Object.keys(this.namespaces).forEach(namespaceName => {
      this.namespaces[namespaceName].forEach(namespace =>
        this.typesNamespaceInterface(namespace)
      );
    });

    this.out.push(`export interface BrowserMock {`);
    this.outBrowser.forEach((value, key) => {
      this.out.push(`${key}: ${value}`);
    });
    this.out.push(`}\n`);

    this.outNamespaces.forEach((outInterface, interfaceName) => {
      this.out.push(`export interface ${interfaceName} {`);
      outInterface.forEach((value, key) => {
        if ([value, key].includes('eval')) {
          this.out.push(
            '// eslint-disable-next-line @typescript-eslint/ban-ts-ignore'
          );
          this.out.push('// @ts-ignore');
        }

        this.out.push(`${key}: ${value}`);
      });
      this.out.push(`}\n`);
    });

    this.imports.forEach(nsImport =>
      this.out.push(`export type ${nsImport.name} = ${nsImport.import};`)
    );

    const types = prettier.format(this.out.join('\n'), {
      ...this.prettierOptions,
      parser: 'typescript',
    });
    await fs.writeFile(path.join(this.generatedDir, 'types.d.ts'), types);
  }

  typesNamespaceInterface(namespace: NamespaceSchema): void {
    const nameSplits = namespace.namespace.split('.');
    if (!this.outBrowser.has(nameSplits[0])) {
      this.outBrowser.set(nameSplits[0], nameSplits[0].capitalize());
    }

    const interfaceName = nameSplits.map(name => name.capitalize()).join('');
    let outInterface = this.outNamespaces.get(interfaceName);
    if (!outInterface) {
      outInterface = new Map();
      this.outNamespaces.set(interfaceName, outInterface);
    }

    if (nameSplits.length > 1) {
      let lastName = '';
      nameSplits.forEach((nameSplit, index) => {
        if (index > 0) {
          const outInterface = this.outNamespaces.get(lastName);
          outInterface?.set(nameSplit, lastName + nameSplit.capitalize());
        }
        lastName += nameSplit.capitalize();
      });
    }

    if (namespace.$import) {
      this.imports.push({
        name: namespace.namespace,
        import: namespace.$import.capitalize(),
      });
      return;
    }

    if (namespace.functions) {
      namespace.functions.forEach(fn => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.typesInterfaceFunction(outInterface!, fn);
      });
    }

    if (namespace.events) {
      namespace.events.forEach(event => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.typesInterfaceEvent(outInterface!, event);
      });
    }
  }

  typesInterfaceFunction(outInterface: OutInterface, fn: TypeSchema): void {
    if (!fn.name || fn.type !== 'function' || fn.unsupported) {
      return;
    }

    outInterface.set(fn.name, 'sinon.SinonStub');
  }

  typesInterfaceEvent(outInterface: OutInterface, event: TypeSchema): void {
    if (!event.name || event.type !== 'function' || event.unsupported) {
      return;
    }
    outInterface.set(event.name, 'SinonEventStub');
  }
}
