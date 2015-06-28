(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = (function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    // Create callback stack
    this._events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",

    // On
    value: function on(event, cb) {

      // Push callback
      (this._events["$" + event] = this._events["$" + event] || []).push(cb);

      return this;
    }
  }, {
    key: "once",

    // Once
    value: function once(event, cb) {

      // Remove listener after callback
      var that = this;
      function fn() {
        that.off(event, fn);
        cb.apply(this, arguments);
      }
      fn.cb = cb;
      this.on(event, fn);

      return this;
    }
  }, {
    key: "off",

    // Off
    value: function off(event, cb) {

      // Remove all listeners
      if (arguments.length === 0) {
        this._events = {};
        return this;
      }

      // Get callbacks of an event
      var callbacks = this._events["$" + event];
      if (!callbacks) {
        return this;
      }

      // Remove all callbacks of a specific event
      if (arguments.length === 1) {
        delete this._events["$" + event];
        return this;
      }

      // Remove specific callback of a specific event
      var callback;
      for (var i = 0; i < callbacks.length; i++) {
        callback = callbacks[i];
        if (callback === cb || callback.cb === cb) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    }
  }, {
    key: "emit",

    // Emit an event with arguments
    value: function emit(event) {

      // Get callbacks of an event
      var callbacks = undefined;
      if (!(callbacks = this._events["$" + event])) {
        return this;
      }

      // Quick clone
      callbacks = callbacks.slice(0);

      // Invoke all callbacks attached to an event
      for (var i = 0; i < callbacks.length; i++) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        callbacks[i].apply(callbacks, args);
      }

      return this;
    }
  }, {
    key: "listeners",

    // Return all callbacks attached to an event
    value: function listeners(event) {
      return this._events["$" + event] || [];
    }
  }, {
    key: "hasListeners",

    // Return a boolean if the event has listeners
    value: function hasListeners(event) {
      return !!this.listeners(event).length;
    }
  }]);

  return EventEmitter;
})();

exports["default"] = EventEmitter;
;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _emitter = require('./emitter');

var _emitter2 = _interopRequireDefault(_emitter);

