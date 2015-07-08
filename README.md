event-utils
=========================

> An event utils system written in ES6.

## Install
```bash
npm install event-utils
```

## Usage

### EventEmitter

```javascript
import { EventEmitter } from 'EventUtils'

let emitter = new EventEmitter();
```

#### on(event, cb)
```javascript
function callback1(arg) {
  console.log('callback1 called', arg);
}
emitter.on('foo', callback1);
```

#### once(event, cb)
```javascript
function callbackOnce() {
  console.log('callback called once');
}
emitter.once('foo', callbackOnce);
```

#### off(event, cb)
```javascript
// Remove all listeners
emitter.off();

// Remove all callbacks of a specific event
emitter.off('foo');

// Remove specific callback of a specific event
emitter.off(callback1);
```

#### emit(event, ...args)
```javascript
// With arguments
emitter.emit('foo', 'arg');

// Without arguments
emitter.emit('foo');
```

#### listeners(event)
```javascript
// Return all callbacks attached to an event
emitter.listeners('foo');
```

#### hasListeners(event)
```javascript
// Return a boolean if the event has listeners
emitter.hasListeners('foo');
```

## Build
```bash
npm run build
```

## Test
```bash
npm run test
```

## Licence

ISC
