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
            //console.log('-------------------this.node', this.node);
            //this.node.getComponent(ModelComponent)._receiveShadows = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvcGxhbmVOb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwbGFuZU5vZGUiLCJkZWxldGluZyIsIm5vZGVQb29sIiwiX2dyYXZpdHkiLCJkZWx0YVRpbWUiLCJwb3MiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJ5Iiwic2V0UG9zaXRpb24iLCJwdXRQbGFuZU5vZGUiLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsImRlbGV0ZUluZGV4IiwieiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7O2dGQUVvRDs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7a0NBR0ssQ0FDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OztpQ0FFSztBQUNGLGlCQUFLRyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7OztrQ0FFTUMsUSxFQUFTO0FBQ1osaUJBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsaUJBQUtELFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxpQkFBS0UsUUFBTCxHQUFnQixJQUFoQjtBQUNIOzs7aUNBRU9DLFMsRUFBVztBQUNoQixnQkFBRyxLQUFLSCxRQUFSLEVBQWlCO0FBQ2Isa0JBQUlJLEdBQUcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQVYsRUFBVjtBQUNBRixjQUFBQSxHQUFHLENBQUNHLENBQUosSUFBUyxLQUFLTCxRQUFkO0FBQ0EsbUJBQUtBLFFBQUwsSUFBaUIsS0FBakI7QUFDQSxtQkFBS0csSUFBTCxDQUFVRyxXQUFWLENBQXNCSixHQUF0Qjs7QUFDQSxrQkFBR0EsR0FBRyxDQUFDRyxDQUFKLEdBQVEsQ0FBQyxDQUFaLEVBQWM7QUFDVCxxQkFBS04sUUFBTCxDQUFjUSxZQUFkLENBQTJCLEtBQUtKLElBQWhDO0FBQ0FLLGdCQUFBQSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJDLFdBQW5CLEdBQWlDUixHQUFHLENBQUNTLENBQXJDO0FBQ0o7QUFDSjtBQUNIOzs7UUEvQjBCakIsUzs7b0JBRmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgLCBNb2RlbENvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50fSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwicGxhbmVOb2RlXCIpXHJcbmV4cG9ydCBjbGFzcyBwbGFuZU5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3RoaXMucGxheWVyX0JvZHkgPSB0aGlzLmdldENvbXBvbmVudChSaWdpZEJvZHlDb21wb25lbnQpO1xyXG4gICAgICAgIC8vIHRoaXMuX3VzZUdyYXZpdHkgPSB0aGlzLnBsYXllcl9Cb2R5Ll91c2VHcmF2aXR5OyAvL+S9v+eUqOmHjeWKm1xyXG4gICAgICAgIC8vIHRoaXMuX2lzS2luZW1hdGljID0gdGhpcy5wbGF5ZXJfQm9keS5faXNLaW5lbWF0aWM7IC8v5L2/55SoXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLXRoaXMubm9kZScsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KS5fcmVjZWl2ZVNoYWRvd3MgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmRlbGV0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKG5vZGVQb29sKXtcclxuICAgICAgICB0aGlzLm5vZGVQb29sID0gbm9kZVBvb2w7XHJcbiAgICAgICAgdGhpcy5kZWxldGluZyA9IHRydWU7ICBcclxuICAgICAgICB0aGlzLl9ncmF2aXR5ID0gMC4wMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZSkge1xyXG4gICAgICAgaWYodGhpcy5kZWxldGluZyl7XHJcbiAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgIHBvcy55IC09IHRoaXMuX2dyYXZpdHk7XHJcbiAgICAgICAgICAgdGhpcy5fZ3Jhdml0eSArPSAwLjAwMjtcclxuICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICBpZihwb3MueSA8IC0yKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZVBvb2wucHV0UGxhbmVOb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuZGVsZXRlSW5kZXggPSBwb3MuejtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19