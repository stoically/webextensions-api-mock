import { promises as fs } from 'fs';
import path from 'path';
import webExtensionsSchema, { SchemaNamespaces } from 'webextensions-schema';
import prettier from 'prettier';
import { NamespacesGenerator } from './generator/namespaces';

export class Update {
  private namespaces!: SchemaNamespaces;
  private prettierOptions: prettier.Options = {};
  private generatedDir = path.join(__dirname, 'generated');

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
    const types = new NamespacesGenerator(this.namespaces).out();
    await fs.writeFile(
      path.join(this.generatedDir, 'types.d.ts'),
      prettier.format(types, {
        ...this.prettierOptions,
        parser: 'typescript',
      })
    );
  }
}
