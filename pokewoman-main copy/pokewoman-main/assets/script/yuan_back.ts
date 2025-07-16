const { ccclass, property } = cc._decorator;
import GameManager from "./gamemanager";
import GlobalData from "./GlobalData";

@ccclass
export default class No extends cc.Component {

    @property({ type: cc.AudioClip })
    yuan: cc.AudioClip = null;

    animation = null; // 动画组件
    audioId = -1; // Audio ID for the yuan audio clip

    onLoad() {
        // 注册键盘事件
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.animation = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);        
    }

    onDestroy() {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        // cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                cc.director.loadScene("map2");
                cc.audioEngine.stopMusic();
                break;
            
        }
    }

    start() {
        this.audioId = cc.audioEngine.playEffect(this.yuan, false);
        cc.audioEngine.setVolume(this.audioId, 1.0); // Set the volume to 1.0 (maximum)
        this.scheduleOnce(this.changeScene, 4.3); // Schedule the scene change after 2 seconds
    }

    update(dt: number) {
        if (this.animation && !this.animation.getAnimationState("yuan_back").isPlaying) {
            this.animation.play("yuan_back");
        }
    }

    changeScene() {
        cc.director.loadScene("map2"); // Load the "map2" scene
    }
}