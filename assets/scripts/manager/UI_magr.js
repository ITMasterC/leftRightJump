import {
    _decorator,
    Component,
    Node
} from "cc";
const {
    ccclass,
    property
} = _decorator;

@ccclass("UImagr")
export class UImagr extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    _overView = undefined;

    start() {}

    startLoadRes() {
        cc.loader.loadRes("prefab/view/overNode", (err, prefab) => {
            this._overView = prefab;
        });
    }

    addChildByName(name) {
        var prefab = this['_'+name];
        if(prefab){
            var newNode = cc.instantiate(prefab);
            cc.director.getScene().addChild(newNode);
        }else{
            console.log('---------------没有找到对应的节点', name);
        }
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}