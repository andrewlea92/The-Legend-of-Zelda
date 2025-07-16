const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    animation= null; // 动画组件

    start () {
        
    }

    onLoad(){
        this.animation = this.getComponent(cc.Animation);
    }

    update (dt) {
        if (this.animation && !this.animation.getAnimationState("moyan_default").isPlaying) {
            this.animation.play("moyan_default");
        }
    }
}
