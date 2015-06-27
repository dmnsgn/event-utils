export default class EventEmitter {
  constructor(object) {
    // Create callback stack
    this._events = {};
  }

  // On
  on(event, cb) {

    // Push callback
    (this._events['$' + event] = this._events['$' + event] || []).push(cb);

    return this;
  }

  // Once
  once(event, cb) {

    // Remove listener after callback
    let that = this;
    function fn() {
      that.off(event, fn);
      cb.apply(this, arguments);
    }
    fn.cb = cb;
    this.on(event, fn);

    return this;
  }

  // Off
  off(event, cb) {

    // Remove all listeners
    if (arguments.length === 0) {
      this._events = {};
      return this;
    }

    // Get callbacks of an event
    let callbacks = this._events['$' + event];
    if (!callbacks) {
      return this;
    }

    // Remove all callbacks of a specific event
    if (arguments.length === 1) {
      delete this._events['$' + event];
      return this;
    }

    // Remove specific callback of a specific event
    var callback;
    for (let i = 0; i < callbacks.length; i++) {
      callback = callbacks[i];
      if (callback === cb || callback.cb === cb) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  }

  // Emit an event with arguments
  emit(event, ...args) {

    // Get callbacks of an event
    let callbacks;
    if (!(callbacks = this._events['$' + event])) {
      return this;
    }

    // Quick clone
    callbacks = callbacks.slice(0);

    // Invoke all callbacks attached to an event
    for (let i = 0; i < callbacks.length; i++) {
      callbacks[i](...args);
    }

    return this;
  }

  // Return all callbacks attached to an event
  listeners(event) {
    return this._events['$' + event] || [];
  }

  // Return a boolean if the event has listeners
  hasListeners(event) {
    return !! this.listeners(event).length;
  }

};
