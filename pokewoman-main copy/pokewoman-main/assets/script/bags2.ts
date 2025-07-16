const {ccclass, property} = cc._decorator;
import GlobalData from "./GlobalData";
declare const firebase: any;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property([cc.SpriteFrame])
    sprite: cc.SpriteFrame[] = [];

    @property
    index: number = 0;

    /* get a return array from other script */
    // bag: number[] = [3, 4, 1, 2, 5, 0];
    bag: number[] =GlobalData.pokewoman;

    // LIFE-CYCLE CALLBACKS:
    @property
    num: number = 0;

    @property(cc.Label)
    nm: cc.Label = null;
    @property(cc.Label)
    atk_num: cc.Label = null;
    @property(cc.Label)
    hp_num: cc.Label = null;
    @property(cc.Node)
    runAway: cc.Node = null;
    @property
    nowchoose: number = 0;

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.runAway.active = false;
        var uid = GlobalData.uid;  
        firebase.database().ref(uid + 'pokewoman').on('value', snapshot => {
            this.num = snapshot.val();
        });
    }

    start () {
        for (let i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            this.node.getChildByName('Sprite' + i).width = 80;
            this.node.getChildByName('Sprite' + i).height = 90;
            console.log("i:" ,i);
            console.log(this.node.getChildByName('Sprite' + i).width);
            console.log(this.node.getChildByName('Sprite' + i).height);
            if(this.bag[i]==null){
                this.node.getChildByName('Sprite' + i).active = false;
            }

        }
        cc.find('Canvas/bags2/Sprite0').on('click', () => {
            this.nowchoose=0;
        });
        cc.find('Canvas/bags2/Sprite1').on('click', () => {
            this.nowchoose=1;
        });
        cc.find('Canvas/bags2/Sprite2').on('click', () => {
            this.nowchoose=2;
        });
        cc.find('Canvas/bags2/Sprite3').on('click', () => {
            this.nowchoose=3;
        });
        cc.find('Canvas/bags2/Sprite4').on('click', () => {
            this.nowchoose=4;
        });
        cc.find('Canvas/bags2/Sprite5').on('click', () => {
            this.nowchoose=5;
        });
        cc.find('Canvas/bags2/confirm').on('click', () => {
            GlobalData.myelf = this.nowchoose;
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
            this.runAway.active = true;
        });
        cc.find('Canvas/bags2/cancel').on('click', () => {
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
            this.runAway.active = true;
        });
    }
    update(dt) {
        if (this.nowchoose <= 5) {
            const spriteNode = this.node.getChildByName('Sprite' + this.nowchoose);
            const spriteComponent = spriteNode.getComponent(cc.Sprite);
            
            // Calculate a color variation using a time-based value
            const colorOffset = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
            
            // Create a new color with the varying offset
            const newColor = new cc.Color(colorOffset * 255, colorOffset *255, colorOffset *255);
            
            // Assign the new color to the sprite's color property
            spriteComponent.node.color = newColor;
        }
    }
}