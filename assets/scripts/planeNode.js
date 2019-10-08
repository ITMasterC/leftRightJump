import { _decorator, Component, Node , RigidBodyComponent} from "cc";
const { ccclass, property } = _decorator;

@ccclass("planeNode")
export class planeNode extends Component {

    start () {
        //this.player_Body = this.getComponent(RigidBodyComponent);
        // this._useGravity = this.player_Body._useGravity; //使用重力
        // this._isKinematic = this.player_Body._isKinematic; //使用
    }

    init(){
        this.deleting = false;
    }

    delete(nodePool){
        this.nodePool = nodePool;
        this.deleting = true;  
        this._gravity = 0.01;
    }

    update (deltaTime) {
       if(this.deleting){
           var pos = this.node.getPosition();
           pos.y -= this._gravity;
           this._gravity += 0.002;
           this.node.setPosition(pos);
           if(pos.y < -2){
                this.nodePool.putPlaneNode(this.node);
                window._state_magr.deleteIndex = pos.z;
           }
       }
    }
}
