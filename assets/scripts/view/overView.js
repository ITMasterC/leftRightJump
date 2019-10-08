import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("overView")
export class overView extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }

    againGame(){
        window._state_magr.emitEvent(window._state_magr.state._againGame);
        this.node.destroy();
    }
}
