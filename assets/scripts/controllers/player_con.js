import {
    _decorator,
    Component,
    BoxColliderComponent,
    RigidBodyComponent,
    Vec3,
    tweenUtil,
    Quat
} from "cc";
const {
    ccclass,
    property
} = _decorator;

@ccclass("playercon")
export class playercon extends Component {
    _action = false;
    _moveFinsh = true;
    _pos = new Vec3(0, 1.2, -5);

    start() {
        this.alreadyStay = true;
        this.player_collider = this.getComponent(BoxColliderComponent);
        // this.player_Body = this.getComponent(RigidBodyComponent);
        // this._useGravity = this.player_Body._useGravity; //使用重力
        // this._isKinematic = this.player_Body._isKinematic; //使用
        // console.log('---------------------player', this.player_collider);
        // if (this.player_collider) {
        //     this.player_collider.on('onCollisionEnter', this.onCollision, this);
        //     this.player_collider.on('onCollisionStay', this.onCollision, this);
        //     this.player_collider.on('onCollisionExit', this.onCollision, this);
        // }
        this.init();
    }

    init() {
        this.player_Body = this.getComponent(RigidBodyComponent);
        this._gravity = 0.008;
        this._pos = new Vec3(0, 1.2, -5);
        this.node.setPosition(new Vec3(0, 1.2, -5));
        this.player_Body._useGravity = true;
        this.player_Body._isKinematic = false;
    }

    onCollision(event) {
        console.log('-------------------碰撞');
        if (event.type == 'onCollisionStay') {
            if (!this.alreadyStay) {
                this.alreadyStay = true;
                this._gravity = 0.008;
            } else {
                return;
            }
        } else if (event.type == 'onCollisionExit') {
            console.log('-------------------结束碰撞');
            this.alreadyStay = false;
        }
    }

    moveLeft() {
        if (!this._moveFinsh || window._state_magr._gameOver) return;
        this._moveFinsh = false;
        this.scheduleOnce(function () {
            this._moveFinsh = true;
        }, 0.25)
        var pos = this.node.getPosition();
        pos.z -= 1;
        pos.x -= 1;
        this._action = true;
        this.player_Body._useGravity = false;
        this.player_Body._isKinematic = true;
        this.scheduleOnce(function () {
            this._action = false;
            this.player_Body._useGravity = true;
            this.player_Body._isKinematic = false;
        }, 0.15)
        Vec3.copy(this._pos, this.node.getPosition());
        tweenUtil(this._pos)
            .to(0.1, new Vec3(pos.x, 1.3, pos.z), {
                easing: 'easeIn',
                onUpdate: () => {
                    this.node.position = this._pos;
                }
            })
            .union()
            .call(this.finshCallBack)
            .start();
    }

    moveRight() {
        if (!this._moveFinsh || window._state_magr._gameOver) return;
        this._moveFinsh = false;
        this.scheduleOnce(function () {
            this._moveFinsh = true;
        }, 0.25)
        var pos = this.node.getPosition();
        pos.z -= 1;
        pos.x += 1;
        this._action = true;
        this.player_Body._useGravity = false;
        this.player_Body._isKinematic = true;
        this.scheduleOnce(function () {
            this._action = false;
            this.player_Body._useGravity = true;
            this.player_Body._isKinematic = false;
        }, 0.15)
        Vec3.copy(this._pos, this.node.getPosition());
        tweenUtil(this._pos)
            .to(0.1, new Vec3(pos.x, 1.3, pos.z), {
                easing: 'easeIn',
                onUpdate: () => {
                    this.node.position = this._pos;
                }
            })
            .union()
            .start();
    }

    finshCallBack() {
        console.log('-----------------------完成动作');
        this._action = false;
    }

    update(deltaTime) {
        //if (this._action) this.node.position = this._pos;
        if (this.node.getPosition().y <= 0.45 && !window._state_magr._gameOver) { //游戏结束
            window._state_magr._gameOver = true;
            console.log('-----------------------游戏结束');
            window._state_magr.emitEvent(window._state_magr.state._gameOver);
        }

        //避免有时候不会自动掉落
        if (this._moveFinsh && window._state_magr.deleteIndex <= this.node.getPosition().z && this.node.getPosition().y <= 1) {
            var pos = this.node.getPosition();
            pos.y -= this._gravity;
            this._gravity += 0.002;
            this.node.setPosition(pos);
        }
    }
}