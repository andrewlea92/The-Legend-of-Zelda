"use strict";
cc._RF.push(module, '96d882jlWxJzoocDSuJiomX', 'me');
// script/me.ts

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
var CharacterController = /** @class */ (function (_super) {
    __extends(CharacterController, _super);
    function CharacterController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.p1 = null;
        _this.p2 = null;
        _this.p3 = null;
        _this.character = null;
        _this.moveSpeed = 1.5;
        _this.isMovingUp = false;
        _this.isMovingDown = false;
        _this.isMovingLeft = false;
        _this.isMovingRight = false;
        _this.big = false;
        _this.small = false;
        return _this;
    }
    CharacterController.prototype.start = function () {
        // 設置初始層級和顯示順序
        this.character.setSiblingIndex(this.p2.getSiblingIndex());
        this.node.scale = 0.8;
    };
    CharacterController.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    CharacterController.prototype.onDestroy = function () {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    CharacterController.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.isMovingUp = true;
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = true;
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = true;
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = true;
                break;
            case cc.macro.KEY.up:
                this.big = true;
                break;
            case cc.macro.KEY.down:
                this.small = true;
                break;
        }
    };
    CharacterController.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.isMovingUp = false;
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = false;
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = false;
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = false;
                break;
            case cc.macro.KEY.up:
                this.big = false;
                break;
            case cc.macro.KEY.down:
                this.small = false;
                break;
        }
    };
    CharacterController.prototype.update = function (dt) {
        if (this.isMovingUp && this.node.y + 58 * this.node.scale < 256) {
            this.node.y += (this.moveSpeed * dt);
        }
        if (this.isMovingDown && this.node.y - 58 * this.node.scale > -256) {
            this.node.y -= this.moveSpeed * dt;
        }
        if (this.isMovingLeft) {
            this.node.x -= this.moveSpeed * dt;
        }
        if (this.isMovingRight) {
            this.node.x += this.moveSpeed * dt;
        }
        if (this.big) {
            this.node.scale += 1 * dt;
        }
        if (this.small) {
            this.node.scale -= 1 * dt;
        }
        // 根據角色Y座標變化調整層級和顯示順序
        console.log(this.node.y);
        if (this.node.scale > 0.7 && this.node.scale < 1) {
            this.character.setSiblingIndex(this.p2.getSiblingIndex() + 1);
        }
        else if (this.node.scale > 1 && this.node.scale < 2) {
            this.character.setSiblingIndex(this.p1.getSiblingIndex() + 1);
        }
        else if (this.node.scale > 2) {
            this.character.setSiblingIndex(this.p3.getSiblingIndex() + 1);
        }
        else {
            this.character.setSiblingIndex(this.p2.getSiblingIndex() - 1);
        }
    };
    __decorate([
        property(cc.Node)
    ], CharacterController.prototype, "p1", void 0);
    __decorate([
        property(cc.Node)
    ], CharacterController.prototype, "p2", void 0);
    __decorate([
        property(cc.Node)
    ], CharacterController.prototype, "p3", void 0);
    __decorate([
        property(cc.Node)
    ], CharacterController.prototype, "character", void 0);
    __decorate([
        property(Number)
    ], CharacterController.prototype, "moveSpeed", void 0);
    CharacterController = __decorate([
        ccclass
    ], CharacterController);
    return CharacterController;
}(cc.Component));
exports.default = CharacterController;

cc._RF.pop();