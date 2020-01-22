import sinon from 'sinon';
import { SchemaNamespaces } from 'webextensions-schema';
import {
  SchemaId,
  SchemaWalker,
  SchemaWalkerDelegate,
  SchemaWalkerValue,
  SchemaWalkerFlags,
} from './walker';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BrowserOut = any;

export class BrowserSchemaWalker implements SchemaWalkerDelegate {
  private sandbox: sinon.SinonSandbox;
  private aliases: Map<string, string>;
  private browser: BrowserOut;

  constructor(
    sandbox: sinon.SinonSandbox,
    aliases: Map<string, string>,
    browser: BrowserOut
  ) {
    this.sandbox = sandbox;
    this.aliases = aliases;
    this.browser = browser;
  }

  walk(namespaces: SchemaNamespaces): void {
    new SchemaWalker(
      this,
      SchemaWalkerFlags.SuppressWarnings | SchemaWalkerFlags.NoTypeValueReuse
    ).walk(namespaces);
  }

  handleImport(schemaId: SchemaId, name: string): void {
    this.aliases.set(schemaId.name, name);
  }

  handleField(
    schemaId: SchemaId,
    name: string,
    value: unknown,
    optional: boolean,
    out: SchemaWalkerValue
  ): void {
    out[name] = value;
  }

  createNamespaceValue(schemaId: SchemaId): SchemaWalkerValue {
    return (this.browser[schemaId.name] = {});
  }

  startObjectPropertyValue(): SchemaWalkerValue {
    return {};
  }

  createEventValue(): SchemaWalkerValue {
    return {
      addListener: this.sandbox.stub(),
      removeListener: this.sandbox.stub(),
      hasListener: this.sandbox.stub(),
    };
  }

  createFnValue(
    schemaId: SchemaId,
    returnValue: SchemaWalkerValue
  ): SchemaWalkerValue {
    if (returnValue !== undefined) {
      return this.sandbox.stub().returns(returnValue);
    } else {
      return this.sandbox.stub();
    }
  }

  // The below SchemaWalkerDelegate methods are not needed for stubs generation
  /* eslint-disable @typescript-eslint/no-empty-function */
  finishObjectPropertyValue(): SchemaWalkerValue {}
  finishTypeValue(): SchemaWalkerValue {}
  valueForInvalidRef(): SchemaWalkerValue {}
  valueForCircularType(): SchemaWalkerValue {}
  createEnumValue(): SchemaWalkerValue {}
  createPlainValue(): SchemaWalkerValue {}
  /* eslint-enable @typescript-eslint/no-empty-function */
}
