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
          value: function start() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZGF0YV9jb24vcG9vbF9kYXRhLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJwb29sZGF0YSIsInByZWZhYiIsInBsYW5lX3Bvb2wiLCJwbGFuZV9wcmVmYWIiLCJjYyIsIk5vZGVQb29sIiwiaW5pdENvdW50IiwiaSIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsInB1dCIsImJsb2NrIiwidW5kZWZpbmVkIiwic2l6ZSIsImdldCIsImdldENvbXBvbmVudCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0lBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7OztnRkFBcUU7OztBQUlyRUMsTUFBQUEsTyxHQUVBRixVLENBRkFFLE87QUFDQUMsTUFBQUEsUSxHQUNBSCxVLENBREFHLFE7OzBCQUtTQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7Ozs7Ozs7OztrQ0FFSSxDQUNQOzs7K0JBRUlHLE0sRUFBUTtBQUNULGdCQUFJLEtBQUtDLFVBQVQsRUFBcUI7QUFDckIsaUJBQUtDLFlBQUwsR0FBb0JGLE1BQXBCO0FBQ0EsaUJBQUtDLFVBQUwsR0FBa0IsSUFBSUUsRUFBRSxDQUFDQyxRQUFQLEVBQWxCO0FBQ0EsZ0JBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxTQUFwQixFQUErQixFQUFFQyxDQUFqQyxFQUFvQztBQUNoQyxrQkFBSUMsSUFBSSxHQUFHSixFQUFFLENBQUNLLFdBQUgsQ0FBZSxLQUFLTixZQUFwQixDQUFYLENBRGdDLENBQ2M7O0FBQzlDLG1CQUFLRCxVQUFMLENBQWdCUSxHQUFoQixDQUFvQkYsSUFBcEIsRUFGZ0MsQ0FFTDtBQUM5QjtBQUNKOzs7eUNBRWM7QUFDWCxnQkFBSUcsS0FBSyxHQUFHQyxTQUFaOztBQUNBLGdCQUFJLEtBQUtWLFVBQUwsQ0FBZ0JXLElBQWhCLEtBQXlCLENBQTdCLEVBQWdDO0FBQUU7QUFDOUJGLGNBQUFBLEtBQUssR0FBRyxLQUFLVCxVQUFMLENBQWdCWSxHQUFoQixFQUFSO0FBQ0gsYUFGRCxNQUVPO0FBQUU7QUFDTEgsY0FBQUEsS0FBSyxHQUFHUCxFQUFFLENBQUNLLFdBQUgsQ0FBZSxLQUFLTixZQUFwQixDQUFSO0FBQ0g7O0FBQ0RRLFlBQUFBLEtBQUssQ0FBQ0ksWUFBTixDQUFtQixXQUFuQixFQUFnQ0MsSUFBaEM7QUFDQSxtQkFBT0wsS0FBUDtBQUNIOzs7dUNBRVlILEksRUFBSztBQUNkLGlCQUFLTixVQUFMLENBQWdCUSxHQUFoQixDQUFvQkYsSUFBcEI7QUFDSDs7O1FBNUJ5QlgsUzs7b0JBVloiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgX2RlY29yYXRvcixcclxuICAgIENvbXBvbmVudCxcclxuICAgIE5vZGVcclxufSBmcm9tIFwiY2NcIjtcclxuY29uc3Qge1xyXG4gICAgY2NjbGFzcyxcclxuICAgIHByb3BlcnR5XHJcbn0gPSBfZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzKFwicG9vbGRhdGFcIilcclxuZXhwb3J0IGNsYXNzIHBvb2xkYXRhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQocHJlZmFiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhbmVfcG9vbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxhbmVfcHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgIHRoaXMucGxhbmVfcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG4gICAgICAgIGxldCBpbml0Q291bnQgPSAyMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGFuZV9wcmVmYWIpOyAvLyDliJvlu7roioLngrlcclxuICAgICAgICAgICAgdGhpcy5wbGFuZV9wb29sLnB1dChub2RlKTsgLy8g6YCa6L+HIHB1dCDmjqXlj6PmlL7lhaXlr7nosaHmsaBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhbmVOb2RlKCkge1xyXG4gICAgICAgIHZhciBibG9jayA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5wbGFuZV9wb29sLnNpemUoKSA+IDApIHsgLy8g6YCa6L+HIHNpemUg5o6l5Y+j5Yik5pat5a+56LGh5rGg5Lit5piv5ZCm5pyJ56m66Zey55qE5a+56LGhXHJcbiAgICAgICAgICAgIGJsb2NrID0gdGhpcy5wbGFuZV9wb29sLmdldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIOWmguaenOayoeacieepuumXsuWvueixoe+8jOS5n+WwseaYr+WvueixoeaxoOS4reWkh+eUqOWvueixoeS4jeWkn+aXtu+8jOaIkeS7rOWwseeUqCBjYy5pbnN0YW50aWF0ZSDph43mlrDliJvlu7pcclxuICAgICAgICAgICAgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYW5lX3ByZWZhYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2NrLmdldENvbXBvbmVudChcInBsYW5lTm9kZVwiKS5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dFBsYW5lTm9kZShub2RlKXtcclxuICAgICAgICB0aGlzLnBsYW5lX3Bvb2wucHV0KG5vZGUpO1xyXG4gICAgfVxyXG59Il19