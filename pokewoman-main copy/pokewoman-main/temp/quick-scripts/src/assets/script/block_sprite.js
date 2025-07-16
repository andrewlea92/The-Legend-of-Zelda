"use strict";
cc._RF.push(module, 'b52d8j9EgdGj7Uu84EwFZEQ', 'block_sprite');
// script/block_sprite.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GlobalData_1 = require("./GlobalData");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.sprite = [];
        _this.index = 0;
        _this.healthBar = null;
        _this.acceptButton = null;
        _this.cancelButton = null;
        _this.informText = null;
        _this.inform = null;
        /* get a return array from other script */
        // bag: number[] = [3, 4, 1, 2, 5, 0];
        _this.bag = GlobalData_1.default.pokewoman;
        // LIFE-CYCLE CALLBACKS:
        _this.num = 0;
        _this.nm = null;
        _this.atk_num = null;
        _this.hp_num = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.nm = cc.find("Canvas/block/name").getComponent(cc.Label);
        this.atk_num = cc.find("Canvas/block/atk_num").getComponent(cc.Label);
        this.hp_num = cc.find("Canvas/block/hp_num").getComponent(cc.Label);
        cc.director.getPhysicsManager().enabled = true;
        var uid = GlobalData_1.default.uid;
        // console.log("uid:",uid);
        firebase.database().ref(uid + 'pokewoman').on('value', function (snapshot) {
            _this.num = snapshot.val();
            // console.log(this.num);
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
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
        for (var i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            // scale 0.1
            //this.node.getChildByName('Sprite' + i).scale = 0.3;
            this.node.getChildByName('Sprite' + i).width = 80;
            this.node.getChildByName('Sprite' + i).height = 90;
            console.log("i:", i);
            console.log(this.node.getChildByName('Sprite' + i).width);
            console.log(this.node.getChildByName('Sprite' + i).height);
            // onload click event
            if (this.bag[i] == null) {
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
        cc.find('Canvas/block/Sprite0').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[0]];
            _this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            _this.node.getChildByName('Sprite6').width = 160;
            _this.node.getChildByName('Sprite6').height = 185;
            if (GlobalData_1.default.toCapture == true) {
                _this.inform.active = true;
                _this.informText.string = "確定要將" + GlobalData_1.default.pokewomanName[_this.bag[0]] + "放生嗎?";
                _this.acceptButton.node.on('click', function () {
                    GlobalData_1.default.pokewoman[0] = GlobalData_1.default.toCaptureID;
                    _this.node.getChildByName('Sprite0').getComponent(cc.Sprite).spriteFrame = _this.sprite[GlobalData_1.default.toCaptureID];
                    GlobalData_1.default.toCapture = false;
                    _this.inform.active = false;
                    GlobalData_1.default.myPokewomanHP[0] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[0]] + GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[0]]);
                    GlobalData_1.default.fullHP[0] = GlobalData_1.default.myPokewomanHP[0];
                });
                _this.cancelButton.node.on('click', function () {
                    _this.inform.active = false;
                });
            }
            _this.update_s6(0);
            // this.nm.string = "岩東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite1').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[1]];
            _this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            _this.node.getChildByName('Sprite6').width = 160;
            _this.node.getChildByName('Sprite6').height = 185;
            if (GlobalData_1.default.toCapture == true) {
                _this.inform.active = true;
                _this.informText.string = "確定要將" + GlobalData_1.default.pokewomanName[_this.bag[1]] + "放生嗎?";
                _this.acceptButton.node.on('click', function () {
                    GlobalData_1.default.pokewoman[1] = GlobalData_1.default.toCaptureID;
                    _this.node.getChildByName('Sprite1').getComponent(cc.Sprite).spriteFrame = _this.sprite[GlobalData_1.default.toCaptureID];
                    _this.node.getChildByName('Sprite1').width = 40;
                    _this.node.getChildByName('Sprite1').height = 40;
                    GlobalData_1.default.toCapture = false;
                    _this.inform.active = false;
                    GlobalData_1.default.myPokewomanHP[1] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[1]] + GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[1]]);
                    GlobalData_1.default.fullHP[1] = GlobalData_1.default.myPokewomanHP[1];
                });
                _this.cancelButton.node.on('click', function () {
                    _this.inform.active = false;
                });
            }
            _this.update_s6(1);
            // this.nm.string = "炎東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite2').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[2]];
            _this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            _this.node.getChildByName('Sprite6').width = 160;
            _this.node.getChildByName('Sprite6').height = 185;
            if (GlobalData_1.default.toCapture == true) {
                _this.inform.active = true;
                _this.informText.string = "確定要將" + GlobalData_1.default.pokewomanName[_this.bag[2]] + "放生嗎?";
                _this.acceptButton.node.on('click', function () {
                    GlobalData_1.default.pokewoman[2] = GlobalData_1.default.toCaptureID;
                    _this.node.getChildByName('Sprite2').getComponent(cc.Sprite).spriteFrame = _this.sprite[GlobalData_1.default.toCaptureID];
                    _this.node.getChildByName('Sprite2').width = 40;
                    _this.node.getChildByName('Sprite2').height = 40;
                    GlobalData_1.default.toCapture = false;
                    _this.inform.active = false;
                    GlobalData_1.default.myPokewomanHP[2] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[2]] + GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[2]]);
                    GlobalData_1.default.fullHP[2] = GlobalData_1.default.myPokewomanHP[2];
                });
                _this.cancelButton.node.on('click', function () {
                    _this.inform.active = false;
                });
            }
            _this.update_s6(2);
            // this.nm.string = "嚴冬勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite3').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[3]];
            _this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            _this.node.getChildByName('Sprite6').width = 160;
            _this.node.getChildByName('Sprite6').height = 185;
            if (GlobalData_1.default.toCapture == true) {
                _this.inform.active = true;
                _this.informText.string = "確定要將" + GlobalData_1.default.pokewomanName[_this.bag[3]] + "放生嗎?";
                _this.acceptButton.node.on('click', function () {
                    GlobalData_1.default.pokewoman[3] = GlobalData_1.default.toCaptureID;
                    _this.node.getChildByName('Sprite3').getComponent(cc.Sprite).spriteFrame = _this.sprite[GlobalData_1.default.toCaptureID];
                    GlobalData_1.default.toCapture = false;
                    _this.inform.active = false;
                    GlobalData_1.default.myPokewomanHP[3] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[3]] + GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[3]]);
                    GlobalData_1.default.fullHP[3] = GlobalData_1.default.myPokewomanHP[3];
                });
                _this.cancelButton.node.on('click', function () {
                    _this.inform.active = false;
                });
            }
            _this.update_s6(3);
        });
        cc.find('Canvas/block/Sprite4').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[4]];
            _this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            _this.node.getChildByName('Sprite6').width = 160;
            _this.node.getChildByName('Sprite6').height = 185;
            if (GlobalData_1.default.toCapture == true) {
                _this.inform.active = true;
                _this.informText.string = "確定要將" + GlobalData_1.default.pokewomanName[_this.bag[4]] + "放生嗎?";
                _this.acceptButton.node.on('click', function () {
                    GlobalData_1.default.pokewoman[4] = GlobalData_1.default.toCaptureID;
                    _this.node.getChildByName('Sprite4').getComponent(cc.Sprite).spriteFrame = _this.sprite[GlobalData_1.default.toCaptureID];
                    GlobalData_1.default.toCapture = false;
                    _this.inform.active = false;
                    GlobalData_1.default.myPokewomanHP[4] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[4]] + GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[4]]);
                    GlobalData_1.default.fullHP[4] = GlobalData_1.default.myPokewomanHP[4];
                });
                _this.cancelButton.node.on('click', function () {
                    _this.inform.active = false;
                });
            }
            _this.update_s6(4);
        });
        cc.find('Canvas/block/Sprite5').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[5]];
            _this.node.getChildByName('Sprite6').active = true;
            // this.node.getChildByName('Sprite6').scale = 0.1;
            _this.node.getChildByName('Sprite6').width = 160;
            _this.node.getChildByName('Sprite6').height = 185;
            if (GlobalData_1.default.toCapture == true) {
                _this.inform.active = true;
                _this.informText.string = "確定要將" + GlobalData_1.default.pokewomanName[_this.bag[5]] + "放生嗎?";
                _this.acceptButton.node.on('click', function () {
                    GlobalData_1.default.pokewoman[5] = GlobalData_1.default.toCaptureID;
                    _this.node.getChildByName('Sprite5').getComponent(cc.Sprite).spriteFrame = _this.sprite[GlobalData_1.default.toCaptureID];
                    GlobalData_1.default.toCapture = false;
                    _this.inform.active = false;
                    GlobalData_1.default.myPokewomanHP[5] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[5]] + GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[5]]);
                    GlobalData_1.default.fullHP[5] = GlobalData_1.default.myPokewomanHP[5];
                });
                _this.cancelButton.node.on('click', function () {
                    _this.inform.active = false;
                });
            }
            _this.update_s6(5);
        });
    };
    NewClass.prototype.update_s6 = function (a) {
        this.node.getChildByName('name').active = true;
        this.node.getChildByName('atk').active = true;
        this.node.getChildByName('atk_num').active = true;
        this.node.getChildByName('hp').active = true;
        this.node.getChildByName('hp_num').active = true;
        this.healthBar.node.active = true;
        console.log("hi:", a);
        this.nm.string = GlobalData_1.default.pokewomanName[GlobalData_1.default.pokewoman[a]];
        this.healthBar.progress = GlobalData_1.default.myPokewomanHP[a] / GlobalData_1.default.fullHP[a];
        this.atk_num.string = GlobalData_1.default.pokewomanAttack[a].toString();
        this.hp_num.string = GlobalData_1.default.fullHP[a].toString();
    };
    NewClass.prototype.update = function (dt) {
        // console.log(this.nm.string);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "sprite", void 0);
    __decorate([
        property
    ], NewClass.prototype, "index", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "healthBar", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "acceptButton", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "cancelButton", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "informText", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "inform", void 0);
    __decorate([
        property
    ], NewClass.prototype, "num", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "nm", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "atk_num", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "hp_num", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();