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
            this.deleteIndex = -4.5;
            this._startGame = false;
            this._gameOver = false;
            this._score = 0;
          }
        }, {
          key: "emitEvent",
          value: function emitEvent(eventType) {
            //console.log('--------------------派发消息', eventType);
            window.Notification.emit(eventType);
          }
        }]);
        return statemagr;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end state_magr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbWFuYWdlci9zdGF0ZV9tYWdyLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJzdGF0ZW1hZ3IiLCJfZ2FtZU92ZXIiLCJfc3RhcnRHYW1lIiwiX3Njb3JlIiwiTm90aWZpY2F0aW9uIiwiZGVsZXRlSW5kZXgiLCJzdGF0ZSIsIl9hZ2FpbkdhbWUiLCJldmVudFR5cGUiLCJ3aW5kb3ciLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7O2lGQUVvRDs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFFSkcsUyxHQUFZLEs7Z0JBQ1pDLFUsR0FBYSxLO2dCQUNiQyxNLEdBQVMsQztnQkFDVEMsWSxHQUFlLEk7Z0JBQ2ZDLFcsR0FBYyxDO2dCQUVkQyxLLEdBQVE7QUFDSkwsWUFBQUEsU0FBUyxFQUFHLFVBRFI7QUFFSk0sWUFBQUEsVUFBVSxFQUFHO0FBRlQsVzs7Ozs7O2tDQUtDLENBQ0w7QUFDSDs7O2lDQUVLO0FBQ0YsaUJBQUtGLFdBQUwsR0FBbUIsQ0FBQyxHQUFwQjtBQUNBLGlCQUFLSCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsaUJBQUtELFNBQUwsR0FBaUIsS0FBakI7QUFDQSxpQkFBS0UsTUFBTCxHQUFjLENBQWQ7QUFDSDs7O29DQUVTSyxTLEVBQVU7QUFDaEI7QUFDQUMsWUFBQUEsTUFBTSxDQUFDTCxZQUFQLENBQW9CTSxJQUFwQixDQUF5QkYsU0FBekI7QUFDSDs7O1FBMUIwQlgsUzs7b0JBRmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwic3RhdGVtYWdyXCIpXHJcbmV4cG9ydCBjbGFzcyBzdGF0ZW1hZ3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgX2dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICBfc3RhcnRHYW1lID0gZmFsc2U7XHJcbiAgICBfc2NvcmUgPSAwO1xyXG4gICAgTm90aWZpY2F0aW9uID0gbnVsbDtcclxuICAgIGRlbGV0ZUluZGV4ID0gMDtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBfZ2FtZU92ZXIgOiAnZ2FtZU92ZXInLFxyXG4gICAgICAgIF9hZ2FpbkdhbWUgOiAnYWdhbWVHYW1lJyxcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuZGVsZXRlSW5kZXggPSAtNC41O1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0R2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXRFdmVudChldmVudFR5cGUpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0t5rS+5Y+R5raI5oGvJywgZXZlbnRUeXBlKTtcclxuICAgICAgICB3aW5kb3cuTm90aWZpY2F0aW9uLmVtaXQoZXZlbnRUeXBlKTtcclxuICAgIH1cclxufVxyXG4iXX0=