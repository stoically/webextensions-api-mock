import fs from 'fs';
import path from 'path';
import sinon from 'sinon';
import { browserMock } from './generated/types';
import { SchemaNamespaces, NamespaceSchema } from 'webextensions-schema';
import { Update } from './update';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Browser = any;

export class WebExtensionsApiMock {
  public namespaces?: SchemaNamespaces;

  readSchema(): SchemaNamespaces {
    return JSON.parse(
      fs
        .readFileSync(path.join(__dirname, 'generated', 'schema.json'))
        .toString()
    );
  }

  createBrowserStub(): typeof browserMock {
    if (!this.namespaces) {
      this.namespaces = this.readSchema();
    }

    const sandbox = sinon.createSandbox();
    const aliases = new Map();
    const browser: Browser = {
      sinonSandbox: sandbox,
    };
    Object.values(this.namespaces).forEach(namespaces =>
      namespaces.forEach(namespace =>
        this.createNamespaceStub(sandbox, namespace, browser, aliases)
      )
    );

    aliases.forEach((to, from) => {
      browser[from] = browser[to];
    });

    return browser;
  }

  createNamespaceStub(
    sandbox: sinon.SinonSandbox,
    namespace: NamespaceSchema,
    browser: Browser,
    aliases: Map<string, string>
  ): void {
    if (namespace.$import) {
      aliases.set(namespace.namespace, namespace.$import);
      return;
    }

    browser[namespace.namespace] = {};
    if (namespace.events) {
      namespace.events.forEach(event => {
        if (!event.name || event.type !== 'function') {
          return;
        }
        browser[namespace.namespace][event.name] = {
          addListener: sandbox.stub(),
          removeListener: sandbox.stub(),
          hasListener: sandbox.stub(),
        };
      });
    }

    if (namespace.functions) {
      namespace.functions.forEach(fn => {
        if (!fn.name || fn.type !== 'function') {
          return;
        }
        browser[namespace.namespace][fn.name] = sandbox.stub();
      });
    }
  }

  update = async (): Promise<void> => {
    this.namespaces = await new Update().run();
  };
}

const mock = new WebExtensionsApiMock();
const webExtensionsApiMock = (): typeof browserMock => mock.createBrowserStub();

export default webExtensionsApiMock;
export const update = mock.update;
