"use strict";
cc._RF.push(module, '0a690eqTH9JkbGGdX00Deas', 'battle_man');
// script/battle_man.ts

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
var man_1 = require("./man");
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.battleBgm = null;
        _this.winSound = null;
        _this.loseSound = null;
        _this.red_dong_punch = null;
        _this.mainCamera = null;
        _this.enemy1 = null;
        _this.enemy2 = null;
        _this.enemy3 = null;
        _this.enemy7 = null;
        _this.enemy8 = null;
        _this.myHP = null;
        _this.enemyHP = null;
        _this.man = null;
        _this.sprite = [];
        _this.myLVlabel = null;
        _this.enemyLVlabel = null;
        _this.bag = GlobalData_1.default.pokewoman;
        _this.mylife = GlobalData_1.default.mylife;
        _this.myLife = 100;
        _this.enemyLife = 100;
        _this.isWin = false;
        _this.myTurn = true;
        _this.enemyTurn = false;
        _this.isLose = false;
        _this.enemynum = 0;
        _this.renew = true;
        _this.last_myself = -1;
        _this.skill1Button = null;
        _this.skill2Button = null;
        _this.skill3Button = null;
        _this.skill4Button = null;
        _this.moyanAnimation = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        //cc.find("Canvas/enemy/fire").getComponent(cc.ParticleSystem).resetSystem();
        cc.find('Canvas/skills/bag2').on('click', function () {
            cc.find('Canvas/skills').active = false;
            cc.find('Canvas/bags2').active = true;
        });
        this.skill1Button = cc.find("Canvas/skills/skill1").getComponent(cc.Button);
        this.skill2Button = cc.find("Canvas/skills/skill2").getComponent(cc.Button);
        this.skill3Button = cc.find("Canvas/skills/skill3").getComponent(cc.Button);
        this.skill4Button = cc.find("Canvas/skills/skill4").getComponent(cc.Button);
        this.skill1Button.node.on('click', this.skill1, this);
        this.skill2Button.node.on('click', this.skill2, this);
        this.skill3Button.node.on('click', this.skill3, this);
        this.skill4Button.node.on('click', this.skill4, this);
        this.myLVlabel.string = 'Lv. ' + GlobalData_1.default.level.toString();
        this.myLife = GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf];
    };
    NewClass.prototype.start = function () {
        this.last_myself = GlobalData_1.default.myelf;
        this.enemynum = cc.director.getScene()["enemyNum"];
        if (this.enemynum == 4) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy1;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        else if (this.enemynum == 5) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy2;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        else if (this.enemynum == 6) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy3;
                // cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame.setFlipX(true);
                cc.find("Canvas/enemy").scaleX *= -1;
                cc.find("Canvas/enemy").width = 300;
                cc.find("Canvas/enemy").y = 0;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        else if (this.enemynum == 7) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy7;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        else if (this.enemynum == 8) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy8;
                //cc.find("Canvas/enemy").color = cc.Color.RED;
            }
            cc.find("Canvas/enemy").scaleX *= -1;
            cc.find("Canvas/enemy").width += 50;
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        cc.audioEngine.playMusic(this.battleBgm, true);
        var enemyParticleEffect2 = cc.find("Canvas/enemy/onLoad").getComponent(cc.ParticleSystem);
        if (this.enemynum == 4) {
            console.log("this.enemynum == 4");
            enemyParticleEffect2.playOnLoad = true;
            enemyParticleEffect2.resetSystem();
        }
    };
    NewClass.prototype.update = function (dt) {
        if (this.enemynum == 8) {
            if (!cc.find("Canvas/enemy").getComponent(cc.Animation).getAnimationState("moyan_default").isPlaying
                && this.moyanAnimation) {
                cc.find("Canvas/enemy").getComponent(cc.Animation).play("moyan_default");
            }
        }
        console.log(GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf], GlobalData_1.default.fullHP[GlobalData_1.default.myelf], this.enemyLife, GlobalData_1.default.enemyHPbyID[this.enemynum - 1], this.enemyLV);
        if (this.renew) {
            this.renew = false;
            if (GlobalData_1.default.myelf == 0) {
                cc.find("Canvas/skills/skill1/Background/Label").getComponent(cc.Label).string = "魔法攻擊";
                //cc.find("Canvas/skills/skill4/Background/Label").getComponent(cc.Label).string = "懶蛋攻擊";
            }
            else {
                cc.find("Canvas/skills/skill1/Background/Label").getComponent(cc.Label).string = "衝撞";
            }
        }
        if (GlobalData_1.default.myelf != this.last_myself) {
            //console.log("GlobalData.myelf:", GlobalData.myelf);
            this.last_myself = GlobalData_1.default.myelf;
            this.renew = true;
        }
        for (var i = 0; i < GlobalData_1.default.pokewoman.length; i++) {
            if (GlobalData_1.default.myPokewomanHP[i] > 0) {
                GlobalData_1.default.lose = false;
                break;
            }
            GlobalData_1.default.lose = true;
        }
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData_1.default.myelf]];
        this.updateUI(dt);
        if (this.enemyLife <= 0 && !this.isWin) {
            if (this.enemynum == 4) {
                GlobalData_1.default.isEnenmyMagic = true;
                console.log("GlobalData.isEnenmyMagic:", GlobalData_1.default.isEnenmyMagic);
            }
            else if (this.enemynum == 5) {
                GlobalData_1.default.isEnenmyRed = true;
                console.log("GlobalData.isEnenmyRed:", GlobalData_1.default.isEnenmyRed);
            }
            else if (this.enemynum == 6) {
                GlobalData_1.default.isBoss1 = true;
                console.log("GlobalData.isBoss1:", GlobalData_1.default.isBoss1);
            }
            else if (this.enemynum == 7) {
                GlobalData_1.default.isEnenmyFish = true;
                console.log("GlobalData.isEnenmyFish:", GlobalData_1.default.isEnenmyFish);
            }
            else if (this.enemynum == 8) {
                GlobalData_1.default.isEnenmyBoss2 = true;
                cc.director.loadScene("map_inif");
                console.log("GlobalData.isEnenmyBoss2:", GlobalData_1.default.isEnenmyBoss2);
            }
            if (GlobalData_1.default.pokewoman.length < 6) {
                GlobalData_1.default.pokewoman.push(this.enemynum);
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.pokewoman.length - 1] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[GlobalData_1.default.pokewoman.length - 1]] +
                    GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[GlobalData_1.default.pokewoman.length - 1]]);
                GlobalData_1.default.fullHP[GlobalData_1.default.pokewoman.length - 1] = GlobalData_1.default.myPokewomanHP[GlobalData_1.default.pokewoman.length - 1];
                this.enemyLife = 0;
                this.isWin = true;
                this.enemyHP.progress = 0;
                cc.audioEngine.pauseMusic();
                cc.audioEngine.playEffect(this.winSound, false);
                GlobalData_1.default.exp += 100;
                this.scheduleOnce(function () {
                    var _this = this;
                    cc.director.loadScene(GlobalData_1.default.map, function () {
                        var enemyNumString = cc.js.formatStr("%d", _this.enemynum);
                        GlobalData_1.default.nodeToDestroy.push(enemyNumString);
                    });
                }, 4);
            }
            else {
                GlobalData_1.default.toCapture = true;
                GlobalData_1.default.toCaptureID = this.enemynum;
                this.enemyLife = 0;
                this.isWin = true;
                this.enemyHP.progress = 0;
                cc.audioEngine.pauseMusic();
                cc.audioEngine.playEffect(this.winSound, false);
                GlobalData_1.default.exp += 100;
                this.scheduleOnce(function () {
                    var _this = this;
                    cc.director.loadScene("bag", function () {
                        var enemyNumString = cc.js.formatStr("%d", _this.enemynum);
                        GlobalData_1.default.nodeToDestroy.push(enemyNumString);
                    });
                }, 4);
            }
            GlobalData_1.default.winNum += 1;
        }
        if (GlobalData_1.default.lose && !this.isLose) {
            GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] = 0;
            this.isLose = true;
            this.myTurn = false;
            this.enemyTurn = false;
            this.myHP.progress = 0;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.loseSound, false);
            this.scheduleOnce(function () {
                cc.director.loadScene(GlobalData_1.default.map);
            }, 4);
        }
        if (this.enemyTurn && !this.myTurn && this.enemyLife > 0) {
            this.enemyTurn = false;
            this.myTurn = true;
            this.enemyTurnAction();
        }
        if (!this.enemyTurn && this.myTurn && this.myLife > 0) {
            //cc.find("Canvas/skill1").getComponent(cc.Button).interactable = this.myTurn;
        }
        cc.find("Canvas/skills/skill1").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill2").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill3").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill4").getComponent(cc.Button).interactable = this.myTurn;
        //}
        cc.audioEngine.setMusicVolume(GlobalData_1.default.volume);
        cc.audioEngine.setEffectsVolume(GlobalData_1.default.volume);
    };
    NewClass.prototype.updateUI = function (dt) {
        //console.log(GlobalData.myelf);
        //console.log(GlobalData.myPokewomanHP);
        //console.log(GlobalData.fullHP);
        this.myHP.progress = GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] / GlobalData_1.default.fullHP[GlobalData_1.default.myelf];
        this.enemyHP.progress = this.enemyLife / GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
        var myLifeLabel = cc.find("Canvas/myLife").getComponent(cc.Label);
        var enemyLifeLabel = cc.find("Canvas/enemyLife").getComponent(cc.Label);
        this.enemyLVlabel.string = 'Lv. ' + this.enemyLV.toString();
        this.myLVlabel.string = 'Lv. ' + GlobalData_1.default.level.toString();
        myLifeLabel.string = ((Array(7).join("0") + GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf].toString()).slice(-3)) + '/' + GlobalData_1.default.fullHP[GlobalData_1.default.myelf].toString();
        enemyLifeLabel.string = ((Array(7).join("0") + this.enemyLife.toString()).slice(-3)) + '/' + GlobalData_1.default.enemyHPbyID[this.enemynum - 1].toString();
    };
    NewClass.prototype.skill1 = function () {
        var enemyLifeDeduct = cc.callFunc(function (target) {
            if (GlobalData_1.default.myelf == 0)
                this.enemyLife -= 80;
            else
                this.enemyLife -= 20;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.skill2 = function () {
        //cc.log("skill2");
        var enemyLifeDeduct = cc.callFunc(function (target) {
            this.enemyLife -= 20;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.skill3 = function () {
        //cc.log("skill3");
        var enemyLifeDeduct = cc.callFunc(function (target) {
            this.enemyLife -= 20;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.skill4 = function () {
        //cc.log("skill4");
        var enemyLifeDeduct = cc.callFunc(function (target) {
            this.enemyLife -= 100;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.enemyTurnAction = function () {
        var enemyAnimation = cc.find("Canvas/enemy").getComponent(cc.Animation);
        var enemyParticleEffect = cc.find("Canvas/enemy/magic").getComponent(cc.ParticleSystem);
        var enemyParticleEffect3 = cc.find("Canvas/enemy/punch").getComponent(cc.ParticleSystem);
        var enemyParticleEffect4 = cc.find("Canvas/enemy/boom").getComponent(cc.ParticleSystem);
        var enemyParticleEffect5 = cc.find("Canvas/enemy/fire").getComponent(cc.ParticleSystem);
        var shakeCamera = cc.callFunc(function (target) {
            var mainCamera = cc.Camera.main;
            this.originalPosition = mainCamera.node.position.clone();
            var shakeSequence = cc.sequence(cc.moveTo(0.05, cc.v2(this.originalPosition.x, this.originalPosition.y + 8)), cc.moveTo(0.05, cc.v2(this.originalPosition.x, this.originalPosition.y - 8)), cc.moveTo(0.05, this.originalPosition));
            // Run the shake sequence on the camera
            cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
            //this.camera.node.runAction(shakeSequence);
        });
        var shakeCamera2 = cc.callFunc(function (target) {
            var mainCamera = cc.Camera.main;
            this.originalPosition = mainCamera.node.position.clone();
            //let shakeSequence;
            var shakeSequence = cc.sequence(cc.moveTo(0.05, cc.v2(this.originalPosition.x + 15, this.originalPosition.y)), cc.moveTo(0.05, cc.v2(this.originalPosition.x - 15, this.originalPosition.y)), cc.moveTo(0.05, this.originalPosition));
            cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
        });
        if (this.enemynum == 4) {
            enemyAnimation.play("dong_move");
        }
        else if (this.enemynum == 5) {
            enemyAnimation.play("red_dong_move");
        }
        else if (this.enemynum == 6) {
            enemyAnimation.play("boom");
        }
        else if (this.enemynum == 7) {
            enemyAnimation.play("fish3");
        }
        else if (this.enemynum == 8) {
            console.log("moyan_b");
            enemyAnimation.stop("moyan_default");
            this.moyanAnimation = false;
            enemyAnimation.play("moyan_b");
        }
        var myLifeDeduct = cc.callFunc(function (target) {
            //console.log("enemyNum in mylife deduct:", this.enemynum);
            var enhance = (this.enemyLV * 0.75 + this.enemyAttack) / this.enemyAttack;
            if (this.enemynum == 4)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (10 * enhance);
            else if (this.enemynum == 5)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (20 * enhance);
            else if (this.enemynum == 6)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (45 * enhance);
            else if (this.enemynum == 7)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (10 * enhance);
            else if (this.enemynum == 8)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (50 * enhance);
            GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] = Math.round(GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf]);
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
            this.enemyTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.myTurn = true;
            this.enemyTurn = false;
        }, this);
        var particleAction = cc.callFunc(function (target) {
            if (this.enemynum == 4)
                enemyParticleEffect.resetSystem();
            else if (this.enemynum == 5)
                enemyParticleEffect3.resetSystem();
            else if (this.enemynum == 6) {
                enemyParticleEffect4.resetSystem();
                cc.find("Canvas/enemy/boom").runAction(cc.moveBy(0.2, cc.v2(-525, 0)));
                cc.find("Canvas/enemy/boom").x = 17.366;
            }
            else if (this.enemynum == 8) {
                console.log("fire");
                enemyParticleEffect5.resetSystem();
                cc.find("Canvas/enemy/fire").runAction(cc.moveBy(1, cc.v2(-760, 0)));
                // cc.find("Canvas/enemy/fire").x = 17.366;
            }
        }, this);
        var sound = cc.callFunc(function (target) {
            if (this.enemynum == 4) { } //enemyParticleEffect.resetSystem();
            else if (this.enemynum == 5) {
                cc.audioEngine.playEffect(this.red_dong_punch, false);
                console.log("sound");
            }
            else if (this.enemynum == 6) {
                cc.audioEngine.playEffect(this.red_dong_punch, false);
                console.log("sound");
            }
        }, this);
        var moyanFlagAction = cc.callFunc(function (target) {
            this.moyanAnimation = true;
        }, this);
        var moveAction = cc.callFunc(function (target) {
            if (this.enemynum == 4)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 50)), cc.moveBy(0.2, cc.v2(0, -50)), particleAction, shakeCamera, myLifeDeduct, turnSwitch2));
            else if (this.enemynum == 5)
                enemy.runAction(cc.sequence(cc.moveBy(0.8, cc.v2(-460, 0)), sound, shakeCamera2, particleAction, cc.moveBy(1.5, cc.v2(460, 0)), myLifeDeduct, turnSwitch2));
            else if (this.enemynum == 6)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 20)), sound, shakeCamera2, particleAction, cc.moveBy(0.1, cc.v2(0, -20)), myLifeDeduct, turnSwitch2));
            else if (this.enemynum == 7) {
                enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-480, 0)), cc.moveBy(1, cc.v2(480, 0)), myLifeDeduct, turnSwitch2));
            }
            else if (this.enemynum == 8) {
                enemy.runAction(cc.sequence(cc.moveBy(1.3, cc.v2(0, 0)), particleAction, shakeCamera, myLifeDeduct, turnSwitch2, moyanFlagAction));
            }
        }, this);
        var enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, moveAction));
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "battleBgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "winSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "loseSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "red_dong_punch", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy1", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy2", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy3", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy7", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy8", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "myHP", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "enemyHP", void 0);
    __decorate([
        property(man_1.default)
    ], NewClass.prototype, "man", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "sprite", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "myLVlabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "enemyLVlabel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();