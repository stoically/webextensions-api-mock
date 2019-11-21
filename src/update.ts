import { promises as fs } from 'fs';
import path from 'path';
import ts from 'typescript';
import webExtensionsSchema, {
  SchemaNamespaces,
  TypeSchema,
  NamespaceSchema,
} from 'webextensions-schema';
import prettier from 'prettier';

const OUT_PREFIX = `
/* eslint-disable @typescript-eslint/class-name-casing */
/// <reference types="sinon"/>

export declare namespace browserMock {
  const sinonSandbox: sinon.SinonSandbox;
  interface SinonEventStub {
    addListener: sinon.SinonStub;
    removeListener: sinon.SinonStub;
    hasListener: sinon.SinonStub;
  }

`;

export class Update {
  private namespaces!: SchemaNamespaces;
  private tsconfig!: ts.TranspileOptions;
  private prettierOptions!: prettier.Options;
  private out: string[] = [OUT_PREFIX];
  private generatedDir = path.join(__dirname, 'generated');
  private imports: {
    [key: string]: string;
  }[] = [];

  async run(): Promise<SchemaNamespaces> {
    this.prettierOptions = JSON.parse(
      (await fs.readFile(path.join(__dirname, '..', 'package.json'))).toString()
    ).prettier;
    this.tsconfig = JSON.parse(
      (
        await fs.readFile(path.join(__dirname, '..', 'tsconfig.build.json'))
      ).toString()
    );
    const schema = await webExtensionsSchema();
    console.log(`[webextensions-api-mock] updating to ${schema.tag()}`);

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
      this.out.push(`namespace ${namespaceName} {`);
      this.namespaces[namespaceName].forEach(namespace =>
        this.typesNamespaceInterface(namespace)
      );
      this.out.push('}');
    });

    this.imports.forEach(nsImport =>
      this.out.push(`const ${nsImport.name}: typeof ${nsImport.import};`)
    );

    this.out.push('}');

    const types = prettier.format(this.out.join('\n'), {
      ...this.prettierOptions,
      parser: 'typescript',
    });
    const js = ts.transpileModule(types, this.tsconfig);
    await fs.writeFile(path.join(this.generatedDir, 'types.d.ts'), types);
    await fs.writeFile(path.join(this.generatedDir, 'types.js'), js.outputText);
  }

  typesNamespaceInterface(namespace: NamespaceSchema): void {
    if (namespace.$import) {
      this.imports.push({
        name: namespace.namespace,
        import: namespace.$import,
      });
      return;
    }

    if (namespace.functions) {
      namespace.functions.forEach(fn => {
        this.typesInterfaceFunction(fn);
      });
    }

    if (namespace.events) {
      namespace.events.forEach(event => {
        this.typesInterfaceEvent(event);
      });
    }
  }

  typesInterfaceFunction(fn: TypeSchema): void {
    if (!fn.name || fn.type !== 'function' || fn.unsupported) {
      return;
    }

    if (fn.name === 'eval') {
      this.out.push(
        '// eslint-disable-next-line @typescript-eslint/ban-ts-ignore'
      );
      this.out.push('// @ts-ignore');
    }

    this.out.push(`const ${fn.name}: sinon.SinonStub;`);
  }

  typesInterfaceEvent(event: TypeSchema): void {
    if (!event.name || event.type !== 'function' || event.unsupported) {
      return;
    }
    this.out.push(`const ${event.name}: SinonEventStub;`);
  }
}
