import {
    _decorator,
    Component,
    Node
} from "cc";
const {
    ccclass,
    property
} = _decorator;


@ccclass("pooldata")
export class pooldata extends Component {
    start() {
    }

    init(prefab) {
        if (this.plane_pool) return;
        this.plane_prefab = prefab;
        this.plane_pool = new cc.NodePool();
        let initCount = 20;
        for (let i = 0; i < initCount; ++i) {
            let node = cc.instantiate(this.plane_prefab); // 创建节点
            this.plane_pool.put(node); // 通过 put 接口放入对象池
        }
    }

    getPlaneNode() {
        var block = undefined;
        if (this.plane_pool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            block = this.plane_pool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            block = cc.instantiate(this.plane_prefab);
        }
        block.getComponent("planeNode").init();
        return block;
    }

    putPlaneNode(node){
        this.plane_pool.put(node);
    }
}