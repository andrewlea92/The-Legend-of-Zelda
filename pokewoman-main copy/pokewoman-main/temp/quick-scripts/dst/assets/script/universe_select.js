
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/universe_select.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cae20nrkCVIxL1GbA60rjuj', 'universe_select');
// script/universe_select.ts

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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/p1').on('click', function () {
            GlobalData_1.default.map = "map2";
            GlobalData_1.default.PlayerPosX = 29;
            GlobalData_1.default.PlayerPosY = -62;
            GlobalData_1.default.Player2PosX = 35;
            GlobalData_1.default.Player2PosY = -62;
            cc.director.loadScene('universe_changeScene');
        });
        cc.find('Canvas/p2').on('click', function () {
            GlobalData_1.default.map = "map3";
            GlobalData_1.default.PlayerPosX = 113;
            GlobalData_1.default.PlayerPosY = -62;
            GlobalData_1.default.Player2PosX = 95;
            GlobalData_1.default.Player2PosY = -25;
            cc.director.loadScene('universe_changeScene');
        });
        if (GlobalData_1.default.isEnenmyFish && GlobalData_1.default.isBoss1 && GlobalData_1.default.isEnenmyMagic && GlobalData_1.default.isEnenmyRed) {
            cc.find('Canvas/p3').active = true;
            cc.find('Canvas/p3').on('click', function () {
                GlobalData_1.default.map = "map4";
                GlobalData_1.default.PlayerPosX = 113;
                GlobalData_1.default.PlayerPosY = -62;
                GlobalData_1.default.Player2PosX = 86;
                GlobalData_1.default.Player2PosY = -62;
                cc.director.loadScene('universe_changeScene');
            });
        }
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1bml2ZXJzZV9zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW9DQSxDQUFDO0lBbENHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDekIsb0JBQVUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLG9CQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUMzQixvQkFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM1QixvQkFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDNUIsb0JBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixvQkFBVSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDeEIsb0JBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQzVCLG9CQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzVCLG9CQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUM1QixvQkFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBRyxvQkFBVSxDQUFDLFlBQVksSUFBSSxvQkFBVSxDQUFDLE9BQU8sSUFBSSxvQkFBVSxDQUFDLGFBQWEsSUFBSSxvQkFBVSxDQUFDLFdBQVcsRUFBQztZQUNuRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUN6QixvQkFBVSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ3hCLG9CQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFDNUIsb0JBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLG9CQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDNUIsb0JBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQWxDZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9DNUI7SUFBRCxlQUFDO0NBcENELEFBb0NDLENBcENxQyxFQUFFLENBQUMsU0FBUyxHQW9DakQ7a0JBcENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wMScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEubWFwID0gXCJtYXAyXCI7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLlBsYXllclBvc1ggPSAyOTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWSA9IC02MjtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyMlBvc1ggPSAzNTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyMlBvc1kgPSAtNjI7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3VuaXZlcnNlX2NoYW5nZVNjZW5lJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL3AyJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5tYXAgPSBcIm1hcDNcIjtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWCA9IDExMztcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWSA9IC02MjtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyMlBvc1ggPSA5NTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyMlBvc1kgPSAtMjU7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3VuaXZlcnNlX2NoYW5nZVNjZW5lJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmKEdsb2JhbERhdGEuaXNFbmVubXlGaXNoICYmIEdsb2JhbERhdGEuaXNCb3NzMSAmJiBHbG9iYWxEYXRhLmlzRW5lbm15TWFnaWMgJiYgR2xvYmFsRGF0YS5pc0VuZW5teVJlZCl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wMycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wMycpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLm1hcCA9IFwibWFwNFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWCA9IDExMztcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLlBsYXllclBvc1kgPSAtNjI7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5QbGF5ZXIyUG9zWCA9IDg2O1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuUGxheWVyMlBvc1kgPSAtNjI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCd1bml2ZXJzZV9jaGFuZ2VTY2VuZScpO1xyXG4gICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbn0iXX0=