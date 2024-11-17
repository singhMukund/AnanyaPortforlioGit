import { Container, InteractionData, Sprite } from "pixi.js";
import { Game } from "../game";

export class Platform_Page3 extends Container {
    private leftBottomContainer !: Container;
    private centerBottomContainer !: Container;
    private centerLastBottomContainer !: Container;
    private rightBottomContainer !: Container;
    private rightBottomBridgeContainer !: Container;
    private centerPlatform !: Container;
    private rightTopContainer !: Container;
    private ladderContainer !: Container;
    private bricksBonusContainer !: Container;
    private leftTopContainer !: Container;
    private centerRightContainer !: Container;
    private environmentPage3_Decor_Statue !: Sprite;
    private environmentPage3_Decor_Ruins_02 !: Sprite;
    private environmentPage3_Decor_Ruins_01 !: Sprite;
    private environmentPage3_Decor_Ruins_01_01 !: Sprite;
    private EnvironmentPage3_Sign_02 !: Sprite;
    private EnvironmentPage3_Sign_03 !: Sprite;
    private EnvironmentPage3_Sign_05 !: Sprite;
    private centerWallContainer !: Container;


    constructor() {
        super();
        this.initLeftBottomPlatform();
        this.initCenterBottomPlatform();
        this.initcenterlastBottomContainer();
        this.initRightBottomContainer();
        this.rightBottomBridge();
        this.initCenterPlatform();
        this.initRightTopPlatform();
        this.initLadderContainer();
        this.initBricksBonusContainer();
        this.initLeftTopPlatform();
        this.initcenterRightPlatform();
        this.initEnvironment();
        this.initCenterWallContainer();
        this.setPosition();
        this.setEnvironmentSpritePosition();
        this.setStage();
    }

    private setStage(): void {
        this.addChild(this.EnvironmentPage3_Sign_02);
        this.addChild(this.environmentPage3_Decor_Ruins_01_01);
        this.addChild(this.environmentPage3_Decor_Ruins_01);
        this.addChild(this.EnvironmentPage3_Sign_05);
        this.addChild(this.EnvironmentPage3_Sign_03);
        this.addChild(this.centerWallContainer);
        this.addChild(this.leftBottomContainer);
        this.addChild(this.environmentPage3_Decor_Statue);
        this.addChild(this.environmentPage3_Decor_Ruins_02);
        this.addChild(this.centerBottomContainer);
        this.addChild(this.centerLastBottomContainer);
        this.addChild(this.rightTopContainer);
        this.addChild(this.ladderContainer);
        this.addChild(this.centerPlatform);
        this.addChild(this.rightBottomContainer);
        this.addChild(this.rightBottomBridgeContainer);
        this.addChild(this.bricksBonusContainer);
        this.addChild(this.leftTopContainer);
        this.addChild(this.centerRightContainer);
    }

    private setPosition(): void {
        this.setScale();
        this.leftBottomContainer.position.set(0, window.innerHeight - (this.leftBottomContainer.height * 1.5));
        this.centerBottomContainer.position.set(this.leftBottomContainer.width + 150, this.leftBottomContainer.y + this.leftBottomContainer.height * 0.8);
        this.centerLastBottomContainer.position.set(this.centerBottomContainer.x + (this.centerBottomContainer.width - this.centerLastBottomContainer.width * 0.5), this.centerBottomContainer.y - this.centerBottomContainer.height - this.centerLastBottomContainer.height);
        this.centerPlatform.position.set(this.centerLastBottomContainer.x - this.centerLastBottomContainer.width * 0.8, this.centerLastBottomContainer.y - this.centerLastBottomContainer.height * 1.2);
        this.rightTopContainer.position.set(this.centerPlatform.x - this.rightTopContainer.width * 0.4, this.centerPlatform.y - this.rightTopContainer.height * 2.5);
        this.bricksBonusContainer.position.set(this.rightTopContainer.x - this.bricksBonusContainer.width - 160, this.rightTopContainer.y);
        this.leftTopContainer.position.set(-this.leftTopContainer.width * 0.2, this.rightTopContainer.y);
        this.ladderContainer.position.set(this.rightTopContainer.x + this.rightTopContainer.width * 0.25, this.rightTopContainer.y);
        this.rightBottomBridgeContainer.position.set(this.centerLastBottomContainer.x + this.centerLastBottomContainer.width * 0.6, this.centerLastBottomContainer.y - 10);
        this.rightBottomContainer.position.set(window.innerWidth - this.rightBottomContainer.width * 0.5, window.innerHeight - this.rightBottomContainer.height);
        this.centerRightContainer.position.set(window.innerWidth - this.centerRightContainer.width * 0.5, (window.innerHeight - this.centerRightContainer.height) * 0.5);
        this.centerWallContainer.position.set(this.rightTopContainer.x + 15, this.rightTopContainer.y);
    }

