const { ccclass, property } = cc._decorator;
import GameManager from "./gamemanager";
import GlobalData from "./GlobalData";

@ccclass
export default class change extends cc.Component {

    @property({type: cc.AudioClip})
    spaceshipSound: cc.AudioClip = null;
    onLoad() {
        this.startScaleAnimation();
        cc.audioEngine.stopMusic();
        cc.audioEngine.playEffect(this.spaceshipSound, false);
    }
   
    startScaleAnimation() {
        // 获取要进行动作的节点
        
        let spriteNode = cc.find("Canvas/spaceship"); // 替换为你的节点路径
        console.log(spriteNode);
    
        // 定义动作的目标缩放比例和持续时间
        let targetScale = 0.01; // 最终缩放比例
        let duration = 2.5; // 动作持续时间，单位为秒
    
        // 创建一个ScaleTo动作，让Sprite逐渐缩小到目标缩放比例
        let scaleAction = cc.scaleTo(duration, targetScale);
        let  moveAction = cc.moveTo(duration, cc.v2(0,13));
        let loadAction = cc.moveTo(1, cc.v2(0,0));
    
        // 运行动作
        let ActionSequnce = cc.callFunc(function(){
            cc.director.loadScene(GlobalData.map);
        });

        spriteNode.runAction(cc.sequence(moveAction,loadAction,ActionSequnce));
        // spriteNode.runAction(moveAction);
        spriteNode.runAction(scaleAction);

    }

    start() {

    }

    update(dt: number) {}

}