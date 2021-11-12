# event-utils

[![npm version](https://img.shields.io/npm/v/event-utils)](https://www.npmjs.com/package/event-utils)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/event-utils)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/event-utils)](https://bundlephobia.com/package/event-utils)
[![dependencies](https://img.shields.io/librariesio/release/npm/event-utils)](https://github.com/dmnsgn/event-utils/blob/main/package.json)
[![types](https://img.shields.io/npm/types/event-utils)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/event-utils)](https://github.com/dmnsgn/event-utils/blob/main/LICENSE.md)

An event utils system written in ES6.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/event-utils/main/screenshot.gif)

## Installation

```bash
npm install event-utils
```

## Usage

```js
import EventEmitter from "event-utils";
const emitter = new EventEmitter();

// foo on
function callback1(arg) {
  console.log("callback1 called", arg);
}
function callback2() {
  console.log("callback2 called");
}
function callbackOnce() {
  console.log("callback called once");
}
emitter.on("foo", callback1);
emitter.on("foo", callback2);
emitter.once("foo", callbackOnce);

// bar on
function callbackBar() {
  console.log("callbackBar called");
}
emitter.on("bar", callbackBar);

// Emit foo and bar
emitter.emit("foo", "arg");
emitter.emit("bar");
emitter.emit("foo"); // To test once

// Off
emitter.off("foo");

// Emit bar
emitter.emit("bar");

// off all = off bar
emitter.off("bar");

// Emit with no callbacks
emitter.emit("bar");
emitter.emit("foo");
```

## API

<!-- api-start -->

<a name="EventEmitter"></a>

## EventEmitter

An event utils system written in ES6.

**Kind**: global class

- [EventEmitter](#EventEmitter)
  - [new EventEmitter()](#new_EventEmitter_new)
  - [.on(event, cb)](#EventEmitter+on) ⇒ [<code>EventEmitter</code>](#EventEmitter)
  - [.once(event, cb)](#EventEmitter+once) ⇒ [<code>EventEmitter</code>](#EventEmitter)
  - [.off(event, cb)](#EventEmitter+off) ⇒ [<code>EventEmitter</code>](#EventEmitter)
  - [.emit(event, ...cbs)](#EventEmitter+emit) ⇒ [<code>EventEmitter</code>](#EventEmitter)
  - [.listeners(event)](#EventEmitter+listeners) ⇒ <code>Array.&lt;function()&gt;</code>
  - [.hasListeners(event)](#EventEmitter+hasListeners) ⇒ <code>boolean</code>

<a name="new_EventEmitter_new"></a>

### new EventEmitter()

Creates an instance of EventEmitter.

<a name="EventEmitter+on"></a>

### eventEmitter.on(event, cb) ⇒ [<code>EventEmitter</code>](#EventEmitter)

Add callback to event

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)

| Param | Type                  |
| ----- | --------------------- |
| event | <code>string</code>   |
| cb    | <code>function</code> |

<a name="EventEmitter+once"></a>

### eventEmitter.once(event, cb) ⇒ [<code>EventEmitter</code>](#EventEmitter)

Add callback to event and remove on first call

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)

| Param | Type                  |
| ----- | --------------------- |
| event | <code>string</code>   |
| cb    | <code>function</code> |

<a name="EventEmitter+off"></a>

### eventEmitter.off(event, cb) ⇒ [<code>EventEmitter</code>](#EventEmitter)

Remove callback from event

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)

| Param | Type                  |
| ----- | --------------------- |
| event | <code>string</code>   |
| cb    | <code>function</code> |

<a name="EventEmitter+emit"></a>

### eventEmitter.emit(event, ...cbs) ⇒ [<code>EventEmitter</code>](#EventEmitter)

Emit an event with arguments

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)

| Param  | Type                |
| ------ | ------------------- |
| event  | <code>string</code> |
| ...cbs | <code>args</code>   |

<a name="EventEmitter+listeners"></a>

### eventEmitter.listeners(event) ⇒ <code>Array.&lt;function()&gt;</code>

Return all callbacks attached to an event

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)

| Param | Type                |
| ----- | ------------------- |
| event | <code>string</code> |

<a name="EventEmitter+hasListeners"></a>

### eventEmitter.hasListeners(event) ⇒ <code>boolean</code>

Return a boolean if the event has listeners

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)

| Param | Type                |
| ----- | ------------------- |
| event | <code>string</code> |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/event-utils/blob/main/LICENSE.md).
