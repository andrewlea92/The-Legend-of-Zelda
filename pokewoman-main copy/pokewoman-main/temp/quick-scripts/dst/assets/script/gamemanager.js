
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gamemanager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fe66XBYGBCg5ftEm54Wh9M', 'gamemanager');
// script/gamemanager.ts

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
var GlobalData_1 = require("../script/GlobalData");
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.palse = false;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
    };
    GameManager.prototype.update = function () {
        if (GlobalData_1.default.exp >= GlobalData_1.default.level_exp[GlobalData_1.default.level - 1]) {
            GlobalData_1.default.exp -= GlobalData_1.default.level_exp[GlobalData_1.default.level - 1];
            GlobalData_1.default.level += 1;
            cc.find('Canvas/Main Camera/level up').active = true;
            cc.find('Canvas/Main Camera/level up').getComponent(cc.Animation).play();
            this.scheduleOnce(function () {
                cc.find('Canvas/Main Camera/level up').active = false;
            }, 1.2);
            GlobalData_1.default.initializeHPArrays();
        }
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxtREFBOEM7QUFHOUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFxQkM7UUFuQkcsV0FBSyxHQUFDLEtBQUssQ0FBQzs7SUFtQmhCLENBQUM7SUFqQkcsNEJBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCw0QkFBTSxHQUFOO1FBQ0ksSUFBRyxvQkFBVSxDQUFDLEdBQUcsSUFBSSxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQztZQUMxRCxvQkFBVSxDQUFDLEdBQUcsSUFBSSxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxvQkFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckQsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMxRCxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDTixvQkFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBbEJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBcUIvQjtJQUFELGtCQUFDO0NBckJELEFBcUJDLENBckJ3QyxFQUFFLENBQUMsU0FBUyxHQXFCcEQ7a0JBckJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gJy4uL3NjcmlwdC9HbG9iYWxEYXRhJztcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHBhbHNlPWZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKEdsb2JhbERhdGEuZXhwID49IEdsb2JhbERhdGEubGV2ZWxfZXhwW0dsb2JhbERhdGEubGV2ZWwtMV0pe1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLmV4cCAtPSBHbG9iYWxEYXRhLmxldmVsX2V4cFtHbG9iYWxEYXRhLmxldmVsLTFdO1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLmxldmVsICs9IDE7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9sZXZlbCB1cCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9sZXZlbCB1cCcpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9sZXZlbCB1cCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LDEuMilcclxuICAgICAgICAgICAgR2xvYmFsRGF0YS5pbml0aWFsaXplSFBBcnJheXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=