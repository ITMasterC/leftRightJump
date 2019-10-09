import {
    _decorator,
    Component,
    systemEvent,
    Label,
    SystemEvent,
    LabelComponent,
    ICollisionEvent
} from "cc";
const {
    menu,
    ccclass,
    property
} = _decorator;
import {
    pooldata
} from "./data_con/pool_data";

import {
    UImagr
} from "./manager/UI_magr";
import {
    statemagr
} from "./manager/state_magr";

@ccclass("rootNode")
export class rootNode extends Component {
    @property({
        type: cc.Prefab
    }) cubePrfb = null;
    @property({
        type: cc.Node
    }) player = null;

    @property({
        type: cc.Node
    }) leftNode = null;
    @property({
        type: cc.Node
    }) rightNode = null;
    @property({
        type: LabelComponent
    }) scoreLabel = null;

    start() {
        //console.log('---------------------rootNode', this.node.parent);
        this._existBlockArr = new Array();
        this._UI_Magr = new UImagr();
        this._UI_Magr.startLoadRes();
        window._state_magr = new statemagr();
        window.Notification = new cc.EventTarget()
        window.Notification.on(window._state_magr.state._againGame, this.init, this);//
        window.Notification.on(window._state_magr.state._gameOver, this.gameOver, this);//
        
        var length = this.node.parent.children.length;
        for (var i = 0; i < length; i++) {
            if (this.node.parent.children[i].name == "Camera") {
                this._camera = this.node.parent.children[i];
            }
        }
        this.pool_data = new pooldata();
        this.init();

        this.leftNode.on(SystemEvent.EventType.TOUCH_START, this.onLeftTouch, this);
        this.rightNode.on(SystemEvent.EventType.TOUCH_START, this.onRightTouch, this);
    }

    init(){
        while(1){
            if(this._existBlockArr.length > 0){
                var block = this._existBlockArr.shift();
                this.pool_data.putPlaneNode(block);
            }else{
                break;
            }
        }
        this._updateTime = 0;
        this._deleteBlockTime = 60;
        this.lastBlock_x = 0;
        window._state_magr.init();
        this.scoreLabel.string = '0';
        this.index = -5;
        this.pool_data.init(this.cubePrfb);
        for(var i = 0; i < 20; i++){
            this.addBlockNode();
        }
        this.player.getComponent("playercon").init();
    }

    updateScore(){
        window._state_magr._score ++;
        this.scoreLabel.string = window._state_magr._score;
        if(this._deleteBlockTime > 20){
            this._deleteBlockTime = 45 - Math.floor(window._state_magr._score/2);
        }
    }

    addBlockNode() {
        if(window._state_magr._gameOver) return;
        this.index--;
        var block = this.pool_data.getPlaneNode();
        this.node.addChild(block);
        this._existBlockArr.push(block);
        var pos_x = Math.random()*1 > 0.5 ? 1 : -1;
        this.lastBlock_x = this.lastBlock_x + pos_x;
        block.setPosition(this.lastBlock_x, 0, this.index);
    }

    deleteBlock(){
        if(this._existBlockArr.length > 0){
            var block = this._existBlockArr.shift();
            block.getComponent('planeNode').delete(this.pool_data);
            //this.pool_data.putPlaneNode(block);
        }
    }

    onLeftTouch(event) {
        console.log('=======================点击事件  left');
        if(!window._state_magr._startGame){
            window._state_magr._startGame = true;
        }else{
            this.updateScore();
        }
        this.player.getComponent('playercon').moveLeft();
        this.addBlockNode();
    }

    onRightTouch(event) {
        console.log('=======================点击事件  right');
        if(!window._state_magr._startGame){
            window._state_magr._startGame = true;
        }else{
            this.updateScore();
        }
        this.player.getComponent('playercon').moveRight();
        this.addBlockNode();
    }

    gameOver(){
        console.log('------------------收到游戏结束消息');
        this._UI_Magr.addChildByName('overView');
    }

    update(deltaTime) {
        if (this._camera) {
            var player_pos = this.player.getPosition();
            //var camera_pos = this._camera.getPosition();
            // var pos_y = (window._state_magr.deleteIndex - player_pos.z)/2 + 3;
            // if(pos_y > 8)pos_y= 8;
            // if(pos_y < 3)pos_y= 3;
            this._camera.setPosition(cc.v3(player_pos.x, 3,player_pos.z+8));
        }

        if(window._state_magr._startGame && !window._state_magr._gameOver){
            this._updateTime++;
            if(this._updateTime >= this._deleteBlockTime){
                this._updateTime = 0;
                this.deleteBlock();
            }
        }
    }
}