// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GlobalData from "./GlobalData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    runAway: cc.Button = null;

    @property(cc.AudioClip)
    runAwaySound: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.runAway.node.on('click', () => {
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.runAwaySound, false);
            this.scheduleOnce(function() {
                cc.director.loadScene(GlobalData.map);
            }, 3.5);
        });
    }

    start () {

    }

    // update (dt) {}
}
