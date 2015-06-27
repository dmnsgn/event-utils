import { EventEmitter } from '../src/index'

let emitter = new EventEmitter();

// foo on
function callback1(arg) {
  console.log('callback1 called', arg);
}
function callback2() {
  console.log('callback2 called');
}
function callbackOnce() {
  console.log('callback called once');
}
emitter.on('foo', callback1);
emitter.on('foo', callback2);
emitter.once('foo', callbackOnce);

// bar on
function callbackBar() {
  console.log('callbackBar called');
}
emitter.on('bar', callbackBar);

// Emit foo and bar
emitter.emit('foo', 'arg');
emitter.emit('bar');
emitter.emit('foo'); // To test once

// Off
emitter.off('foo');

// Emit bar
emitter.emit('bar');


// off all = off bar
emitter.off('bar');

// Emit with no callbacks
emitter.emit('bar');
emitter.emit('foo');