    private setScale(): void {
        this.EnvironmentPage3_Sign_02.scale.set(0.75);
        this.environmentPage3_Decor_Ruins_01_01.scale.set(0.75);
        this.centerWallContainer.scale.set(0.75);
        this.leftBottomContainer.scale.set(0.75);
        this.centerBottomContainer.scale.set(0.75);
        this.centerLastBottomContainer.scale.set(0.75);
        this.rightBottomContainer.scale.set(0.75);
        this.rightBottomBridgeContainer.scale.set(0.75);
        this.rightTopContainer.scale.set(0.75);
        this.ladderContainer.scale.set(0.75);
        this.centerPlatform.scale.set(0.6);
        this.bricksBonusContainer.scale.set(0.75);
        this.leftTopContainer.scale.set(0.75);
        this.centerRightContainer.scale.set(0.65);
        this.environmentPage3_Decor_Statue.scale.set(0.75);
        this.environmentPage3_Decor_Ruins_02.scale.set(0.6);
        this.environmentPage3_Decor_Ruins_01.scale.set(0.65);
        this.EnvironmentPage3_Sign_03.scale.set(0.75);
        this.EnvironmentPage3_Sign_05.scale.set(0.75);
    }

    private initLeftBottomPlatform(): void {
        this.leftBottomContainer = new Container();
        const platformerPage3_Ground_02_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_02: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_03: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_03_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_03'].texture);
        const platformerPage3_Ground_03_02: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_03'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_05: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_06: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);
        const PlatformerPage3_Ground_06_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);
        const PlatformerPage3_Ground_06_02: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);
        const PlatformerPage3_Ground_06_03: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);
        const PlatformerPage3_Ground_06_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);
        const PlatformerPage3_Ground_06_05: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);
        const PlatformerPage3_Ground_06_06: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);
        const PlatformerPage3_Ground_06_07: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);
        const PlatformerPage3_Ground_06_08: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_06'].texture);

        const PlatformerPage3_Ground_06_09: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_05'].texture);


        this.leftBottomContainer.addChild(platformerPage3_Ground_02_01);
        this.leftBottomContainer.addChild(platformerPage3_Ground_02_02);
        //-------------------
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_01);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_02);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_03);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_04);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_05);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_06);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_07);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_08);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_06_09);
        //-----------------------------------------------

        this.leftBottomContainer.addChild(platformerPage3_Ground_02_03);
        this.leftBottomContainer.addChild(platformerPage3_Ground_03_02);
        this.leftBottomContainer.addChild(platformerPage3_Ground_03_01);
        this.leftBottomContainer.addChild(platformerPage3_Ground_02_04);
        this.leftBottomContainer.addChild(platformerPage3_Ground_02_05);
        this.leftBottomContainer.addChild(platformerPage3_Ground_02_06);
        this.leftBottomContainer.addChild(PlatformerPage3_Ground_08_01);

        //scale
        PlatformerPage3_Ground_06_09.scale.set(-1, 1)

        //-----position

        PlatformerPage3_Ground_06_01.position.set(platformerPage3_Ground_02_01.x, platformerPage3_Ground_02_01.height);
        PlatformerPage3_Ground_06_02.position.set(platformerPage3_Ground_02_01.x, PlatformerPage3_Ground_06_01.y + platformerPage3_Ground_02_01.height);

        PlatformerPage3_Ground_06_03.position.set(PlatformerPage3_Ground_06_02.x + PlatformerPage3_Ground_06_02.width, PlatformerPage3_Ground_06_01.y);
        PlatformerPage3_Ground_06_04.position.set(PlatformerPage3_Ground_06_03.x, PlatformerPage3_Ground_06_03.y + platformerPage3_Ground_02_01.height);

        PlatformerPage3_Ground_06_05.position.set(PlatformerPage3_Ground_06_04.x + PlatformerPage3_Ground_06_04.width, PlatformerPage3_Ground_06_01.y);
        PlatformerPage3_Ground_06_06.position.set(PlatformerPage3_Ground_06_05.x, PlatformerPage3_Ground_06_05.y + platformerPage3_Ground_02_01.height);

        PlatformerPage3_Ground_06_07.position.set(PlatformerPage3_Ground_06_06.x + PlatformerPage3_Ground_06_06.width, PlatformerPage3_Ground_06_01.y);
        PlatformerPage3_Ground_06_08.position.set(PlatformerPage3_Ground_06_07.x, PlatformerPage3_Ground_06_05.y + platformerPage3_Ground_02_01.height);

        PlatformerPage3_Ground_06_09.position.set(PlatformerPage3_Ground_06_08.x + 1.8 * PlatformerPage3_Ground_06_08.width, PlatformerPage3_Ground_06_08.y - 28);


        platformerPage3_Ground_02_02.position.set(platformerPage3_Ground_02_01.x + platformerPage3_Ground_02_01.width, 0);
        platformerPage3_Ground_02_03.position.set(platformerPage3_Ground_02_02.x + platformerPage3_Ground_02_02.width, 0);
        platformerPage3_Ground_03_01.position.set(platformerPage3_Ground_02_03.x + platformerPage3_Ground_02_03.width, 0);
        platformerPage3_Ground_03_02.position.set(platformerPage3_Ground_03_01.x + (platformerPage3_Ground_03_01.width * 0.78), platformerPage3_Ground_03_01.height * 0.78);
        platformerPage3_Ground_02_04.position.set(platformerPage3_Ground_03_02.x + (platformerPage3_Ground_03_01.width * 0.99), platformerPage3_Ground_03_02.y + platformerPage3_Ground_03_02.height);
        platformerPage3_Ground_02_05.position.set(platformerPage3_Ground_02_04.x + (platformerPage3_Ground_02_04.width), platformerPage3_Ground_02_04.y);
        platformerPage3_Ground_02_06.position.set(platformerPage3_Ground_02_05.x + (platformerPage3_Ground_02_05.width), platformerPage3_Ground_02_05.y);
        PlatformerPage3_Ground_08_01.position.set(platformerPage3_Ground_02_06.x + (platformerPage3_Ground_02_06.width), platformerPage3_Ground_02_06.y);
    }

    private initCenterBottomPlatform(): void {
        this.centerBottomContainer = new Container();

        const PlatformerPage3_Ground_04_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_04'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_05: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_06: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);

        platformerPage3_Ground_02_04.position.set(0, 0);
        PlatformerPage3_Ground_04_01.position.set(-PlatformerPage3_Ground_04_01.width, 0);
        platformerPage3_Ground_02_05.position.set(platformerPage3_Ground_02_04.x + (platformerPage3_Ground_02_04.width), platformerPage3_Ground_02_04.y);
        platformerPage3_Ground_02_06.position.set(platformerPage3_Ground_02_05.x + (platformerPage3_Ground_02_05.width), platformerPage3_Ground_02_05.y);
        PlatformerPage3_Ground_08_01.position.set(platformerPage3_Ground_02_06.x + (platformerPage3_Ground_02_06.width), platformerPage3_Ground_02_06.y);

        this.centerBottomContainer.addChild(PlatformerPage3_Ground_04_01);
        this.centerBottomContainer.addChild(platformerPage3_Ground_02_04);
        this.centerBottomContainer.addChild(platformerPage3_Ground_02_05);
        this.centerBottomContainer.addChild(platformerPage3_Ground_02_06);
        this.centerBottomContainer.addChild(PlatformerPage3_Ground_08_01);
    }

    private initcenterlastBottomContainer(): void {
        this.centerLastBottomContainer = new Container();

        const PlatformerPage3_Ground_04_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_04'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);

        platformerPage3_Ground_02_04.position.set(0, 0);
        PlatformerPage3_Ground_04_01.position.set(-PlatformerPage3_Ground_04_01.width, 0);
        PlatformerPage3_Ground_08_01.position.set(PlatformerPage3_Ground_04_01.width, 0);

        this.centerLastBottomContainer.addChild(PlatformerPage3_Ground_04_01);
        this.centerLastBottomContainer.addChild(platformerPage3_Ground_02_04);
        this.centerLastBottomContainer.addChild(PlatformerPage3_Ground_08_01);
    }

    private initRightBottomContainer(): void {
        this.rightBottomContainer = new Container();

        const PlatformerPage3_Ground_04_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_04'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);
        const PlatformerPage3_Ground_Additional_01_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_Additional_01'].texture);

        platformerPage3_Ground_02_04.position.set(0, 0);
        PlatformerPage3_Ground_04_01.position.set(-PlatformerPage3_Ground_04_01.width, 0);
        PlatformerPage3_Ground_08_01.position.set(PlatformerPage3_Ground_04_01.width, 0);
        PlatformerPage3_Ground_Additional_01_01.scale.set(0.88);
        PlatformerPage3_Ground_Additional_01_01.position.set(PlatformerPage3_Ground_04_01.x + 52.5, PlatformerPage3_Ground_08_01.height * 0.98);


        this.rightBottomContainer.addChild(PlatformerPage3_Ground_04_01);
        this.rightBottomContainer.addChild(platformerPage3_Ground_02_04);
        this.rightBottomContainer.addChild(PlatformerPage3_Ground_Additional_01_01);
        this.rightBottomContainer.addChild(PlatformerPage3_Ground_08_01);
    }

    private rightBottomBridge(): void {
        this.rightBottomBridgeContainer = new Container();

        for (let i: number = 0; i < 6; i++) {
            const PlatformerPage3_Bridge_01_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Bridge_01'].texture);
            this.rightBottomBridgeContainer.addChild(PlatformerPage3_Bridge_01_01);
            if (i === 0) {
                PlatformerPage3_Bridge_01_01.position.set(0, 0);
            } else {
                let lastImage: Sprite = this.rightBottomBridgeContainer.children[i - 1] as Sprite;
                if (i === 5) {
                    PlatformerPage3_Bridge_01_01.angle = 0;
                    PlatformerPage3_Bridge_01_01.position.set(lastImage.x + lastImage.width * 0.7, lastImage.y + (lastImage.height * 0.4))
                } else {
                    PlatformerPage3_Bridge_01_01.angle = 16;
                    PlatformerPage3_Bridge_01_01.position.set(lastImage.x + lastImage.width * 0.9, lastImage.y + (lastImage.height * 0.25));
                }
            }

        }
    }

    private initCenterPlatform(): void {
        this.centerPlatform = new Container();

        const PlatformerPage3_Ground_04_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_04'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);

        platformerPage3_Ground_02_04.position.set(0, 0);
        PlatformerPage3_Ground_04_01.position.set(-PlatformerPage3_Ground_04_01.width, 0);
        PlatformerPage3_Ground_08_01.position.set(PlatformerPage3_Ground_04_01.width, 0);

        this.centerPlatform.addChild(PlatformerPage3_Ground_04_01);
        this.centerPlatform.addChild(platformerPage3_Ground_02_04);
        this.centerPlatform.addChild(PlatformerPage3_Ground_08_01);
    }

    private initRightTopPlatform(): void {
        this.rightTopContainer = new Container();

        const PlatformerPage3_Ground_04_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_04'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_05: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);

        platformerPage3_Ground_02_04.position.set(0, 0);
        PlatformerPage3_Ground_04_01.position.set(-PlatformerPage3_Ground_04_01.width, 0);
        platformerPage3_Ground_02_05.position.set(PlatformerPage3_Ground_04_01.width, 0);
        PlatformerPage3_Ground_08_01.position.set(platformerPage3_Ground_02_05.x + platformerPage3_Ground_02_05.width, 0);

        this.rightTopContainer.addChild(PlatformerPage3_Ground_04_01);
        this.rightTopContainer.addChild(platformerPage3_Ground_02_04);
        this.rightTopContainer.addChild(PlatformerPage3_Ground_08_01);
        this.rightTopContainer.addChild(platformerPage3_Ground_02_05);
    }

    private initLadderContainer(): void {
        this.ladderContainer = new Container();

        for (let i = 0; i < 3; i++) {
            const PlatformerPage3_Ladder: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ladder'].texture);
            if (i === 0) {
                PlatformerPage3_Ladder.position.set(0, 0);
            } else {
                PlatformerPage3_Ladder.position.set(0, this.ladderContainer.children[i - 1].y + PlatformerPage3_Ladder.height * 0.95);
            }
            this.ladderContainer.addChild(PlatformerPage3_Ladder);
        }
    }

    private initBricksBonusContainer(): void {
        this.bricksBonusContainer = new Container();

        const PlatformerPage3_Brick_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Brick_01'].texture);
        const PlatformerPage3_Brick_02: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Brick_02'].texture);
        const PlatformerPage3_Bonus: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Bonus'].texture);
        const PlatformerPage3_Decor_Brick: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Decor_Brick'].texture);

        PlatformerPage3_Brick_01.position.set(0, 0);
        PlatformerPage3_Bonus.position.set(PlatformerPage3_Brick_01.width, 0);
        PlatformerPage3_Decor_Brick.position.set(PlatformerPage3_Bonus.x + PlatformerPage3_Bonus.width, 0);
        PlatformerPage3_Brick_02.position.set(PlatformerPage3_Decor_Brick.x + PlatformerPage3_Decor_Brick.width, 0);

        this.bricksBonusContainer.addChild(PlatformerPage3_Brick_01);
        this.bricksBonusContainer.addChild(PlatformerPage3_Bonus);
        this.bricksBonusContainer.addChild(PlatformerPage3_Decor_Brick);
        this.bricksBonusContainer.addChild(PlatformerPage3_Brick_02);

    }

    private initLeftTopPlatform(): void {
        this.leftTopContainer = new Container();

        const PlatformerPage3_Ground_04_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_04'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_05: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);

        platformerPage3_Ground_02_04.position.set(0, 0);
        PlatformerPage3_Ground_04_01.position.set(-PlatformerPage3_Ground_04_01.width, 0);
        platformerPage3_Ground_02_05.position.set(PlatformerPage3_Ground_04_01.width, 0);
        PlatformerPage3_Ground_08_01.position.set(platformerPage3_Ground_02_05.x + platformerPage3_Ground_02_05.width, 0);

        this.leftTopContainer.addChild(PlatformerPage3_Ground_04_01);
        this.leftTopContainer.addChild(platformerPage3_Ground_02_04);
        this.leftTopContainer.addChild(PlatformerPage3_Ground_08_01);
        this.leftTopContainer.addChild(platformerPage3_Ground_02_05);
    }

    private initcenterRightPlatform(): void {
        this.centerRightContainer = new Container();

        const PlatformerPage3_Ground_04_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_04'].texture);
        const platformerPage3_Ground_02_04: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const platformerPage3_Ground_02_05: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_02'].texture);
        const PlatformerPage3_Ground_08_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_08'].texture);

        platformerPage3_Ground_02_04.position.set(0, 0);
        PlatformerPage3_Ground_04_01.position.set(-PlatformerPage3_Ground_04_01.width, 0);
        platformerPage3_Ground_02_05.position.set(PlatformerPage3_Ground_04_01.width, 0);
        PlatformerPage3_Ground_08_01.position.set(platformerPage3_Ground_02_05.x + platformerPage3_Ground_02_05.width, 0);

        this.centerRightContainer.addChild(PlatformerPage3_Ground_04_01);
        this.centerRightContainer.addChild(platformerPage3_Ground_02_04);
        this.centerRightContainer.addChild(PlatformerPage3_Ground_08_01);
        this.centerRightContainer.addChild(platformerPage3_Ground_02_05);
    }

    private initEnvironment(): void {
        this.environmentPage3_Decor_Statue = new Sprite(Game.the.app.loader.resources['EnvironmentPage3_Decor_Statue'].texture);
        this.environmentPage3_Decor_Ruins_02 = new Sprite(Game.the.app.loader.resources['EnvironmentPage3_Decor_Ruins_02'].texture);
        this.environmentPage3_Decor_Ruins_01 = new Sprite(Game.the.app.loader.resources['EnvironmentPage3_Decor_Ruins_01'].texture);
        this.environmentPage3_Decor_Ruins_01_01 = new Sprite(Game.the.app.loader.resources['EnvironmentPage3_Decor_Ruins_01'].texture);
        this.EnvironmentPage3_Sign_02 = new Sprite(Game.the.app.loader.resources['EnvironmentPage3_Sign_02'].texture);
        this.EnvironmentPage3_Sign_03 = new Sprite(Game.the.app.loader.resources['EnvironmentPage3_Sign_03'].texture);
        this.EnvironmentPage3_Sign_05 = new Sprite(Game.the.app.loader.resources['EnvironmentPage3_Sign_05'].texture);
    }

    private setEnvironmentSpritePosition(): void {
        this.environmentPage3_Decor_Statue.position.set(this.rightTopContainer.x, 20);
        this.environmentPage3_Decor_Ruins_02.position.set(this.centerBottomContainer.x - 90, this.centerBottomContainer.y - (this.environmentPage3_Decor_Ruins_02.height) * 0.9);
        this.environmentPage3_Decor_Ruins_01.position.set(this.leftBottomContainer.x + this.leftBottomContainer.width - this.environmentPage3_Decor_Ruins_01.width,
            this.leftBottomContainer.y - this.environmentPage3_Decor_Ruins_01.height * 0.44);
        this.environmentPage3_Decor_Ruins_01_01.position.set(this.centerRightContainer.x,this.centerRightContainer.y - this.environmentPage3_Decor_Ruins_01_01.height * 0.8);
        this.EnvironmentPage3_Sign_02.position.set(this.leftTopContainer.x + this.leftTopContainer.width * 0.5, this.leftTopContainer.y - this.EnvironmentPage3_Sign_02.height * 0.9);
        this.EnvironmentPage3_Sign_03.position.set(this.environmentPage3_Decor_Ruins_01.x + this.environmentPage3_Decor_Ruins_01.width * 0.7, this.leftBottomContainer.y + this.EnvironmentPage3_Sign_03.height);
        this.EnvironmentPage3_Sign_05.position.set(this.rightBottomContainer.x , this.rightBottomContainer.y - this.EnvironmentPage3_Sign_05.height * 0.8);
    }

    private initCenterWallContainer(): void {
        this.centerWallContainer = new Container();
        for (let i = 0; i < 3; i++) {
            const PlatformerPage3_Ground_Additional_01: Sprite = new Sprite(Game.the.app.loader.resources['PlatformerPage3_Ground_Additional_01'].texture);
            this.centerWallContainer.addChild(PlatformerPage3_Ground_Additional_01);
            if (i === 0) {
                PlatformerPage3_Ground_Additional_01.position.set(0, 0);
            } else {
                PlatformerPage3_Ground_Additional_01.position.set(0, this.centerWallContainer.children[i - 1].y + (this.centerWallContainer.children[i - 1] as Sprite).height);
            }

        }
    }

}