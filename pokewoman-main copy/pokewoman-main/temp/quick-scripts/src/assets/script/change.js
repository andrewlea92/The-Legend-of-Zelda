"use strict";
cc._RF.push(module, 'f9d27UKESNNHp/bOiyU2yGv', 'change');
// script/change.ts

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
var change = /** @class */ (function (_super) {
    __extends(change, _super);
    function change() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spaceshipSound = null;
        return _this;
    }
    change.prototype.onLoad = function () {
        this.startScaleAnimation();
        cc.audioEngine.stopMusic();
        cc.audioEngine.playEffect(this.spaceshipSound, false);
    };
    change.prototype.startScaleAnimation = function () {
        // 获取要进行动作的节点
        var spriteNode = cc.find("Canvas/spaceship"); // 替换为你的节点路径
        console.log(spriteNode);
        // 定义动作的目标缩放比例和持续时间
        var targetScale = 0.01; // 最终缩放比例
        var duration = 2.5; // 动作持续时间，单位为秒
        // 创建一个ScaleTo动作，让Sprite逐渐缩小到目标缩放比例
        var scaleAction = cc.scaleTo(duration, targetScale);
        var moveAction = cc.moveTo(duration, cc.v2(0, 13));
        var loadAction = cc.moveTo(1, cc.v2(0, 0));
        // 运行动作
        var ActionSequnce = cc.callFunc(function () {
            cc.director.loadScene(GlobalData_1.default.map);
        });
        spriteNode.runAction(cc.sequence(moveAction, loadAction, ActionSequnce));
        // spriteNode.runAction(moveAction);
        spriteNode.runAction(scaleAction);
    };
    change.prototype.start = function () {
    };
    change.prototype.update = function (dt) { };
    __decorate([
        property({ type: cc.AudioClip })
    ], change.prototype, "spaceshipSound", void 0);
    change = __decorate([
        ccclass
    ], change);
    return change;
}(cc.Component));
exports.default = change;

cc._RF.pop();