const {ccclass, property} = cc._decorator;
import GameManager from "./gamemanager";
import GlobalData from "./GlobalData";
@ccclass
export default class NewClass extends cc.Component {

    @property(GameManager)
    Gamemanger: GameManager = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.SpriteFrame)
    lie: cc.SpriteFrame = null;

    @property
    text: string = 'hello';

    
    @property({type:cc.AudioClip})
    goinSound: cc.AudioClip = null;

    @property(Number)
    moveSpeed: number = 1.5; 

    animation= null; 

    private isBattle: boolean = false;

    private isMovingUp: boolean = false;
    private isMovingDown: boolean = false;
    private isMovingLeft: boolean = false;
    private isMovingRight: boolean = false;
    private destroynum = 0;
    public enemyNum = 0;

    start(){
        let nodetodestory = cc.director.getScene()["nodeToDestroy"];
        console.log("nodeToDestroy in man:", nodetodestory);
        cc.director.getScene().walk((node: cc.Node) => {
            if(GlobalData.nodeToDestroy.includes(node.name)){
                node.destroy();
            }
        }, () => {
        });
        this.Gamemanger = cc.find('Canvas/gamemanager').getComponent('gamemanager');
        this.Gamemanger.palse = false;
    }

    onLoad() {
        // 注册键盘事件
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.animation = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.setPosition(GlobalData.Player2PosX,GlobalData.Player2PosY);
        
    }

    onDestroy() {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    playAnimation(animationName: string) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            return;
        }

        this.animation.play(animationName);
    }

    stopAnimation(animationName: string) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            this.animation.stop(animationName);
        }
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
            case cc.macro.KEY.space:
                    console.log(this.node);
                    this.node.getComponent(cc.Sprite).spriteFrame = this.lie;
                break;
                
        }
    }
    
    onKeyUp(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.isMovingUp = false;
                this.stopAnimation("man2_up");
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = false;
                this.stopAnimation("man2_down");
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = false;
                this.stopAnimation("man2_left");
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = false;
                this.stopAnimation("man2_right");
                break;
        }
    }

    update(dt: number) {
        if(this.Gamemanger.palse==false)
        {
            if (this.isMovingUp) {
                this.node.y += (this.moveSpeed * dt);
                if(!this.animation.getAnimationState("man2_up").isPlaying)this.animation.play("man2_up");
            }
            if (this.isMovingDown) {
                this.node.y -= this.moveSpeed * dt;
                if(!this.animation.getAnimationState("man2_down").isPlaying)this.animation.play("man2_down");
            }
            if (this.isMovingLeft) {
                this.node.x -= this.moveSpeed * dt;
                if(!this.animation.getAnimationState("man2_left").isPlaying)this.animation.play("man2_left");
            }
            if (this.isMovingRight) {
                this.node.x += this.moveSpeed * dt ;
                if(!this.animation.getAnimationState("man2_right").isPlaying)this.animation.play("man2_right");
            }
        }
        
        if ((this.node.x >= 48 && this.node.x <= 88) && (this.node.y >= 50 && this.node.y <= 86) && this.isBattle == false) {
        }   
        GlobalData.Player2PosX = this.node.getPosition().x;
        GlobalData.Player2PosY = this.node.getPosition().y;  
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        // console.log(cc.director.getPhysicsManager().gravity);
        if (otherCollider.node.name === "sensor0.01") {
        cc.find("Canvas/man2").getComponent(cc.RigidBody).gravityScale = -0.1;
        this.node.getComponent(cc.Sprite).spriteFrame = this.lie;
        }
        if (otherCollider.node.name === "sensor0") {
            cc.find("Canvas/man2").getComponent(cc.RigidBody).gravityScale = 0;
            }
        if (otherCollider.node.name === "sensorlie") {
            this.node.getComponent(cc.Sprite).spriteFrame = this.lie;
        }
        let worldManifold = contact.getWorldManifold();
        let points = worldManifold.points;
        let normal = worldManifold.normal;
        if(otherCollider.tag == 4 || otherCollider.tag == 5|| otherCollider.tag == 6|| otherCollider.tag == 7){
            this.enemyNum = otherCollider.tag;
            this.isBattle = true;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.goinSound, false);
        
            var canvasNode = cc.find("Canvas"); 
            var blinkAction = cc.blink(2, 5); 
            this.Gamemanger.palse = true;
            console.log("fuck your life ",this.Gamemanger.palse);
            canvasNode.runAction(cc.sequence(
                blinkAction,
                cc.callFunc(function () {
                    cc.director.loadScene("battle", () =>{
                       const nextScene = cc.director.getScene();
                       nextScene["enemyNum"] = otherCollider.tag;
                    });
                })
            ));
        }
    }
}