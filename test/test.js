import mocha from 'mocha'
import sinon from 'sinon'
import { assert } from 'chai';

import EventEmitter from '../src/emitter'

// EventEmitter
describe('#EventEmitter()', function() {

  let emitter = new EventEmitter();
  beforeEach(function() {
    emitter.off();
  });

  describe('#once()', function() {
    it('should attache one callback and remove it immediately', function() {
      emitter.once('foo', () => 0 );
      emitter.emit('foo');

      assert(!emitter.hasListeners('foo'), 'Callback stack length is 0');
    });
  });

  describe('#emit()', function() {

    it('should invoke the callback', function() {
      let callback = sinon.spy();

      emitter.on('foo', callback);
      emitter.emit('foo');

      sinon.assert.calledOnce(callback);
    });

    it('should invoke the callback with one argument', function() {
      let callback = sinon.spy();

      emitter.on('foo', callback);
      emitter.emit('foo', 'bar');

      sinon.assert.calledOnce(callback);
      sinon.assert.calledWith(callback, 'bar');
    });

    it('should invoke the callback with passed arguments', function() {
      let callback = sinon.spy();

      emitter.on('foo', callback);
      emitter.emit('foo', 'bar', 'baz');

      sinon.assert.calledOnce(callback);
      sinon.assert.calledWith(callback, 'bar', 'baz');
    });

    it('should invoke all callbacks attached to one event', function() {
      let callbacks = [];

      emitter.on('foo', () => callbacks.push(0) );
      emitter.on('foo', () => callbacks.push(1) );
      emitter.on('foo', () => callbacks.push(2) );
      emitter.emit('foo');

      assert(callbacks.length === 3, 'All callbacks are called');
    });

    it('should invoke all callbacks after one has been remove', function() {
      let callbacks = [];
      let callbackToRemove = () => callbacks.push('R');

      emitter.on('foo', () => callbacks.push(0) );
      emitter.on('foo', () => callbacks.push(1) );
      emitter.on('foo', callbackToRemove );
      emitter.on('foo', () => callbacks.push(2) );
      assert(emitter.listeners('foo').length === 4, 'All callbacks are attached to foo');

      emitter.off('foo', callbackToRemove );
      emitter.emit('foo');

      assert(callbacks.length === 3, 'All callbacks are called after one is removed');
    });

    it('should remove all callbacks', function() {
      let callbacks = [];

      emitter.on('foo', () => callbacks.push(0) );
      emitter.on('foo', () => callbacks.push(1) );
      emitter.on('foo', () => callbacks.push(2) );
      emitter.off('foo');

      assert(!emitter.hasListeners('foo'), 'Callback stack length is 0');
    });

    it('should add callback after all callbacks are removed', function() {
      let callbacks = [];

      emitter.on('foo', () => callbacks.push(0) );
      emitter.on('foo', () => callbacks.push(1) );
      emitter.off('foo');
      emitter.on('foo', () => callbacks.push(0) );

      assert(emitter.listeners('foo').length === 1, 'Callback stack length is 1');
    });
  });

  describe('#listener()', function() {
    it('should return one callback', function() {
      let callback = sinon.spy();
      emitter.on('foo', callback);

      assert(emitter.listeners('foo').length === 1, 'Callback stack length is 1');
    });
    it('should return two callbacks', function() {
      let callback = sinon.spy();
      emitter.on('foo', callback);
      emitter.on('foo', callback);

      assert(emitter.listeners('foo').length === 2, 'Callback stack length is 2');
    });
  });

});
