import { Container, Graphics, Sprite,Text, TextStyle } from "pixi.js";
import { CommonConfig } from "../../Common/CommonConfig";
import { Platform } from "./Platform";
import gsap from "gsap";
import { Game } from "../game";

export class Page_04 extends Container {
    private gap: number = -20;
    private platform !: Platform;
    private platformBounds !: Graphics;
    private thankYouNote !: Sprite;
    private instagramIndicator !: Sprite;
    private instagramLogo !: Sprite;
    private gameText !: Text;

    constructor() {
        super();
        this.init();
        this.y = window.innerHeight - 120;
    }

    private init(): void {
        this.platform = new Platform('LastPagePlatform');
        this.platform.position.set(0, -this.platform.height * 0.7);
        // CommonConfig.the.setPlatformContainers(this.platform);

        this.instagramIndicator = new Sprite(Game.the.app.loader.resources['indicator2'].texture);
        this.instagramIndicator.scale.set(0.5)
        this.instagramIndicator.position.set(this.instagramIndicator.width + 100, - this.instagramIndicator.height);
        this.addChild(this.instagramIndicator);

        this.instagramLogo = new Sprite(Game.the.app.loader.resources['logo_instagram'].texture);
        this.instagramLogo.scale.set(0.35)
        this.instagramLogo.position.set(this.instagramIndicator.x + ((this.instagramIndicator.width- this.instagramLogo.width)* 0.5) , (this.instagramIndicator.y - this.instagramLogo.height)*0.63);
        this.addChild(this.instagramLogo);

        this.thankYouNote = new Sprite(Game.the.app.loader.resources['indicator'].texture);
        this.thankYouNote.position.set(window.innerWidth - this.thankYouNote.width, -this.platform.height * 0.7 - this.thankYouNote.height * 0.55);
        this.addChild(this.thankYouNote);

        const style2 = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 48,
            fill: '#220606',
            align: 'center',
            wordWrap : true,
            wordWrapWidth : this.thankYouNote.width,
        });

        this.gameText = new Text(`Thank you`,style2);
        this.gameText.position.set(this.thankYouNote.x + ((this.thankYouNote.width - this.gameText.width)/2) , this.thankYouNote.y + ((this.thankYouNote.height - this.gameText.height)* 0.15));
        this.addChild(this.gameText);


        this.addChild(this.platform);

    }
}