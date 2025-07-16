
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle_man.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVfbWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUF3QjtBQUN4QiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0ZUM7UUF6ZUcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQW1CLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQVEsSUFBSSxDQUFDO1FBR2hCLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBRzlCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFhLG9CQUFVLENBQUMsU0FBUyxDQUFDO1FBRXJDLFlBQU0sR0FBVSxvQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUUxQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixZQUFNLEdBQVksSUFB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QUssQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN6SSxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLG1CQUFtQjtRQUNuQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUM3QyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFB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RUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDOzRDQUNGO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQzs0Q0FDRjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7NENBQ0Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswQ0FDRztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNNO0lBRy9CO1FBREMsUUFBUSxDQUFDLGFBQUcsQ0FBQzt5Q0FDRTtJQUdoQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0Q0FDRztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1c7SUF0RGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRlNUI7SUFBRCxlQUFDO0NBNWVELEFBNGVDLENBNWVxQyxFQUFFLENBQUMsU0FBUyxHQTRlakQ7a0JBNWVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbiBmcm9tIFwiLi9tYW5cIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmF0dGxlQmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBsb3NlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICByZWRfZG9uZ19wdW5jaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTm9kZX0pXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxyXG4gICAgZW5lbXkxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlNwcml0ZUZyYW1lfSlcclxuICAgIGVuZW15MjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXHJcbiAgICBlbmVteTM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxyXG4gICAgZW5lbXk3OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlNwcml0ZUZyYW1lfSlcclxuICAgIGVuZW15ODogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIG15SFA6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBlbmVteUhQOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE1hbilcclxuICAgIG1hbjogTWFuID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG15TFZsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGVuZW15TFZsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGJhZzogbnVtYmVyW10gPSBHbG9iYWxEYXRhLnBva2V3b21hbjtcclxuXHJcbiAgICBteWxpZmU6IG51bWJlciA9R2xvYmFsRGF0YS5teWxpZmU7XHJcblxyXG4gICAgcHJpdmF0ZSBteUxpZmU6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgZW5lbXlMaWZlOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwcml2YXRlIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG15VHVybjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGVuZW15VHVybjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZW5lbXludW0gPSAwO1xyXG4gICAgcHJpdmF0ZSBlbmVteUF0dGFjayA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZW5lbXlMViA6IG51bWJlciA7ICBcclxuICAgIHByaXZhdGUgcmVuZXc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBsYXN0X215c2VsZjogbnVtYmVyID0gLTE7XHJcbiAgICBwdWJsaWMgc2tpbGwxQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgcHVibGljIHNraWxsMkJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIHB1YmxpYyBza2lsbDNCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgc2tpbGw0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtb3lhbkFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL2VuZW15L2ZpcmVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9za2lsbHMvYmFnMicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NraWxscycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFnczInKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2tpbGwxQnV0dG9uID0gY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwxXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2tpbGwyQnV0dG9uID0gY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwyXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2tpbGwzQnV0dG9uID0gY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwzXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2tpbGw0QnV0dG9uID0gY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGw0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2tpbGwxQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5za2lsbDEsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2tpbGwyQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5za2lsbDIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2tpbGwzQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5za2lsbDMsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2tpbGw0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5za2lsbDQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubXlMVmxhYmVsLnN0cmluZyA9ICdMdi4gJyArIEdsb2JhbERhdGEubGV2ZWwudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLm15TGlmZSA9IEdsb2JhbERhdGEubXlQb2tld29tYW5IUFtHbG9iYWxEYXRhLm15ZWxmXTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0X215c2VsZiA9IEdsb2JhbERhdGEubXllbGY7XHJcbiAgICAgICAgdGhpcy5lbmVteW51bSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKClbXCJlbmVteU51bVwiXTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmVuZW15MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSA9IEdsb2JhbERhdGEuZW5lbXlIUGJ5SURbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUF0dGFjayA9IEdsb2JhbERhdGEuZW5lbXlBdHRhY2tCeUlkW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMViA9IEdsb2JhbERhdGEuZW5lbXlMZXZlbEJ5SWRbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmVuZW15MjtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgPSBHbG9iYWxEYXRhLmVuZW15SFBieUlEW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlBdHRhY2sgPSBHbG9iYWxEYXRhLmVuZW15QXR0YWNrQnlJZFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TFYgPSBHbG9iYWxEYXRhLmVuZW15TGV2ZWxCeUlkW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA2KXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmVuZW15MztcclxuICAgICAgICAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5zZXRGbGlwWCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS53aWR0aCA9IDMwMDtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikueSA9IDA7ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlID0gR2xvYmFsRGF0YS5lbmVteUhQYnlJRFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15QXR0YWNrID0gR2xvYmFsRGF0YS5lbmVteUF0dGFja0J5SWRbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxWID0gR2xvYmFsRGF0YS5lbmVteUxldmVsQnlJZFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5lbmVteTc7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlID0gR2xvYmFsRGF0YS5lbmVteUhQYnlJRFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15QXR0YWNrID0gR2xvYmFsRGF0YS5lbmVteUF0dGFja0J5SWRbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxWID0gR2xvYmFsRGF0YS5lbmVteUxldmVsQnlJZFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gOCl7XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5lbmVteTg7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikud2lkdGggKz0gNTA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlID0gR2xvYmFsRGF0YS5lbmVteUhQYnlJRFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15QXR0YWNrID0gR2xvYmFsRGF0YS5lbmVteUF0dGFja0J5SWRbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxWID0gR2xvYmFsRGF0YS5lbmVteUxldmVsQnlJZFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iYXR0bGVCZ20sIHRydWUpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgZW5lbXlQYXJ0aWNsZUVmZmVjdDIgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15L29uTG9hZFwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5lbmVteW51bSA9PSA0XCIpO1xyXG4gICAgICAgICAgICBlbmVteVBhcnRpY2xlRWZmZWN0Mi5wbGF5T25Mb2FkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZW5lbXlQYXJ0aWNsZUVmZmVjdDIucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDgpe1xyXG4gICAgICAgICAgICBpZighY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRBbmltYXRpb25TdGF0ZShcIm1veWFuX2RlZmF1bHRcIikuaXNQbGF5aW5nXHJcbiAgICAgICAgICAgICYmIHRoaXMubW95YW5BbmltYXRpb24pe1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIm1veWFuX2RlZmF1bHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdLEdsb2JhbERhdGEuZnVsbEhQW0dsb2JhbERhdGEubXllbGZdLFxyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSxHbG9iYWxEYXRhLmVuZW15SFBieUlEW3RoaXMuZW5lbXludW0tMV0sdGhpcy5lbmVteUxWKTtcclxuICAgICAgICBpZih0aGlzLnJlbmV3KXtcclxuICAgICAgICAgICAgdGhpcy5yZW5ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihHbG9iYWxEYXRhLm15ZWxmID09IDApe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwxL0JhY2tncm91bmQvTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIumtlOazleaUu+aTilwiO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDQvQmFja2dyb3VuZC9MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5oe26JuL5pS75pOKXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMS9CYWNrZ3JvdW5kL0xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLooZ3mkp5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihHbG9iYWxEYXRhLm15ZWxmICE9IHRoaXMubGFzdF9teXNlbGYpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR2xvYmFsRGF0YS5teWVsZjpcIiwgR2xvYmFsRGF0YS5teWVsZik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdF9teXNlbGYgPSBHbG9iYWxEYXRhLm15ZWxmO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpPTAgOyBpIDwgR2xvYmFsRGF0YS5wb2tld29tYW4ubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgaWYoR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW2ldID4gMCl7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmxvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEubG9zZSA9IHRydWU7ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1tHbG9iYWxEYXRhLm15ZWxmXV07XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSShkdCk7XHJcbiAgICAgICAgaWYodGhpcy5lbmVteUxpZmUgPD0gMCAmJiAhdGhpcy5pc1dpbil7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNCl7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmlzRW5lbm15TWFnaWMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxEYXRhLmlzRW5lbm15TWFnaWM6XCIsIEdsb2JhbERhdGEuaXNFbmVubXlNYWdpYyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSl7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmlzRW5lbm15UmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsRGF0YS5pc0VuZW5teVJlZDpcIiwgR2xvYmFsRGF0YS5pc0VuZW5teVJlZCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNil7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmlzQm9zczEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxEYXRhLmlzQm9zczE6XCIsIEdsb2JhbERhdGEuaXNCb3NzMSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmlzRW5lbm15RmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbERhdGEuaXNFbmVubXlGaXNoOlwiLCBHbG9iYWxEYXRhLmlzRW5lbm15RmlzaCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gOCl7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmlzRW5lbm15Qm9zczIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFwX2luaWZcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbERhdGEuaXNFbmVubXlCb3NzMjpcIiwgR2xvYmFsRGF0YS5pc0VuZW5teUJvc3MyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGggPCA2KXtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2godGhpcy5lbmVteW51bSk7XHJcblxyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEucG9rZXdvbWFuLmxlbmd0aC0xXSA9IChHbG9iYWxEYXRhLnBva2V3b21hbkJhc2VIUFtHbG9iYWxEYXRhLnBva2V3b21hbltHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGgtMV1dICsgXHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmxldmVsKkdsb2JhbERhdGEucG9rZXdvbWFuSFBzY2FsZVtHbG9iYWxEYXRhLnBva2V3b21hbltHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGgtMV1dKVxyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5mdWxsSFBbR2xvYmFsRGF0YS5wb2tld29tYW4ubGVuZ3RoLTFdID0gR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEucG9rZXdvbWFuLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUhQLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53aW5Tb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5leHAgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKEdsb2JhbERhdGEubWFwLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5lbXlOdW1TdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoXCIlZFwiLCB0aGlzLmVuZW15bnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5ub2RlVG9EZXN0cm95LnB1c2goZW5lbXlOdW1TdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSwgNCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS50b0NhcHR1cmUgPSB0cnVlOyAgXHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLnRvQ2FwdHVyZUlEID0gdGhpcy5lbmVteW51bTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUhQLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53aW5Tb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5leHAgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmFnXCIsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU51bVN0cmluZyA9IGNjLmpzLmZvcm1hdFN0cihcIiVkXCIsIHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLm5vZGVUb0Rlc3Ryb3kucHVzaChlbmVteU51bVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLndpbk51bSs9MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKEdsb2JhbERhdGEubG9zZSAmJiAhdGhpcy5pc0xvc2Upe1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFBbR2xvYmFsRGF0YS5teWVsZl0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9zZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXlIUC5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmxvc2VTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShHbG9iYWxEYXRhLm1hcCk7XHJcbiAgICAgICAgICAgIH0sIDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5lbmVteVR1cm4gJiYgIXRoaXMubXlUdXJuICYmIHRoaXMuZW5lbXlMaWZlID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm5BY3Rpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmVuZW15VHVybiAmJiB0aGlzLm15VHVybiAmJiB0aGlzLm15TGlmZSA+IDApe1xyXG5cclxuICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwxXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMubXlUdXJuO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDNcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGw0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMubXlUdXJuO1xyXG4gICAgLy99XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoR2xvYmFsRGF0YS52b2x1bWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoR2xvYmFsRGF0YS52b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVJKGR0KXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKEdsb2JhbERhdGEubXllbGYpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coR2xvYmFsRGF0YS5teVBva2V3b21hbkhQKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKEdsb2JhbERhdGEuZnVsbEhQKTtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMubXlIUC5wcm9ncmVzcyA9IEdsb2JhbERhdGEubXlQb2tld29tYW5IUFtHbG9iYWxEYXRhLm15ZWxmXSAvIEdsb2JhbERhdGEuZnVsbEhQW0dsb2JhbERhdGEubXllbGZdO1xyXG4gICAgICAgIHRoaXMuZW5lbXlIUC5wcm9ncmVzcyA9IHRoaXMuZW5lbXlMaWZlIC8gR2xvYmFsRGF0YS5lbmVteUhQYnlJRFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgIGNvbnN0IG15TGlmZUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9teUxpZmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBjb25zdCBlbmVteUxpZmVMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXlMaWZlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5lbmVteUxWbGFiZWwuc3RyaW5nID0gJ0x2LiAnK3RoaXMuZW5lbXlMVi50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubXlMVmxhYmVsLnN0cmluZyA9ICdMdi4gJysgR2xvYmFsRGF0YS5sZXZlbC50b1N0cmluZygpO1xyXG4gICAgICAgIG15TGlmZUxhYmVsLnN0cmluZyA9ICgoQXJyYXkoNykuam9pbihcIjBcIikgKyBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFBbR2xvYmFsRGF0YS5teWVsZl0udG9TdHJpbmcoKSkuc2xpY2UoLTMpKSArICcvJyArIEdsb2JhbERhdGEuZnVsbEhQW0dsb2JhbERhdGEubXllbGZdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZW5lbXlMaWZlTGFiZWwuc3RyaW5nID0gKChBcnJheSg3KS5qb2luKFwiMFwiKSArIHRoaXMuZW5lbXlMaWZlLnRvU3RyaW5nKCkpLnNsaWNlKC0zKSkgKycvJysgR2xvYmFsRGF0YS5lbmVteUhQYnlJRFt0aGlzLmVuZW15bnVtLTFdLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpbGwxKCl7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZihHbG9iYWxEYXRhLm15ZWxmID09IDApIHRoaXMuZW5lbXlMaWZlIC09IDgwO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW5lbXlMaWZlIC09IDIwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDIoKXtcclxuICAgICAgICAvL2NjLmxvZyhcInNraWxsMlwiKTtcclxuICAgICAgICBsZXQgZW5lbXlMaWZlRGVkdWN0ID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlIC09IDIwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgY2MubW92ZUJ5KDEsIGNjLnYyKDUyMCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoLTUyMCwgMCkpLGVuZW15TGlmZURlZHVjdCwgdHVyblN3aXRjaDIpKVxyXG4gICAgfVxyXG5cclxuICAgIHNraWxsMygpe1xyXG4gICAgICAgIC8vY2MubG9nKFwic2tpbGwzXCIpO1xyXG4gICAgICAgIGxldCBlbmVteUxpZmVEZWR1Y3QgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgLT0gMjA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52MigtNTIwLCAwKSksZW5lbXlMaWZlRGVkdWN0LCB0dXJuU3dpdGNoMikpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpbGw0KCl7XHJcbiAgICAgICAgLy9jYy5sb2coXCJza2lsbDRcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSAxMDA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52MigtNTIwLCAwKSksZW5lbXlMaWZlRGVkdWN0LCB0dXJuU3dpdGNoMikpXHJcbiAgICB9XHJcbiAgICBlbmVteVR1cm5BY3Rpb24oKXtcclxuICAgICAgICBsZXQgZW5lbXlBbmltYXRpb24gPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0ID0gY2MuZmluZChcIkNhbnZhcy9lbmVteS9tYWdpY1wiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0MyA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvcHVuY2hcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBsZXQgZW5lbXlQYXJ0aWNsZUVmZmVjdDQgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15L2Jvb21cIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBsZXQgZW5lbXlQYXJ0aWNsZUVmZmVjdDUgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15L2ZpcmVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hha2VDYW1lcmEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkNhbWVyYSA9IGNjLkNhbWVyYS5tYWluO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsUG9zaXRpb24gPSBtYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hha2VTZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKHRoaXMub3JpZ2luYWxQb3NpdGlvbi54ICwgdGhpcy5vcmlnaW5hbFBvc2l0aW9uLnkgKyA4KSksXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIodGhpcy5vcmlnaW5hbFBvc2l0aW9uLngsIHRoaXMub3JpZ2luYWxQb3NpdGlvbi55IC0gOCkpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIHRoaXMub3JpZ2luYWxQb3NpdGlvbilcclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBSdW4gdGhlIHNoYWtlIHNlcXVlbmNlIG9uIHRoZSBjYW1lcmFcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKS5ub2RlLnJ1bkFjdGlvbihzaGFrZVNlcXVlbmNlKTtcclxuICAgICAgICAgICAgLy90aGlzLmNhbWVyYS5ub2RlLnJ1bkFjdGlvbihzaGFrZVNlcXVlbmNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHNoYWtlQ2FtZXJhMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluQ2FtZXJhID0gY2MuQ2FtZXJhLm1haW47XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IG1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgIC8vbGV0IHNoYWtlU2VxdWVuY2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hha2VTZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Mih0aGlzLm9yaWdpbmFsUG9zaXRpb24ueCsxNSAsIHRoaXMub3JpZ2luYWxQb3NpdGlvbi55KSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKHRoaXMub3JpZ2luYWxQb3NpdGlvbi54LTE1LCB0aGlzLm9yaWdpbmFsUG9zaXRpb24ueSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCB0aGlzLm9yaWdpbmFsUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpLmdldENvbXBvbmVudChjYy5DYW1lcmEpLm5vZGUucnVuQWN0aW9uKHNoYWtlU2VxdWVuY2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQpe1xyXG4gICAgICAgICAgICBlbmVteUFuaW1hdGlvbi5wbGF5KFwiZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSl7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJyZWRfZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNil7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJib29tXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJmaXNoM1wiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1veWFuX2JcIik7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnN0b3AoXCJtb3lhbl9kZWZhdWx0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1veWFuQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJtb3lhbl9iXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbXlMaWZlRGVkdWN0ID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbmVteU51bSBpbiBteWxpZmUgZGVkdWN0OlwiLCB0aGlzLmVuZW15bnVtKTtcclxuICAgICAgICAgICAgY29uc3QgZW5oYW5jZSA9ICh0aGlzLmVuZW15TFYgKiAwLjc1ICsgdGhpcy5lbmVteUF0dGFjaykgLyB0aGlzLmVuZW15QXR0YWNrXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNCkgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICgxMCAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSkgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICgyMCAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNikgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICg0NSAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNykgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICgxMCAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gOCkgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICg1MCAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFBbR2xvYmFsRGF0YS5teWVsZl0gPSBNYXRoLnJvdW5kKEdsb2JhbERhdGEubXlQb2tld29tYW5IUFtHbG9iYWxEYXRhLm15ZWxmXSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgcGFydGljbGVBY3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0ICllbmVteVBhcnRpY2xlRWZmZWN0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KSBlbmVteVBhcnRpY2xlRWZmZWN0My5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNil7IFxyXG4gICAgICAgICAgICAgICAgZW5lbXlQYXJ0aWNsZUVmZmVjdDQucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvYm9vbVwiKS5ydW5BY3Rpb24oY2MubW92ZUJ5KDAuMiwgY2MudjIoLTUyNSwgMCkpKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvYm9vbVwiKS54ID0gMTcuMzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA4KXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZVwiKTsgICAgXHJcbiAgICAgICAgICAgICAgICBlbmVteVBhcnRpY2xlRWZmZWN0NS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteS9maXJlXCIpLnJ1bkFjdGlvbihjYy5tb3ZlQnkoMSwgY2MudjIoLTc2MCwgMCkpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvZmlyZVwiKS54ID0gMTcuMzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBzb3VuZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQgKXt9Ly9lbmVteVBhcnRpY2xlRWZmZWN0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucmVkX2RvbmdfcHVuY2gsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNikge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlZF9kb25nX3B1bmNoLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvdW5kXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRoaXMpOyBcclxuICAgICAgICAgICAgbGV0IG1veWFuRmxhZ0FjdGlvbiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3lhbkFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGxldCBtb3ZlQWN0aW9uID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNClcclxuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC42LCBjYy52MigwLCA1MCkpLCBjYy5tb3ZlQnkoMC4yLCBjYy52MigwLCAtNTApKSwgcGFydGljbGVBY3Rpb24sIHNoYWtlQ2FtZXJhLG15TGlmZURlZHVjdCx0dXJuU3dpdGNoMikpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSlcclxuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC44LCBjYy52MigtNDYwLCAwKSksIHNvdW5kLCBzaGFrZUNhbWVyYTIsIHBhcnRpY2xlQWN0aW9uLCBjYy5tb3ZlQnkoMS41LCBjYy52Mig0NjAsIDApKSxteUxpZmVEZWR1Y3QsdHVyblN3aXRjaDIpKTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDYpXHJcbiAgICAgICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC42LCBjYy52MigwLCAyMCkpLCBzb3VuZCwgc2hha2VDYW1lcmEyLCBwYXJ0aWNsZUFjdGlvbiwgY2MubW92ZUJ5KDAuMSwgY2MudjIoMCwgLTIwKSksbXlMaWZlRGVkdWN0LHR1cm5Td2l0Y2gyKSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA3KXtcclxuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMSwgY2MudjIoLTQ4MCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoNDgwLCAwKSksbXlMaWZlRGVkdWN0LHR1cm5Td2l0Y2gyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDgpe1xyXG4gICAgICAgICAgICAgICAgZW5lbXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgxLjMsIGNjLnYyKDAsIDApKSxwYXJ0aWNsZUFjdGlvbiwgc2hha2VDYW1lcmEsIG15TGlmZURlZHVjdCwgdHVyblN3aXRjaDIsIG1veWFuRmxhZ0FjdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgbGV0IGVuZW15ID0gY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKTtcclxuICAgICAgICBlbmVteS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIG1vdmVBY3Rpb24pKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59Il19