
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/select_dong.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4962czxJgVH3Id4UBfgF5Bo', 'select_dong');
// script/select_dong.ts

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
        var uid = GlobalData_1.default.uid;
        var database = firebase.database();
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/select/dong1/dong1_btn').on('click', function () {
            GlobalData_1.default.pokewoman.push(0);
            GlobalData_1.default.initializeHPArrays();
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [0],
                curHP: GlobalData_1.default.myPokewomanHP,
                fullHP: GlobalData_1.default.fullHP,
            });
            cc.director.loadScene('main');
        });
        cc.find('Canvas/select/dong2/dong2_btn').on('click', function () {
            GlobalData_1.default.pokewoman.push(1);
            console.log(GlobalData_1.default.pokewoman.length);
            GlobalData_1.default.initializeHPArrays();
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [1],
                curHP: GlobalData_1.default.myPokewomanHP,
                fullHP: GlobalData_1.default.fullHP,
            });
            cc.director.loadScene('main');
        });
        cc.find('Canvas/select/dong3/dong3_btn').on('click', function () {
            GlobalData_1.default.pokewoman.push(2);
            GlobalData_1.default.initializeHPArrays();
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [2],
                curHP: GlobalData_1.default.myPokewomanHP,
                fullHP: GlobalData_1.default.fullHP,
            });
            cc.director.loadScene('main');
        });
        // cc.find('Canvas/logout').on('click', () => {
        //     cc.director.loadScene('login');
        // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzZWxlY3RfZG9uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBaURBLENBQUM7SUEvQ0cseUJBQU0sR0FBTjtRQUNJLElBQUksR0FBRyxHQUFHLG9CQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0Isb0JBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osS0FBSyxFQUFFLG9CQUFVLENBQUMsYUFBYTtnQkFDL0IsTUFBTSxFQUFFLG9CQUFVLENBQUMsTUFBTTthQUM1QixDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzdDLG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLG9CQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNoQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEtBQUssRUFBRSxvQkFBVSxDQUFDLGFBQWE7Z0JBQy9CLE1BQU0sRUFBRSxvQkFBVSxDQUFDLE1BQU07YUFDNUIsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUM3QyxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0Isb0JBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osS0FBSyxFQUFFLG9CQUFVLENBQUMsYUFBYTtnQkFDL0IsTUFBTSxFQUFFLG9CQUFVLENBQUMsTUFBTTthQUM1QixDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILCtDQUErQztRQUMvQyxzQ0FBc0M7UUFDdEMsTUFBTTtJQUVWLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQS9DZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlENUI7SUFBRCxlQUFDO0NBakRELEFBaURDLENBakRxQyxFQUFFLENBQUMsU0FBUyxHQWlEakQ7a0JBakRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB2YXIgdWlkID0gR2xvYmFsRGF0YS51aWQ7XHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NlbGVjdC9kb25nMS9kb25nMV9idG4nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2goMCk7XHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEuaW5pdGlhbGl6ZUhQQXJyYXlzKCk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VyJykuY2hpbGQoR2xvYmFsRGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBteUFycmF5OiBbMF0sXHJcbiAgICAgICAgICAgICAgICBjdXJIUDogR2xvYmFsRGF0YS5teVBva2V3b21hbkhQLFxyXG4gICAgICAgICAgICAgICAgZnVsbEhQOiBHbG9iYWxEYXRhLmZ1bGxIUCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvc2VsZWN0L2RvbmcyL2RvbmcyX2J0bicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2goMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5pbml0aWFsaXplSFBBcnJheXMoKTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VyJykuY2hpbGQoR2xvYmFsRGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlBcnJheTogWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1ckhQOiBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFAsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbEhQOiBHbG9iYWxEYXRhLmZ1bGxIUCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NlbGVjdC9kb25nMy9kb25nM19idG4nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLnBva2V3b21hbi5wdXNoKDIpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5pbml0aWFsaXplSFBBcnJheXMoKTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VyJykuY2hpbGQoR2xvYmFsRGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlBcnJheTogWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1ckhQOiBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFAsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbEhQOiBHbG9iYWxEYXRhLmZ1bGxIUCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9sb2dvdXQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbn1cclxuIl19