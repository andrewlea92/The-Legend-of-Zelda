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

    // LIFE-CYCLE CALLBACKS:
    @property
    nowchoose: number = 0;

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
        this.node.getChildByName('select').active = false;
        this.node.getChildByName('select_label').active = false;
        // iterate through bag
        // i : bag.index , child.index
        console.log(this.bag);
        for (let i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            // scale 0.1
            this.node.getChildByName('Sprite' + i).scale = 0.05;
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
            this.node.getChildByName('Sprite6').width = 36;
            this.node.getChildByName('Sprite6').height = 40;

            this.update_s6(this.bag[0]);
            this.nowchoose=0;
            // this.nm.string = "岩東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite1').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[1]];
            this.node.getChildByName('Sprite6').active = true;
            this.node.getChildByName('Sprite6').width = 36;
            this.node.getChildByName('Sprite6').height = 40;
            this.update_s6(this.bag[1]);
            this.nowchoose=1;
            // this.nm.string = "炎東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite2').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[2]];
            this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            this.node.getChildByName('Sprite6').width = 36;
            this.node.getChildByName('Sprite6').height = 40;
            this.update_s6(this.bag[2]);
            this.nowchoose=2;
            // this.nm.string = "嚴冬勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite3').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[3]];
            this.node.getChildByName('Sprite6').active = true;
            this.node.getChildByName('Sprite6').width = 36;
            this.node.getChildByName('Sprite6').height = 40;
            this.update_s6(this.bag[3]);
            this.nowchoose=3;
        });
        cc.find('Canvas/block/Sprite4').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[4]];
            this.node.getChildByName('Sprite6').active = true;
            this.node.getChildByName('Sprite6').width = 36;
            this.node.getChildByName('Sprite6').height = 40;
            this.update_s6(this.bag[4]);
            this.nowchoose=4;
        });
        cc.find('Canvas/block/Sprite5').on('click', () => {
            this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[5]];
            this.node.getChildByName('Sprite6').active = true;
            this.node.getChildByName('Sprite6').width = 36;
            this.node.getChildByName('Sprite6').height = 40;
            this.update_s6(this.bag[5]);
            this.nowchoose=5;
        });
        cc.find('Canvas/block/select').on('click', () => {
            GlobalData.myelf = this.nowchoose;
            cc.director.loadScene("battle");
        });
    }
    update_s6(a)  
    {
        this.node.getChildByName('name').active = true;
        this.node.getChildByName('atk').active = true;
        this.node.getChildByName('atk_num').active = true;
        this.node.getChildByName('hp').active = true;
        this.node.getChildByName('hp_num').active = true;
        this.node.getChildByName('select').active = true;
        this.node.getChildByName('select_label').active = true;
        console.log("hi:",a);
        if(a==0)
        {
            this.nm.string = "岩東勇";
            this.atk_num.string = "20";
            this.hp_num.string = "100";
        }
        else if(a==1)
        {
            this.nm.string = "炎東勇";
            this.atk_num.string = "100";
            this.hp_num.string = "20";
        }
        else if(a==2)
        {
            this.nm.string = "嚴冬勇";
            this.atk_num.string = "50";
            this.hp_num.string = "50";
        }
        else if(a==3)
        {
            this.nm.string = "魔關羽";
            this.atk_num.string = "300";
            this.hp_num.string = "10";
        }
        else if(a==6)
        {
            this.nm.string = "fishKing";
            this.atk_num.string = "10";
            this.hp_num.string = "10";
        }
        // console.log(this.nm.string);
    }
    update (dt) {
        // console.log(this.nm.string);
    }
}