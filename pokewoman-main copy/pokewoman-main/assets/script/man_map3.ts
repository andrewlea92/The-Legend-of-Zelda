const {ccclass, property} = cc._decorator;
import GameManager from "./gamemanager";
import GlobalData from "./GlobalData";
@ccclass
export default class Man extends cc.Component {

    @property(GameManager)
    Gamemanger: GameManager = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.TiledMap)
    tilemap: cc.TiledMap = null;

    @property
    text: string = 'hello';

    @property({type:cc.AudioClip})
    bgm: cc.AudioClip = null;
    
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
        let tilemap = cc.find('Canvas/map3').getComponent(cc.TiledMap);
        // let smoglayer = cc.find('Canvas/map3/smog');
        
        
        // let tilemap = this.getComponent(cc.TiledMap);
        // console.log("hi",tilemap);
        let tilemapsize = tilemap.getMapSize();
        let layer = tilemap.getLayer('ground');
        let layersize = layer.getLayerSize();
        let smoglayer = tilemap.getLayer('smog');
        smoglayer.node.active = true;
        console.log("layersize.width",layersize.width);
        console.log("layersize.height",layersize.height);
        console.log("tilemapsize",tilemapsize);
        console.log("smoglayer",smoglayer);
        for(let i = 0; i < layersize.width; i++){
            for(let j = 0; j < layersize.height; j++){
                let tile = smoglayer.getTiledTileAt(i,j,true);
                if(tile.gid!=0){
                    // console.log("i:", i);
                    // console.log("j:", j);
                    tile.node.group = 'smog';
                    let collider = tile.node.addComponent(cc.BoxCollider);
                    collider.offset = cc.v2(tilemapsize.width/2-256,tilemapsize.height/2-256);
                    collider.size = tilemapsize;
                    // console.log(this.node.position);
                    // console.log("collider",collider);
                }
            }
        }
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
        cc.audioEngine.playMusic(this.bgm, true);
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
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        
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
        // if ((this.node.x >= 48 && this.node.x <= 88) && (this.node.y >= 50 && this.node.y <= 86) && this.isBattle == false) {
        //     let smoglayer = cc.find('Canvas/map3/smog');
        //     smoglayer.active = false; // 迷霧消失
        // }
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
        GlobalData.PlayerPosY = this.node.getPosition().y;  
        cc.audioEngine.setMusicVolume(GlobalData.volume);
        cc.audioEngine.setEffectsVolume(GlobalData.volume);
    }

    onCollisionEnter(other, self) {
        if(other.node.group == "smog"){
            other.node.active = false; // 迷霧消失
            other.node.getComponent(cc.TiledTile).gid=0;
        }
    }
    onBeginContact(contact, selfCollider, otherCollider) {
        //cc.log("Player hits the bush");
        let worldManifold = contact.getWorldManifold();
        let points = worldManifold.points;
        let normal = worldManifold.normal;
        if(otherCollider.tag == 4 || otherCollider.tag == 5 || otherCollider.tag == 6|| otherCollider.tag == 7){
            this.enemyNum = otherCollider.tag;
            //console.log("enemyNum in man");
            //console.log(this.enemyNum);
            //cc.log("Player hits the enemy");
            this.isBattle = true;
            // cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.goinSound, false);
        
            var canvasNode = cc.find("Canvas"); // 获取画布节点
            var blinkAction = cc.blink(2, 5); // 闪烁动画，持续时间为2秒，闪烁次数为5次
            this.Gamemanger.palse = true;
            cc.audioEngine.pauseMusic();
            console.log(this.Gamemanger.palse);
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
            //cc.audioEngine.pauseMusic();
            //cc.audioEngine.playEffect(this.battleBgm, true);
        }
    
    }
}