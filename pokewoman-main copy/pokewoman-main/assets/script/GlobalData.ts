// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
export default class GlobalData {
    static uid: string = "";
    static pokewoman: any[] = [];
    static level: number = 1;
    static PlayerPosX : number = 29;
    static PlayerPosY : number = -62;
    static Player2PosX : number = 35;
    static Player2PosY : number = -62;
    static cameraPosX : number = 138;
    static cameraPosY : number = 71;
    static volume : number = 0.5;
    static mute : boolean = this.volume == 0 ? false : true;
    static map : string = 'map2';
    static nodeToDestroy : string[] = [];
    static myelf : number = 0;
    static mylife : number = 0;
    static exp : number = 0;
    static level_exp: number[] = [50,120,190,290,390,500,610,670,800,1000];
    static enemyHPbyID: number[] = [50,54,63,65,70,59,60,120,200]
    static enemyAttackById: number[] = [21,25,21,23,18,25,24,60,100]
    static enemyLevelById: number[] = [15,15,20,30,20,23,26,45,100]
    static pokewomanAttack: number[] = [10,15,20,23,22,18,12,29,30,24,15,31,25,31,9,8]
    static pokewomanBaseHP: number[] = [80,70,60,69,78,97,62,88,73,74,81,72,60,90,50,40]
    static pokewomanHPscale: number[] = [9,10,11,9,10,8,13,9,14,10,10,11,13,14,9]
    static pokewomanName: string[] = ["岩東勇","炎東勇","嚴冬勇","魔關羽","dong boss","曾國城","黃子膠","鯉魚王","大S","小S","Metwo","古蹟後面","Gengar","Gyarados","Pidgey","Rattata"]
    static hp: number = 100;
    static isBOSScamera : boolean = false;

    //打敗仙女棒和紅拳=>大熊顯現
    static isBoss1 : boolean = false;
    static isEnenmyMagic : boolean = false;
    static isEnenmyRed: boolean = false;
    static isEnenmyFish: boolean = false;
    static isEnenmyBoss2: boolean = false;

    static lose: boolean = false;
    static toCapture: boolean = false;
    static toCaptureID: number = 0;
    static winNum: number = 0;
    static initializeHPArrays(): void {
        //this.hp = 100 + 10 * this.level;
        console.log(this.pokewoman.length);
        for(var i = 0 ;i < 6;i++){
            if(i < this.pokewoman.length){
                this.myPokewomanHP[i] = (this.pokewomanBaseHP[this.pokewoman[i]] + 
                    this.level*this.pokewomanHPscale[this.pokewoman[i]])
                this.fullHP[i] = this.myPokewomanHP[i];
            }else{
                this.myPokewomanHP[i] = 0;
                this.fullHP[i] = 0;
            }
        }
        
    }
    static updateFullHP(): void{
        for(var i= 0 ; i < this.pokewoman.length ;i++){
            this.fullHP[i] = (this.pokewomanBaseHP[this.pokewoman[i]] + 
                this.level*this.pokewomanHPscale[this.pokewoman[i]])
        }
    }
    static myPokewomanHP: number[] = [];
    static fullHP: number[] = [];
}
