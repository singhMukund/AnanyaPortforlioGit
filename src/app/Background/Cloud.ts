import { Container, Sprite } from "pixi.js";
import { Game } from "../game";

export class Cloud extends Container{
    private cloudImg : Sprite;
    constructor(){
        super();
        this.cloudImg = new Sprite(Game.the.app.loader.resources['Cloud'].texture);
        this.addChild(this.cloudImg);
    }


}