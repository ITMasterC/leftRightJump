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
            this.mid_x = 360;

            for (var i = 0; i < length; i++) {
              if (this.node.parent.children[i].name == "Camera") {
                this._camera = this.node.parent.children[i];
              } else if (this.node.parent.children[i].name == "UINode") {
                this._UINode = this.node.parent.children[i];
                this.mid_x = this._UINode.width / 2; //this.scoreLabel = this._UINode.getChildByName("scoreLabel");
              }
            }

            this.pool_data = new pooldata();
            this.init();
            this.leftNode.on(SystemEvent.EventType.MOUSE_DOWN, this.onLeftTouch, this);
            this.rightNode.on(SystemEvent.EventType.MOUSE_DOWN, this.onRightTouch, this);
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

              this._camera.setPosition(cc.v3(player_pos.x, 3, player_pos.z + 8));
            }

            if (window._state_magr._startGame && !window._state_magr._gameOver) {
              this._updateTime++;

              if (this._updateTime >= 30) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvcm9vdE5vZGUuanMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlN5c3RlbUV2ZW50IiwiTGFiZWxDb21wb25lbnQiLCJwb29sZGF0YSIsIlVJbWFnciIsInN0YXRlbWFnciIsIm1lbnUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJyb290Tm9kZSIsInR5cGUiLCJjYyIsIlByZWZhYiIsIk5vZGUiLCJfZXhpc3RCbG9ja0FyciIsIkFycmF5IiwiX1VJX01hZ3IiLCJzdGFydExvYWRSZXMiLCJ3aW5kb3ciLCJfc3RhdGVfbWFnciIsIk5vdGlmaWNhdGlvbiIsIkV2ZW50VGFyZ2V0Iiwib24iLCJzdGF0ZSIsIl9hZ2FpbkdhbWUiLCJpbml0IiwiX2dhbWVPdmVyIiwiZ2FtZU92ZXIiLCJsZW5ndGgiLCJub2RlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJtaWRfeCIsImkiLCJuYW1lIiwiX2NhbWVyYSIsIl9VSU5vZGUiLCJ3aWR0aCIsInBvb2xfZGF0YSIsImxlZnROb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsIm9uTGVmdFRvdWNoIiwicmlnaHROb2RlIiwib25SaWdodFRvdWNoIiwiYmxvY2siLCJzaGlmdCIsInB1dFBsYW5lTm9kZSIsIl91cGRhdGVUaW1lIiwibGFzdEJsb2NrX3giLCJzY29yZUxhYmVsIiwic3RyaW5nIiwiaW5kZXgiLCJjdWJlUHJmYiIsImFkZEJsb2NrTm9kZSIsInBsYXllciIsImdldENvbXBvbmVudCIsIl9zY29yZSIsImdldFBsYW5lTm9kZSIsImFkZENoaWxkIiwicHVzaCIsInBvc194IiwiTWF0aCIsInJhbmRvbSIsInNldFBvc2l0aW9uIiwiZXZlbnQiLCJfc3RhcnRHYW1lIiwidXBkYXRlU2NvcmUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImNvbnNvbGUiLCJsb2ciLCJhZGRDaGlsZEJ5TmFtZSIsImRlbHRhVGltZSIsInBsYXllcl9wb3MiLCJnZXRQb3NpdGlvbiIsInYzIiwieCIsInoiLCJkZWxldGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDSUEsTUFBQUEsVSxPQUFBQSxVO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUztBQUdBQyxNQUFBQSxXLE9BQUFBLFc7QUFDQUMsTUFBQUEsYyxPQUFBQSxjOztBQVNBQyxNQUFBQSxRLHdCQUFBQSxROztBQUlBQyxNQUFBQSxNLHFCQUFBQSxNOztBQUdBQyxNQUFBQSxTLHdCQUFBQSxTOzs7K0VBcEJxRTs7O0FBUXJFQyxNQUFBQSxJLEdBR0FQLFUsQ0FIQU8sSTtBQUNBQyxNQUFBQSxPLEdBRUFSLFUsQ0FGQVEsTztBQUNBQyxNQUFBQSxRLEdBQ0FULFUsQ0FEQVMsUTs7MEJBY1NDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSSxFQUFFQyxFQUFFLENBQUNDO0FBREgsT0FBRCxDLFVBR1JKLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJLEVBQUVDLEVBQUUsQ0FBQ0U7QUFESCxPQUFELEMsVUFJUkwsUUFBUSxDQUFDO0FBQ05FLFFBQUFBLElBQUksRUFBRUMsRUFBRSxDQUFDRTtBQURILE9BQUQsQyxVQUdSTCxRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSSxFQUFFQyxFQUFFLENBQUNFO0FBREgsT0FBRCxDLFVBR1JMLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJLEVBQUVSO0FBREEsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSUQ7QUFDSjtBQUNBLGlCQUFLWSxjQUFMLEdBQXNCLElBQUlDLEtBQUosRUFBdEI7QUFDQSxpQkFBS0MsUUFBTCxHQUFnQixJQUFJWixNQUFKLEVBQWhCOztBQUNBLGlCQUFLWSxRQUFMLENBQWNDLFlBQWQ7O0FBQ0FDLFlBQUFBLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixJQUFJZCxTQUFKLEVBQXJCO0FBQ0FhLFlBQUFBLE1BQU0sQ0FBQ0UsWUFBUCxHQUFzQixJQUFJVCxFQUFFLENBQUNVLFdBQVAsRUFBdEI7QUFDQUgsWUFBQUEsTUFBTSxDQUFDRSxZQUFQLENBQW9CRSxFQUFwQixDQUF1QkosTUFBTSxDQUFDQyxXQUFQLENBQW1CSSxLQUFuQixDQUF5QkMsVUFBaEQsRUFBNEQsS0FBS0MsSUFBakUsRUFBdUUsSUFBdkUsRUFQSSxDQU95RTs7QUFDN0VQLFlBQUFBLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQkUsRUFBcEIsQ0FBdUJKLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQkksS0FBbkIsQ0FBeUJHLFNBQWhELEVBQTJELEtBQUtDLFFBQWhFLEVBQTBFLElBQTFFLEVBUkksQ0FRNEU7O0FBQ2hGLGdCQUFJQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxRQUFqQixDQUEwQkgsTUFBdkM7QUFDQSxpQkFBS0ksS0FBTCxHQUFhLEdBQWI7O0FBQ0EsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsTUFBcEIsRUFBNEJLLENBQUMsRUFBN0IsRUFBaUM7QUFDN0Isa0JBQUksS0FBS0osSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxRQUFqQixDQUEwQkUsQ0FBMUIsRUFBNkJDLElBQTdCLElBQXFDLFFBQXpDLEVBQW1EO0FBQy9DLHFCQUFLQyxPQUFMLEdBQWUsS0FBS04sSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxRQUFqQixDQUEwQkUsQ0FBMUIsQ0FBZjtBQUNILGVBRkQsTUFFTyxJQUFJLEtBQUtKLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsUUFBakIsQ0FBMEJFLENBQTFCLEVBQTZCQyxJQUE3QixJQUFxQyxRQUF6QyxFQUFtRDtBQUN0RCxxQkFBS0UsT0FBTCxHQUFlLEtBQUtQLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsUUFBakIsQ0FBMEJFLENBQTFCLENBQWY7QUFDQSxxQkFBS0QsS0FBTCxHQUFhLEtBQUtJLE9BQUwsQ0FBYUMsS0FBYixHQUFxQixDQUFsQyxDQUZzRCxDQUd0RDtBQUNIO0FBQ0o7O0FBQ0QsaUJBQUtDLFNBQUwsR0FBaUIsSUFBSW5DLFFBQUosRUFBakI7QUFDQSxpQkFBS3NCLElBQUw7QUFFQSxpQkFBS2MsUUFBTCxDQUFjakIsRUFBZCxDQUFpQnJCLFdBQVcsQ0FBQ3VDLFNBQVosQ0FBc0JDLFVBQXZDLEVBQW1ELEtBQUtDLFdBQXhELEVBQXFFLElBQXJFO0FBQ0EsaUJBQUtDLFNBQUwsQ0FBZXJCLEVBQWYsQ0FBa0JyQixXQUFXLENBQUN1QyxTQUFaLENBQXNCQyxVQUF4QyxFQUFvRCxLQUFLRyxZQUF6RCxFQUF1RSxJQUF2RTtBQUNIOzs7aUNBRUs7QUFDRixtQkFBTSxDQUFOLEVBQVE7QUFDSixrQkFBRyxLQUFLOUIsY0FBTCxDQUFvQmMsTUFBcEIsR0FBNkIsQ0FBaEMsRUFBa0M7QUFDOUIsb0JBQUlpQixLQUFLLEdBQUcsS0FBSy9CLGNBQUwsQ0FBb0JnQyxLQUFwQixFQUFaOztBQUNBLHFCQUFLUixTQUFMLENBQWVTLFlBQWYsQ0FBNEJGLEtBQTVCO0FBQ0gsZUFIRCxNQUdLO0FBQ0Q7QUFDSDtBQUNKOztBQUNELGlCQUFLRyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsaUJBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7O0FBQ0EvQixZQUFBQSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJNLElBQW5COztBQUNBLGlCQUFLeUIsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUIsR0FBekI7QUFDQSxpQkFBS0MsS0FBTCxHQUFhLENBQUMsQ0FBZDtBQUNBLGlCQUFLZCxTQUFMLENBQWViLElBQWYsQ0FBb0IsS0FBSzRCLFFBQXpCOztBQUNBLGlCQUFJLElBQUlwQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsRUFBbkIsRUFBdUJBLENBQUMsRUFBeEIsRUFBMkI7QUFDdkIsbUJBQUtxQixZQUFMO0FBQ0g7O0FBQ0QsaUJBQUtDLE1BQUwsQ0FBWUMsWUFBWixDQUF5QixXQUF6QixFQUFzQy9CLElBQXRDO0FBQ0g7Ozt3Q0FFWTtBQUNUUCxZQUFBQSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJzQyxNQUFuQjtBQUNBLGlCQUFLUCxVQUFMLENBQWdCQyxNQUFoQixHQUF5QmpDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQnNDLE1BQTVDO0FBQ0g7Ozt5Q0FFYztBQUNYLGdCQUFHdkMsTUFBTSxDQUFDQyxXQUFQLENBQW1CTyxTQUF0QixFQUFpQztBQUNqQyxpQkFBSzBCLEtBQUw7QUFDQSxnQkFBSVAsS0FBSyxHQUFHLEtBQUtQLFNBQUwsQ0FBZW9CLFlBQWYsRUFBWjtBQUNBLGlCQUFLN0IsSUFBTCxDQUFVOEIsUUFBVixDQUFtQmQsS0FBbkI7O0FBQ0EsaUJBQUsvQixjQUFMLENBQW9COEMsSUFBcEIsQ0FBeUJmLEtBQXpCOztBQUNBLGdCQUFJZ0IsS0FBSyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBYyxDQUFkLEdBQWtCLEdBQWxCLEdBQXdCLENBQXhCLEdBQTRCLENBQUMsQ0FBekM7QUFDQSxpQkFBS2QsV0FBTCxHQUFtQixLQUFLQSxXQUFMLEdBQW1CWSxLQUF0QztBQUNBaEIsWUFBQUEsS0FBSyxDQUFDbUIsV0FBTixDQUFrQixLQUFLZixXQUF2QixFQUFvQyxDQUFwQyxFQUF1QyxLQUFLRyxLQUE1QztBQUNIOzs7d0NBRVk7QUFDVCxnQkFBRyxLQUFLdEMsY0FBTCxDQUFvQmMsTUFBcEIsR0FBNkIsQ0FBaEMsRUFBa0M7QUFDOUIsa0JBQUlpQixLQUFLLEdBQUcsS0FBSy9CLGNBQUwsQ0FBb0JnQyxLQUFwQixFQUFaOztBQUNBRCxjQUFBQSxLQUFLLENBQUNXLFlBQU4sQ0FBbUIsV0FBbkIsWUFBdUMsS0FBS2xCLFNBQTVDLEVBRjhCLENBRzlCO0FBQ0g7QUFDSjs7O3NDQUVXMkIsSyxFQUFPO0FBQ2YsZ0JBQUcsQ0FBQy9DLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQitDLFVBQXZCLEVBQWtDO0FBQzlCaEQsY0FBQUEsTUFBTSxDQUFDQyxXQUFQLENBQW1CK0MsVUFBbkIsR0FBZ0MsSUFBaEM7QUFDSCxhQUZELE1BRUs7QUFDRCxtQkFBS0MsV0FBTDtBQUNIOztBQUNELGlCQUFLWixNQUFMLENBQVlDLFlBQVosQ0FBeUIsV0FBekIsRUFBc0NZLFFBQXRDO0FBQ0EsaUJBQUtkLFlBQUw7QUFDSDs7O3VDQUVZVyxLLEVBQU87QUFDaEIsZ0JBQUcsQ0FBQy9DLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQitDLFVBQXZCLEVBQWtDO0FBQzlCaEQsY0FBQUEsTUFBTSxDQUFDQyxXQUFQLENBQW1CK0MsVUFBbkIsR0FBZ0MsSUFBaEM7QUFDSCxhQUZELE1BRUs7QUFDRCxtQkFBS0MsV0FBTDtBQUNIOztBQUNELGlCQUFLWixNQUFMLENBQVlDLFlBQVosQ0FBeUIsV0FBekIsRUFBc0NhLFNBQXRDO0FBQ0EsaUJBQUtmLFlBQUw7QUFDSDs7O3FDQUVTO0FBQ05nQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjs7QUFDQSxpQkFBS3ZELFFBQUwsQ0FBY3dELGNBQWQsQ0FBNkIsVUFBN0I7QUFDSDs7O2lDQUVNQyxTLEVBQVc7QUFDZCxnQkFBSSxLQUFLdEMsT0FBVCxFQUFrQjtBQUNkLGtCQUFJdUMsVUFBVSxHQUFHLEtBQUtuQixNQUFMLENBQVlvQixXQUFaLEVBQWpCLENBRGMsQ0FFZDs7QUFDQSxtQkFBS3hDLE9BQUwsQ0FBYTZCLFdBQWIsQ0FBeUJyRCxFQUFFLENBQUNpRSxFQUFILENBQU1GLFVBQVUsQ0FBQ0csQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJILFVBQVUsQ0FBQ0ksQ0FBWCxHQUFlLENBQXRDLENBQXpCO0FBQ0g7O0FBRUQsZ0JBQUc1RCxNQUFNLENBQUNDLFdBQVAsQ0FBbUIrQyxVQUFuQixJQUFpQyxDQUFDaEQsTUFBTSxDQUFDQyxXQUFQLENBQW1CTyxTQUF4RCxFQUFrRTtBQUM5RCxtQkFBS3NCLFdBQUw7O0FBQ0Esa0JBQUcsS0FBS0EsV0FBTCxJQUFvQixFQUF2QixFQUEwQjtBQUN0QixxQkFBS0EsV0FBTCxHQUFtQixDQUFuQjtBQUNBLHFCQUFLK0IsV0FBTDtBQUNIO0FBQ0o7QUFDSjs7O1FBakl5Qi9FLFM7Ozs7O2lCQUdaLEk7Ozs7Ozs7aUJBR0YsSTs7Ozs7OztpQkFJRSxJOzs7Ozs7O2lCQUdDLEk7Ozs7Ozs7aUJBR0MsSTs7OztvQkF4Q0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgX2RlY29yYXRvcixcclxuICAgIENvbXBvbmVudCxcclxuICAgIHN5c3RlbUV2ZW50LFxyXG4gICAgTGFiZWwsXHJcbiAgICBTeXN0ZW1FdmVudCxcclxuICAgIExhYmVsQ29tcG9uZW50LFxyXG4gICAgSUNvbGxpc2lvbkV2ZW50XHJcbn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHtcclxuICAgIG1lbnUsXHJcbiAgICBjY2NsYXNzLFxyXG4gICAgcHJvcGVydHlcclxufSA9IF9kZWNvcmF0b3I7XHJcbmltcG9ydCB7XHJcbiAgICBwb29sZGF0YVxyXG59IGZyb20gXCIuL2RhdGFfY29uL3Bvb2xfZGF0YVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFVJbWFnclxyXG59IGZyb20gXCIuL21hbmFnZXIvVUlfbWFnclwiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhdGVtYWdyXHJcbn0gZnJvbSBcIi4vbWFuYWdlci9zdGF0ZV9tYWdyXCI7XHJcblxyXG5AY2NjbGFzcyhcInJvb3ROb2RlXCIpXHJcbmV4cG9ydCBjbGFzcyByb290Tm9kZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgfSkgY3ViZVByZmIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KSBwbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgfSkgbGVmdE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KSByaWdodE5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBMYWJlbENvbXBvbmVudFxyXG4gICAgfSkgc2NvcmVMYWJlbCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tcm9vdE5vZGUnLCB0aGlzLm5vZGUucGFyZW50KTtcclxuICAgICAgICB0aGlzLl9leGlzdEJsb2NrQXJyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fVUlfTWFnciA9IG5ldyBVSW1hZ3IoKTtcclxuICAgICAgICB0aGlzLl9VSV9NYWdyLnN0YXJ0TG9hZFJlcygpO1xyXG4gICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnciA9IG5ldyBzdGF0ZW1hZ3IoKTtcclxuICAgICAgICB3aW5kb3cuTm90aWZpY2F0aW9uID0gbmV3IGNjLkV2ZW50VGFyZ2V0KClcclxuICAgICAgICB3aW5kb3cuTm90aWZpY2F0aW9uLm9uKHdpbmRvdy5fc3RhdGVfbWFnci5zdGF0ZS5fYWdhaW5HYW1lLCB0aGlzLmluaXQsIHRoaXMpOy8vXHJcbiAgICAgICAgd2luZG93Lk5vdGlmaWNhdGlvbi5vbih3aW5kb3cuX3N0YXRlX21hZ3Iuc3RhdGUuX2dhbWVPdmVyLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTsvL1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICB0aGlzLm1pZF94ID0gMzYwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5baV0ubmFtZSA9PSBcIkNhbWVyYVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmEgPSB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5baV0ubmFtZSA9PSBcIlVJTm9kZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VSU5vZGUgPSB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taWRfeCA9IHRoaXMuX1VJTm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2NvcmVMYWJlbCA9IHRoaXMuX1VJTm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjb3JlTGFiZWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb29sX2RhdGEgPSBuZXcgcG9vbGRhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0Tm9kZS5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbkxlZnRUb3VjaCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25SaWdodFRvdWNoLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgd2hpbGUoMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2V4aXN0QmxvY2tBcnIubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLl9leGlzdEJsb2NrQXJyLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xfZGF0YS5wdXRQbGFuZU5vZGUoYmxvY2spO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdEJsb2NrX3ggPSAwO1xyXG4gICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9ICcwJztcclxuICAgICAgICB0aGlzLmluZGV4ID0gLTU7XHJcbiAgICAgICAgdGhpcy5wb29sX2RhdGEuaW5pdCh0aGlzLmN1YmVQcmZiKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMjA7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQmxvY2tOb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcInBsYXllcmNvblwiKS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2NvcmUoKXtcclxuICAgICAgICB3aW5kb3cuX3N0YXRlX21hZ3IuX3Njb3JlICsrO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB3aW5kb3cuX3N0YXRlX21hZ3IuX3Njb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJsb2NrTm9kZSgpIHtcclxuICAgICAgICBpZih3aW5kb3cuX3N0YXRlX21hZ3IuX2dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pbmRleC0tO1xyXG4gICAgICAgIHZhciBibG9jayA9IHRoaXMucG9vbF9kYXRhLmdldFBsYW5lTm9kZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgdGhpcy5fZXhpc3RCbG9ja0Fyci5wdXNoKGJsb2NrKTtcclxuICAgICAgICB2YXIgcG9zX3ggPSBNYXRoLnJhbmRvbSgpKjEgPiAwLjUgPyAxIDogLTE7XHJcbiAgICAgICAgdGhpcy5sYXN0QmxvY2tfeCA9IHRoaXMubGFzdEJsb2NrX3ggKyBwb3NfeDtcclxuICAgICAgICBibG9jay5zZXRQb3NpdGlvbih0aGlzLmxhc3RCbG9ja194LCAwLCB0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVCbG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMuX2V4aXN0QmxvY2tBcnIubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuX2V4aXN0QmxvY2tBcnIuc2hpZnQoKTtcclxuICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KCdwbGFuZU5vZGUnKS5kZWxldGUodGhpcy5wb29sX2RhdGEpO1xyXG4gICAgICAgICAgICAvL3RoaXMucG9vbF9kYXRhLnB1dFBsYW5lTm9kZShibG9jayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGVmdFRvdWNoKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5fc3RhdGVfbWFnci5fc3RhcnRHYW1lKXtcclxuICAgICAgICAgICAgd2luZG93Ll9zdGF0ZV9tYWdyLl9zdGFydEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgncGxheWVyY29uJykubW92ZUxlZnQoKTtcclxuICAgICAgICB0aGlzLmFkZEJsb2NrTm9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmlnaHRUb3VjaChldmVudCkge1xyXG4gICAgICAgIGlmKCF3aW5kb3cuX3N0YXRlX21hZ3IuX3N0YXJ0R2FtZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fc3RhdGVfbWFnci5fc3RhcnRHYW1lID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ3BsYXllcmNvbicpLm1vdmVSaWdodCgpO1xyXG4gICAgICAgIHRoaXMuYWRkQmxvY2tOb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0t5pS25Yiw5ri45oiP57uT5p2f5raI5oGvJyk7XHJcbiAgICAgICAgdGhpcy5fVUlfTWFnci5hZGRDaGlsZEJ5TmFtZSgnb3ZlclZpZXcnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYSkge1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyX3BvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vdmFyIGNhbWVyYV9wb3MgPSB0aGlzLl9jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FtZXJhLnNldFBvc2l0aW9uKGNjLnYzKHBsYXllcl9wb3MueCwgMywgcGxheWVyX3Bvcy56ICsgOCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93Ll9zdGF0ZV9tYWdyLl9zdGFydEdhbWUgJiYgIXdpbmRvdy5fc3RhdGVfbWFnci5fZ2FtZU92ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUaW1lKys7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX3VwZGF0ZVRpbWUgPj0gMzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=