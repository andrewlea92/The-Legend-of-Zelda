import GlobalData from "./GlobalData";

const { ccclass, property } = cc._decorator;
declare const firebase: any;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        var uid = GlobalData.uid;
        const database = firebase.database();
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/select/dong1/dong1_btn').on('click', () => {
            GlobalData.pokewoman.push(0);
            GlobalData.initializeHPArrays();
            firebase.database().ref('user').child(GlobalData.uid).update({
                myArray: [0],
                curHP: GlobalData.myPokewomanHP,
                fullHP: GlobalData.fullHP,
            });
            
            cc.director.loadScene('main');
        });
        cc.find('Canvas/select/dong2/dong2_btn').on('click', () => {
                GlobalData.pokewoman.push(1);
                console.log(GlobalData.pokewoman.length);
                GlobalData.initializeHPArrays();
                firebase.database().ref('user').child(GlobalData.uid).update({
                    myArray: [1],
                    curHP: GlobalData.myPokewomanHP,
                    fullHP: GlobalData.fullHP,
                });
                
                cc.director.loadScene('main');
            });
        cc.find('Canvas/select/dong3/dong3_btn').on('click', () => {
                GlobalData.pokewoman.push(2);
                GlobalData.initializeHPArrays();
                firebase.database().ref('user').child(GlobalData.uid).update({
                    myArray: [2],
                    curHP: GlobalData.myPokewomanHP,
                    fullHP: GlobalData.fullHP,
                });
            
                cc.director.loadScene('main');
        });
        // cc.find('Canvas/logout').on('click', () => {
        //     cc.director.loadScene('login');
        // });
        
    }

    start() {
    }

}
