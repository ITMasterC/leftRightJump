import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("statemagr")
export class statemagr extends Component {
    _gameOver = false;
    _startGame = false;
    _score = 0;
    Notification = null;
    deleteIndex = 0;

    state = {
        _gameOver : 'gameOver',
        _againGame : 'agameGame',
    }

    start () {
        // Your initialization goes here.
    }

    init(){
        this.deleteIndex = 0;
        this._startGame = false;
        this._gameOver = false;
        this._score = 0;
    }

    emitEvent(eventType){
        console.log('--------------------派发消息', eventType);
        window.Notification.emit(eventType);
    }



    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}
