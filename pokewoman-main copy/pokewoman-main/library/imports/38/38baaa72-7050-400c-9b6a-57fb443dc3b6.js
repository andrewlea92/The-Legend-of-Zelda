"use strict";
cc._RF.push(module, '38baapycFBADJtqV/tEPcO2', 'MapManager');
// script/MapManager.ts

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
var MapManager = /** @class */ (function (_super) {
    __extends(MapManager, _super);
    function MapManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map1 = null;
        _this.map2 = null;
        _this.map3 = null;
        _this.player = null;
        _this.sprite = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MapManager.prototype.start = function () {
        this.map1.x = -512;
        this.map2.x = 0;
        this.map3.x = 512;
    };
    MapManager.prototype.update = function (dt) {
        if (this.player.x > this.map1.x + 512 / 2 && this.map3.x < this.player.x) {
            this.map3.x += 512 * 3;
            this.changeMapSprite(this.map3);
        }
        if (this.player.x < this.map1.x - 512 / 2 && this.map2.x > this.player.x) {
            this.map2.x -= 512 * 3;
            this.changeMapSprite(this.map2);
        }
        if (this.player.x > this.map2.x + 512 / 2 && this.map1.x < this.player.x) {
            this.map1.x += 512 * 3;
            this.changeMapSprite(this.map1);
        }
        if (this.player.x < this.map2.x - 512 / 2 && this.map3.x > this.player.x) {
            this.map3.x -= 512 * 3;
            this.changeMapSprite(this.map3);
        }
        if (this.player.x > this.map3.x + 512 / 2 && this.map2.x < this.player.x) {
            this.map2.x += 512 * 3;
            this.changeMapSprite(this.map2);
        }
        if (this.player.x < this.map3.x - 512 / 2 && this.map1.x > this.player.x) {
            this.map1.x -= 512 * 3;
            this.changeMapSprite(this.map1);
        }
    };
    MapManager.prototype.changeMapSprite = function (mapNode) {
        var randomIndex = Math.floor(Math.random() * 9); // 生成0-8的随机整数
        var spriteFrame = this.sprite[randomIndex];
        var sprite = mapNode.getComponent(cc.Sprite);
        if (sprite) {
            sprite.spriteFrame = spriteFrame;
        }
    };
    MapManager.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    MapManager.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    MapManager.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                cc.director.loadScene("main_back");
                cc.audioEngine.stopMusic();
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "map1", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "map2", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "map3", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "player", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], MapManager.prototype, "sprite", void 0);
    MapManager = __decorate([
        ccclass
    ], MapManager);
    return MapManager;
}(cc.Component));
exports.default = MapManager;

cc._RF.pop();