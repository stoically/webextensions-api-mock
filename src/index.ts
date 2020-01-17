import fs from 'fs';
import path from 'path';
import { SchemaNamespaces, TypeSchema } from 'webextensions-schema';
import { Update } from './update';
import { BrowserBuilder } from './stub';
import { BrowserMock } from './generated/types';

export class WebExtensionsApiMock {
  public namespaces!: SchemaNamespaces;
  private types: Map<string, TypeSchema> = new Map();

  createBrowserStub(): BrowserMock {
    if (!this.namespaces) {
      this.readSchema();
    }

    const builder = new BrowserBuilder(this.types);

    Object.values(this.namespaces).forEach(namespaces =>
      namespaces.forEach(namespace => builder.namespace(namespace))
    );

    builder.aliases.forEach((to, from) => {
      builder.browser[from] = builder.browser[to];
    });

    return builder.browser;
  }

  readSchema(): void {
    this.namespaces = JSON.parse(
      fs
        .readFileSync(path.join(__dirname, 'generated', 'schema.json'))
        .toString()
    ) as SchemaNamespaces;

    this.extractTypes();
  }

  extractTypes(): void {
    this.types = new Map();
    Object.values(this.namespaces).forEach(namespaces =>
      namespaces.forEach(namespace => {
        if (!namespace.types) {
          return;
        }

        namespace.types.forEach(type => {
          if (!type.id) return;
          const typeId = type.id.includes('.')
            ? type.id
            : `${namespace.namespace}.${type.id}`;
          this.types.set(typeId, type);
        });
      })
    );
  }

  update = async (): Promise<void> => {
    this.namespaces = await new Update().run();
    this.extractTypes();
  };
}

const mock = new WebExtensionsApiMock();
const webExtensionsApiMock = (): BrowserMock => mock.createBrowserStub();

export default webExtensionsApiMock;
export const update = mock.update;
export * from './generated/types';
