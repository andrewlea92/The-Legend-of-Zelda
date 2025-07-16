"use strict";
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