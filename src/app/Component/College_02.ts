import { Container, Sprite, Text, TextStyle } from "pixi.js";
import { Game } from "../game";

export class College_02 extends Container{
    private logo !: Sprite;
    private building !: Sprite;
    private indicator !: Sprite;
    private gameText !: Text;
    private textBg !: Sprite;
    private TextContainer !: Container;

    constructor() {
        super();
        this.y = 50;
        this.building = new Sprite(Game.the.app.loader.resources['college_2_img'].texture);
        this.addChild(this.building);
        this.building.y = 0;
        this.logo = new Sprite(Game.the.app.loader.resources['collegeLogo'].texture);
        // this.addChild(this.logo);
        this.logo.scale.set(0.26);
        this.logo.position.set((this.building.width - this.logo.width)/2 , 11);
        this.initText();
    }

    private initText() :void{
        
        this.TextContainer = new Container();
        this.addChild(this.TextContainer);
        this.TextContainer.scale.set(0.8);
        this.TextContainer.position.set(40, -80);

        this.indicator = new Sprite(Game.the.app.loader.resources['pointer'].texture);
        this.TextContainer.addChild(this.indicator);
        this.indicator.scale.set(0.3);
        this.indicator.position.set((this.building.width)*0.75, 50);

        this.textBg = new Sprite(Game.the.app.loader.resources['textWrapImg'].texture);
        this.TextContainer.addChild(this.textBg);
        this.textBg.scale.set(0.7);
        this.textBg.position.set((this.building.width - this.textBg.width)/2 - 10 , -90);

        const style2 = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 18,
            fill: 'white',
            align: 'center',
            wordWrap : true,
            wordWrapWidth : 200,
        });

        this.gameText = new Text(`Went to\nIgnou(Masters in psychology)\nBut Dropped out after 1st year\n2022-23`,style2);
        this.gameText.position.set(this.textBg.x + ((this.textBg.width - this.gameText.width)/2) , this.textBg.y + ((this.textBg.height - this.gameText.height)/2) + 10);
        this.TextContainer.addChild(this.gameText);
    }
}