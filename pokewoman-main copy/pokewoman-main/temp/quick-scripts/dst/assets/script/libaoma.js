
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/libaoma.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'faf16SdgkVINYE19C/NE6+y', 'libaoma');
// script/libaoma.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.code = null;
        _this.yes = null;
        _this.no = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.yes = cc.find('Canvas/yes').getComponent(cc.Button);
        this.yes.node.on('click', this.handle, this);
        this.no = cc.find('Canvas/no').getComponent(cc.Button);
        this.no.node.on('click', this.nope, this);
    };
    NewClass.prototype.handle = function () {
        if (this.code == 'tk888') {
            if (GlobalData_1.default.pokewoman.length < 6) {
                GlobalData_1.default.pokewoman.push(3);
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.pokewoman.length - 1] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[GlobalData_1.default.pokewoman.length - 1]] +
                    GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[GlobalData_1.default.pokewoman.length - 1]]);
                GlobalData_1.default.fullHP[GlobalData_1.default.pokewoman.length - 1] = GlobalData_1.default.myPokewomanHP[GlobalData_1.default.pokewoman.length - 1];
            }
            else {
                GlobalData_1.default.toCapture = true;
                GlobalData_1.default.toCaptureID = 3;
                cc.director.loadScene('bag');
            }
            cc.director.loadScene(GlobalData_1.default.map);
        }
        else {
            cc.error('wrong code');
        }
    };
    NewClass.prototype.nope = function () {
        cc.director.loadScene(GlobalData_1.default.map);
    };
    NewClass.prototype.update = function (dt) {
        this.code = cc.find('Canvas/e1/label').getComponent(cc.Label).string;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsaWJhb21hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdEQztRQTdDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFaEIsVUFBSSxHQUFVLElBQUksQ0FBQztRQUNuQixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBQ3JCLFFBQUUsR0FBYSxJQUFJLENBQUM7O0lBc0MvQixDQUFDO0lBckNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQ3ZCO1lBRUksSUFBRyxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO2dCQUMvQixvQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLG9CQUFVLENBQUMsYUFBYSxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLG9CQUFVLENBQUMsZUFBZSxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUksb0JBQVUsQ0FBQyxLQUFLLEdBQUMsb0JBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsRyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxhQUFhLENBQUMsb0JBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlHO2lCQUFJO2dCQUNELG9CQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDNUIsb0JBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQztZQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekM7YUFFRDtZQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDekUsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnRDVCO0lBQUQsZUFBQztDQWhERCxBQWdEQyxDQWhEcUMsRUFBRSxDQUFDLFNBQVMsR0FnRGpEO2tCQWhEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlIDogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHVibGljIGNvZGU6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyB5ZXM6Y2MuQnV0dG9uID0gbnVsbDtcclxuICAgIHB1YmxpYyBubzpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnllcyA9IGNjLmZpbmQoJ0NhbnZhcy95ZXMnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnllcy5ub2RlLm9uKCdjbGljaycsdGhpcy5oYW5kbGUsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ubyA9IGNjLmZpbmQoJ0NhbnZhcy9ubycpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubm8ubm9kZS5vbignY2xpY2snLHRoaXMubm9wZSx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGUoKXtcclxuICAgICAgICBpZih0aGlzLmNvZGUgPT0gJ3RrODg4JylcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBpZihHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGggPCA2KXtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2goMyk7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFBbR2xvYmFsRGF0YS5wb2tld29tYW4ubGVuZ3RoLTFdID0gKEdsb2JhbERhdGEucG9rZXdvbWFuQmFzZUhQW0dsb2JhbERhdGEucG9rZXdvbWFuW0dsb2JhbERhdGEucG9rZXdvbWFuLmxlbmd0aC0xXV0gKyBcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEubGV2ZWwqR2xvYmFsRGF0YS5wb2tld29tYW5IUHNjYWxlW0dsb2JhbERhdGEucG9rZXdvbWFuW0dsb2JhbERhdGEucG9rZXdvbWFuLmxlbmd0aC0xXV0pXHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmZ1bGxIUFtHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGgtMV0gPSBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFBbR2xvYmFsRGF0YS5wb2tld29tYW4ubGVuZ3RoLTFdOyBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLnRvQ2FwdHVyZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLnRvQ2FwdHVyZUlEID0gMztcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYmFnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKEdsb2JhbERhdGEubWFwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ3dyb25nIGNvZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbm9wZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShHbG9iYWxEYXRhLm1hcCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY2MuZmluZCgnQ2FudmFzL2UxL2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19