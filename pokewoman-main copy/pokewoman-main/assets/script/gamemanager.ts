const { ccclass, property } = cc._decorator;

import GlobalData from '../script/GlobalData';
declare const firebase: any;
@ccclass
export default class GameManager extends cc.Component {
    
    palse=false;

    onLoad() {
        
    }
    update(){
        if(GlobalData.exp >= GlobalData.level_exp[GlobalData.level-1]){
            GlobalData.exp -= GlobalData.level_exp[GlobalData.level-1];
            GlobalData.level += 1;
            cc.find('Canvas/Main Camera/level up').active = true;
            cc.find('Canvas/Main Camera/level up').getComponent(cc.Animation).play();
            this.scheduleOnce(()=>{
                cc.find('Canvas/Main Camera/level up').active = false;
            },1.2)
            GlobalData.initializeHPArrays();
        }
    }


}
