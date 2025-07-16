import GlobalData from "./GlobalData";

const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {


    onLoad() {
        
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/block/brown/back').on('click', () => {
                GlobalData.toCapture = false;
                cc.director.loadScene(GlobalData.map);
        });
    }

    start() {
    }

    // update (dt) {}
}
