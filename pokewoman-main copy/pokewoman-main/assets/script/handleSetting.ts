// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GlobalData from "./GlobalData";
declare const firebase : any ;
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Slider)
    volume_slider: cc.Slider = null;

    @property(cc.Button)
    save: cc.Button = null;

    @property(cc.Button)
    quit: cc.Button = null;

    @property(cc.Button)
    back: cc.Button = null;

    @property(cc.Label)
    level: cc.Label = null;
    
    @property(cc.ProgressBar)
    exp : cc.ProgressBar = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.save.node.on('click',this.SaveGame,this);
        this.quit.node.on('click',this.quitGame,this);
        this.back.node.on('click',this.backToMap,this);
        this.volume_slider.progress = GlobalData.volume;
        this.level.string = 'Level : Lv.'+ GlobalData.level;
        this.exp.progress = GlobalData.exp/GlobalData.level_exp[GlobalData.level-1];
    }

    SaveGame() {
        const uid = GlobalData.uid;
        const database = firebase.database();
        const userRef = database.ref().child('user').child(uid);
        userRef.child('myArray').set(GlobalData.pokewoman)
            .then(() => {
                console.log('myArray saved successfully');
            })
            .catch((error) => {
                console.error('Error saving myArray:', error);
            });
        userRef.child('level').set(GlobalData.level)
            .then(() =>{
                console.log('level saved successfully');
            })
            .catch((error)=>{
                console.log('error saving level',error);
            });
        userRef.child('exp').set(GlobalData.exp)
            .then(() =>{
                console.log('exp saved successfully');
            })
            .catch((error)=>{
                console.log('error saving exp',error);
            });
        userRef.child('curHP').set(GlobalData.myPokewomanHP)
            .then(() =>{
                console.log('exp saved successfully');
            })
            .catch((error)=>{
                console.log('error saving exp',error);
            });
        userRef.child('fullHP').set(GlobalData.fullHP)
            .then(() =>{
                console.log('exp saved successfully');
            })
            .catch((error)=>{
                console.log('error saving exp',error);
            });
        userRef.child('win').set(GlobalData.winNum)
            .then(() =>{
                console.log('winNum saved successfully');
            })
            .catch((error)=>{
                console.log('error saving exp',error);
            });
    }
    quitGame(){
        GlobalData.uid = "";
        const auth = firebase.auth();
        auth.signOut().then(() => {
            // User signed out successfully
            cc.audioEngine.stopMusic();
            GlobalData.nodeToDestroy = [];
            GlobalData.isEnenmyBoss2 = false;
            GlobalData.isBoss1 = false;
            GlobalData.isEnenmyMagic = false;
            GlobalData.isEnenmyRed = false;
            GlobalData.isEnenmyMagic = false;
            cc.director.loadScene('login');
          }).catch((error) => {
            // An error occurred while signing out
            console.error("Sign out error:", error);
          });
    }
    backToMap(){
        cc.director.loadScene(GlobalData.map);
    }
    start () {

    }

    update (dt) {
        GlobalData.volume = this.volume_slider.progress;
    }
}
