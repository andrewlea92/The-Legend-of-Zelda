const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({type:cc.Camera})
    camera: cc.Camera = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad() {
    //     this.node.on('click', ()=>{
    //         cc.director.loadScene('bag');
    //     });
    // }
    onLoad() {
        const button = this.getComponent(cc.Button);
        button.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    }
    
    onButtonClick() {
        cc.director.loadScene('universe');
    }

    start () {

    }

    update (dt) {
        // console.log(this.node.x);
        // console.log(this.node.y);
    }
}
