"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, BoxColliderComponent, RigidBodyComponent, Vec3, tweenUtil, _dec, _class, _temp, ccclass, property, playercon;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      BoxColliderComponent = _cc.BoxColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
      tweenUtil = _cc.tweenUtil;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "83ab3rK2b5EzLhMZ09aw9y+", "player_con"); // begin player_con


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("playercon", playercon = (_dec = ccclass("playercon"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(playercon, _Component);

        function playercon() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, playercon);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(playercon)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._action = false;
          _this._moveFinsh = true;
          _this._pos = new Vec3(0, 1.2, -5);
          return _this;
        }

        babelHelpers.createClass(playercon, [{
          key: "start",
          value: function start() {
            this.alreadyStay = true;
            this.player_collider = this.getComponent(BoxColliderComponent); // this.player_Body = this.getComponent(RigidBodyComponent);
            // this._useGravity = this.player_Body._useGravity; //使用重力
            // this._isKinematic = this.player_Body._isKinematic; //使用
            // console.log('---------------------player', this.player_collider);
            // if (this.player_collider) {
            //     this.player_collider.on('onCollisionEnter', this.onCollision, this);
            //     this.player_collider.on('onCollisionStay', this.onCollision, this);
            //     this.player_collider.on('onCollisionExit', this.onCollision, this);
            // }

            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            this.player_Body = this.getComponent(RigidBodyComponent);
            this._gravity = 0.008;
            this._pos = new Vec3(0, 1.2, -5);
            this.node.setPosition(new Vec3(0, 1.2, -5));
            this.player_Body._useGravity = true;
            this.player_Body._isKinematic = false;
          }
        }, {
          key: "onCollision",
          value: function onCollision(event) {
            console.log('-------------------碰撞');

            if (event.type == 'onCollisionStay') {
              if (!this.alreadyStay) {
                this.alreadyStay = true;
                this._gravity = 0.008;
              } else {
                return;
              }
            } else if (event.type == 'onCollisionExit') {
              console.log('-------------------结束碰撞');
              this.alreadyStay = false;
            }
          }
        }, {
          key: "moveLeft",
          value: function moveLeft() {
            var _this2 = this;

            if (!this._moveFinsh || window._state_magr._gameOver) return;
            this._moveFinsh = false;
            this.scheduleOnce(function () {
              this._moveFinsh = true;
            }, 0.25);
            var pos = this.node.getPosition();
            pos.z -= 1;
            pos.x -= 1;
            this._action = true;
            this.player_Body._useGravity = false;
            this.player_Body._isKinematic = true;
            this.scheduleOnce(function () {
              this._action = false;
              this.player_Body._useGravity = true;
              this.player_Body._isKinematic = false;
            }, 0.15);
            Vec3.copy(this._pos, this.node.getPosition());
            tweenUtil(this._pos).to(0.1, new Vec3(pos.x, 1.3, pos.z), {
              easing: 'easeIn',
              onUpdate: function onUpdate() {
                _this2.node.position = _this2._pos;
              }
            }).union().call(this.finshCallBack).start();
          }
        }, {
          key: "moveRight",
          value: function moveRight() {
            var _this3 = this;

            if (!this._moveFinsh || window._state_magr._gameOver) return;
            this._moveFinsh = false;
            this.scheduleOnce(function () {
              this._moveFinsh = true;
            }, 0.25);
            var pos = this.node.getPosition();
            pos.z -= 1;
            pos.x += 1;
            this._action = true;
            this.player_Body._useGravity = false;
            this.player_Body._isKinematic = true;
            this.scheduleOnce(function () {
              this._action = false;
              this.player_Body._useGravity = true;
              this.player_Body._isKinematic = false;
            }, 0.15);
            Vec3.copy(this._pos, this.node.getPosition());
            tweenUtil(this._pos).to(0.1, new Vec3(pos.x, 1.3, pos.z), {
              easing: 'easeIn',
              onUpdate: function onUpdate() {
                _this3.node.position = _this3._pos;
              }
            }).union().start();
          }
        }, {
          key: "finshCallBack",
          value: function finshCallBack() {
            console.log('-----------------------完成动作');
            this._action = false;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            //if (this._action) this.node.position = this._pos;
            if (this.node.getPosition().y <= 0.45 && !window._state_magr._gameOver) {
              //游戏结束
              window._state_magr._gameOver = true;

              window._state_magr.emitEvent(window._state_magr.state._gameOver);
            } //避免有时候不会自动掉落


            if (this._moveFinsh && window._state_magr.deleteIndex <= this.node.getPosition().z && this.node.getPosition().y <= 1) {
              var pos = this.node.getPosition();
              pos.y -= this._gravity;
              this._gravity += 0.002;
              this.node.setPosition(pos);
            }
          }
        }]);
        return playercon;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end player_con

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY29udHJvbGxlcnMvcGxheWVyX2Nvbi5qcyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQm94Q29sbGlkZXJDb21wb25lbnQiLCJSaWdpZEJvZHlDb21wb25lbnQiLCJWZWMzIiwidHdlZW5VdGlsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwicGxheWVyY29uIiwiX2FjdGlvbiIsIl9tb3ZlRmluc2giLCJfcG9zIiwiYWxyZWFkeVN0YXkiLCJwbGF5ZXJfY29sbGlkZXIiLCJnZXRDb21wb25lbnQiLCJpbml0IiwicGxheWVyX0JvZHkiLCJfZ3Jhdml0eSIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsIl91c2VHcmF2aXR5IiwiX2lzS2luZW1hdGljIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIndpbmRvdyIsIl9zdGF0ZV9tYWdyIiwiX2dhbWVPdmVyIiwic2NoZWR1bGVPbmNlIiwicG9zIiwiZ2V0UG9zaXRpb24iLCJ6IiwieCIsImNvcHkiLCJ0byIsImVhc2luZyIsIm9uVXBkYXRlIiwicG9zaXRpb24iLCJ1bmlvbiIsImNhbGwiLCJmaW5zaENhbGxCYWNrIiwic3RhcnQiLCJkZWx0YVRpbWUiLCJ5IiwiZW1pdEV2ZW50Iiwic3RhdGUiLCJkZWxldGVJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0lBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFDQUMsTUFBQUEsb0IsT0FBQUEsb0I7QUFDQUMsTUFBQUEsa0IsT0FBQUEsa0I7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUzs7O2lGQUpxRTs7O0FBUXJFQyxNQUFBQSxPLEdBRUFOLFUsQ0FGQU0sTztBQUNBQyxNQUFBQSxRLEdBQ0FQLFUsQ0FEQU8sUTs7MkJBSVNDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRUpH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QUNBLG1CQUFLQSxRQUFMLElBQWlCLEtBQWpCO0FBQ0EsbUJBQUtDLElBQUwsQ0FBVUMsV0FBVixDQUFzQlcsR0FBdEI7QUFDSDtBQUNKOzs7UUExSDBCN0IsUzs7b0JBYmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgX2RlY29yYXRvcixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEJveENvbGxpZGVyQ29tcG9uZW50LFxyXG4gICAgUmlnaWRCb2R5Q29tcG9uZW50LFxyXG4gICAgVmVjMyxcclxuICAgIHR3ZWVuVXRpbCxcclxuICAgIFF1YXRcclxufSBmcm9tIFwiY2NcIjtcclxuY29uc3Qge1xyXG4gICAgY2NjbGFzcyxcclxuICAgIHByb3BlcnR5XHJcbn0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJwbGF5ZXJjb25cIilcclxuZXhwb3J0IGNsYXNzIHBsYXllcmNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBfYWN0aW9uID0gZmFsc2U7XHJcbiAgICBfbW92ZUZpbnNoID0gdHJ1ZTtcclxuICAgIF9wb3MgPSBuZXcgVmVjMygwLCAxLjIsIC01KTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmFscmVhZHlTdGF5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXllcl9jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KEJveENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllcl9Cb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgICAgICAvLyB0aGlzLl91c2VHcmF2aXR5ID0gdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eTsgLy/kvb/nlKjph43liptcclxuICAgICAgICAvLyB0aGlzLl9pc0tpbmVtYXRpYyA9IHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljOyAvL+S9v+eUqFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS1wbGF5ZXInLCB0aGlzLnBsYXllcl9jb2xsaWRlcik7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyX2NvbGxpZGVyKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyX2NvbGxpZGVyLm9uKCdvbkNvbGxpc2lvbkVudGVyJywgdGhpcy5vbkNvbGxpc2lvbiwgdGhpcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyX2NvbGxpZGVyLm9uKCdvbkNvbGxpc2lvblN0YXknLCB0aGlzLm9uQ29sbGlzaW9uLCB0aGlzKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJfY29sbGlkZXIub24oJ29uQ29sbGlzaW9uRXhpdCcsIHRoaXMub25Db2xsaXNpb24sIHRoaXMpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyX0JvZHkgPSB0aGlzLmdldENvbXBvbmVudChSaWdpZEJvZHlDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuX2dyYXZpdHkgPSAwLjAwODtcclxuICAgICAgICB0aGlzLl9wb3MgPSBuZXcgVmVjMygwLCAxLjIsIC01KTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3IFZlYzMoMCwgMS4yLCAtNSkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyX0JvZHkuX3VzZUdyYXZpdHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLeeisOaSnicpO1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09ICdvbkNvbGxpc2lvblN0YXknKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5hbHJlYWR5U3RheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5U3RheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmF2aXR5ID0gMC4wMDg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ29uQ29sbGlzaW9uRXhpdCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS3nu5PmnZ/norDmkp4nKTtcclxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5U3RheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlTGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21vdmVGaW5zaCB8fCB3aW5kb3cuX3N0YXRlX21hZ3IuX2dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fbW92ZUZpbnNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3ZlRmluc2ggPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuMjUpXHJcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHBvcy56IC09IDE7XHJcbiAgICAgICAgcG9zLnggLT0gMTtcclxuICAgICAgICB0aGlzLl9hY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGxheWVyX0JvZHkuX3VzZUdyYXZpdHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllcl9Cb2R5Ll9pc0tpbmVtYXRpYyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMC4xNSlcclxuICAgICAgICBWZWMzLmNvcHkodGhpcy5fcG9zLCB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdHdlZW5VdGlsKHRoaXMuX3BvcylcclxuICAgICAgICAgICAgLnRvKDAuMSwgbmV3IFZlYzMocG9zLngsIDEuMywgcG9zLnopLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW4nLFxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLl9wb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgIC5jYWxsKHRoaXMuZmluc2hDYWxsQmFjaylcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVJpZ2h0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbW92ZUZpbnNoIHx8IHdpbmRvdy5fc3RhdGVfbWFnci5fZ2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9tb3ZlRmluc2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdmVGaW5zaCA9IHRydWU7XHJcbiAgICAgICAgfSwgMC4yNSlcclxuICAgICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgcG9zLnogLT0gMTtcclxuICAgICAgICBwb3MueCArPSAxO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl9Cb2R5Ll91c2VHcmF2aXR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5faXNLaW5lbWF0aWMgPSBmYWxzZTtcclxuICAgICAgICB9LCAwLjE1KVxyXG4gICAgICAgIFZlYzMuY29weSh0aGlzLl9wb3MsIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0d2VlblV0aWwodGhpcy5fcG9zKVxyXG4gICAgICAgICAgICAudG8oMC4xLCBuZXcgVmVjMyhwb3MueCwgMS4zLCBwb3MueiksIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbicsXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuX3BvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnVuaW9uKClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluc2hDYWxsQmFjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lrozmiJDliqjkvZwnKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5fYWN0aW9uKSB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLl9wb3M7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgPD0gMC40NSAmJiAhd2luZG93Ll9zdGF0ZV9tYWdyLl9nYW1lT3ZlcikgeyAvL+a4uOaIj+e7k+adn1xyXG4gICAgICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuX2dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93Ll9zdGF0ZV9tYWdyLmVtaXRFdmVudCh3aW5kb3cuX3N0YXRlX21hZ3Iuc3RhdGUuX2dhbWVPdmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6YG/5YWN5pyJ5pe25YCZ5LiN5Lya6Ieq5Yqo5o6J6JC9XHJcbiAgICAgICAgaWYgKHRoaXMuX21vdmVGaW5zaCAmJiB3aW5kb3cuX3N0YXRlX21hZ3IuZGVsZXRlSW5kZXggPD0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueiAmJiB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55IDw9IDEpIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBwb3MueSAtPSB0aGlzLl9ncmF2aXR5O1xyXG4gICAgICAgICAgICB0aGlzLl9ncmF2aXR5ICs9IDAuMDAyO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=