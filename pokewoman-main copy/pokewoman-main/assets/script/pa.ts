const {ccclass, property} = cc._decorator;
import GameManager from "./gamemanager";
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({type:cc.Camera})
    camera: cc.Camera = null;

    @property([cc.SpriteFrame])
    sprite: cc.SpriteFrame[] = [];

    @property(GameManager)
    Gamemanger: GameManager = null;


    flag =0;
    onLoad() {
        const button = this.getComponent(cc.Button);
        button.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    }
    
    onButtonClick() {
        if(this.flag==0)
        {
            this.flag = 1;  
            this.Gamemanger.palse=true;
            this.getComponent(cc.Sprite).spriteFrame = this.sprite[1];
        }
        else if(this.flag==1)
        {
            this.flag = 0;  
            this.Gamemanger.palse=false;
            this.getComponent(cc.Sprite).spriteFrame = this.sprite[0];
        }
    }

    start () {

    }

    update (dt) {
    }
}
