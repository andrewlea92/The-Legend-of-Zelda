const { ccclass, property } = cc._decorator;
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

    @property({ type: cc.AudioClip })
    bgm: cc.AudioClip = null;


    @property(cc.Integer)
    moveSpeed: number = 100; // 移动速度，可以根据需要调整

    animation = null; // 动画组件

    private isBattle: boolean = false;

    private destroynum = 0;
    public enemyNum = 0;

    start() {
        let scene = cc.director.getScene();
        if (scene.name == "map_inif") {
            cc.audioEngine.playMusic(this.bgm, true);
        } 
        this.animation = this.getComponent(cc.Animation);
        this.node.setPosition(GlobalData.PlayerPosX, GlobalData.PlayerPosY);
    }

    onDestroy() {}

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

    update(dt: number) {
            this.node.x += this.moveSpeed * dt;

            if (!this.animation.getAnimationState("man_right").isPlaying) {
                this.animation.play("man_right");
            }

        cc.audioEngine.setMusicVolume(GlobalData.volume);
        cc.audioEngine.setEffectsVolume(GlobalData.volume);
    }
}