exports.EventEmitter = _emitter2['default'];

},{"./emitter":1}],3:[function(require,module,exports){
'use strict';

var _srcIndex = require('../src/index');

var emitter = new _srcIndex.EventEmitter();

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

},{"../src/index":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFtaWVuc2VndWluL1Byb2plY3RzL2V2ZW50LXV0aWxzL3NyYy9lbWl0dGVyLmpzIiwiL1VzZXJzL2RhbWllbnNlZ3Vpbi9Qcm9qZWN0cy9ldmVudC11dGlscy9zcmMvaW5kZXguanMiLCIvVXNlcnMvZGFtaWVuc2VndWluL1Byb2plY3RzL2V2ZW50LXV0aWxzL3Rlc3QvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBcUIsWUFBWTtBQUNwQixXQURRLFlBQVksR0FDakI7MEJBREssWUFBWTs7O0FBRzdCLFFBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0dBQ25COztlQUprQixZQUFZOzs7O1dBTzdCLFlBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTs7O0FBR1osT0FBQyxJQUFJLENBQUMsT0FBTyxPQUFLLEtBQUssQ0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLE9BQUssS0FBSyxDQUFHLElBQUksRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUV2RSxhQUFPLElBQUksQ0FBQztLQUNiOzs7OztXQUdHLGNBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTs7O0FBR2QsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGVBQVMsRUFBRSxHQUFHO0FBQ1osWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEIsVUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7T0FDM0I7QUFDRCxRQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNYLFVBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVuQixhQUFPLElBQUksQ0FBQztLQUNiOzs7OztXQUdFLGFBQUMs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Q0FBQyxDQUFDO0NBQ25DO0FBQ0QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7OztBQUcvQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztBQUdwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUFHbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FBSXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7OztBQUduQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQ3JlYXRlIGNhbGxiYWNrIHN0YWNrXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gIH1cblxuICAvLyBPblxuICBvbihldmVudCwgY2IpIHtcblxuICAgIC8vIFB1c2ggY2FsbGJhY2tcbiAgICAodGhpcy5fZXZlbnRzW2AkJHtldmVudH1gXSA9IHRoaXMuX2V2ZW50c1tgJCR7ZXZlbnR9YF0gfHwgW10pLnB1c2goY2IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBPbmNlXG4gIG9uY2UoZXZlbnQsIGNiKSB7XG5cbiAgICAvLyBSZW1vdmUgbGlzdGVuZXIgYWZ0ZXIgY2FsbGJhY2tcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZnVuY3Rpb24gZm4oKSB7XG4gICAgICB0aGF0Lm9mZihldmVudCwgZm4pO1xuICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgZm4uY2IgPSBjYjtcbiAgICB0aGlzLm9uKGV2ZW50LCBmbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIE9mZlxuICBvZmYoZXZlbnQsIGNiKSB7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVyc1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEdldCBjYWxsYmFja3Mgb2YgYW4gZXZlbnRcbiAgICBsZXQgY2FsbGJhY2tzID0gdGhpcy5fZXZlbnRzW2AkJHtldmVudH1gXTtcbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBjYWxsYmFja3Mgb2YgYSBzcGVjaWZpYyBldmVudFxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW2AkJHtldmVudH1gXTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBzcGVjaWZpYyBjYWxsYmFjayBvZiBhIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNhbGxiYWNrO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcbiAgICAgIGlmIChjYWxsYmFjayA9PT0gY2IgfHwgY2FsbGJhY2suY2IgPT09IGNiKSB7XG4gICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIEVtaXQgYW4gZXZlbnQgd2l0aCBhcmd1bWVudHNcbiAgZW1pdChldmVudCwgLi4uYXJncykge1xuXG4gICAgLy8gR2V0IGNhbGxiYWNrcyBvZiBhbiBldmVudFxuICAgIGxldCBjYWxsYmFja3M7XG4gICAgaWYgKCEoY2FsbGJhY2tzID0gdGhpcy5fZXZlbnRzW2AkJHtldmVudH1gXSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFF1aWNrIGNsb25lXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuXG4gICAgLy8gSW52b2tlIGFsbCBjYWxsYmFja3MgYXR0YWNoZWQgdG8gYW4gZXZlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2tzW2ldKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gUmV0dXJuIGFsbCBjYWxsYmFja3MgYXR0YWNoZWQgdG8gYW4gZXZlbnRcbiAgbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50c1tgJCR7ZXZlbnR9YF0gfHwgW107XG4gIH1cblxuICAvLyBSZXR1cm4gYSBib29sZWFuIGlmIHRoZSBldmVudCBoYXMgbGlzdGVuZXJzXG4gIGhhc0xpc3RlbmVycyhldmVudCkge1xuICAgIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xuICB9XG5cbn07XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZW1pdHRlcidcblxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4uL3NyYy9pbmRleCdcblxubGV0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbi8vIGZvbyBvblxuZnVuY3Rpb24gY2FsbGJhY2sxKGFyZykge1xuICBjb25zb2xlLmxvZygnY2FsbGJhY2sxIGNhbGxlZCcsIGFyZyk7XG59XG5mdW5jdGlvbiBjYWxsYmFjazIoKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsYmFjazIgY2FsbGVkJyk7XG59XG5mdW5jdGlvbiBjYWxsYmFja09uY2UoKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsYmFjayBjYWxsZWQgb25jZScpO1xufVxuZW1pdHRlci5vbignZm9vJywgY2FsbGJhY2sxKTtcbmVtaXR0ZXIub24oJ2ZvbycsIGNhbGxiYWNrMik7XG5lbWl0dGVyLm9uY2UoJ2ZvbycsIGNhbGxiYWNrT25jZSk7XG5cbi8vIGJhciBvblxuZnVuY3Rpb24gY2FsbGJhY2tCYXIoKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsYmFja0JhciBjYWxsZWQnKTtcbn1cbmVtaXR0ZXIub24oJ2JhcicsIGNhbGxiYWNrQmFyKTtcblxuLy8gRW1pdCBmb28gYW5kIGJhclxuZW1pdHRlci5lbWl0KCdmb28nLCAnYXJnJyk7XG5lbWl0dGVyLmVtaXQoJ2JhcicpO1xuZW1pdHRlci5lbWl0KCdmb28nKTsgLy8gVG8gdGVzdCBvbmNlXG5cbi8vIE9mZlxuZW1pdHRlci5vZmYoJ2ZvbycpO1xuXG4vLyBFbWl0IGJhclxuZW1pdHRlci5lbWl0KCdiYXInKTtcblxuXG4vLyBvZmYgYWxsID0gb2ZmIGJhclxuZW1pdHRlci5vZmYoJ2JhcicpO1xuXG4vLyBFbWl0IHdpdGggbm8gY2FsbGJhY2tzXG5lbWl0dGVyLmVtaXQoJ2JhcicpO1xuZW1pdHRlci5lbWl0KCdmb28nKTtcbiJdfQ==
