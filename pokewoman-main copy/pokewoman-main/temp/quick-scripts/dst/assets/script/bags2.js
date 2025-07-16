
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bags2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cc47Q6q19H15RwU7uSHQVj', 'bags2');
// script/bags2.ts

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
var GlobalData_1 = require("./GlobalData");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.sprite = [];
        _this.index = 0;
        /* get a return array from other script */
        // bag: number[] = [3, 4, 1, 2, 5, 0];
        _this.bag = GlobalData_1.default.pokewoman;
        // LIFE-CYCLE CALLBACKS:
        _this.num = 0;
        _this.nm = null;
        _this.atk_num = null;
        _this.hp_num = null;
        _this.runAway = null;
        _this.nowchoose = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        cc.director.getPhysicsManager().enabled = true;
        this.runAway.active = false;
        var uid = GlobalData_1.default.uid;
        firebase.database().ref(uid + 'pokewoman').on('value', function (snapshot) {
            _this.num = snapshot.val();
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            this.node.getChildByName('Sprite' + i).width = 80;
            this.node.getChildByName('Sprite' + i).height = 90;
            console.log("i:", i);
            console.log(this.node.getChildByName('Sprite' + i).width);
            console.log(this.node.getChildByName('Sprite' + i).height);
            if (this.bag[i] == null) {
                this.node.getChildByName('Sprite' + i).active = false;
            }
        }
        cc.find('Canvas/bags2/Sprite0').on('click', function () {
            _this.nowchoose = 0;
        });
        cc.find('Canvas/bags2/Sprite1').on('click', function () {
            _this.nowchoose = 1;
        });
        cc.find('Canvas/bags2/Sprite2').on('click', function () {
            _this.nowchoose = 2;
        });
        cc.find('Canvas/bags2/Sprite3').on('click', function () {
            _this.nowchoose = 3;
        });
        cc.find('Canvas/bags2/Sprite4').on('click', function () {
            _this.nowchoose = 4;
        });
        cc.find('Canvas/bags2/Sprite5').on('click', function () {
            _this.nowchoose = 5;
        });
        cc.find('Canvas/bags2/confirm').on('click', function () {
            GlobalData_1.default.myelf = _this.nowchoose;
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
            _this.runAway.active = true;
        });
        cc.find('Canvas/bags2/cancel').on('click', function () {
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
            _this.runAway.active = true;
        });
    };
    NewClass.prototype.update = function (dt) {
        if (this.nowchoose <= 5) {
            var spriteNode = this.node.getChildByName('Sprite' + this.nowchoose);
            var spriteComponent = spriteNode.getComponent(cc.Sprite);
            // Calculate a color variation using a time-based value
            var colorOffset = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
            // Create a new color with the varying offset
            var newColor = new cc.Color(colorOffset * 255, colorOffset * 255, colorOffset * 255);
            // Assign the new color to the sprite's color property
            spriteComponent.node.color = newColor;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "sprite", void 0);
    __decorate([
        property
    ], NewClass.prototype, "index", void 0);
    __decorate([
        property
    ], NewClass.prototype, "num", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "nm", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "atk_num", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "hp_num", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "runAway", void 0);
    __decorate([
        property
    ], NewClass.prototype, "nowchoose", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYWdzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQywyQ0FBc0M7QUFHdEM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvR0M7UUFqR0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBRzlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsMENBQTBDO1FBQzFDLHNDQUFzQztRQUN0QyxTQUFHLEdBQVksb0JBQVUsQ0FBQyxTQUFTLENBQUM7UUFFcEMsd0JBQXdCO1FBRXhCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFHaEIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQXFFMUIsQ0FBQztJQW5FRyx5QkFBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsb0JBQVUsQ0FBQyxHQUFHLENBQUM7UUFDekIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLFFBQVE7WUFDM0QsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENB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QUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0Q0FDRztJQUc5QjtRQURDLFFBQVE7MkNBQ1M7SUFRbEI7UUFEQyxRQUFRO3lDQUNPO0lBR2hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ0M7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFROytDQUNhO0lBL0JMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvRzVCO0lBQUQsZUFBQztDQXBHRCxBQW9HQyxDQXBHcUMsRUFBRSxDQUFDLFNBQVMsR0FvR2pEO2tCQXBHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiBnZXQgYSByZXR1cm4gYXJyYXkgZnJvbSBvdGhlciBzY3JpcHQgKi9cclxuICAgIC8vIGJhZzogbnVtYmVyW10gPSBbMywgNCwgMSwgMiwgNSwgMF07XHJcbiAgICBiYWc6IG51bWJlcltdID1HbG9iYWxEYXRhLnBva2V3b21hbjtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5tOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhdGtfbnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBocF9udW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcnVuQXdheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG5vd2Nob29zZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ydW5Bd2F5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciB1aWQgPSBHbG9iYWxEYXRhLnVpZDsgIFxyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHVpZCArICdwb2tld29tYW4nKS5vbigndmFsdWUnLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlJyArIGkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbaV1dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS53aWR0aCA9IDgwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS5oZWlnaHQgPSA5MDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpOlwiICxpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkud2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmJhZ1tpXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyL1Nwcml0ZTAnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyL1Nwcml0ZTEnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyL1Nwcml0ZTInKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyL1Nwcml0ZTMnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyL1Nwcml0ZTQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyL1Nwcml0ZTUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyL2NvbmZpcm0nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEubXllbGYgPSB0aGlzLm5vd2Nob29zZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9za2lsbHMnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bkF3YXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFnczIvY2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFnczInKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NraWxscycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucnVuQXdheS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm93Y2hvb3NlIDw9IDUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlJyArIHRoaXMubm93Y2hvb3NlKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlQ29tcG9uZW50ID0gc3ByaXRlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBhIGNvbG9yIHZhcmlhdGlvbiB1c2luZyBhIHRpbWUtYmFzZWQgdmFsdWVcclxuICAgICAgICAgICAgY29uc3QgY29sb3JPZmZzZXQgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiAwLjUgKyAwLjU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgY29sb3Igd2l0aCB0aGUgdmFyeWluZyBvZmZzZXRcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBuZXcgY2MuQ29sb3IoY29sb3JPZmZzZXQgKiAyNTUsIGNvbG9yT2Zmc2V0ICoyNTUsIGNvbG9yT2Zmc2V0ICoyNTUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXNzaWduIHRoZSBuZXcgY29sb3IgdG8gdGhlIHNwcml0ZSdzIGNvbG9yIHByb3BlcnR5XHJcbiAgICAgICAgICAgIHNwcml0ZUNvbXBvbmVudC5ub2RlLmNvbG9yID0gbmV3Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19