"use strict";
cc._RF.push(module, 'c3982MDSRxNJ4Tw7aIjsfeN', 'yuan');
// script/yuan.ts

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
var No = /** @class */ (function (_super) {
    __extends(No, _super);
    function No() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yuan = null;
        _this.animation = null; // 动画组件
        _this.audioId = -1; // Audio ID for the yuan audio clip
        return _this;
    }
    No.prototype.onLoad = function () {
        // 注册键盘事件
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.animation = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);        
    };
    No.prototype.onDestroy = function () {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        // cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    No.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                cc.director.loadScene("map2");
                cc.audioEngine.stopMusic();
                break;
        }
    };
    No.prototype.start = function () {
        this.audioId = cc.audioEngine.playEffect(this.yuan, false);
        cc.audioEngine.setVolume(this.audioId, 1.0); // Set the volume to 1.0 (maximum)
        this.scheduleOnce(this.changeScene, 4.3); // Schedule the scene change after 2 seconds
    };
    No.prototype.update = function (dt) {
        if (this.animation && !this.animation.getAnimationState("yuan").isPlaying) {
            this.animation.play("yuan");
        }
    };
    No.prototype.changeScene = function () {
        cc.director.loadScene("map2"); // Load the "map2" scene
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], No.prototype, "yuan", void 0);
    No = __decorate([
        ccclass
    ], No);
    return No;
}(cc.Component));
exports.default = No;

cc._RF.pop();