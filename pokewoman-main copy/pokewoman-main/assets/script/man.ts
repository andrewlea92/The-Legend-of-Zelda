const {ccclass, property} = cc._decorator;
import GameManager from "./gamemanager";
import GlobalData from "./GlobalData";
@ccclass
export default class Man extends cc.Component {

    @property(GameManager)
    Gamemanger: GameManager = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({type:cc.AudioClip})
    bgmMapGrass: cc.AudioClip = null;

    @property({type:cc.AudioClip})
    bgmMapDesert: cc.AudioClip = null;
    
    @property({type:cc.AudioClip})
    goinSound: cc.AudioClip = null;

    @property(cc.Integer)
    moveSpeed: number = 1; // 移动速度，可以根据需要调整

    animation= null; // 动画组件

    private isBattle: boolean = false;

    private isMovingUp: boolean = false;
    private isMovingDown: boolean = false;
    private isMovingLeft: boolean = false;
    private isMovingRight: boolean = false;
    private destroynum = 0;
    public enemyNum = 0;


    start(){
        GlobalData.isBOSScamera = false;
        let nodetodestory = cc.director.getScene()["nodeToDestroy"];
        console.log("nodeToDestroy in man:", nodetodestory);
        //if(this.node.getChildByName(nodetodestory) !== null){
        //    this.node.destroy();
        //}
        cc.director.getScene().walk((node: cc.Node) => {
            // Perform operations on each node
            // Access node properties, call methods, etc.
            if(GlobalData.nodeToDestroy.includes(node.name)){
                node.destroy();
            }
        }, () => {
            // This callback is invoked after visiting each node in the scene hierarchy
            //console.log("Iteration complete");
        });
        let scene = cc.director.getScene();
    if(scene.name == "map2"){
        console.log("map2 bgm");
        cc.audioEngine.playMusic(this.bgmMapGrass, true);
    }else if(scene.name == "map3"){
        console.log("map3 bgm");
        cc.audioEngine.playMusic(this.bgmMapDesert, true);
    }
        this.Gamemanger = cc.find('Canvas/gamemanager').getComponent('gamemanager');
        // console.log(this.Gamemanger);
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
        this.node.setPosition(GlobalData.PlayerPosX,GlobalData.PlayerPosY);
        if(GlobalData.isEnenmyMagic && GlobalData.isEnenmyRed){
            cc.find('enemies/6').active = true;
        }
        
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
        switch(event.keyCode) {
            case cc.macro.KEY.up:
                this.isMovingUp = true;
                break;
            case cc.macro.KEY.down:
                this.isMovingDown = true;
                break;
            case cc.macro.KEY.left:
                this.isMovingLeft = true;
                break;
            case cc.macro.KEY.right:
                this.isMovingRight = true;
                break;
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        switch(event.keyCode) {
            case cc.macro.KEY.up:
                this.isMovingUp = false;
                 this.stopAnimation("man_up");
                break;
            case cc.macro.KEY.down:
                this.isMovingDown = false;
                 this.stopAnimation("man_down");
                break;
            case cc.macro.KEY.left:
                this.isMovingLeft = false;
                 this.stopAnimation("man_left");
                break;
            case cc.macro.KEY.right:
                this.isMovingRight = false;
                 this.stopAnimation("man_right");
                break;
        }
    }

    update(dt: number) {
        
        //console.log(GlobalData.isBOSScamera);
        //cc.log(this.node.x, this.node.y);
        // 根据按键状态更新角色位置
        if(this.Gamemanger.palse==false)
        {
            if (this.isMovingUp) {
            this.node.y += (this.moveSpeed * dt);
                if(!this.animation.getAnimationState("man_up").isPlaying)this.animation.play("man_up");
            }
            if (this.isMovingDown) {
                this.node.y -= this.moveSpeed * dt;
                if(!this.animation.getAnimationState("man_down").isPlaying)this.animation.play("man_down");
            }
            if (this.isMovingLeft) {
                this.node.x -= this.moveSpeed * dt;
                if(!this.animation.getAnimationState("man_left").isPlaying)this.animation.play("man_left");
            }
            if (this.isMovingRight) {
                this.node.x += this.moveSpeed * dt;
                if(!this.animation.getAnimationState("man_right").isPlaying)this.animation.play("man_right");
            }
        }
        
        if ((this.node.x >= 48 && this.node.x <= 88) && (this.node.y >= 50 && this.node.y <= 86) && this.isBattle == false) {
        }   
        GlobalData.PlayerPosX = this.node.getPosition().x;
        GlobalData.PlayerPosY = this.node.getPosition().y-10;  
        cc.audioEngine.setMusicVolume(GlobalData.volume);
        cc.audioEngine.setEffectsVolume(GlobalData.volume);
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        //cc.log("Player hits the bush");
        let worldManifold = contact.getWorldManifold();
        let points = worldManifold.points;
        let normal = worldManifold.normal;
        if(otherCollider.tag == 4 || otherCollider.tag == 5 || otherCollider.tag == 6|| otherCollider.tag == 7 || otherCollider.tag == 8 ){
            this.enemyNum = otherCollider.tag;
            this.isBattle = true;
            var canvasNode = cc.find("Canvas");
            const cameraNode = cc.Camera.main;
            var blinkAction = cc.blink(2, 5);
            this.Gamemanger.palse = true;
            cc.audioEngine.pauseMusic();
            if(otherCollider.tag != 8){
                cc.audioEngine.playEffect(this.goinSound, false);
                //console.log(this.Gamemanger.palse);
                canvasNode.runAction(cc.sequence(
                    blinkAction,
                    cc.callFunc(function () {
                        
                        cc.director.loadScene("battle", () =>{
                        const nextScene = cc.director.getScene();
                        nextScene["enemyNum"] = otherCollider.tag;
                        //console.log("nextScene[enemyNum]", nextScene["enemyNum"]);
                        });
                    })
                ));
            }else if(otherCollider.tag == 8){
                GlobalData.isBOSScamera = true;
                //let cameraAction = cameraNode.runAction(cc.moveTo(2, cc.v2(0,50)));
                let cameraAction = cc.callFunc(function(target) {
                    const mainCamera = cc.Camera.main;
                    this.originalPosition = mainCamera.node.position.clone();
                   //let shakeSequence;
                   console.log("shakeSequence");
                    
                    const shakeSequence = cc.moveTo(3, cc.v2(this.originalPosition.x , this.originalPosition.y+70));
                    
                    cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
                });
                

                let loadAction = cc.moveBy(4, cc.v2(0,0));
                this.scheduleOnce(function() {
                    GlobalData.isBOSScamera = false;
                }, 13);

                let conversationAction = cc.callFunc(function(target) {
                    cc.find("Canvas/Main Camera/moyan").active = true;
                });

                this.scheduleOnce(function() {
                    cc.audioEngine.playEffect(this.goinSound, false);
                }, 8);

                this.scheduleOnce(function() {
                    cc.find("Canvas/Main Camera/moyan").active = false;
                }, 8);
                
                canvasNode.runAction(cc.sequence(
                    cameraAction,
                    loadAction,
                    conversationAction,
                    loadAction,
                    blinkAction,
                    cc.callFunc(function () {
                        
                        cc.director.loadScene("battle", () =>{
                        const nextScene = cc.director.getScene();
                        nextScene["enemyNum"] = otherCollider.tag;
                        //console.log("nextScene[enemyNum]", nextScene["enemyNum"]);
                        });
                    })
                ));
                
            }
            //cc.audioEngine.pauseMusic();
            //cc.audioEngine.playEffect(this.battleBgm, true);
        }
    }
}