import { Container, Sprite, Text, TextStyle } from "pixi.js";
import { Game } from "../game";
import gsap from "gsap";

export class School_03 extends Container{
    private logo !: Sprite;
    private building !: Sprite;
    private bridge !: Sprite;
    private pole1 !: Sprite;
    private river !: Sprite;
    private chessChampionshipText !: Text;
    private matholympiadText !: Text;
    private scienceolympiadText !: Text;
    private stone !: Sprite;
    private star_01 !: Sprite;

    private indicator !: Sprite;
    private gameText !: Text;
    private textBg !: Sprite;
    private TextContainer !: Container;




    constructor() {
        super();
        this.y = 20;
        this.building = new Sprite(Game.the.app.loader.resources['jnvImg'].texture);
        this.logo = new Sprite(Game.the.app.loader.resources['jnv_logo'].texture);
        this.logo.scale.set(0.35);
        this.logo.position.set((this.building.width - this.logo.width)/2 , 11);


        this.river = new Sprite(Game.the.app.loader.resources['river'].texture);
        this.addChild(this.river);
        this.river.position.set(this.building.width - 720, 100);
        this.river.scale.set(1,0.5);

      

        this.pole1 = new Sprite(Game.the.app.loader.resources['indicator'].texture);
        this.pole1.position.set(this.building.width  - 20, 100);
        this.pole1.scale.set(0.5);

        this.star_01 = new Sprite(Game.the.app.loader.resources['star_score'].texture);
        this.addChild(this.star_01);
        this.star_01.position.set(this.pole1.position.x + 30, this.pole1.position.y);

        this.addChild(this.pole1);


        this.bridge = new Sprite(Game.the.app.loader.resources['bridge'].texture);
        this.addChild(this.bridge);
        this.bridge.position.set(this.building.width - 40, 170);

        
        this.addChild(this.building);
        this.addChild(this.logo);

        const style = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 18,
            fill: 'white',
            align: 'center',
            wordWrap : true,
            wordWrapWidth : 100
        });

        const style2 = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 15,
            fill: 'white',
            align: 'center',
            wordWrap : true,
            wordWrapWidth : 180
        });
        
        this.chessChampionshipText = new Text("National Chess Championship 2012",style);
        this.chessChampionshipText.position.set(this.pole1.x + 6 , this.pole1.y + 2);
        this.addChild(this.chessChampionshipText);

        this.matholympiadText = new Text(`Science\nolympiad`,style2);
        this.matholympiadText.position.set(this.bridge.x + this.bridge.width/2 - 60 , this.bridge.y + 12);
        this.addChild(this.matholympiadText);

        this.scienceolympiadText = new Text(`Math olympiad`,style2);
        this.scienceolympiadText.position.set(this.bridge.x + this.bridge.width*0.52 - 16 , this.bridge.y + 106);
        this.addChild(this.scienceolympiadText);
        this.initText();
        Game.the.app.stage.on("EMIT_THE_STAR",this.tweenOnStar, this);

    }

    private initText() :void{
        this.TextContainer = new Container();
        this.addChild(this.TextContainer);
        this.TextContainer.scale.set(1);
        this.TextContainer.position.set(20,-50);

        this.indicator = new Sprite(Game.the.app.loader.resources['pointer'].texture);
        this.TextContainer.addChild(this.indicator);
        this.indicator.scale.set(0.3);
        this.indicator.position.set((this.building.width)*0.75, 10);

        this.textBg = new Sprite(Game.the.app.loader.resources['textWrapImg'].texture);
        this.TextContainer.addChild(this.textBg);
        this.textBg.scale.set(0.5);
        this.textBg.position.set((this.building.width - this.textBg.width)/2 - 10 , -90);

        const style2 = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 18,
            fill: 'white',
            align: 'center',
            wordWrap : true,
            wordWrapWidth : 200,
        });

        this.gameText = new Text(`Went to\nJawahar Navodaya Vidyalaya\n2010-2017`,style2);
        this.gameText.position.set(this.textBg.x + ((this.textBg.width - this.gameText.width)/2) , this.textBg.y + ((this.textBg.height - this.gameText.height)/2));
        this.TextContainer.addChild(this.gameText);
    }

    private tweenOnStar() :void{
      gsap.to(this.star_01,{
        duration : 0.5,
        alpha : 1
      });
      gsap.to(this.star_01,{
        duration : 1,
        y : this.star_01.y  - 100,
      })
      gsap.delayedCall(1.25,() =>{
        gsap.to(this.star_01,{
            duration : 0.25,
            alpha : 0,
            onComplete : () => this.resetPosition()
        });
      })
    };

    resetPosition() :void{
        this.star_01.y = this.pole1.position.y
    }
}