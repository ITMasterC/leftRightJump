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
            block.setPosition(this.lastBlock_x, 0, this.index);
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

            this._UI_Magr.addChildByName('overView');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvcm9vdE5vZGUuanMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlN5c3RlbUV2ZW50IiwiTGFiZWxDb21wb25lbnQiLCJwb29sZGF0YSIsIlVJbWFnciIsInN0YXRlbWFnciIsIm1lbnUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJyb290Tm9kZSIsInR5cGUiLCJjYyIsIlByZWZhYiIsIk5vZGUiLCJfZXhpc3RCbG9ja0FyciIsIkFycmF5IiwiX1VJX01hZ3IiLCJzdGFydExvYWRSZXMiLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsIk5vdGlmaWNhdGlvbiIsIkV2ZW50VGFyZ2V0Iiwib24iLCJzdGF0ZSIsIl9hZ2FpbkdhbWUiLCJpbml0IiwiX2dhbWVPdmVyIiwiZ2FtZU92ZXIiLCJsZW5ndGgiLCJub2RlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJpIiwibmFtZSIsIl9jYW1lcmEiLCJwb29sX2RhdGEiLCJsZWZ0Tm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25MZWZ0VG91Y2giLCJyaWdodE5vZGUiLCJvblJpZ2h0VG91Y2giLCJibG9jayIsInNoaWZ0IiwicHV0UGxhbmVOb2RlIiwiX3VwZGF0ZVRpbWUiLCJfZGVsZXRlQmxvY2tUaW1lIiwibGFzdEJsb2NrX3giLCJzY29yZUxhYmVsIiwic3RyaW5nIiwiaW5kZXgiLCJjdWJlUHJmYiIsImFkZEJsb2NrTm9kZSIsInBsYXllciIsImdldENvbXBvbmVudCIsIl9zY29yZSIsIk1hdGgiLCJmbG9vciIsImdldFBsYW5lTm9kZSIsImFkZENoaWxkIiwicHVzaCIsInBvc194IiwicmFuZG9tIiwic2V0UG9zaXRpb24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJfc3RhcnRHYW1lIiwidXBkYXRlU2NvcmUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImFkZENoaWxkQnlOYW1lIiwiZGVsdGFUaW1lIiwicGxheWVyX3BvcyIsImdl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Ozs7OztpQkFJRSxJOzs7Ozs7O2lCQUdDLEk7Ozs7Ozs7aUJBR0MsSTs7OztvQkF4Q0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgX2RlY29yYXRvcixcclxuICAgIENvbXBvbmVudCxcclxuICAgIHN5c3RlbUV2ZW50LFxyXG4gICAgTGFiZWwsXHJcbiAgICBTeXN0ZW1FdmVudCxcclxuICAgIExhYmVsQ29tcG9uZW50LFxyXG4gICAgSUNvbGxpc2lvbkV2ZW50XHJcbn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHtcclxuICAgIG1lbnUsXHJcbiAgICBjY2NsYXNzLFxyXG4gICAgcHJvcGVydHlcclxufSA9IF9kZWNvcmF0b3I7XHJcbmltcG9ydCB7XHJcbiAgICBwb29sZGF0YVxyXG59IGZyb20gXCIuL2RhdGFfY29uL3Bvb2xfZGF0YVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFVJbWFnclxyXG59IGZyb20gXCIuL21hbmFnZXIvVUlfbWFnclwiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhdGVtYWdyXHJcbn0gZnJvbSBcIi4vbWFuYWdlci9zdGF0ZV9tYWdyXCI7XHJcblxyXG5AY2NjbGFzcyhcInJvb3ROb2RlXCIpXHJcbmV4cG9ydCBjbGFzcyByb290Tm9kZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgfSkgY3ViZVByZmIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KSBwbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgfSkgbGVmdE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KSByaWdodE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBMYWJlbENvbXBvbmVudFxyXG4gICAgfSkgc2NvcmVMYWJlbCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tcm9vdE5vZGUnLCB0aGlzLm5vZGUucGFyZW50KTtcclxuICAgICAgICB0aGlzLl9leGlzdEJsb2NrQXJyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fVUlfTWFnciA9IG5ldyBVSW1hZ3IoKTtcclxuICAgICAgICB0aGlzLl9VSV9NYWdyLnN0YXJ0TG9hZFJlcygpO1xyXG4gICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnciA9IG5ldyBzdGF0ZW1hZ3IoKTtcclxuICAgICAgICB3aW5kb3cuTm90aWZpY2F0aW9uID0gbmV3IGNjLkV2ZW50VGFyZ2V0KClcclxuICAgICAgICB3aW5kb3cuTm90aWZpY2F0aW9uLm9uKHdpbmRvdy5fc3RhdGVfbWFnci5zdGF0ZS5fYWdhaW5HYW1lLCB0aGlzLmluaXQsIHRoaXMpOy8vXHJcbiAgICAgICAgd2luZG93Lk5vdGlmaWNhdGlvbi5vbih3aW5kb3cuX3N0YXRlX21hZ3Iuc3RhdGUuX2dhbWVPdmVyLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTsvL1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuW2ldLm5hbWUgPT0gXCJDYW1lcmFcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhID0gdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvb2xfZGF0YSA9IG5ldyBwb29sZGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnROb2RlLm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkxlZnRUb3VjaCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uUmlnaHRUb3VjaCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHdoaWxlKDEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9leGlzdEJsb2NrQXJyLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5fZXhpc3RCbG9ja0Fyci5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sX2RhdGEucHV0UGxhbmVOb2RlKGJsb2NrKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl9kZWxldGVCbG9ja1RpbWUgPSA2MDtcclxuICAgICAgICB0aGlzLmxhc3RCbG9ja194ID0gMDtcclxuICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IC01O1xyXG4gICAgICAgIHRoaXMucG9vbF9kYXRhLmluaXQodGhpcy5jdWJlUHJmYik7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDIwOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJsb2NrTm9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJwbGF5ZXJjb25cIikuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKCl7XHJcbiAgICAgICAgd2luZG93Ll9zdGF0ZV9tYWdyLl9zY29yZSArKztcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gd2luZG93Ll9zdGF0ZV9tYWdyLl9zY29yZTtcclxuICAgICAgICBpZih0aGlzLl9kZWxldGVCbG9ja1RpbWUgPiAyMCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlbGV0ZUJsb2NrVGltZSA9IDQ1IC0gTWF0aC5mbG9vcih3aW5kb3cuX3N0YXRlX21hZ3IuX3Njb3JlLzIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRCbG9ja05vZGUoKSB7XHJcbiAgICAgICAgaWYod2luZG93Ll9zdGF0ZV9tYWdyLl9nYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaW5kZXgtLTtcclxuICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLnBvb2xfZGF0YS5nZXRQbGFuZU5vZGUoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgIHRoaXMuX2V4aXN0QmxvY2tBcnIucHVzaChibG9jayk7XHJcbiAgICAgICAgdmFyIHBvc194ID0gTWF0aC5yYW5kb20oKSoxID4gMC41ID8gMSA6IC0xO1xyXG4gICAgICAgIHRoaXMubGFzdEJsb2NrX3ggPSB0aGlzLmxhc3RCbG9ja194ICsgcG9zX3g7XHJcbiAgICAgICAgYmxvY2suc2V0UG9zaXRpb24odGhpcy5sYXN0QmxvY2tfeCwgMCwgdGhpcy5pbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQmxvY2soKXtcclxuICAgICAgICBpZih0aGlzLl9leGlzdEJsb2NrQXJyLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLl9leGlzdEJsb2NrQXJyLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGJsb2NrLmdldENvbXBvbmVudCgncGxhbmVOb2RlJykuZGVsZXRlKHRoaXMucG9vbF9kYXRhKTtcclxuICAgICAgICAgICAgLy90aGlzLnBvb2xfZGF0YS5wdXRQbGFuZU5vZGUoYmxvY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxlZnRUb3VjaChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PeeCueWHu+S6i+S7tiAgbGVmdCcpO1xyXG4gICAgICAgIGlmKCF3aW5kb3cuX3N0YXRlX21hZ3IuX3N0YXJ0R2FtZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnci5fc3RhcnRHYW1lID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ3BsYXllcmNvbicpLm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRCbG9ja05vZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJpZ2h0VG91Y2goZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT3ngrnlh7vkuovku7YgIHJpZ2h0Jyk7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5fc3RhdGVfbWFnci5fc3RhcnRHYW1lKXtcclxuICAgICAgICAgICAgd2luZG93Ll9zdGF0ZV9tYWdyLl9zdGFydEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgncGxheWVyY29uJykubW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRCbG9ja05vZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3Zlcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS3mlLbliLDmuLjmiI/nu5PmnZ/mtojmga8nKTtcclxuICAgICAgICB0aGlzLl9VSV9NYWdyLmFkZENoaWxkQnlOYW1lKCdvdmVyVmlldycpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXJfcG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy92YXIgY2FtZXJhX3BvcyA9IHRoaXMuX2NhbWVyYS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAvLyB2YXIgcG9zX3kgPSAod2luZG93Ll9zdGF0ZV9tYWdyLmRlbGV0ZUluZGV4IC0gcGxheWVyX3Bvcy56KS8yICsgMztcclxuICAgICAgICAgICAgLy8gaWYocG9zX3kgPiA4KXBvc195PSA4O1xyXG4gICAgICAgICAgICAvLyBpZihwb3NfeSA8IDMpcG9zX3k9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYS5zZXRQb3NpdGlvbihjYy52MyhwbGF5ZXJfcG9zLngsIDMscGxheWVyX3Bvcy56KzgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5fc3RhdGVfbWFnci5fc3RhcnRHYW1lICYmICF3aW5kb3cuX3N0YXRlX21hZ3IuX2dhbWVPdmVyKXtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGltZSsrO1xyXG4gICAgICAgICAgICBpZih0aGlzLl91cGRhdGVUaW1lID49IHRoaXMuX2RlbGV0ZUJsb2NrVGltZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==