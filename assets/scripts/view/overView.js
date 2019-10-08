import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("overView")
export class overView extends Component {
    start () {
    }

    againGame(){
        window._state_magr.emitEvent(window._state_magr.state._againGame);
        this.node.destroy();
    }
}
