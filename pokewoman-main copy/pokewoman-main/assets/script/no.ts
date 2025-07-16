const {ccclass, property} = cc._decorator;
import GameManager from "./gamemanager";
import GlobalData from "./GlobalData";

@ccclass
export default class No extends cc.Component {

    @property
    text: string = 'hello';

    @property(cc.Integer)
    moveSpeed: number = 1;

    @property(cc.Float)
    circleRadius: number = 50; // 围绕半径

    @property(cc.Float)
    angularSpeed: number = 60; // 角速度，控制每秒围绕的角度

    //@property(cc.Animation)
    animation = null; // 动画组件

    private isBattle: boolean = false;

    private targetMan: cc.Node = null; // 目标man节点
    private angle: number = 0; // 当前角度
    private updateTimer: number = 0; // 更新位置的计时器

    start() {
        // 获取场景中的"man"节点
        this.targetMan = cc.find("Canvas/man");

        // 播放 "no" 动画
        
    }

    onLoad(){
        this.animation = this.getComponent(cc.Animation);
    }

    update(dt: number) {
        // console.log("this.animation:", this.animation);
        if (this.animation && !this.animation.getAnimationState("no").isPlaying) {
            this.animation.play("no");
        }
        // 如果目标man节点存在，则围绕其移动
        if (this.targetMan) {
            // 计算当前位置与目标位置之间的向量
            const targetPos = this.targetMan.position;
            const currentPos = this.node.position;
            const direction = targetPos.sub(currentPos);

            // 计算当前位置与目标位置之间的距离
            const distance = direction.mag();

            if (distance > this.circleRadius) {
                // 根据移动速度和时间间隔更新位置
                const moveDistance = direction.normalize().mul(this.moveSpeed * dt);
                this.node.position = currentPos.add(moveDistance);
            } else {
                // 每隔一段时间围绕目标运动一次
                this.updateTimer += dt;
                const updateInterval = 0.005; // 更新位置的时间间隔

                if (this.updateTimer >= updateInterval) {
                    this.updateTimer -= updateInterval;

                    // 围绕目标运动
                    const angleIncrement = this.angularSpeed * updateInterval;
                    this.angle = (this.angle + angleIncrement) % 360; // 增加角度并限制在0-360范围内

                    // 根据角度和半径计算新位置
                    const radians = cc.misc.degreesToRadians(this.angle);
                    const offsetX = Math.cos(radians) * this.circleRadius;
                    const offsetY = Math.sin(radians) * this.circleRadius;
                    const circlePosition = cc.v2(targetPos.x + offsetX, targetPos.y + offsetY);
                    this.node.position = cc.v3(circlePosition.x, circlePosition.y, this.node.position.z);
                }
            }
        }
    }
}