import { Container, Sprite, Text, TextStyle } from "pixi.js";
import { Game } from "../game";
import gsap from "gsap";

export class LinkPage extends Container {
    private logo !: Sprite;
    private bg !: Sprite;
    private indicator !: Sprite;
    private gameText !: Text;
    private textBg !: Sprite;
    private TextContainer !: Container;

    constructor() {
        super();
        this.y = 50;
        this.bg = new Sprite(Game.the.app.loader.resources['LinksImg'].texture);
        this.bg.y = 0;
        this.bg.scale.set(1);
        this.logo = new Sprite(Game.the.app.loader.resources['PanjabUniversityLogo'].texture);
        // this.addChild(this.logo);
        this.addChild(this.bg);
        this.logo.scale.set(0.5);
        this.logo.position.set((this.bg.width - this.logo.width) / 2 - 100, -30);
        this.initText();
        this.playTween();
    }

    private playTween(): void {
        const swingTween = gsap.to(this, {
            rotation: 0.1, 
            transformOrigin: '70% 0%',  
            ease: 'power1.inOut',  
            repeat: -1,  
            yoyo: true, 
            duration: 2.5, 
        });
        swingTween.vars.rotation = 0.2;  
        swingTween.vars.duration = 2.5; 
    
        swingTween.invalidate();  
        swingTween.restart();  
    }

    private initText(): void {

        // this.TextContainer = new Container();
        // this.addChild(this.TextContainer);
        // this.TextContainer.scale.set(0.8);
        // this.TextContainer.position.set(40,-120);

        // this.indicator = new Sprite(Game.the.app.loader.resources['pointer'].texture);
        // this.TextContainer.addChild(this.indicator);
        // this.indicator.scale.set(0.3);
        // this.indicator.position.set((this.building.width), 60);

        // this.textBg = new Sprite(Game.the.app.loader.resources['textWrapImg'].texture);
        // this.TextContainer.addChild(this.textBg);
        // this.textBg.scale.set(0.75);
        // this.textBg.position.set((this.building.width - this.textBg.width)/2 - 10 , -90);

        // const style2 = new TextStyle({
        //     fontFamily: 'Arial',
        //     fontSize: 18,
        //     fill: 'white',
        //     align: 'center',
        //     wordWrap : true,
        //     wordWrapWidth : 200,
        // });

        // this.gameText = new Text(`Went to\nPencil perceptions Academy\nDiploma in Arts\n2024-25`,style2);
        // this.gameText.position.set(this.textBg.x + ((this.textBg.width - this.gameText.width)/2) , this.textBg.y + ((this.textBg.height - this.gameText.height)/2) + 10);
        // this.TextContainer.addChild(this.gameText);
    }
}