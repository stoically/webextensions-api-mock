# WebExtensions API Mock

Automatically generated [`sinon stubs`](https://sinonjs.org/releases/latest/stubs/), together with types, for the [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API).

Currently based on the Firefox version _70.0.1_ schema. Comes with an API and CLI that lets you update the schema and types to the _latest stable version_, thanks to [`webextensions-schema`](https://github.com/stoically/webextensions-schema).

**Important**: `sinon` is a peer dependency, so you have to install it and its @types yourself. That's because it can otherwise lead to unexpected assertion behavior when sinon does `instanceof` checks internally. It also allows to upgrade sinon without the need to bump the version in `webextensions-api-mock`.

## Install

```shell
npm install sinon @types/sinon webextensions-api-mock
```

## Usage

```ts
import browserMock from 'webextensions-api-mock';
// or
// const { default: browserMock } = require('webextensions-api-mock');

const browser = browserMock();
```

All `browser` methods are now [`sinon stubs`](https://sinonjs.org/releases/latest/stubs/) and hence you can use them as usual in your test, e.g. if your production code calls `browser.tabs.create()` you can do an assertion like this

```ts
assert(browser.tabs.create.called);
```

To trigger event listeners, you can use the [`yield` method on stubs](https://sinonjs.org/releases/latest/stubs/).

```ts
browser.tabs.onCreated.addListener.yield();
```

Every call to `browserMock()` creates a new `browser` object based on a new
[`sinon sandbox`](https://sinonjs.org/releases/latest/sandbox/). The sinon sandbox itself is exposed as `sinonSandbox` property on the
`browser` object. So to e.g. reset the history of all browser stubs, you'd call

```ts
browser.sinonSandbox.resetHistory();
```

## Update schema and types

Update the schema and types to the latest available stable Firefox version. Feel
free to PR updated schema and types if they're not up-to-date.

### Using API

```ts
import { update } from 'webextensions-api-mock';
// or
// const { update } = require('webextensions-api-mock');

(async () => {
  await update();
})();
```

### Using CLI

```
webextensions-api-mock update
```
