"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, _temp, ccclass, property, UImagr;

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
      cc._RF.push(window.module || {}, "d17cfJ16M9PbLJm5SpvBGCV", "UI_magr"); // begin UI_magr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UImagr", UImagr = (_dec = ccclass("UImagr"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(UImagr, _Component);

        function UImagr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, UImagr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(UImagr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._overView = undefined;
          return _this;
        }

        babelHelpers.createClass(UImagr, [{
          key: "start",
          value: function start() {}
        }, {
          key: "startLoadRes",
          value: function startLoadRes() {
            var _this2 = this;

            cc.loader.loadRes("prefab/view/overNode", function (err, prefab) {
              _this2._overView = prefab;
            });
          }
        }, {
          key: "addChildByName",
          value: function addChildByName(name) {
            var prefab = this['_' + name];

            if (prefab) {
              var newNode = cc.instantiate(prefab);
              cc.director.getScene().addChild(newNode);
            } else {
              console.log('---------------没有找到对应的节点', name);
            }
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return UImagr;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end UI_magr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbWFuYWdlci9VSV9tYWdyLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSW1hZ3IiLCJfb3ZlclZpZXciLCJ1bmRlZmluZWQiLCJjYyIsImxvYWRlciIsImxvYWRSZXMiLCJlcnIiLCJwcmVmYWIiLCJuYW1lIiwibmV3Tm9kZSIsImluc3RhbnRpYXRlIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImFkZENoaWxkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0lBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7Ozs4RUFBcUU7OztBQUlyRUMsTUFBQUEsTyxHQUVBRixVLENBRkFFLE87QUFDQUMsTUFBQUEsUSxHQUNBSCxVLENBREFHLFE7O3dCQUlTQyxNLFdBRFpGLE9BQU8sQ0FBQyxRQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVNKRyxTLEdBQVlDLFM7Ozs7OztrQ0FFSixDQUFFOzs7eUNBRUs7QUFBQTs7QUFDWEMsWUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLE9BQVYsQ0FBa0Isc0JBQWxCLEVBQTBDLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUN2RCxjQUFBLE1BQUksQ0FBQ04sU0FBTCxHQUFpQk0sTUFBakI7QUFDSCxhQUZEO0FBR0g7Ozt5Q0FFY0MsSSxFQUFNO0FBQ2pCLGdCQUFJRCxNQUFNLEdBQUcsS0FBSyxNQUFJQyxJQUFULENBQWI7O0FBQ0EsZ0JBQUdELE1BQUgsRUFBVTtBQUNOLGtCQUFJRSxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sV0FBSCxDQUFlSCxNQUFmLENBQWQ7QUFDQUosY0FBQUEsRUFBRSxDQUFDUSxRQUFILENBQVlDLFFBQVosR0FBdUJDLFFBQXZCLENBQWdDSixPQUFoQztBQUNILGFBSEQsTUFHSztBQUNESyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q1AsSUFBeEM7QUFDSDtBQUNKLFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUE5QndCWCxTOztvQkFUViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTm9kZVxyXG59IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7XHJcbiAgICBjY2NsYXNzLFxyXG4gICAgcHJvcGVydHlcclxufSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlVJbWFnclwiKVxyXG5leHBvcnQgY2xhc3MgVUltYWdyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBfb3ZlclZpZXcgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgc3RhcnQoKSB7fVxyXG5cclxuICAgIHN0YXJ0TG9hZFJlcygpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInByZWZhYi92aWV3L292ZXJOb2RlXCIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vdmVyVmlldyA9IHByZWZhYjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGlsZEJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIHByZWZhYiA9IHRoaXNbJ18nK25hbWVdO1xyXG4gICAgICAgIGlmKHByZWZhYil7XHJcbiAgICAgICAgICAgIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChuZXdOb2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLeayoeacieaJvuWIsOWvueW6lOeahOiKgueCuScsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZSkge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufSJdfQ==