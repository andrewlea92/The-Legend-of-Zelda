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
    public email:string = null;
    public password:string = null;
    public register:cc.Button = null;
    public toLogin:cc.Button = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.register = cc.find('register').getComponent(cc.Button);
        this.register.node.on('click',this.handleRegister,this);
        this.toLogin = cc.find('login').getComponent(cc.Button);
        this.toLogin.node.on('click',this.toLoginPage,this);
    }

    handleRegister(){
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(this.email,this.password)
        .then((userCredential)=>{
            GlobalData.uid = userCredential.user.uid
            const database = firebase.database();
            firebase.database().ref('user').child(GlobalData.uid).set({
                level: GlobalData.level,
                myArray: [],
                exp: GlobalData.exp,
                curHP: [],
                fullHP: [],
                win: 0,
                name: this.email.split('@')[0]
            });
            cc.director.loadScene('select');
        })
        .catch((err)=>{
            console.log(err.message);
            cc.error(err.message);
        });
    }

    toLoginPage(){
        cc.director.loadScene('login');
    }
    update (dt) {
        this.email = cc.find('account/label').getComponent(cc.Label).string;
        this.password = cc.find('password/label').getComponent(cc.Label).string;
    }
}
