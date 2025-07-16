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

    public code:string = null;
    public yes:cc.Button = null;
    public no:cc.Button = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.yes = cc.find('Canvas/yes').getComponent(cc.Button);
        this.yes.node.on('click',this.handle,this);
        this.no = cc.find('Canvas/no').getComponent(cc.Button);
        this.no.node.on('click',this.nope,this);
    }

    handle(){
        if(this.code == 'tk888')
        {

            if(GlobalData.pokewoman.length < 6){
                GlobalData.pokewoman.push(3);
                GlobalData.myPokewomanHP[GlobalData.pokewoman.length-1] = (GlobalData.pokewomanBaseHP[GlobalData.pokewoman[GlobalData.pokewoman.length-1]] + 
                GlobalData.level*GlobalData.pokewomanHPscale[GlobalData.pokewoman[GlobalData.pokewoman.length-1]])
                GlobalData.fullHP[GlobalData.pokewoman.length-1] = GlobalData.myPokewomanHP[GlobalData.pokewoman.length-1]; 
            }else{
                GlobalData.toCapture = true;
                GlobalData.toCaptureID = 3;
                cc.director.loadScene('bag');
            }
            cc.director.loadScene(GlobalData.map);
        }
        else
        {
            cc.error('wrong code');
        }
    }

    nope(){
        cc.director.loadScene(GlobalData.map);
    }
    update (dt) {
        this.code = cc.find('Canvas/e1/label').getComponent(cc.Label).string;
    }
}
