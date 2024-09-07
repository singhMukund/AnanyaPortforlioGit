import { Application, Container, Graphics, Loader, Sprite, Texture } from "pixi.js";
import { Game } from "../game";
import { Cloud } from "./Cloud";
import { Emitter } from "pixi-particles";

export class Background_Page2 extends Container {
    private bgGraphics !: Graphics;
    private bgImg !: Sprite;
    private emitter !: Emitter;
    private img !: Sprite;
    private cloud !: Cloud;
    private elapsed: number = 0;

    constructor() {
        super();
        this.bgImg = new Sprite(Game.the.app.loader.resources['BgImg'].texture);
        this.bgImg.scale.set(2);
        this.addChild(this.bgImg);
        // this.bgGraphics = new Graphics();
        // this.bgGraphics.beginFill(0x06437c);
        // this.bgGraphics.drawRect(0, 0, 4000, 4000);
        // this.bgGraphics.endFill();
        // this.addChild(this.bgGraphics);
        
        this.setupEmitter();
        this.intializeBg();

    }

    private setupEmitter(): void {
        const emitterConfig = {
            "alpha": {
                "start": 0.5,
                "end": 0.5
            },
            "scale": {
                "start": 1,
                "end": 1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 2000,
                "end": 2000,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 90,
                "max": 90
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.81,
                "max": 0.81
            },
            "blendMode": "normal",
            "frequency": 0.004,
            "emitterLifetime": -1,
            "maxParticles": 9999,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -1200,
                "y": -460,
                "w": 2400,
                "h": 20
            }
        };

        this.emitter = new Emitter(
            this,
            [Game.the.app.loader.resources['dropImg'].texture],
            emitterConfig
        );

        this.emitter.updateOwnerPos(Game.the.app.screen.width / 2, Game.the.app.screen.height / 2);
    }

    private intializeBg(): void {
        //  this.cloud = new Cloud();
        //  this.addChild(this.cloud);
        //  this.cloud.position.set(window.innerWidth + 200,130);       
    }

    public destroy(): void {
        this.emitter.destroy();
        super.destroy();
    }

    update() {
        // this.cloud.x -= 1;
        // if(this.cloud.x < -300){
        //     this.cloud.x = window.innerWidth + 200;
        // }

        const now = Date.now();
        if (!this.emitter) {
            return
        }
        if (this.elapsed === 0) {
            this.elapsed = now;
        }
        const elapsedTime = (now - this.elapsed) * 0.009;
        this.emitter.update(elapsedTime);
        this.elapsed = now;
        // this.setChildIndex(this.img, this.children.length - 1)
    }

}


