"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, ccclass, property, planeNode;

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
      cc._RF.push(window.module || {}, "6beb0YkjhtHSL/AGQP96Qbm", "planeNode"); // begin planeNode


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("planeNode", planeNode = (_dec = ccclass("planeNode"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(planeNode, _Component);

        function planeNode() {
          babelHelpers.classCallCheck(this, planeNode);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(planeNode).apply(this, arguments));
        }

        babelHelpers.createClass(planeNode, [{
          key: "start",
          value: function start() {//this.player_Body = this.getComponent(RigidBodyComponent);
            // this._useGravity = this.player_Body._useGravity; //使用重力
            // this._isKinematic = this.player_Body._isKinematic; //使用
          }
        }, {
          key: "init",
          value: function init() {
            this.deleting = false;
          }
        }, {
          key: "delete",
          value: function _delete(nodePool) {
            this.nodePool = nodePool;
            this.deleting = true;
            this._gravity = 0.01;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.deleting) {
              var pos = this.node.getPosition();
              pos.y -= this._gravity;
              this._gravity += 0.002;
              this.node.setPosition(pos);

              if (pos.y < -2) {
                this.nodePool.putPlaneNode(this.node);
                window._state_magr.deleteIndex = pos.z;
              }
            }
          }
        }]);
        return planeNode;
      }(Component)) || _class));

      cc._RF.pop(); // end planeNode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvcGxhbmVOb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwbGFuZU5vZGUiLCJkZWxldGluZyIsIm5vZGVQb29sIiwiX2dyYXZpdHkiLCJkZWx0YVRpbWUiLCJwb3MiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJ5Iiwic2V0UG9zaXRpb24iLCJwdXRQbGFuZU5vZGUiLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsImRlbGV0ZUluZGV4IiwieiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7O2dGQUVvRDs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7a0NBR0ssQ0FDTDtBQUNBO0FBQ0E7QUFDSDs7O2lDQUVLO0FBQ0YsaUJBQUtHLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDs7O2tDQUVNQyxRLEVBQVM7QUFDWixpQkFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxpQkFBS0QsUUFBTCxHQUFnQixJQUFoQjtBQUNBLGlCQUFLRSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7OztpQ0FFT0MsUyxFQUFXO0FBQ2hCLGdCQUFHLEtBQUtILFFBQVIsRUFBaUI7QUFDYixrQkFBSUksR0FBRyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsV0FBVixFQUFWO0FBQ0FGLGNBQUFBLEdBQUcsQ0FBQ0csQ0FBSixJQUFTLEtBQUtMLFFBQWQ7QUFDQSxtQkFBS0EsUUFBTCxJQUFpQixLQUFqQjtBQUNBLG1CQUFLRyxJQUFMLENBQVVHLFdBQVYsQ0FBc0JKLEdBQXRCOztBQUNBLGtCQUFHQSxHQUFHLENBQUNHLENBQUosR0FBUSxDQUFDLENBQVosRUFBYztBQUNULHFCQUFLTixRQUFMLENBQWNRLFlBQWQsQ0FBMkIsS0FBS0osSUFBaEM7QUFDQUssZ0JBQUFBLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQkMsV0FBbkIsR0FBaUNSLEdBQUcsQ0FBQ1MsQ0FBckM7QUFDSjtBQUNKO0FBQ0g7OztRQTdCMEJqQixTOztvQkFGYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSAsIFJpZ2lkQm9keUNvbXBvbmVudH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcInBsYW5lTm9kZVwiKVxyXG5leHBvcnQgY2xhc3MgcGxhbmVOb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy90aGlzLnBsYXllcl9Cb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgICAgICAvLyB0aGlzLl91c2VHcmF2aXR5ID0gdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eTsgLy/kvb/nlKjph43liptcclxuICAgICAgICAvLyB0aGlzLl9pc0tpbmVtYXRpYyA9IHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljOyAvL+S9v+eUqFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmRlbGV0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKG5vZGVQb29sKXtcclxuICAgICAgICB0aGlzLm5vZGVQb29sID0gbm9kZVBvb2w7XHJcbiAgICAgICAgdGhpcy5kZWxldGluZyA9IHRydWU7ICBcclxuICAgICAgICB0aGlzLl9ncmF2aXR5ID0gMC4wMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZSkge1xyXG4gICAgICAgaWYodGhpcy5kZWxldGluZyl7XHJcbiAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgIHBvcy55IC09IHRoaXMuX2dyYXZpdHk7XHJcbiAgICAgICAgICAgdGhpcy5fZ3Jhdml0eSArPSAwLjAwMjtcclxuICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICBpZihwb3MueSA8IC0yKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZVBvb2wucHV0UGxhbmVOb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuZGVsZXRlSW5kZXggPSBwb3MuejtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19