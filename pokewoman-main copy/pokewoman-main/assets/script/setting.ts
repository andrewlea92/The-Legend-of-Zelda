// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html



const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  
    public setting_btn : cc.Button = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.setting_btn = this.getComponent(cc.Button);
        this.setting_btn.node.on('click',this.toSetting,this);
    }

    start () {

    }
    toSetting(){
        cc.director.loadScene('setting');
    }
    // update (dt) {}
}
