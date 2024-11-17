import { Container, Sprite } from "pixi.js";
import { Game } from "../game";

export class Background_Page3 extends Container{
    private bgImage !: Sprite;
    constructor() {
        super();
        this.bgImage = new Sprite(Game.the.app.loader.resources['BackgroundPage3'].texture);
        this.bgImage.scale.set(1.5);
        // this.bgImage.position.set(100,this.bgImage.height/2);
        this.addChild(this.bgImage);
    }
}