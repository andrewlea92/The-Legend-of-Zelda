"use strict";
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