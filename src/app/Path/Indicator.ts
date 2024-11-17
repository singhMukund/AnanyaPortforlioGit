import { Container, Sprite } from "pixi.js";
import { Game } from "../game";

export class Indicator extends Container{
    private img !: Sprite;
    private bulb !: Sprite;
    private lock !: Sprite;
    constructor(texture : string,disable: boolean = false) {
        super();
        if(!disable){
            this.bulb = new Sprite(Game.the.app.loader.resources['bulb'].texture);
            this.addChild(this.bulb);
            this.bulb.y = -30;
        }
        this.img = new Sprite(Game.the.app.loader.resources[texture].texture);
        this.addChild(this.img);
        if(disable){
            this.lock = new Sprite(Game.the.app.loader.resources['lock'].texture);
            this.addChild(this.lock);
            this.lock.position.set((this.img.width - this.lock.width)* 0.8,(this.img.height - this.lock.height)* 0.8)
            this.lock.scale.set(0.5);
            this.img.alpha = 0.6;
        }
    }
}