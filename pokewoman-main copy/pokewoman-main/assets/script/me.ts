const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterController extends cc.Component {

    @property(cc.Node)
    p1: cc.Node = null;

    @property(cc.Node)
    p2: cc.Node = null;

    @property(cc.Node)
    p3: cc.Node = null;

    @property(cc.Node)
    character: cc.Node = null;

    @property(Number)
    moveSpeed: number = 1.5; 

    private isMovingUp: boolean = false;
    private isMovingDown: boolean = false;
    private isMovingLeft: boolean = false;
    private isMovingRight: boolean = false;
    private big: boolean = false;
    private small: boolean = false;

    start() {
        // 設置初始層級和顯示順序
        this.character.setSiblingIndex(this.p2.getSiblingIndex());
        this.node.scale = 0.8;

    }
    onLoad(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onDestroy() {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.isMovingUp = true;
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = true;
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = true;
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = true;
                break;
            case cc.macro.KEY.up:
                this.big = true;
                break;
            case cc.macro.KEY.down:
                this.small = true;
                break;
                
        }
    }
    onKeyUp(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.isMovingUp = false;
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = false;
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = false;
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = false;
                break;
            case cc.macro.KEY.up:
                this.big = false;
                break;
            case cc.macro.KEY.down:
                this.small = false;
                break;
        }
    }

    update(dt: number) {

        if (this.isMovingUp && this.node.y + 58*this.node.scale < 256) {
            this.node.y += (this.moveSpeed * dt);
        }
        if (this.isMovingDown && this.node.y - 58*this.node.scale > -256) {
            this.node.y -= this.moveSpeed * dt;
        }
        if (this.isMovingLeft) {
            this.node.x -= this.moveSpeed * dt;
        }
        if (this.isMovingRight) {
            this.node.x += this.moveSpeed * dt ;
        }
        if (this.big) {
            this.node.scale += 1 * dt;
        }
        if (this.small) {
            this.node.scale -= 1 * dt ;
        }
        // 根據角色Y座標變化調整層級和顯示順序
        console.log(this.node.y);
        if (this.node.scale > 0.7 && this.node.scale < 1) {
            this.character.setSiblingIndex(this.p2.getSiblingIndex()+1);
        }else if (this.node.scale > 1 &&this.node.scale < 2) {
            this.character.setSiblingIndex(this.p1.getSiblingIndex()+1);
        } else if (this.node.scale > 2) {
            this.character.setSiblingIndex(this.p3.getSiblingIndex()+1);
        }
        else
        {
            this.character.setSiblingIndex(this.p2.getSiblingIndex()-1);
        }
    }
}