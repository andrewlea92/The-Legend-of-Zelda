"use strict";
cc._RF.push(module, '0cc47Q6q19H15RwU7uSHQVj', 'bags2');
// script/bags2.ts

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
        /* get a return array from other script */
        // bag: number[] = [3, 4, 1, 2, 5, 0];
        _this.bag = GlobalData_1.default.pokewoman;
        // LIFE-CYCLE CALLBACKS:
        _this.num = 0;
        _this.nm = null;
        _this.atk_num = null;
        _this.hp_num = null;
        _this.runAway = null;
        _this.nowchoose = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        cc.director.getPhysicsManager().enabled = true;
        this.runAway.active = false;
        var uid = GlobalData_1.default.uid;
        firebase.database().ref(uid + 'pokewoman').on('value', function (snapshot) {
            _this.num = snapshot.val();
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            this.node.getChildByName('Sprite' + i).width = 80;
            this.node.getChildByName('Sprite' + i).height = 90;
            console.log("i:", i);
            console.log(this.node.getChildByName('Sprite' + i).width);
            console.log(this.node.getChildByName('Sprite' + i).height);
            if (this.bag[i] == null) {
                this.node.getChildByName('Sprite' + i).active = false;
            }
        }
        cc.find('Canvas/bags2/Sprite0').on('click', function () {
            _this.nowchoose = 0;
        });
        cc.find('Canvas/bags2/Sprite1').on('click', function () {
            _this.nowchoose = 1;
        });
        cc.find('Canvas/bags2/Sprite2').on('click', function () {
            _this.nowchoose = 2;
        });
        cc.find('Canvas/bags2/Sprite3').on('click', function () {
            _this.nowchoose = 3;
        });
        cc.find('Canvas/bags2/Sprite4').on('click', function () {
            _this.nowchoose = 4;
        });
        cc.find('Canvas/bags2/Sprite5').on('click', function () {
            _this.nowchoose = 5;
        });
        cc.find('Canvas/bags2/confirm').on('click', function () {
            GlobalData_1.default.myelf = _this.nowchoose;
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
            _this.runAway.active = true;
        });
        cc.find('Canvas/bags2/cancel').on('click', function () {
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
            _this.runAway.active = true;
        });
    };
    NewClass.prototype.update = function (dt) {
        if (this.nowchoose <= 5) {
            var spriteNode = this.node.getChildByName('Sprite' + this.nowchoose);
            var spriteComponent = spriteNode.getComponent(cc.Sprite);
            // Calculate a color variation using a time-based value
            var colorOffset = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
            // Create a new color with the varying offset
            var newColor = new cc.Color(colorOffset * 255, colorOffset * 255, colorOffset * 255);
            // Assign the new color to the sprite's color property
            spriteComponent.node.color = newColor;
        }
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "runAway", void 0);
    __decorate([
        property
    ], NewClass.prototype, "nowchoose", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();