import assert from 'assert';
import webExtensionsApiMock from '../src';
import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);

describe('WebExtensionsApiMock', () => {
  it('should return a browser stub', async () => {
    const browser = webExtensionsApiMock();

    assert(typeof browser.tabs.create === 'function');
    assert(typeof browser.tabs.create.resolves === 'function');
    assert(typeof browser.storage.local.get === 'function');
    assert(typeof browser.storage.onChanged.addListener === 'function');
    assert(
      typeof browser.browserSettings.cacheEnabled.onChange?.addListener ===
        'function'
    );
  });

  it('should return a runtime.Port from runtime.connect', () => {
    const browser = webExtensionsApiMock();

    assert(typeof browser.runtime.connect().postMessage === 'function');
    assert(typeof browser.runtime.connect().disconnect === 'function');
  });

  it('should not reuse sinon stubs', () => {
    const browser = webExtensionsApiMock();

    browser.runtime.connect().disconnect();
    browser.runtime.connect().disconnect.should.have.been.called;
    browser.runtime.connectNative().disconnect.should.not.have.been.called;
  });

  it('should expose the sinon sandbox', async () => {
    const browser = webExtensionsApiMock();

    assert(typeof browser.sinonSandbox === 'object');
    assert(typeof browser.sinonSandbox.resetHistory === 'function');
  });
});
