// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GlobalData from "./GlobalData";

const {ccclass, property} = cc._decorator;
declare const firebase : any;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    public email:string = null;
    public password:string = null;
    public login:cc.Button = null;
    public toRegister:cc.Button = null;
    public toLeaderBoard:cc.Button = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.login = cc.find('login').getComponent(cc.Button);
        this.login.node.on('click',this.handleLogin,this);
        this.toRegister = cc.find('register').getComponent(cc.Button);
        this.toRegister.node.on('click',this.toRegisterPage,this);
        this.toLeaderBoard = cc.find('leaderboard').getComponent(cc.Button);
        this.toLeaderBoard.node.on('click',this.toLeaderBoardPage,this);
    }

    handleLogin(){
        GlobalData.nodeToDestroy = [];
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
        GlobalData.uid = userCredential.user.uid;
        
        const database = firebase.database();
        const userRef = database.ref('user').child(GlobalData.uid);
        
        userRef.once('value', (snapshot) => {
            const userData = snapshot.val();
            console.log(userData);
            if (userData && userData.myArray) {
                GlobalData.pokewoman = userData.myArray;
                console.log(GlobalData.pokewoman);
            }
            if(userData && userData.level){
                GlobalData.level = userData.level;
                console.log(userData.level)
            }
            if(userData && userData.exp){
                GlobalData.exp = userData.exp;
                console.log(userData.exp);
            }
            if(userData && userData.curHP){
                GlobalData.myPokewomanHP = userData.curHP;
                console.log(GlobalData.myPokewomanHP);
            }
            if(userData && userData.fullHP){
                GlobalData.fullHP = userData.fullHP;
                console.log(GlobalData.fullHP);
            }
            
            else {
                console.log("myArray not found in user data");
            }
            
            console.log(GlobalData.uid);
            cc.director.loadScene('main');
        });
    })
    .catch((error) => {
        console.log(error);
    });
    }

    toRegisterPage(){
        cc.director.loadScene('register');
    }
    toLeaderBoardPage(){
        cc.director.loadScene('leaderboard');
    }
    update (dt) {
        this.email = cc.find('account/label').getComponent(cc.Label).string;
        this.password = cc.find('password/label').getComponent(cc.Label).string;
    }
}
