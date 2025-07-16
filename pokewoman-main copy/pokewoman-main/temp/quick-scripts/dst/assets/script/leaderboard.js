
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/leaderboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19c902/eZpF3L6iHldtuP9a', 'leaderboard');
// script/leaderboard.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.first = null;
        _this.second = null;
        _this.third = null;
        _this.fourth = null;
        _this.fifth = null;
        _this.back = null;
        // LIFE-CYCLE CALLBACKS:
        _this.rank = [];
        _this.rankName = [];
        _this.labelString = [];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        // read data from firebase and show it on leaderboard , and only read "win" data for every user
        var database = firebase.database();
        var userRef = database.ref('user');
        userRef.once('value', function (snapshot) {
            var userData = snapshot.val();
            console.log(userData);
            for (var key in userData) {
                if (userData.hasOwnProperty(key)) {
                    var element = userData[key];
                    _this.rank.push(element.win);
                    _this.rankName.push(element.name);
                }
            }
            console.log(_this.rank);
            _this.rank.sort(function (a, b) { return b - a; });
            // string = rankName + rank
            for (var i = 0; i < 5; i++) {
                if (typeof _this.rank[i] === 'number') {
                    console.log(_this.rank[i], _this.rankName[i]);
                    _this.labelString[i] = _this.rankName[i] + '      wins:' + _this.rank[i].toString();
                }
                else {
                    _this.labelString[i] = "";
                }
            }
            _this.first.string = _this.labelString[0];
            _this.second.string = _this.labelString[1];
            _this.third.string = _this.labelString[2];
            _this.fourth.string = _this.labelString[3];
            _this.fifth.string = _this.labelString[4];
        });
        this.back.node.on('click', this.backToLogin, this);
    };
    NewClass.prototype.backToLogin = function () {
        cc.director.loadScene('login');
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "first", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "second", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "third", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "fourth", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "fifth", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "back", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsZWFkZXJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtFQztRQS9ERyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUN2Qix3QkFBd0I7UUFDaEIsVUFBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixjQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLGlCQUFXLEdBQWtCLEVBQUUsQ0FBQzs7SUE0QzVDLENBQUM7SUEzQ0cseUJBQU0sR0FBTjtRQUFBLGlCQWdDQztRQS9CRywrRkFBK0Y7UUFDL0YsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxRQUFRO1lBQzNCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssSUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO2dCQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFj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akQ7a0JBbEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2UgOiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBmaXJzdDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNlY29uZDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRoaXJkOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZm91cnRoOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZmlmdGg6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHJpdmF0ZSByYW5rOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwcml2YXRlIHJhbmtOYW1lOiBBcnJheTxhbnk+ID0gW107ICBcclxuICAgIHByaXZhdGUgbGFiZWxTdHJpbmc6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8gcmVhZCBkYXRhIGZyb20gZmlyZWJhc2UgYW5kIHNob3cgaXQgb24gbGVhZGVyYm9hcmQgLCBhbmQgb25seSByZWFkIFwid2luXCIgZGF0YSBmb3IgZXZlcnkgdXNlclxyXG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBjb25zdCB1c2VyUmVmID0gZGF0YWJhc2UucmVmKCd1c2VyJyk7XHJcbiAgICAgICAgdXNlclJlZi5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1c2VyRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuay5wdXNoKGVsZW1lbnQud2luKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmtOYW1lLnB1c2goZWxlbWVudC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJhbmspO1xyXG4gICAgICAgICAgICB0aGlzLnJhbmsuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xyXG4gICAgICAgICAgICAvLyBzdHJpbmcgPSByYW5rTmFtZSArIHJhbmtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMucmFua1tpXSA9PT0gJ251bWJlcicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmFua1tpXSx0aGlzLnJhbmtOYW1lW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsU3RyaW5nW2ldID10aGlzLnJhbmtOYW1lW2ldICsgJyAgICAgIHdpbnM6JyArIHRoaXMucmFua1tpXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsU3RyaW5nW2ldPVwiXCI7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpcnN0LnN0cmluZyA9IHRoaXMubGFiZWxTdHJpbmdbMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kLnN0cmluZyA9IHRoaXMubGFiZWxTdHJpbmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudGhpcmQuc3RyaW5nID0gdGhpcy5sYWJlbFN0cmluZ1syXTtcclxuICAgICAgICAgICAgdGhpcy5mb3VydGguc3RyaW5nID0gdGhpcy5sYWJlbFN0cmluZ1szXTtcclxuICAgICAgICAgICAgdGhpcy5maWZ0aC5zdHJpbmcgPSB0aGlzLmxhYmVsU3RyaW5nWzRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmFjay5ub2RlLm9uKCdjbGljaycsdGhpcy5iYWNrVG9Mb2dpbix0aGlzKTtcclxuICAgIH1cclxuICAgIGJhY2tUb0xvZ2luKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsb2dpbicpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==