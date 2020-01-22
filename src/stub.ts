import sinon from 'sinon';
import { SchemaNamespaces } from 'webextensions-schema';
import { BrowserSchemaWalker } from './stub-walker';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BrowserOut = any;

export class BrowserGenerator {
  private sandbox: sinon.SinonSandbox;
  private aliases: Map<string, string>;
  private browser: BrowserOut;
  private namespaces: SchemaNamespaces;

  constructor(namespaces: SchemaNamespaces) {
    this.sandbox = sinon.createSandbox();
    this.aliases = new Map();
    this.browser = {
      sinonSandbox: this.sandbox,
    };
    this.namespaces = namespaces;
  }

  public out(): BrowserOut {
    const schemaWalker = new BrowserSchemaWalker(
      this.sandbox,
      this.aliases,
      this.browser
    );
    schemaWalker.walk(this.namespaces);

    this.aliases.forEach((to, from) => {
      this.browser[from] = this.browser[to];
    });

    return this.browser;
  }
}
