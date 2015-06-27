(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = (function () {
  function EventEmitter(object) {
    _classCallCheck(this, EventEmitter);

    // Create callback stack
    this._events = {};
  }

  _createClass(EventEmitter, [{
    key: 'on',

    // On
    value: function on(event, cb) {

      // Push callback
      (this._events['$' + event] = this._events['$' + event] || []).push(cb);

      return this;
    }
  }, {
    key: 'once',

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
    key: 'off',

    // Off
    value: function off(event, cb) {

      // Remove all listeners
      if (arguments.length === 0) {
        this._events = {};
        return this;
      }

      // Get callbacks of an event
      var callbacks = this._events['$' + event];
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
    key: 'emit',

    // Emit an event with arguments
    value: function emit(event) {

      // Get callbacks of an event
      var callbacks = undefined;
      if (!(callbacks = this._events['$' + event])) {
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
    key: 'listeners',

    // Return all callbacks attached to an event
    value: function listeners(event) {
      return this._events['$' + event] || [];
    }
  }, {
    key: 'hasListeners',

    // Return a boolean if the event has listeners
    value: function hasListeners(event) {
      return !!this.listeners(event).length;
    }
  }]);

  return EventEmitter;
})();

exports['default'] = EventEmitter;
;
module.exports = exports['default'];

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFtaWVuc2VndWluL1Byb2plY3RzL2V2ZW50LXV0aWxzL3NyYy9lbWl0dGVyLmpzIiwiL1VzZXJzL2RhbWllbnNlZ3Vpbi9Qcm9qZWN0cy9ldmVudC11dGlscy9zcmMvaW5kZXguanMiLCIvVXNlcnMvZGFtaWVuc2VndWluL1Byb2plY3RzL2V2ZW50LXV0aWxzL3Rlc3QvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBcUIsWUFBWTtBQUNwQixXQURRLFlBQVksQ0FDbkIsTUFBTSxFQUFFOzBCQURELFlBQVk7OztBQUc3QixRQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztHQUNuQjs7ZUFKa0IsWUFBWTs7OztXQU83QixZQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7OztBQUdaLE9BQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUV2RSxhQUFPLElBQUksQ0FBQztLQUNiOzs7OztXQUdHLGNBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTs7O0FBR2QsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGVBQVMsRUFBRSxHQUFHO0FBQ1osWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEIsVUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7T0FDM0I7QUFDRCxRQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNYLFVBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVuQixhQUFP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QUFZLENBQUMsQ0FBQzs7O0FBR2xDLFNBQVMsV0FBVyxHQUFHO0FBQ3JCLFNBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztDQUNuQztBQUNELE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7QUFHL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUFHcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FBR25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztBQUlwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUFHbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgIC8vIENyZWF0ZSBjYWxsYmFjayBzdGFja1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICB9XG5cbiAgLy8gT25cbiAgb24oZXZlbnQsIGNiKSB7XG5cbiAgICAvLyBQdXNoIGNhbGxiYWNrXG4gICAgKHRoaXMuX2V2ZW50c1snJCcgKyBldmVudF0gPSB0aGlzLl9ldmVudHNbJyQnICsgZXZlbnRdIHx8IFtdKS5wdXNoKGNiKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gT25jZVxuICBvbmNlKGV2ZW50LCBjYikge1xuXG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyIGFmdGVyIGNhbGxiYWNrXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGZuKCkge1xuICAgICAgdGhhdC5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGZuLmNiID0gY2I7XG4gICAgdGhpcy5vbihldmVudCwgZm4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBPZmZcbiAgb2ZmKGV2ZW50LCBjYikge1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnNcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBHZXQgY2FsbGJhY2tzIG9mIGFuIGV2ZW50XG4gICAgbGV0IGNhbGxiYWNrcyA9IHRoaXMuX2V2ZW50c1snJCcgKyBldmVudF07XG4gICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIG9mIGEgc3BlY2lmaWMgZXZlbnRcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1snJCcgKyBldmVudF07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgc3BlY2lmaWMgY2FsbGJhY2sgb2YgYSBzcGVjaWZpYyBldmVudFxuICAgIHZhciBjYWxsYmFjaztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG4gICAgICBpZiAoY2FsbGJhY2sgPT09IGNiIHx8IGNhbGxiYWNrLmNiID09PSBjYikge1xuICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBFbWl0IGFuIGV2ZW50IHdpdGggYXJndW1lbnRzXG4gIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcblxuICAgIC8vIEdldCBjYWxsYmFja3Mgb2YgYW4gZXZlbnRcbiAgICBsZXQgY2FsbGJhY2tzO1xuICAgIGlmICghKGNhbGxiYWNrcyA9IHRoaXMuX2V2ZW50c1snJCcgKyBldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBRdWljayBjbG9uZVxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcblxuICAgIC8vIEludm9rZSBhbGwgY2FsbGJhY2tzIGF0dGFjaGVkIHRvIGFuIGV2ZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrc1tpXSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFJldHVybiBhbGwgY2FsbGJhY2tzIGF0dGFjaGVkIHRvIGFuIGV2ZW50XG4gIGxpc3RlbmVycyhldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHNbJyQnICsgZXZlbnRdIHx8IFtdO1xuICB9XG5cbiAgLy8gUmV0dXJuIGEgYm9vbGVhbiBpZiB0aGUgZXZlbnQgaGFzIGxpc3RlbmVyc1xuICBoYXNMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbiAgfVxuXG59O1xuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2VtaXR0ZXInXG5cbmV4cG9ydCB7RXZlbnRFbWl0dGVyfVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi4vc3JjL2luZGV4J1xuXG5sZXQgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuLy8gZm9vIG9uXG5mdW5jdGlvbiBjYWxsYmFjazEoYXJnKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsYmFjazEgY2FsbGVkJywgYXJnKTtcbn1cbmZ1bmN0aW9uIGNhbGxiYWNrMigpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxiYWNrMiBjYWxsZWQnKTtcbn1cbmZ1bmN0aW9uIGNhbGxiYWNrT25jZSgpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxiYWNrIGNhbGxlZCBvbmNlJyk7XG59XG5lbWl0dGVyLm9uKCdmb28nLCBjYWxsYmFjazEpO1xuZW1pdHRlci5vbignZm9vJywgY2FsbGJhY2syKTtcbmVtaXR0ZXIub25jZSgnZm9vJywgY2FsbGJhY2tPbmNlKTtcblxuLy8gYmFyIG9uXG5mdW5jdGlvbiBjYWxsYmFja0JhcigpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxiYWNrQmFyIGNhbGxlZCcpO1xufVxuZW1pdHRlci5vbignYmFyJywgY2FsbGJhY2tCYXIpO1xuXG4vLyBFbWl0IGZvbyBhbmQgYmFyXG5lbWl0dGVyLmVtaXQoJ2ZvbycsICdhcmcnKTtcbmVtaXR0ZXIuZW1pdCgnYmFyJyk7XG5lbWl0dGVyLmVtaXQoJ2ZvbycpOyAvLyBUbyB0ZXN0IG9uY2VcblxuLy8gT2ZmXG5lbWl0dGVyLm9mZignZm9vJyk7XG5cbi8vIEVtaXQgYmFyXG5lbWl0dGVyLmVtaXQoJ2JhcicpO1xuXG5cbi8vIG9mZiBhbGwgPSBvZmYgYmFyXG5lbWl0dGVyLm9mZignYmFyJyk7XG5cbi8vIEVtaXQgd2l0aCBubyBjYWxsYmFja3NcbmVtaXR0ZXIuZW1pdCgnYmFyJyk7XG5lbWl0dGVyLmVtaXQoJ2ZvbycpO1xuIl19
