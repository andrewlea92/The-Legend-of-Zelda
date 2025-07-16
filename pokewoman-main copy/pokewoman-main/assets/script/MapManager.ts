const { ccclass, property } = cc._decorator;

@ccclass
export default class MapManager extends cc.Component {
    @property(cc.Node)
    map1: cc.Node = null;

    @property(cc.Node)
    map2: cc.Node = null;

    @property(cc.Node)
    map3: cc.Node = null;

    @property(cc.Node)
    player: cc.Node = null;

    @property([cc.SpriteFrame])
    sprite: cc.SpriteFrame[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.map1.x = -512;
        this.map2.x = 0;
        this.map3.x = 512;
    }

    update(dt) {
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
    }

    changeMapSprite(mapNode) {
        const randomIndex = Math.floor(Math.random() * 9); // 生成0-8的随机整数
        const spriteFrame = this.sprite[randomIndex];
        const sprite = mapNode.getComponent(cc.Sprite);
        if (sprite) {
            sprite.spriteFrame = spriteFrame;
        }
    }

    onLoad(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

   onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                cc.director.loadScene("main_back");
                cc.audioEngine.stopMusic();
                break;
            
        }
    }
}