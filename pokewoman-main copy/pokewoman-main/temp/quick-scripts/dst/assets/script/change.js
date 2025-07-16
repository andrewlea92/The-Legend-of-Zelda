
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/change.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsMkNBQXNDO0FBR3RDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMENDO1FBdkNHLG9CQUFjLEdBQWlCLElBQUksQ0FBQzs7SUF1Q3hDLENBQUM7SUF0Q0csdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsb0NBQW1CLEdBQW5CO1FBQ0ksYUFBYTtRQUViLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QixtQkFBbUI7UUFDbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUztRQUNqQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxjQUFjO1FBRWxDLG1DQUFtQztRQUNuQyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFLLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUMsT0FBTztRQUNQLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdkUsb0NBQW9DO1FBQ3BDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFdEMsQ0FBQztJQUVELHNCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEVBQVUsSUFBRyxDQUFDO0lBckNyQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7a0RBQ0s7SUFIbkIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTBDMUI7SUFBRCxhQUFDO0NBMUNELEFBMENDLENBMUNtQyxFQUFFLENBQUMsU0FBUyxHQTBDL0M7a0JBMUNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoYW5nZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgc3BhY2VzaGlwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjYWxlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNwYWNlc2hpcFNvdW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgc3RhcnRTY2FsZUFuaW1hdGlvbigpIHtcclxuICAgICAgICAvLyDojrflj5bopoHov5vooYzliqjkvZznmoToioLngrlcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3ByaXRlTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvc3BhY2VzaGlwXCIpOyAvLyDmm7/mjaLkuLrkvaDnmoToioLngrnot6/lvoRcclxuICAgICAgICBjb25zb2xlLmxvZyhzcHJpdGVOb2RlKTtcclxuICAgIFxyXG4gICAgICAgIC8vIOWumuS5ieWKqOS9nOeahOebruagh+e8qeaUvuavlOS+i+WSjOaMgee7reaXtumXtFxyXG4gICAgICAgIGxldCB0YXJnZXRTY2FsZSA9IDAuMDE7IC8vIOacgOe7iOe8qeaUvuavlOS+i1xyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDIuNTsgLy8g5Yqo5L2c5oyB57ut5pe26Ze077yM5Y2V5L2N5Li656eSXHJcbiAgICBcclxuICAgICAgICAvLyDliJvlu7rkuIDkuKpTY2FsZVRv5Yqo5L2c77yM6K6pU3ByaXRl6YCQ5riQ57yp5bCP5Yiw55uu5qCH57yp5pS+5q+U5L6LXHJcbiAgICAgICAgbGV0IHNjYWxlQWN0aW9uID0gY2Muc2NhbGVUbyhkdXJhdGlvbiwgdGFyZ2V0U2NhbGUpO1xyXG4gICAgICAgIGxldCAgbW92ZUFjdGlvbiA9IGNjLm1vdmVUbyhkdXJhdGlvbiwgY2MudjIoMCwxMykpO1xyXG4gICAgICAgIGxldCBsb2FkQWN0aW9uID0gY2MubW92ZVRvKDEsIGNjLnYyKDAsMCkpO1xyXG4gICAgXHJcbiAgICAgICAgLy8g6L+Q6KGM5Yqo5L2cXHJcbiAgICAgICAgbGV0IEFjdGlvblNlcXVuY2UgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoR2xvYmFsRGF0YS5tYXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzcHJpdGVOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShtb3ZlQWN0aW9uLGxvYWRBY3Rpb24sQWN0aW9uU2VxdW5jZSkpO1xyXG4gICAgICAgIC8vIHNwcml0ZU5vZGUucnVuQWN0aW9uKG1vdmVBY3Rpb24pO1xyXG4gICAgICAgIHNwcml0ZU5vZGUucnVuQWN0aW9uKHNjYWxlQWN0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7fVxyXG5cclxufSJdfQ==