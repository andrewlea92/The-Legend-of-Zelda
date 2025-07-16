
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/no.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2fa4VOZhxKCqZCMVbjgXBd', 'no');
// script/no.ts

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
        _this.text = 'hello';
        _this.moveSpeed = 1;
        _this.circleRadius = 50; // 围绕半径
        _this.angularSpeed = 60; // 角速度，控制每秒围绕的角度
        //@property(cc.Animation)
        _this.animation = null; // 动画组件
        _this.isBattle = false;
        _this.targetMan = null; // 目标man节点
        _this.angle = 0; // 当前角度
        _this.updateTimer = 0; // 更新位置的计时器
        return _this;
    }
    No.prototype.start = function () {
        // 获取场景中的"man"节点
        this.targetMan = cc.find("Canvas/man");
        // 播放 "no" 动画
    };
    No.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
    };
    No.prototype.update = function (dt) {
        // console.log("this.animation:", this.animation);
        if (this.animation && !this.animation.getAnimationState("no").isPlaying) {
            this.animation.play("no");
        }
        // 如果目标man节点存在，则围绕其移动
        if (this.targetMan) {
            // 计算当前位置与目标位置之间的向量
            var targetPos = this.targetMan.position;
            var currentPos = this.node.position;
            var direction = targetPos.sub(currentPos);
            // 计算当前位置与目标位置之间的距离
            var distance = direction.mag();
            if (distance > this.circleRadius) {
                // 根据移动速度和时间间隔更新位置
                var moveDistance = direction.normalize().mul(this.moveSpeed * dt);
                this.node.position = currentPos.add(moveDistance);
            }
            else {
                // 每隔一段时间围绕目标运动一次
                this.updateTimer += dt;
                var updateInterval = 0.005; // 更新位置的时间间隔
                if (this.updateTimer >= updateInterval) {
                    this.updateTimer -= updateInterval;
                    // 围绕目标运动
                    var angleIncrement = this.angularSpeed * updateInterval;
                    this.angle = (this.angle + angleIncrement) % 360; // 增加角度并限制在0-360范围内
                    // 根据角度和半径计算新位置
                    var radians = cc.misc.degreesToRadians(this.angle);
                    var offsetX = Math.cos(radians) * this.circleRadius;
                    var offsetY = Math.sin(radians) * this.circleRadius;
                    var circlePosition = cc.v2(targetPos.x + offsetX, targetPos.y + offsetY);
                    this.node.position = cc.v3(circlePosition.x, circlePosition.y, this.node.position.z);
                }
            }
        }
    };
    __decorate([
        property
    ], No.prototype, "text", void 0);
    __decorate([
        property(cc.Integer)
    ], No.prototype, "moveSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], No.prototype, "circleRadius", void 0);
    __decorate([
        property(cc.Float)
    ], No.prototype, "angularSpeed", void 0);
    No = __decorate([
        ccclass
    ], No);
    return No;
}(cc.Component));
exports.default = No;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDdEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUN0RCxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7b0JBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4RjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBeEVEO1FBREMsUUFBUTtvQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUNDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQVpULEVBQUU7UUFEdEIsT0FBTztPQUNhLEVBQUUsQ0E0RXRCO0lBQUQsU0FBQztDQTVFRCxBQTRFQyxDQTVFK0IsRUFBRSxDQUFDLFNBQVMsR0E0RTNDO2tCQTVFb0IsRUFBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBjaXJjbGVSYWRpdXM6IG51bWJlciA9IDUwOyAvLyDlm7Tnu5XljYrlvoRcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBhbmd1bGFyU3BlZWQ6IG51bWJlciA9IDYwOyAvLyDop5LpgJ/luqbvvIzmjqfliLbmr4/np5Llm7Tnu5XnmoTop5LluqZcclxuXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltYXRpb24gPSBudWxsOyAvLyDliqjnlLvnu4Tku7ZcclxuXHJcbiAgICBwcml2YXRlIGlzQmF0dGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRNYW46IGNjLk5vZGUgPSBudWxsOyAvLyDnm67moIdtYW7oioLngrlcclxuICAgIHByaXZhdGUgYW5nbGU6IG51bWJlciA9IDA7IC8vIOW9k+WJjeinkuW6plxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lcjogbnVtYmVyID0gMDsgLy8g5pu05paw5L2N572u55qE6K6h5pe25ZmoXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g6I635Y+W5Zy65pmv5Lit55qEXCJtYW5cIuiKgueCuVxyXG4gICAgICAgIHRoaXMudGFyZ2V0TWFuID0gY2MuZmluZChcIkNhbnZhcy9tYW5cIik7XHJcblxyXG4gICAgICAgIC8vIOaSreaUviBcIm5vXCIg5Yqo55S7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmFuaW1hdGlvbjpcIiwgdGhpcy5hbmltYXRpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJub1wiKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheShcIm5vXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpznm67moIdtYW7oioLngrnlrZjlnKjvvIzliJnlm7Tnu5Xlhbbnp7vliqhcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRNYW4pIHtcclxuICAgICAgICAgICAgLy8g6K6h566X5b2T5YmN5L2N572u5LiO55uu5qCH5L2N572u5LmL6Ze055qE5ZCR6YePXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMudGFyZ2V0TWFuLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0YXJnZXRQb3Muc3ViKGN1cnJlbnRQb3MpO1xyXG5cclxuICAgICAgICAgICAgLy8g6K6h566X5b2T5YmN5L2N572u5LiO55uu5qCH5L2N572u5LmL6Ze055qE6Led56a7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZGlyZWN0aW9uLm1hZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gdGhpcy5jaXJjbGVSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOagueaNruenu+WKqOmAn+W6puWSjOaXtumXtOmXtOmalOabtOaWsOS9jee9rlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZURpc3RhbmNlID0gZGlyZWN0aW9uLm5vcm1hbGl6ZSgpLm11bCh0aGlzLm1vdmVTcGVlZCAqIGR0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGN1cnJlbnRQb3MuYWRkKG1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmr4/pmpTkuIDmrrXml7bpl7Tlm7Tnu5Xnm67moIfov5DliqjkuIDmrKFcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVJbnRlcnZhbCA9IDAuMDA1OyAvLyDmm7TmlrDkvY3nva7nmoTml7bpl7Tpl7TpmpRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lciA+PSB1cGRhdGVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZXIgLT0gdXBkYXRlSW50ZXJ2YWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWbtOe7leebruagh+i/kOWKqFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlSW5jcmVtZW50ID0gdGhpcy5hbmd1bGFyU3BlZWQgKiB1cGRhdGVJbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gKHRoaXMuYW5nbGUgKyBhbmdsZUluY3JlbWVudCkgJSAzNjA7IC8vIOWinuWKoOinkuW6puW5tumZkOWItuWcqDAtMzYw6IyD5Zu05YaFXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNruinkuW6puWSjOWNiuW+hOiuoeeul+aWsOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbnMgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGguY29zKHJhZGlhbnMpICogdGhpcy5jaXJjbGVSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGguc2luKHJhZGlhbnMpICogdGhpcy5jaXJjbGVSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlUG9zaXRpb24gPSBjYy52Mih0YXJnZXRQb3MueCArIG9mZnNldFgsIHRhcmdldFBvcy55ICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoY2lyY2xlUG9zaXRpb24ueCwgY2lyY2xlUG9zaXRpb24ueSwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19