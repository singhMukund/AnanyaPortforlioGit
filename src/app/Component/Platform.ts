import { Container, Sprite } from "pixi.js";
import { Game } from "../game";

export class Platform extends Container{
    texture : string;
    private sprite : Sprite;
    blocker !: Sprite;
    constructor(texture : string) {
        super();
        this.texture = texture;
        this.sprite = new Sprite(Game.the.app.loader.resources[texture].texture);
        this.addChild(this.sprite);
    }

    private initBlocker() : void{
        // this.blocker =  new Sprite(Game.the.app.loader.resources[texture].texture);
    }
}