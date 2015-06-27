event-utils
=========================

> An event utils system written in ES2015.

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

#### on()
```javascript
function callback1(arg) {
  console.log('callback1 called', arg);
}
emitter.on('foo', callback1);
```

#### once()
```javascript
function callbackOnce() {
  console.log('callback called once');
}
emitter.once('foo', callbackOnce);
```

#### off()
```javascript
// Remove all listeners
emitter.off();

// Remove all callbacks of a specific event
emitter.off('foo');

// Remove specific callback of a specific event
emitter.off(callback1);
```

#### emit()
```javascript
// With arguments
emitter.emit('foo', 'arg');

// Without arguments
emitter.emit('foo');
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
