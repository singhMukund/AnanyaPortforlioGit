import { Application, Container, Loader, Sprite, Texture } from "pixi.js";
import { Game } from "../game";
import { Cloud } from "./Cloud";
import { Emitter } from "pixi-particles";

export class Background extends Container{
    private emitter !: Emitter;
    private img !: Sprite;
    private cloud !: Cloud;
    private elapsed: number = 0;

    constructor(){
        super();
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
                "start": 30,
                "end": 30,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 180,
                "max": 180
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
            "frequency": 0.001,
            "emitterLifetime": -1,
            "maxParticles": 10000,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -900,
                "y": -460,
                "w": 2400,
                "h": 2000
            }
        };

        this.emitter = new Emitter(
            this,
            [Game.the.app.loader.resources['starImg'].texture],
            emitterConfig
        );

        this.emitter.updateOwnerPos(Game.the.app.screen.width / 2, Game.the.app.screen.height / 2);
    }

    private intializeBg() :void{
         this.img = new Sprite(Game.the.app.loader.resources['moonImg'].texture);
         this.addChild(this.img);
         this.img.position.set(1350,210);
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
        if(!this.emitter){
            return
        }
        if (this.elapsed === 0) {
            this.elapsed = now;
        }
        const elapsedTime = (now - this.elapsed) * 0.001;
        this.emitter.update(elapsedTime);
        this.elapsed = now;
        this.setChildIndex(this.img,this.children.length -1)
    }

}


