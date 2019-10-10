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
          _this._pos = new Vec3(0, 0.6, -5);
          return _this;
        }

        babelHelpers.createClass(playercon, [{
          key: "start",
          value: function start() {
            this.alreadyStay = true;
            this.player_collider = this.getComponent(BoxColliderComponent); // this.player_Body = this.getComponent(RigidBodyComponent);
            // this._useGravity = this.player_Body._useGravity; //使用重力
            // this._isKinematic = this.player_Body._isKinematic; //使用

            console.log('---------------------player', this.node); // if (this.player_collider) {
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
            this._pos = new Vec3(0, 0.6, -5);
            this.node.setPosition(new Vec3(0, 0.6, -5));
            this.player_Body._useGravity = true;
            this.player_Body._isKinematic = false;
            this._initFinsh = false;
            this.scheduleOnce(function () {
              this._initFinsh = true;
            }, 1); //this.node.children[0].children[0].getComponent(ModelComponent)._shadowCastingMode = 1;
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

            if (window._state_magr.deleteIndex <= this.node.getPosition().z) return;
            if (!this._moveFinsh || window._state_magr._gameOver) return;
            this._moveFinsh = false;
            this.scheduleOnce(function () {
              this._moveFinsh = true;
            }, 0.2);
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
            tweenUtil(this._pos).to(0.1, new Vec3(pos.x, 0.7, pos.z), {
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

            if (window._state_magr.deleteIndex <= this.node.getPosition().z) return;
            if (!this._moveFinsh || window._state_magr._gameOver) return;
            this._moveFinsh = false;
            this.scheduleOnce(function () {
              this._moveFinsh = true;
            }, 0.2);
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
            tweenUtil(this._pos).to(0.1, new Vec3(pos.x, 0.7, pos.z), {
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
            if (this.node.getPosition().y <= 0.4 && !window._state_magr._gameOver && this._initFinsh) {
              //游戏结束
              console.log('-------------------aaaa---', this.node.getPosition().y);
              window._state_magr._gameOver = true;

              window._state_magr.emitEvent(window._state_magr.state._gameOver); // this.node.children[0].children[0].getComponent(ModelComponent).shadowCastingMode = 0;

            } //避免有时候不会自动掉落


            if (this._moveFinsh && window._state_magr.deleteIndex <= this.node.getPosition().z + 1 && this._initFinsh) {
              var pos = this.node.getPosition();
              pos.y -= this._gravity;
              this._gravity += 0.002;
              this.node.setPosition(pos);
            }

            if (this.node.getPosition().y < -2) {
              this.node.getPosition().y = -2;
              this.player_Body._useGravity = false;
              this.player_Body._isKinematic = true;
              this.player_Body.setLinearVelocity(new Vec3(0, 0, 0));
            }
          }
        }]);
        return playercon;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end player_con

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY29udHJvbGxlcnMvcGxheWVyX2Nvbi5qcyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQm94Q29sbGlkZXJDb21wb25lbnQiLCJSaWdpZEJvZHlDb21wb25lbnQiLCJWZWMzIiwidHdlZW5VdGlsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwicGxheWVyY29uIiwiX2FjdGlvbiIsIl9tb3ZlRmluc2giLCJfcG9zIiwiYWxyZWFkeVN0YXkiLCJwbGF5ZXJfY29sbGlkZXIiLCJnZXRDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwibm9kZSIsImluaXQiLCJwbGF5ZXJfQm9keSIsIl9ncmF2aXR5Iiwic2V0UG9zaXRpb24iLCJfdXNlR3Jhdml0eSIsIl9pc0tpbmVtYXRpYyIsIl9pbml0Rmluc2giLCJzY2hlZHVsZU9uY2UiLCJldmVudCIsInR5cGUiLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsImRlbGV0ZUluZGV4IiwiZ2V0UG9zaXRpb24iLCJ6IiwiX2dhbWVPdmVyIiwicG9zIiwieCIsImNvcHkiLCJ0byIsImVhc2luZyIsIm9uVXBkYXRlIiwicG9zaXRpb24iLCJ1bmlvbiIsImNhbGwiLCJmaW5zaENhbGxCYWNrIiwic3RhcnQiLCJkZWx0YVRpbWUiLCJ5IiwiZW1pdEV2ZW50Iiwic3RhdGUiLCJzZXRMaW5lYXJWZWxvY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0lBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFDQUMsTUFBQUEsb0IsT0FBQUEsb0I7QUFDQUMsTUFBQUEsa0IsT0FBQUEsa0I7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUzs7O2lGQUpxRTs7O0FBU3JFQyxNQUFBQSxPLEdBRUFOLFUsQ0FGQU0sTztBQUNBQyxNQUFBQSxRLEdBQ0FQLFUsQ0FEQU8sUTs7MkJBSVNDLFMsV0FEWkYsT0FBTyxD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ImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgQm94Q29sbGlkZXJDb21wb25lbnQsXHJcbiAgICBSaWdpZEJvZHlDb21wb25lbnQsXHJcbiAgICBWZWMzLFxyXG4gICAgdHdlZW5VdGlsLFxyXG4gICAgTW9kZWxDb21wb25lbnQsXHJcbiAgICBRdWF0XHJcbn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHtcclxuICAgIGNjY2xhc3MsXHJcbiAgICBwcm9wZXJ0eVxyXG59ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwicGxheWVyY29uXCIpXHJcbmV4cG9ydCBjbGFzcyBwbGF5ZXJjb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgX2FjdGlvbiA9IGZhbHNlO1xyXG4gICAgX21vdmVGaW5zaCA9IHRydWU7XHJcbiAgICBfcG9zID0gbmV3IFZlYzMoMCwgMC42LCAtNSk7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hbHJlYWR5U3RheSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChCb3hDb2xsaWRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJfQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gdGhpcy5fdXNlR3Jhdml0eSA9IHRoaXMucGxheWVyX0JvZHkuX3VzZUdyYXZpdHk7IC8v5L2/55So6YeN5YqbXHJcbiAgICAgICAgLy8gdGhpcy5faXNLaW5lbWF0aWMgPSB0aGlzLnBsYXllcl9Cb2R5Ll9pc0tpbmVtYXRpYzsgLy/kvb/nlKhcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGxheWVyJywgdGhpcy5ub2RlKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5wbGF5ZXJfY29sbGlkZXIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJfY29sbGlkZXIub24oJ29uQ29sbGlzaW9uRW50ZXInLCB0aGlzLm9uQ29sbGlzaW9uLCB0aGlzKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJfY29sbGlkZXIub24oJ29uQ29sbGlzaW9uU3RheScsIHRoaXMub25Db2xsaXNpb24sIHRoaXMpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllcl9jb2xsaWRlci5vbignb25Db2xsaXNpb25FeGl0JywgdGhpcy5vbkNvbGxpc2lvbiwgdGhpcyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5fZ3Jhdml0eSA9IDAuMDA4O1xyXG4gICAgICAgIHRoaXMuX3BvcyA9IG5ldyBWZWMzKDAsIDAuNiwgLTUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXcgVmVjMygwLCAwLjYsIC01KSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5faXNLaW5lbWF0aWMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pbml0Rmluc2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRGaW5zaCA9IHRydWU7XHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICAvL3RoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpLl9zaGFkb3dDYXN0aW5nTW9kZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLeeisOaSnicpO1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09ICdvbkNvbGxpc2lvblN0YXknKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5hbHJlYWR5U3RheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5U3RheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmF2aXR5ID0gMC4wMDg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ29uQ29sbGlzaW9uRXhpdCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS3nu5PmnZ/norDmkp4nKTtcclxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5U3RheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlTGVmdCgpIHtcclxuICAgICAgICBpZiAod2luZG93Ll9zdGF0ZV9tYWdyLmRlbGV0ZUluZGV4IDw9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnopIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuX21vdmVGaW5zaCB8fCB3aW5kb3cuX3N0YXRlX21hZ3IuX2dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fbW92ZUZpbnNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3ZlRmluc2ggPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuMilcclxuICAgICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgcG9zLnogLT0gMTtcclxuICAgICAgICBwb3MueCAtPSAxO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl9Cb2R5Ll91c2VHcmF2aXR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5faXNLaW5lbWF0aWMgPSBmYWxzZTtcclxuICAgICAgICB9LCAwLjE1KVxyXG4gICAgICAgIFZlYzMuY29weSh0aGlzLl9wb3MsIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0d2VlblV0aWwodGhpcy5fcG9zKVxyXG4gICAgICAgICAgICAudG8oMC4xLCBuZXcgVmVjMyhwb3MueCwgMC43LCBwb3MueiksIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbicsXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuX3BvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnVuaW9uKClcclxuICAgICAgICAgICAgLmNhbGwodGhpcy5maW5zaENhbGxCYWNrKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5fc3RhdGVfbWFnci5kZWxldGVJbmRleCA8PSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS56KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tb3ZlRmluc2ggfHwgd2luZG93Ll9zdGF0ZV9tYWdyLl9nYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX21vdmVGaW5zaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZUZpbnNoID0gdHJ1ZTtcclxuICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHBvcy56IC09IDE7XHJcbiAgICAgICAgcG9zLnggKz0gMTtcclxuICAgICAgICB0aGlzLl9hY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGxheWVyX0JvZHkuX3VzZUdyYXZpdHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllcl9Cb2R5Ll9pc0tpbmVtYXRpYyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5fdXNlR3Jhdml0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMC4xNSlcclxuICAgICAgICBWZWMzLmNvcHkodGhpcy5fcG9zLCB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdHdlZW5VdGlsKHRoaXMuX3BvcylcclxuICAgICAgICAgICAgLnRvKDAuMSwgbmV3IFZlYzMocG9zLngsIDAuNywgcG9zLnopLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW4nLFxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLl9wb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbnNoQ2FsbEJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5a6M5oiQ5Yqo5L2cJyk7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIC8vaWYgKHRoaXMuX2FjdGlvbikgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5fcG9zO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55IDw9IDAuNCAmJiAhd2luZG93Ll9zdGF0ZV9tYWdyLl9nYW1lT3ZlciAmJiB0aGlzLl9pbml0Rmluc2gpIHsgLy/muLjmiI/nu5PmnZ9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS1hYWFhLS0tJywgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnci5fZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuZW1pdEV2ZW50KHdpbmRvdy5fc3RhdGVfbWFnci5zdGF0ZS5fZ2FtZU92ZXIpO1xyXG4gICAgICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpLnNoYWRvd0Nhc3RpbmdNb2RlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6YG/5YWN5pyJ5pe25YCZ5LiN5Lya6Ieq5Yqo5o6J6JC9XHJcbiAgICAgICAgaWYgKHRoaXMuX21vdmVGaW5zaCAmJiB3aW5kb3cuX3N0YXRlX21hZ3IuZGVsZXRlSW5kZXggPD0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueisxICYmIHRoaXMuX2luaXRGaW5zaCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvcy55IC09IHRoaXMuX2dyYXZpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyYXZpdHkgKz0gMC4wMDI7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSA8IC0yKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSA9IC0yO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl9Cb2R5Ll91c2VHcmF2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyX0JvZHkuX2lzS2luZW1hdGljID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfQm9keS5zZXRMaW5lYXJWZWxvY2l0eShuZXcgVmVjMygwLCAwLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19