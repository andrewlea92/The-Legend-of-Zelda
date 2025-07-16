// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
declare const firebase : any;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    first: cc.Label = null;

    @property(cc.Label)
    second: cc.Label = null;

    @property(cc.Label)
    third: cc.Label = null;

    @property(cc.Label)
    fourth: cc.Label = null;

    @property(cc.Label)
    fifth: cc.Label = null;

    @property(cc.Button)
    back: cc.Button = null;
    // LIFE-CYCLE CALLBACKS:
    private rank: Array<any> = [];
    private rankName: Array<any> = [];  
    private labelString: Array<string> = [];
    onLoad () {
        // read data from firebase and show it on leaderboard , and only read "win" data for every user
        const database = firebase.database();
        const userRef = database.ref('user');
        userRef.once('value', (snapshot) => {
            const userData = snapshot.val();
            console.log(userData);
            for (const key in userData) {
                if (userData.hasOwnProperty(key)) {
                    const element = userData[key];
                    this.rank.push(element.win);
                    this.rankName.push(element.name);
                }
            }
            console.log(this.rank);
            this.rank.sort((a, b) => b - a);
            // string = rankName + rank
            for (let i = 0; i < 5; i++) {
               if(typeof this.rank[i] === 'number'){
                    console.log(this.rank[i],this.rankName[i]);
                    this.labelString[i] =this.rankName[i] + '      wins:' + this.rank[i].toString();
               }else{
                    this.labelString[i]="";
               }
            }
            this.first.string = this.labelString[0];
            this.second.string = this.labelString[1];
            this.third.string = this.labelString[2];
            this.fourth.string = this.labelString[3];
            this.fifth.string = this.labelString[4];
        });
        this.back.node.on('click',this.backToLogin,this);
    }
    backToLogin(){
        cc.director.loadScene('login');
    }
    start () {

    }

    update (dt) {

    }
}
