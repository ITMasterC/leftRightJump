"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, ccclass, property, overView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "75110Eq3+FBE6nQJSMrW4rp", "overView"); // begin overView


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("overView", overView = (_dec = ccclass("overView"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(overView, _Component);

        function overView() {
          babelHelpers.classCallCheck(this, overView);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(overView).apply(this, arguments));
        }

        babelHelpers.createClass(overView, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }, {
          key: "againGame",
          value: function againGame() {
            window._state_magr.emitEvent(window._state_magr.state._againGame);

            this.node.destroy();
          }
        }]);
        return overView;
      }(Component)) || _class));

      cc._RF.pop(); // end overView

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvdmlldy9vdmVyVmlldy5qcyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5Iiwib3ZlclZpZXciLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsImVtaXRFdmVudCIsInN0YXRlIiwiX2FnYWluR2FtZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7K0VBRW9EOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUyxDQUVSLEMsQ0FERztBQUdKO0FBQ0E7QUFDQTs7OztzQ0FFVztBQUNQRyxZQUFBQSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJDLFNBQW5CLENBQTZCRixNQUFNLENBQUNDLFdBQVAsQ0FBbUJFLEtBQW5CLENBQXlCQyxVQUF0RDs7QUFDQSxpQkFBS0MsSUFBTCxDQUFVQyxPQUFWO0FBQ0g7OztRQW5CeUJWLFM7O29CQUZaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIm92ZXJWaWV3XCIpXHJcbmV4cG9ydCBjbGFzcyBvdmVyVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG5cclxuICAgIGFnYWluR2FtZSgpe1xyXG4gICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnci5lbWl0RXZlbnQod2luZG93Ll9zdGF0ZV9tYWdyLnN0YXRlLl9hZ2FpbkdhbWUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIl19