import fs from 'fs';
import path from 'path';
import sinon from 'sinon';
import {
  SchemaNamespaces,
  NamespaceSchema,
  TypeSchema,
} from 'webextensions-schema';
import { Update } from './update';
import { BrowserMock } from './generated/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BrowserOut = any;

export class WebExtensionsApiMock {
  public namespaces!: SchemaNamespaces;
  private types: Map<string, TypeSchema> = new Map();

  createBrowserStub(): BrowserMock {
    if (!this.namespaces) {
      this.readSchema();
    }

    const sandbox = sinon.createSandbox();
    const aliases = new Map();
    const browser: BrowserOut = {
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

  createNamespaceStub(
    sandbox: sinon.SinonSandbox,
    namespace: NamespaceSchema,
    browser: BrowserOut,
    aliases: Map<string, string>
  ): void {
    if (namespace.$import) {
      aliases.set(namespace.namespace, namespace.$import);
      return;
    }

    browser[namespace.namespace] = {};

    if (namespace.properties) {
      Object.keys(namespace.properties).forEach(propertyName => {
        if (!namespace.properties) return;

        const property = namespace.properties[propertyName];
        if (property.value) {
          browser[namespace.namespace][propertyName] = property.value;
        }

        if (property.$ref) {
          const refName = property.$ref.includes('.')
            ? property.$ref
            : `${namespace.namespace}.${property.$ref}`;
          const ref = this.types.get(refName);

          if (
            (ref?.events || ref?.functions) &&
            !browser[namespace.namespace][propertyName]
          ) {
            browser[namespace.namespace][propertyName] = {};
          }

          if (ref?.events) {
            ref.events.forEach(event => {
              if (
                !event.name ||
                event.type !== 'function' ||
                event.unsupported
              ) {
                return;
              }
              browser[namespace.namespace][propertyName][event.name] = {
                addListener: sandbox.stub(),
                removeListener: sandbox.stub(),
                hasListener: sandbox.stub(),
              };
            });
          }

          if (ref?.functions) {
            ref.functions.forEach(fn => {
              if (!fn.name || fn.type !== 'function' || fn.unsupported) {
                return;
              }
              browser[namespace.namespace][propertyName][
                fn.name
              ] = sandbox.stub();
            });
          }
        }
      });
    }

    if (namespace.events) {
      namespace.events.forEach(event => {
        if (!event.name || event.type !== 'function' || event.unsupported) {
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
        if (!fn.name || fn.type !== 'function' || fn.unsupported) {
          return;
        }
        browser[namespace.namespace][fn.name] = sandbox.stub();
      });
    }
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
