import GlobalData from "./GlobalData";

const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/p1').on('click', () => {
                GlobalData.map = "map2";
                GlobalData.PlayerPosX = 29;
                GlobalData.PlayerPosY = -62;
                GlobalData.Player2PosX = 35;
                GlobalData.Player2PosY = -62;
                cc.director.loadScene('universe_changeScene');
        });
        cc.find('Canvas/p2').on('click', () => {
                GlobalData.map = "map3";
                GlobalData.PlayerPosX = 113;
                GlobalData.PlayerPosY = -62;
                GlobalData.Player2PosX = 95;
                GlobalData.Player2PosY = -25;
                cc.director.loadScene('universe_changeScene');
            });
        if(GlobalData.isEnenmyFish && GlobalData.isBoss1 && GlobalData.isEnenmyMagic && GlobalData.isEnenmyRed){
            cc.find('Canvas/p3').active = true;
            cc.find('Canvas/p3').on('click', () => {
                    GlobalData.map = "map4";
                    GlobalData.PlayerPosX = 113;
                    GlobalData.PlayerPosY = -62;
                    GlobalData.Player2PosX = 86;
                    GlobalData.Player2PosY = -62;
                    cc.director.loadScene('universe_changeScene');
            });     
        }
    }

    start() {
    }

}