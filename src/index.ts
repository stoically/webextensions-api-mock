import fs from 'fs';
import path from 'path';
import { SchemaNamespaces } from 'webextensions-schema';
import { Update } from './update';
import { BrowserGenerator } from './stub';
import { BrowserMock } from './generated/types';

export class WebExtensionsApiMock {
  public namespaces!: SchemaNamespaces;

  createBrowserStub(): BrowserMock {
    if (!this.namespaces) {
      this.readSchema();
    }

    return new BrowserGenerator(this.namespaces).out();
  }

  readSchema(): void {
    this.namespaces = JSON.parse(
      fs
        .readFileSync(path.join(__dirname, 'generated', 'schema.json'))
        .toString()
    ) as SchemaNamespaces;
  }

  update = async (): Promise<void> => {
    this.namespaces = await new Update().run();
  };
}

const mock = new WebExtensionsApiMock();
const webExtensionsApiMock = (): BrowserMock => mock.createBrowserStub();

export default webExtensionsApiMock;
export const update = mock.update;
export * from './generated/types';
