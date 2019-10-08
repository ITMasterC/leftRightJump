"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, _temp, ccclass, property, statemagr;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "203e2SkrGRHC6IjD4gaZQ0O", "state_magr"); // begin state_magr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("statemagr", statemagr = (_dec = ccclass("statemagr"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(statemagr, _Component);

        function statemagr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, statemagr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(statemagr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._gameOver = false;
          _this._startGame = false;
          _this._score = 0;
          _this.Notification = null;
          _this.deleteIndex = 0;
          _this.state = {
            _gameOver: 'gameOver',
            _againGame: 'agameGame'
          };
          return _this;
        }

        babelHelpers.createClass(statemagr, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init() {
            this.deleteIndex = 0;
            this._startGame = false;
            this._gameOver = false;
            this._score = 0;
          }
        }, {
          key: "emitEvent",
          value: function emitEvent(eventType) {
            console.log('--------------------派发消息', eventType);
            window.Notification.emit(eventType);
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return statemagr;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end state_magr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbWFuYWdlci9zdGF0ZV9tYWdyLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJzdGF0ZW1hZ3IiLCJfZ2FtZU92ZXIiLCJfc3RhcnRHYW1lIiwiX3Njb3JlIiwiTm90aWZpY2F0aW9uIiwiZGVsZXRlSW5kZXgiLCJzdGF0ZSIsIl9hZ2FpbkdhbWUiLCJldmVudFR5cGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7OztpRkFFb0Q7OztBQURqRUMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRUpHLFMsR0FBWSxLO2dCQUNaQyxVLEdBQWEsSztnQkFDYkMsTSxHQUFTLEM7Z0JBQ1RDLFksR0FBZSxJO2dCQUNmQyxXLEdBQWMsQztnQkFFZEMsSyxHQUFRO0FBQ0pMLFlBQUFBLFNBQVMsRUFBRyxVQURSO0FBRUpNLFlBQUFBLFVBQVUsRUFBRztBQUZULFc7Ozs7OztrQ0FLQyxDQUNMO0FBQ0g7OztpQ0FFSztBQUNGLGlCQUFLRixXQUFMLEdBQW1CLENBQW5CO0FBQ0EsaUJBQUtILFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxpQkFBS0QsU0FBTCxHQUFpQixLQUFqQjtBQUNBLGlCQUFLRSxNQUFMLEdBQWMsQ0FBZDtBQUNIOzs7b0NBRVNLLFMsRUFBVTtBQUNoQkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NGLFNBQXhDO0FBQ0FHLFlBQUFBLE1BQU0sQ0FBQ1AsWUFBUCxDQUFvQlEsSUFBcEIsQ0FBeUJKLFNBQXpCO0FBQ0gsVyxDQUlEO0FBQ0E7QUFDQTs7OztRQWhDMkJYLFM7O29CQUZiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcInN0YXRlbWFnclwiKVxyXG5leHBvcnQgY2xhc3Mgc3RhdGVtYWdyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIF9nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgX3N0YXJ0R2FtZSA9IGZhbHNlO1xyXG4gICAgX3Njb3JlID0gMDtcclxuICAgIE5vdGlmaWNhdGlvbiA9IG51bGw7XHJcbiAgICBkZWxldGVJbmRleCA9IDA7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgX2dhbWVPdmVyIDogJ2dhbWVPdmVyJyxcclxuICAgICAgICBfYWdhaW5HYW1lIDogJ2FnYW1lR2FtZScsXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmRlbGV0ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLl9zdGFydEdhbWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBlbWl0RXZlbnQoZXZlbnRUeXBlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS3mtL7lj5Hmtojmga8nLCBldmVudFR5cGUpO1xyXG4gICAgICAgIHdpbmRvdy5Ob3RpZmljYXRpb24uZW1pdChldmVudFR5cGUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWUpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19