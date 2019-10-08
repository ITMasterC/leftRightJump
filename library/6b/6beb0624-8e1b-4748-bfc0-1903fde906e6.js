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

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {//this.player_Body = this.getComponent(RigidBodyComponent);
            // this._useGravity = this.player_Body._useGravity; //使用重力
            // this._isKinematic = this.player_Body._isKinematic; //使用
          }
        }, {
          key: "init",
          value: function init() {
            this.deleting = false; //更改刚体状态无效
            // this.player_Body = this.getComponent(RigidBodyComponent);
            // this.player_Body._useGravity = false;
            // this.player_Body._isKinematic = true;
          }
        }, {
          key: "delete",
          value: function _delete(nodePool) {
            // if (this.player_Body.isSleeping) {
            //     this.player_Body.wakeUp(); // 唤醒
            // }
            // this.player_Body._allowSleep = false;
            // this.player_Body._useGravity = true;
            // this.player_Body._isKinematic = false;
            // this.player_Body._mass = 11;
            //console.log('---------------aaaaaaa', this.player_Body);
            this.nodePool = nodePool;
            this.deleting = true;
            this._gravity = 0.01; // this.scheduleOnce(function(){
            //     nodePool.putPlaneNode(this.node);
            // },1.5)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvcGxhbmVOb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwbGFuZU5vZGUiLCJkZWxldGluZyIsIm5vZGVQb29sIiwiX2dyYXZpdHkiLCJkZWx0YVRpbWUiLCJwb3MiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJ5Iiwic2V0UG9zaXRpb24iLCJwdXRQbGFuZU5vZGUiLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsImRlbGV0ZUluZGV4IiwieiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7O2dGQUVvRDs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7a0NBRVMsQ0FDTDtBQUNBO0FBQ0E7QUFDSDs7O2lDQUVLO0FBQ0YsaUJBQUtHLFFBQUwsR0FBZ0IsS0FBaEIsQ0FERSxDQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OztrQ0FFTUMsUSxFQUFTO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGlCQUFLRCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsaUJBQUtFLFFBQUwsR0FBZ0IsSUFBaEIsQ0FYWSxDQVlaO0FBQ0E7QUFDQTtBQUNIOzs7aUNBRU9DLFMsRUFBVztBQUNoQixnQkFBRyxLQUFLSCxRQUFSLEVBQWlCO0FBQ2Isa0JBQUlJLEdBQUcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQVYsRUFBVjtBQUNBRixjQUFBQSxHQUFHLENBQUNHLENBQUosSUFBUyxLQUFLTCxRQUFkO0FBQ0EsbUJBQUtBLFFBQUwsSUFBaUIsS0FBakI7QUFDQSxtQkFBS0csSUFBTCxDQUFVRyxXQUFWLENBQXNCSixHQUF0Qjs7QUFDQSxrQkFBR0EsR0FBRyxDQUFDRyxDQUFKLEdBQVEsQ0FBQyxDQUFaLEVBQWM7QUFDVCxxQkFBS04sUUFBTCxDQUFjUSxZQUFkLENBQTJCLEtBQUtKLElBQWhDO0FBQ0FLLGdCQUFBQSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJDLFdBQW5CLEdBQWlDUixHQUFHLENBQUNTLENBQXJDO0FBQ0o7QUFDSjtBQUNIOzs7UUFqRDBCakIsUzs7b0JBRmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgLCBSaWdpZEJvZHlDb21wb25lbnR9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJwbGFuZU5vZGVcIilcclxuZXhwb3J0IGNsYXNzIHBsYW5lTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy90aGlzLnBsYXllcl9Cb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgICAgICAvLyB0aGlzLl91c2VHcmF2aXR5ID0gdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eTsgLy/kvb/nlKjph43liptcclxuICAgICAgICAvLyB0aGlzLl9pc0tpbmVtYXRpYyA9IHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljOyAvL+S9v+eUqFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmRlbGV0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy/mm7TmlLnliJrkvZPnirbmgIHml6DmlYhcclxuICAgICAgICAvLyB0aGlzLnBsYXllcl9Cb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllcl9Cb2R5Ll91c2VHcmF2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJfQm9keS5faXNLaW5lbWF0aWMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShub2RlUG9vbCl7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyX0JvZHkuaXNTbGVlcGluZykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllcl9Cb2R5Lndha2VVcCgpOyAvLyDllKTphpJcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJfQm9keS5fYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyX0JvZHkuX3VzZUdyYXZpdHkgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJfQm9keS5fbWFzcyA9IDExO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLWFhYWFhYWEnLCB0aGlzLnBsYXllcl9Cb2R5KTtcclxuICAgICAgICB0aGlzLm5vZGVQb29sID0gbm9kZVBvb2w7XHJcbiAgICAgICAgdGhpcy5kZWxldGluZyA9IHRydWU7ICBcclxuICAgICAgICB0aGlzLl9ncmF2aXR5ID0gMC4wMTsgICAgICBcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBub2RlUG9vbC5wdXRQbGFuZU5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICAvLyB9LDEuNSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZSkge1xyXG4gICAgICAgaWYodGhpcy5kZWxldGluZyl7XHJcbiAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgIHBvcy55IC09IHRoaXMuX2dyYXZpdHk7XHJcbiAgICAgICAgICAgdGhpcy5fZ3Jhdml0eSArPSAwLjAwMjtcclxuICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICBpZihwb3MueSA8IC0yKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZVBvb2wucHV0UGxhbmVOb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuZGVsZXRlSW5kZXggPSBwb3MuejtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19