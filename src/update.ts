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

  private async updateSchema(): Promise<void> {
    await fs.writeFile(
      path.join(this.generatedDir, 'schema.json'),
      prettier.format(JSON.stringify(this.namespaces), {
        ...this.prettierOptions,
        parser: 'json',
      })
    );
  }

  private async updateTypes(): Promise<void> {
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

  private typesNamespaceInterface(namespace: NamespaceSchema): void {
    const nameSplits = namespace.namespace.split('.');
    if (!this.outBrowser.has(nameSplits[0])) {
      this.outBrowser.set(nameSplits[0], this.capitalize(nameSplits[0]));
    }

    if (namespace.$import) {
      this.imports.push({
        name: this.capitalize(namespace.namespace),
        import: this.capitalize(namespace.$import),
      });
      return;
    }

    const interfaceName = nameSplits
      .map(name => this.capitalize(name))
      .join('');
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
          outInterface?.set(nameSplit, lastName + this.capitalize(nameSplit));
        }
        lastName += this.capitalize(nameSplit);
      });
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

  private typesInterfaceFunction(
    outInterface: OutInterface,
    fn: TypeSchema
  ): void {
    if (!fn.name || fn.type !== 'function' || fn.unsupported) {
      return;
    }

    outInterface.set(fn.name, 'sinon.SinonStub');
  }

  private typesInterfaceEvent(
    outInterface: OutInterface,
    event: TypeSchema
  ): void {
    if (!event.name || event.type !== 'function' || event.unsupported) {
      return;
    }
    outInterface.set(event.name, 'SinonEventStub');
  }

  private capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
