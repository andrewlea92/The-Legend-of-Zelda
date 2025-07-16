import Man from "./man";
const {ccclass, property} = cc._decorator;
import GameManager from "./gamemanager";
@ccclass
export default class Enemy extends cc.Component {
    private enemySpeed: number = 50;

    anim = null;

    @property(Man)
    man: Man = null;

    @property(GameManager)
    Gamemanger: GameManager = null;

    start() {
        
    }

    playAnimation(animationName: string) {
        if (this.anim && this.anim.getAnimationState(animationName).isPlaying) {
            return;
        }

        this.anim.play(animationName);
    }

    stopAnimation(animationName: string) {
        if (this.anim && this.anim.getAnimationState(animationName).isPlaying) {
            this.anim.stop(animationName);
        }
    }

    update(dt) {
        //cc.log("dong_move");
        if (this.Gamemanger.palse == false) {
            if(this.node.name == "4"){
                if(!this.anim.getAnimationState("dong_move").isPlaying) this.playAnimation("dong_move")
            }
            else if(this.node.name == "5")
            if(!this.anim.getAnimationState("red_dong_move").isPlaying) this.playAnimation("red_dong_move");
            if(this.node.name == "4"){
                if(!this.anim.getAnimationState("dong_move").isPlaying) this.playAnimation("dong_move")
            }
            else if(this.node.name == "7")
            if(!this.anim.getAnimationState("fish").isPlaying) this.playAnimation("fish");
            //cc.log("dong_move");
        
           // this.playAnimation("dong_move");  
        this.node.x = this.node.x + this.enemySpeed * dt;
        }
    }

    
    onBeginContact(contact, self, other) {
        if(other.tag != 2) {
                this.enemySpeed *= -1;
                this.node.scaleX *= -1;
                
            }
            else{
                this.enemySpeed *= 0;
                if(self.tag==7)
                {
                    this.stopAnimation("fish");
                }
                else
                {
                    this.stopAnimation("dong_move");
                }
                if(other.scaleX == this.node.scaleX)
                    this.node.scaleX *= -1;
                else this.node.scaleX *= 1;
            }
    }
    
    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.anim = this.getComponent(cc.Animation); 
  }
}
