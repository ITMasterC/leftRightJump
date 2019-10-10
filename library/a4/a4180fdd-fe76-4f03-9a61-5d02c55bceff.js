"use strict";

System.register(["cc", "./data_con/pool_data.js", "./manager/UI_magr.js", "./manager/state_magr.js"], function (_export, _context) {
  "use strict";

  var _decorator, Component, SystemEvent, LabelComponent, pooldata, UImagr, statemagr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, menu, ccclass, property, rootNode;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SystemEvent = _cc.SystemEvent;
      LabelComponent = _cc.LabelComponent;
    }, function (_data_conPool_dataJs) {
      pooldata = _data_conPool_dataJs.pooldata;
    }, function (_managerUI_magrJs) {
      UImagr = _managerUI_magrJs.UImagr;
    }, function (_managerState_magrJs) {
      statemagr = _managerState_magrJs.statemagr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "a4180/d/nZPA5phXQLFW87/", "rootNode"); // begin rootNode


      menu = _decorator.menu;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("rootNode", rootNode = (_dec = ccclass("rootNode"), _dec2 = property({
        type: cc.Prefab
      }), _dec3 = property({
        type: cc.Node
      }), _dec4 = property({
        type: cc.Node
      }), _dec5 = property({
        type: cc.Node
      }), _dec6 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(rootNode, _Component);

        function rootNode() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, rootNode);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(rootNode)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "cubePrfb", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "player", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "leftNode", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rightNode", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "scoreLabel", _descriptor5, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(rootNode, [{
          key: "start",
          value: function start() {
            //console.log('---------------------rootNode', this.node.parent);
            this._existBlockArr = new Array();
            this._UI_Magr = new UImagr();

            this._UI_Magr.startLoadRes();

            window._state_magr = new statemagr();
            window.Notification = new cc.EventTarget();
            window.Notification.on(window._state_magr.state._againGame, this.init, this); //

            window.Notification.on(window._state_magr.state._gameOver, this.gameOver, this); //

            var length = this.node.parent.children.length;

            for (var i = 0; i < length; i++) {
              if (this.node.parent.children[i].name == "Camera") {
                this._camera = this.node.parent.children[i];
              }
            }

            this.pool_data = new pooldata();
            this.init();
            this.leftNode.on(SystemEvent.EventType.TOUCH_START, this.onLeftTouch, this);
            this.rightNode.on(SystemEvent.EventType.TOUCH_START, this.onRightTouch, this);
          }
        }, {
          key: "init",
          value: function init() {
            while (1) {
              if (this._existBlockArr.length > 0) {
                var block = this._existBlockArr.shift();

                this.pool_data.putPlaneNode(block);
              } else {
                break;
              }
            }

            this._showOverView = false;
            this._updateTime = 0;
            this._deleteBlockTime = 60;
            this.lastBlock_x = 0;

            window._state_magr.init();

            this.scoreLabel.string = '0';
            this.index = -5;
            this.pool_data.init(this.cubePrfb);

            for (var i = 0; i < 20; i++) {
              this.addBlockNode();
            }

            this.player.getComponent("playercon").init();
          }
        }, {
          key: "updateScore",
          value: function updateScore() {
            window._state_magr._score++;
            this.scoreLabel.string = window._state_magr._score;

            if (this._deleteBlockTime > 20) {
              this._deleteBlockTime = 45 - Math.floor(window._state_magr._score / 2);
            }
          }
        }, {
          key: "addBlockNode",
          value: function addBlockNode() {
            if (window._state_magr._gameOver) return;
            this.index--;
            var block = this.pool_data.getPlaneNode();
            this.node.addChild(block);

            this._existBlockArr.push(block);

            var pos_x = Math.random() * 1 > 0.5 ? 1 : -1;
            this.lastBlock_x = this.lastBlock_x + pos_x;
            block.setPosition(this.lastBlock_x, -0.5, this.index);
          }
        }, {
          key: "deleteBlock",
          value: function deleteBlock() {
            if (this._existBlockArr.length > 0) {
              var block = this._existBlockArr.shift();

              block.getComponent('planeNode')["delete"](this.pool_data); //this.pool_data.putPlaneNode(block);
            }
          }
        }, {
          key: "onLeftTouch",
          value: function onLeftTouch(event) {
            console.log('=======================点击事件  left');

            if (!window._state_magr._startGame) {
              window._state_magr._startGame = true;
            } else {
              this.updateScore();
            }

            this.player.getComponent('playercon').moveLeft();
            this.addBlockNode();
          }
        }, {
          key: "onRightTouch",
          value: function onRightTouch(event) {
            console.log('=======================点击事件  right');

            if (!window._state_magr._startGame) {
              window._state_magr._startGame = true;
            } else {
              this.updateScore();
            }

            this.player.getComponent('playercon').moveRight();
            this.addBlockNode();
          }
        }, {
          key: "gameOver",
          value: function gameOver() {
            console.log('------------------收到游戏结束消息');

            if (!this._showOverView) {
              this._showOverView = true;

              this._UI_Magr.addChildByName('overView');
            }
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this._camera) {
              var player_pos = this.player.getPosition(); //var camera_pos = this._camera.getPosition();
              // var pos_y = (window._state_magr.deleteIndex - player_pos.z)/2 + 3;
              // if(pos_y > 8)pos_y= 8;
              // if(pos_y < 3)pos_y= 3;

              this._camera.setPosition(cc.v3(player_pos.x, 3, player_pos.z + 8));
            }

            if (window._state_magr._startGame && !window._state_magr._gameOver) {
              this._updateTime++;

              if (this._updateTime >= this._deleteBlockTime) {
                this._updateTime = 0;
                this.deleteBlock();
              }
            }
          }
        }]);
        return rootNode;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "leftNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rightNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end rootNode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvcm9vdE5vZGUuanMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlN5c3RlbUV2ZW50IiwiTGFiZWxDb21wb25lbnQiLCJwb29sZGF0YSIsIlVJbWFnciIsInN0YXRlbWFnciIsIm1lbnUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJyb290Tm9kZSIsInR5cGUiLCJjYyIsIlByZWZhYiIsIk5vZGUiLCJfZXhpc3RCbG9ja0FyciIsIkFycmF5IiwiX1VJX01hZ3IiLCJzdGFydExvYWRSZXMiLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsIk5vdGlmaWNhdGlvbiIsIkV2ZW50VGFyZ2V0Iiwib24iLCJzdGF0ZSIsIl9hZ2FpbkdhbWUiLCJpbml0IiwiX2dhbWVPdmVyIiwiZ2FtZU92ZXIiLCJsZW5ndGgiLCJub2RlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJpIiwibmFtZSIsIl9jYW1lcmEiLCJwb29sX2RhdGEiLCJsZWZ0Tm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25MZWZ0VG91Y2giLCJyaWdodE5vZGUiLCJvblJpZ2h0VG91Y2giLCJibG9jayIsInNoaWZ0IiwicHV0UGxhbmVOb2RlIiwiX3Nob3dPdmVyVmlldyIsIl91cGRhdGVUaW1lIiwiX2RlbGV0ZUJsb2NrVGltZSIsImxhc3RCbG9ja194Iiwic2NvcmVMYWJlbCIsInN0cmluZyIsImluZGV4IiwiY3ViZVByZmIiLCJhZGRCbG9ja05vZGUiLCJwbGF5ZXIiLCJnZXRDb21wb25lbnQiLCJfc2NvcmUiLCJNYXRoIiwiZmxvb3IiLCJnZXRQbGFuZU5vZGUiLCJhZGRDaGlsZCIsInB1c2giLCJwb3NfeCIsInJhbmRvbSIsInNldFBvc2l0aW9uIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiX3N0YXJ0R2FtZSIsInVwZGF0ZVNjb3JlIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJhZGRDaGlsZEJ5TmFtZSIsImRlbHRhVGltZSIs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QUFLQyxnQkFBNUIsRUFBNkM7QUFDekMscUJBQUtELFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxxQkFBS2lDLFdBQUw7QUFDSDtBQUNKO0FBQ0o7OztRQTFJeUIvRSxTOzs7OztpQkFHWixJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBSUUsSTs7Ozs7OztpQkFHQyxJOzs7Ozs7O2lCQUdDLEk7Ozs7b0JBeENGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIF9kZWNvcmF0b3IsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBzeXN0ZW1FdmVudCxcclxuICAgIExhYmVsLFxyXG4gICAgU3lzdGVtRXZlbnQsXHJcbiAgICBMYWJlbENvbXBvbmVudCxcclxuICAgIElDb2xsaXNpb25FdmVudFxyXG59IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7XHJcbiAgICBtZW51LFxyXG4gICAgY2NjbGFzcyxcclxuICAgIHByb3BlcnR5XHJcbn0gPSBfZGVjb3JhdG9yO1xyXG5pbXBvcnQge1xyXG4gICAgcG9vbGRhdGFcclxufSBmcm9tIFwiLi9kYXRhX2Nvbi9wb29sX2RhdGFcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBVSW1hZ3JcclxufSBmcm9tIFwiLi9tYW5hZ2VyL1VJX21hZ3JcIjtcclxuaW1wb3J0IHtcclxuICAgIHN0YXRlbWFnclxyXG59IGZyb20gXCIuL21hbmFnZXIvc3RhdGVfbWFnclwiO1xyXG5cclxuQGNjY2xhc3MoXCJyb290Tm9kZVwiKVxyXG5leHBvcnQgY2xhc3Mgcm9vdE5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgIH0pIGN1YmVQcmZiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgfSkgcGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgIH0pIGxlZnROb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgfSkgcmlnaHROb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogTGFiZWxDb21wb25lbnRcclxuICAgIH0pIHNjb3JlTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLXJvb3ROb2RlJywgdGhpcy5ub2RlLnBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5fZXhpc3RCbG9ja0FyciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuX1VJX01hZ3IgPSBuZXcgVUltYWdyKCk7XHJcbiAgICAgICAgdGhpcy5fVUlfTWFnci5zdGFydExvYWRSZXMoKTtcclxuICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IgPSBuZXcgc3RhdGVtYWdyKCk7XHJcbiAgICAgICAgd2luZG93Lk5vdGlmaWNhdGlvbiA9IG5ldyBjYy5FdmVudFRhcmdldCgpXHJcbiAgICAgICAgd2luZG93Lk5vdGlmaWNhdGlvbi5vbih3aW5kb3cuX3N0YXRlX21hZ3Iuc3RhdGUuX2FnYWluR2FtZSwgdGhpcy5pbml0LCB0aGlzKTsvL1xyXG4gICAgICAgIHdpbmRvdy5Ob3RpZmljYXRpb24ub24od2luZG93Ll9zdGF0ZV9tYWdyLnN0YXRlLl9nYW1lT3ZlciwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7Ly9cclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbltpXS5uYW1lID09IFwiQ2FtZXJhXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYSA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb29sX2RhdGEgPSBuZXcgcG9vbGRhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0Tm9kZS5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25MZWZ0VG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmlnaHROb2RlLm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblJpZ2h0VG91Y2gsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB3aGlsZSgxKXtcclxuICAgICAgICAgICAgaWYodGhpcy5fZXhpc3RCbG9ja0Fyci5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuX2V4aXN0QmxvY2tBcnIuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9vbF9kYXRhLnB1dFBsYW5lTm9kZShibG9jayk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2hvd092ZXJWaWV3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQmxvY2tUaW1lID0gNjA7XHJcbiAgICAgICAgdGhpcy5sYXN0QmxvY2tfeCA9IDA7XHJcbiAgICAgICAgd2luZG93Ll9zdGF0ZV9tYWdyLmluaXQoKTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gJzAnO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAtNTtcclxuICAgICAgICB0aGlzLnBvb2xfZGF0YS5pbml0KHRoaXMuY3ViZVByZmIpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5hZGRCbG9ja05vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwicGxheWVyY29uXCIpLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY29yZSgpe1xyXG4gICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnci5fc2NvcmUgKys7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHdpbmRvdy5fc3RhdGVfbWFnci5fc2NvcmU7XHJcbiAgICAgICAgaWYodGhpcy5fZGVsZXRlQmxvY2tUaW1lID4gMjApe1xyXG4gICAgICAgICAgICB0aGlzLl9kZWxldGVCbG9ja1RpbWUgPSA0NSAtIE1hdGguZmxvb3Iod2luZG93Ll9zdGF0ZV9tYWdyLl9zY29yZS8yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmxvY2tOb2RlKCkge1xyXG4gICAgICAgIGlmKHdpbmRvdy5fc3RhdGVfbWFnci5fZ2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmluZGV4LS07XHJcbiAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5wb29sX2RhdGEuZ2V0UGxhbmVOb2RlKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJsb2NrKTtcclxuICAgICAgICB0aGlzLl9leGlzdEJsb2NrQXJyLnB1c2goYmxvY2spO1xyXG4gICAgICAgIHZhciBwb3NfeCA9IE1hdGgucmFuZG9tKCkqMSA+IDAuNSA/IDEgOiAtMTtcclxuICAgICAgICB0aGlzLmxhc3RCbG9ja194ID0gdGhpcy5sYXN0QmxvY2tfeCArIHBvc194O1xyXG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKHRoaXMubGFzdEJsb2NrX3gsIC0wLjUsIHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUJsb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5fZXhpc3RCbG9ja0Fyci5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5fZXhpc3RCbG9ja0Fyci5zaGlmdCgpO1xyXG4gICAgICAgICAgICBibG9jay5nZXRDb21wb25lbnQoJ3BsYW5lTm9kZScpLmRlbGV0ZSh0aGlzLnBvb2xfZGF0YSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5wb29sX2RhdGEucHV0UGxhbmVOb2RlKGJsb2NrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25MZWZ0VG91Y2goZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT3ngrnlh7vkuovku7YgIGxlZnQnKTtcclxuICAgICAgICBpZighd2luZG93Ll9zdGF0ZV9tYWdyLl9zdGFydEdhbWUpe1xyXG4gICAgICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuX3N0YXJ0R2FtZSA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXJjb24nKS5tb3ZlTGVmdCgpO1xyXG4gICAgICAgIHRoaXMuYWRkQmxvY2tOb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SaWdodFRvdWNoKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT0954K55Ye75LqL5Lu2ICByaWdodCcpO1xyXG4gICAgICAgIGlmKCF3aW5kb3cuX3N0YXRlX21hZ3IuX3N0YXJ0R2FtZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnci5fc3RhcnRHYW1lID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ3BsYXllcmNvbicpLm1vdmVSaWdodCgpO1xyXG4gICAgICAgIHRoaXMuYWRkQmxvY2tOb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0t5pS25Yiw5ri45oiP57uT5p2f5raI5oGvJyk7XHJcbiAgICAgICAgaWYoIXRoaXMuX3Nob3dPdmVyVmlldyl7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dPdmVyVmlldyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJX01hZ3IuYWRkQ2hpbGRCeU5hbWUoJ292ZXJWaWV3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXJfcG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy92YXIgY2FtZXJhX3BvcyA9IHRoaXMuX2NhbWVyYS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAvLyB2YXIgcG9zX3kgPSAod2luZG93Ll9zdGF0ZV9tYWdyLmRlbGV0ZUluZGV4IC0gcGxheWVyX3Bvcy56KS8yICsgMztcclxuICAgICAgICAgICAgLy8gaWYocG9zX3kgPiA4KXBvc195PSA4O1xyXG4gICAgICAgICAgICAvLyBpZihwb3NfeSA8IDMpcG9zX3k9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYS5zZXRQb3NpdGlvbihjYy52MyhwbGF5ZXJfcG9zLngsIDMscGxheWVyX3Bvcy56KzgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5fc3RhdGVfbWFnci5fc3RhcnRHYW1lICYmICF3aW5kb3cuX3N0YXRlX21hZ3IuX2dhbWVPdmVyKXtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGltZSsrO1xyXG4gICAgICAgICAgICBpZih0aGlzLl91cGRhdGVUaW1lID49IHRoaXMuX2RlbGV0ZUJsb2NrVGltZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==