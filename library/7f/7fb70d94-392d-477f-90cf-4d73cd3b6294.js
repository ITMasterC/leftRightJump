"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, ccclass, property, pooldata;

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
      cc._RF.push(window.module || {}, "7fb702UOS1Hf5DPTXPNO2KU", "pool_data"); // begin pool_data


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("pooldata", pooldata = (_dec = ccclass("pooldata"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(pooldata, _Component);

        function pooldata() {
          babelHelpers.classCallCheck(this, pooldata);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(pooldata).apply(this, arguments));
        }

        babelHelpers.createClass(pooldata, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';
          // constructor() {
          // }

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {//console.log('------------------aaaaaaa');
            // Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(prefab) {
            if (this.plane_pool) return;
            this.plane_prefab = prefab;
            this.plane_pool = new cc.NodePool();
            var initCount = 20;

            for (var i = 0; i < initCount; ++i) {
              var node = cc.instantiate(this.plane_prefab); // 创建节点

              this.plane_pool.put(node); // 通过 put 接口放入对象池
            }
          }
        }, {
          key: "getPlaneNode",
          value: function getPlaneNode() {
            var block = undefined;

            if (this.plane_pool.size() > 0) {
              // 通过 size 接口判断对象池中是否有空闲的对象
              block = this.plane_pool.get();
            } else {
              // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
              block = cc.instantiate(this.plane_prefab);
            }

            block.getComponent("planeNode").init();
            return block;
          }
        }, {
          key: "putPlaneNode",
          value: function putPlaneNode(node) {
            this.plane_pool.put(node);
          }
        }]);
        return pooldata;
      }(Component)) || _class));

      cc._RF.pop(); // end pool_data

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZGF0YV9jb24vcG9vbF9kYXRhLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwb29sZGF0YSIsInByZWZhYiIsInBsYW5lX3Bvb2wiLCJwbGFuZV9wcmVmYWIiLCJjYyIsIk5vZGVQb29sIiwiaW5pdENvdW50IiwiaSIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsInB1dCIsImJsb2NrIiwidW5kZWZpbmVkIiwic2l6ZSIsImdldCIsImdldENvbXBvbmVudCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0lBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7OztnRkFBcUU7OztBQUlyRUMsTUFBQUEsTyxHQUVBRixVLENBRkFFLE87QUFDQUMsTUFBQUEsUSxHQUNBSCxVLENBREFHLFE7OzBCQUtTQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7Ozs7Ozs7Ozs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7a0NBRVEsQ0FDSjtBQUNBO0FBQ0g7OzsrQkFFSUcsTSxFQUFRO0FBQ1QsZ0JBQUksS0FBS0MsVUFBVCxFQUFxQjtBQUNyQixpQkFBS0MsWUFBTCxHQUFvQkYsTUFBcEI7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQixJQUFJRSxFQUFFLENBQUNDLFFBQVAsRUFBbEI7QUFDQSxnQkFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLGlCQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQXBCLEVBQStCLEVBQUVDLENBQWpDLEVBQW9DO0FBQ2hDLGtCQUFJQyxJQUFJLEdBQUdKLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLEtBQUtOLFlBQXBCLENBQVgsQ0FEZ0MsQ0FDYzs7QUFDOUMsbUJBQUtELFVBQUwsQ0FBZ0JRLEdBQWhCLENBQW9CRixJQUFwQixFQUZnQyxDQUVMO0FBQzlCO0FBQ0o7Ozt5Q0FFYztBQUNYLGdCQUFJRyxLQUFLLEdBQUdDLFNBQVo7O0FBQ0EsZ0JBQUksS0FBS1YsVUFBTCxDQUFnQlcsSUFBaEIsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFBRTtBQUM5QkYsY0FBQUEsS0FBSyxHQUFHLEtBQUtULFVBQUwsQ0FBZ0JZLEdBQWhCLEVBQVI7QUFDSCxhQUZELE1BRU87QUFBRTtBQUNMSCxjQUFBQSxLQUFLLEdBQUdQLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLEtBQUtOLFlBQXBCLENBQVI7QUFDSDs7QUFDRFEsWUFBQUEsS0FBSyxDQUFDSSxZQUFOLENBQW1CLFdBQW5CLEVBQWdDQyxJQUFoQztBQUNBLG1CQUFPTCxLQUFQO0FBQ0g7Ozt1Q0FFWUgsSSxFQUFLO0FBQ2QsaUJBQUtOLFVBQUwsQ0FBZ0JRLEdBQWhCLENBQW9CRixJQUFwQjtBQUNIOzs7UUF0Q3lCWCxTOztvQkFWWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTm9kZVxyXG59IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7XHJcbiAgICBjY2NsYXNzLFxyXG4gICAgcHJvcGVydHlcclxufSA9IF9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3MoXCJwb29sZGF0YVwiKVxyXG5leHBvcnQgY2xhc3MgcG9vbGRhdGEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG4gICAgLy8gY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB9XHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS1hYWFhYWFhJyk7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwcmVmYWIpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGFuZV9wb29sKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGFuZV9wcmVmYWIgPSBwcmVmYWI7XHJcbiAgICAgICAgdGhpcy5wbGFuZV9wb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgbGV0IGluaXRDb3VudCA9IDIwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYW5lX3ByZWZhYik7IC8vIOWIm+W7uuiKgueCuVxyXG4gICAgICAgICAgICB0aGlzLnBsYW5lX3Bvb2wucHV0KG5vZGUpOyAvLyDpgJrov4cgcHV0IOaOpeWPo+aUvuWFpeWvueixoeaxoFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGFuZU5vZGUoKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYW5lX3Bvb2wuc2l6ZSgpID4gMCkgeyAvLyDpgJrov4cgc2l6ZSDmjqXlj6PliKTmlq3lr7nosaHmsaDkuK3mmK/lkKbmnInnqbrpl7LnmoTlr7nosaFcclxuICAgICAgICAgICAgYmxvY2sgPSB0aGlzLnBsYW5lX3Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g5aaC5p6c5rKh5pyJ56m66Zey5a+56LGh77yM5Lmf5bCx5piv5a+56LGh5rGg5Lit5aSH55So5a+56LGh5LiN5aSf5pe277yM5oiR5Lus5bCx55SoIGNjLmluc3RhbnRpYXRlIOmHjeaWsOWIm+W7ulxyXG4gICAgICAgICAgICBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGxhbmVfcHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KFwicGxhbmVOb2RlXCIpLmluaXQoKTtcclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0UGxhbmVOb2RlKG5vZGUpe1xyXG4gICAgICAgIHRoaXMucGxhbmVfcG9vbC5wdXQobm9kZSk7XHJcbiAgICB9XHJcbn0iXX0=