import GlobalData from "./GlobalData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({type:cc.Node})
    player: cc.Node = null;

    @property({type:cc.Camera})
    camera: cc.Camera = null;
    onLoad() {

        this.node.setPosition(GlobalData.cameraPosX,GlobalData.cameraPosY);
    }
    start () {
        
    }

    update (dt) {
        this.node.x = this.player.x ;
        this.node.y = this.player.y ;
    }
}
