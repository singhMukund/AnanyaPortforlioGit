import { Application, Container, Graphics, Loader, Sprite, Texture } from "pixi.js";
import { Game } from "../game";
import { Cloud } from "./Cloud";
import { Emitter } from "pixi-particles";

export class Background_Page0 extends Container {
    private bgGraphics !: Graphics;
    private emitter !: Emitter;
    private img !: Sprite;
    private cloud !: Cloud;
    private elapsed: number = 0;

    constructor() {
        super();
        this.bgGraphics = new Graphics();
        this.bgGraphics.beginFill(0x000000);
        this.bgGraphics.drawRect(0, 0, 4000, 4000);
        this.bgGraphics.endFill();
        this.addChild(this.bgGraphics);
        
        this.setupEmitter();
        this.intializeBg();

    }

    private setupEmitter(): void {
        this.emitter = new Emitter(
            this,
            [Game.the.app.loader.resources['spaceCraft'].texture],  // Array of textures for particles
            {
                alpha: {
                    list: [
                        { value: 0.8, time: 0 },
                        { value: 0.1, time: 1 }
                    ],
                    isStepped: false
                },
                scale: {
                    list: [
                        { value: 0.5, time: 0 },
                        { value: 1, time: 1 }
                    ],
                    isStepped: false
                },
                color: {
                    list: [
                        { value: "ffffff", time: 0 },
                        { value: "ffffff", time: 1 }
                    ],
                    isStepped: false
                },
                speed: {
                    list: [
                        { value: 200, time: 0 },
                        { value: 100, time: 1 }
                    ],
                    isStepped: false
                },
                startRotation: {
                    min: 0,
                    max: 360
                },
                rotationSpeed: {
                    min: 0,
                    max: 10
                },
                lifetime: {
                    min: 0.5,
                    max: 2
                },
                frequency: 0.1,
                emitterLifetime: -1, // Infinite lifetime
                maxParticles: 1000,
                pos: {
                    x: window.innerWidth/2,
                    y: window.innerHeight/2
                },
                addAtBack: false,
                spawnType: "rect",
                spawnRect: {
                    x: 0,
                    y: 0,
                    w: window.innerWidth,
                    h: window.innerHeight
                }
            }
        );
        
        this.emitter.emit = true;

        // this.emitter = new Emitter(
        //     this,
        //     [Game.the.app.loader.resources['dropImg'].texture],
        //     emitterConfig
        // );

        this.emitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
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
        const elapsedTime = (now - this.elapsed) * 0.001;
        this.emitter.update(elapsedTime);
        this.elapsed = now;
        // this.setChildIndex(this.img, this.children.length - 1)
    }

}


