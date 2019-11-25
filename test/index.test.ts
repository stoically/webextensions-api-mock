import assert from 'assert';
import webExtensionsApiMock from '../src';

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

  it('should expose the sinon sandbox', async () => {
    const browser = webExtensionsApiMock();

    assert(typeof browser.sinonSandbox === 'object');
    assert(typeof browser.sinonSandbox.resetHistory === 'function');
  });
});
