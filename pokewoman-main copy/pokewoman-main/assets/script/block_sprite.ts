const {ccclass, property} = cc._decorator;
import GlobalData from "./GlobalData";
declare const firebase: any;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property([cc.SpriteFrame])
    sprite: cc.SpriteFrame[] = [];

    @property
    index: number = 0;

    @property(cc.ProgressBar)
    healthBar: cc.ProgressBar = null;


    @property(cc.Button)
    acceptButton: cc.Button = null;

    @property(cc.Button)
    cancelButton: cc.Button = null;

    @property(cc.Label)
    informText: cc.Label = null;

    @property(cc.Node)
    inform: cc.Node = null;
    /* get a return array from other script */
    // bag: number[] = [3, 4, 1, 2, 5, 0];
    bag: number[] =GlobalData.pokewoman;

    // LIFE-CYCLE CALLBACKS:
    @property
    num: number = 0;

    @property(cc.Label)
    nm: cc.Label = null;
    @property(cc.Label)
    atk_num: cc.Label = null;
    @property(cc.Label)
    hp_num: cc.Label = null;

    onLoad () {
        this.nm = cc.find("Canvas/block/name").getComponent(cc.Label);
        this.atk_num = cc.find("Canvas/block/atk_num").getComponent(cc.Label);
        this.hp_num = cc.find("Canvas/block/hp_num").getComponent(cc.Label);
        cc.director.getPhysicsManager().enabled = true;

        var uid = GlobalData.uid;  
        // console.log("uid:",uid);
        firebase.database().ref(uid + 'pokewoman').on('value', snapshot => {
            this.num = snapshot.val();
            // console.log(this.num);
        });
    }

    start () {
        // this.atk_num.string = "200";
        this.node.getChildByName('Sprite6').active = false;
        this.node.getChildByName('name').active = false;
        this.node.getChildByName('atk').active = false;
        this.node.getChildByName('atk_num').active = false;
        this.node.getChildByName('hp').active = false;
        this.node.getChildByName('hp_num').active = false;
        // iterate through bag
        // i : bag.index , child.index
        console.log(this.bag);
        for (let i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            // scale 0.1
            //this.node.getChildByName('Sprite' + i).scale = 0.3;
            this.node.getChildByName('Sprite' + i).width = 80;
            this.node.getChildByName('Sprite' + i).height = 90;
            console.log("i:" ,i);
            console.log(this.node.getChildByName('Sprite' + i).width);
            console.log(this.node.getChildByName('Sprite' + i).height);

            // onload click event
            if(this.bag[i]==null){
                // console.log("bag[",i,"] is null");
                this.node.getChildByName('Sprite' + i).active = false;
            }

        }
        // Check the value of myArray[0] in Firebase

        // Update spriteFrame based on myArray[0] value
        /*if (this.num === 0) {
            // const spriteFrame0 = cc.resources.get("src/dong0", cc.SpriteFrame);
            // this.getComponent(cc.Sprite).spriteFrame = spriteFrame0;
            // cc.resources.load("test_assets/image/spriteFrame", cc.SpriteFrame, (err, spriteFrame) => {
            //     this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
            cc.loader.loadRes('../src/dong1', cc.SpriteFrame, function (err, spriteFrame) {
                this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        } else if (this.num === 1) {
            // Set spriteFrame to sprite 1
            // Assuming you have a spriteFrame named "sprite1" in your project's assets
            // const spriteFrame1 = cc.resources.get("src/dong0", cc.SpriteFrame);
            // this.getComponent(cc.Sprite).spriteFrame = spriteFrame1;
            cc.loader.loadRes('../src/dong2', cc.SpriteFrame, function (err, spriteFrame) {
                this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        } else if (this.num === 2) {
            // Set spriteFrame to sprite 2
            // Assuming you have a spriteFrame named "sprite2" in your project's assets
            // const spriteFrame2 = cc.resources.get("src/dong0", cc.SpriteFrame);
            // this.getComponent(cc.Sprite).spriteFrame = spriteFrame2;
            cc.loader.loadRes('../src/dong3', cc.SpriteFrame, function (err, spriteFrame) {
                this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }*/
        cc.find('Canvas/block/Sprite0').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[0]];
            this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            this.node.getChildByName('Sprite6').width = 160;
            this.node.getChildByName('Sprite6').height = 185;
            if(GlobalData.toCapture == true){
                
                this.inform.active = true;
                this.informText.string = "確定要將"+GlobalData.pokewomanName[this.bag[0]]+"放生嗎?";
                this.acceptButton.node.on('click', () => {
                    GlobalData.pokewoman[0] = GlobalData.toCaptureID;
                    this.node.getChildByName('Sprite0').getComponent(cc.Sprite).spriteFrame = this.sprite[GlobalData.toCaptureID];
                    GlobalData.toCapture = false;
                    this.inform.active = false;
                    GlobalData.myPokewomanHP[0] = (GlobalData.pokewomanBaseHP[GlobalData.pokewoman[0]] + GlobalData.level * GlobalData.pokewomanHPscale[GlobalData.pokewoman[0]]);
                    GlobalData.fullHP[0] = GlobalData.myPokewomanHP[0];
                });
                this.cancelButton.node.on('click', () => {
                    this.inform.active = false;
                });
            }
            this.update_s6(0);
            // this.nm.string = "岩東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite1').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[1]];
            this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            this.node.getChildByName('Sprite6').width = 160;
            this.node.getChildByName('Sprite6').height = 185;
            if(GlobalData.toCapture == true){
                this.inform.active = true;
                this.informText.string = "確定要將"+GlobalData.pokewomanName[this.bag[1]]+"放生嗎?";
                this.acceptButton.node.on('click', () => {
                    GlobalData.pokewoman[1] = GlobalData.toCaptureID;
                    this.node.getChildByName('Sprite1').getComponent(cc.Sprite).spriteFrame = this.sprite[GlobalData.toCaptureID];
                    this.node.getChildByName('Sprite1').width = 40;
                    this.node.getChildByName('Sprite1').height = 40;
                    GlobalData.toCapture = false;
                    this.inform.active = false;
                    GlobalData.myPokewomanHP[1] = (GlobalData.pokewomanBaseHP[GlobalData.pokewoman[1]] + GlobalData.level * GlobalData.pokewomanHPscale[GlobalData.pokewoman[1]]);
                    GlobalData.fullHP[1] = GlobalData.myPokewomanHP[1];
                });
                this.cancelButton.node.on('click', () => {
                    this.inform.active = false;
                });
            }
            this.update_s6(1);
            // this.nm.string = "炎東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite2').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[2]];
            this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            this.node.getChildByName('Sprite6').width = 160;
            this.node.getChildByName('Sprite6').height = 185;
            if(GlobalData.toCapture == true){
                this.inform.active = true;
                this.informText.string = "確定要將"+GlobalData.pokewomanName[this.bag[2]]+"放生嗎?";
                this.acceptButton.node.on('click', () => {
                    GlobalData.pokewoman[2] = GlobalData.toCaptureID;
                    this.node.getChildByName('Sprite2').getComponent(cc.Sprite).spriteFrame = this.sprite[GlobalData.toCaptureID];
                    this.node.getChildByName('Sprite2').width = 40;
                    this.node.getChildByName('Sprite2').height = 40;
                    GlobalData.toCapture = false;
                    this.inform.active = false;
                    GlobalData.myPokewomanHP[2] = (GlobalData.pokewomanBaseHP[GlobalData.pokewoman[2]] + GlobalData.level * GlobalData.pokewomanHPscale[GlobalData.pokewoman[2]]);
                    GlobalData.fullHP[2] = GlobalData.myPokewomanHP[2];
                });
                this.cancelButton.node.on('click', () => {
                    this.inform.active = false;
                });
            }
            this.update_s6(2);
            // this.nm.string = "嚴冬勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite3').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[3]];
            this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            this.node.getChildByName('Sprite6').width = 160;
            this.node.getChildByName('Sprite6').height = 185;
            if(GlobalData.toCapture == true){
                
                this.inform.active = true;
                this.informText.string = "確定要將"+GlobalData.pokewomanName[this.bag[3]]+"放生嗎?";
                this.acceptButton.node.on('click', () => {
                    GlobalData.pokewoman[3] = GlobalData.toCaptureID;
                    this.node.getChildByName('Sprite3').getComponent(cc.Sprite).spriteFrame = this.sprite[GlobalData.toCaptureID];
                    GlobalData.toCapture = false;
                    this.inform.active = false;
                    GlobalData.myPokewomanHP[3] = (GlobalData.pokewomanBaseHP[GlobalData.pokewoman[3]] + GlobalData.level * GlobalData.pokewomanHPscale[GlobalData.pokewoman[3]]);
                    GlobalData.fullHP[3] = GlobalData.myPokewomanHP[3];
                });
                this.cancelButton.node.on('click', () => {
                    this.inform.active = false;
                });
            }
            this.update_s6(3);
        });
        cc.find('Canvas/block/Sprite4').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[4]];
            this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            this.node.getChildByName('Sprite6').width = 160;
            this.node.getChildByName('Sprite6').height = 185;
            if(GlobalData.toCapture == true){
                
                this.inform.active = true;
                this.informText.string = "確定要將"+GlobalData.pokewomanName[this.bag[4]]+"放生嗎?";
                this.acceptButton.node.on('click', () => {
                    GlobalData.pokewoman[4] = GlobalData.toCaptureID;
                    this.node.getChildByName('Sprite4').getComponent(cc.Sprite).spriteFrame = this.sprite[GlobalData.toCaptureID];
                    GlobalData.toCapture = false;
                    this.inform.active = false;
                    GlobalData.myPokewomanHP[4] = (GlobalData.pokewomanBaseHP[GlobalData.pokewoman[4]] + GlobalData.level * GlobalData.pokewomanHPscale[GlobalData.pokewoman[4]]);
                    GlobalData.fullHP[4] = GlobalData.myPokewomanHP[4];
                });
                this.cancelButton.node.on('click', () => {
                    this.inform.active = false;
                });
            }
            this.update_s6(4);
        });
        cc.find('Canvas/block/Sprite5').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[5]];
            this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            this.node.getChildByName('Sprite6').width = 160;
            this.node.getChildByName('Sprite6').height = 185;
            if(GlobalData.toCapture == true){
                
                this.inform.active = true;
                this.informText.string = "確定要將"+GlobalData.pokewomanName[this.bag[5]]+"放生嗎?";
                this.acceptButton.node.on('click', () => {
                    GlobalData.pokewoman[5] = GlobalData.toCaptureID;
                    this.node.getChildByName('Sprite5').getComponent(cc.Sprite).spriteFrame = this.sprite[GlobalData.toCaptureID];
                    GlobalData.toCapture = false;
                    this.inform.active = false;
                    GlobalData.myPokewomanHP[5] = (GlobalData.pokewomanBaseHP[GlobalData.pokewoman[5]] + GlobalData.level * GlobalData.pokewomanHPscale[GlobalData.pokewoman[5]]);
                    GlobalData.fullHP[5] = GlobalData.myPokewomanHP[5];
                });
                this.cancelButton.node.on('click', () => {
                    this.inform.active = false;
                });
            }
            this.update_s6(5);
        });
    }
    update_s6(a)  
    {
        this.node.getChildByName('name').active = true;
        this.node.getChildByName('atk').active = true;
        this.node.getChildByName('atk_num').active = true;
        this.node.getChildByName('hp').active = true;
        this.node.getChildByName('hp_num').active = true;
        this.healthBar.node.active = true;
        console.log("hi:",a);
        this.nm.string = GlobalData.pokewomanName[GlobalData.pokewoman[a]];
        this.healthBar.progress = GlobalData.myPokewomanHP[a]/GlobalData.fullHP[a];
        this.atk_num.string = GlobalData.pokewomanAttack[a].toString();
        this.hp_num.string = GlobalData.fullHP[a].toString();
       
    }
    update (dt) {
        // console.log(this.nm.string);
    }
}