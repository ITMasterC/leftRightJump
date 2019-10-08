import { _decorator, Component, Node , RigidBodyComponent} from "cc";
const { ccclass, property } = _decorator;

@ccclass("planeNode")
export class planeNode extends Component {
    /* class member could be defined like this */
    // dummy = '';
    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        //this.player_Body = this.getComponent(RigidBodyComponent);
        // this._useGravity = this.player_Body._useGravity; //使用重力
        // this._isKinematic = this.player_Body._isKinematic; //使用
    }

    init(){
        this.deleting = false;
        //更改刚体状态无效
        // this.player_Body = this.getComponent(RigidBodyComponent);
        // this.player_Body._useGravity = false;
        // this.player_Body._isKinematic = true;
    }

    delete(nodePool){
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
        this._gravity = 0.01;      
        // this.scheduleOnce(function(){
        //     nodePool.putPlaneNode(this.node);
        // },1.5)
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
