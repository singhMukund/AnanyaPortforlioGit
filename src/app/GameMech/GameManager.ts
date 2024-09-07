import { Application, Container, Sprite, Ticker } from "pixi.js";
import { Game } from "../game";
import { Background } from "../Background/Background";
import { ComponentManager } from "../Component/ComponentManager";
import { Player } from "../Player/Player";
import { Background_Page2 } from "../Background/Background_Page2";
import { Background_Page0 } from "../Background/Background_Page0";
import { CommonConfig } from "../../Common/CommonConfig";

export class GameManager {
    private ticker: Ticker;
    private score: number = 0;
    private spawnInterval: number;
    private lastSpawnTime: number = 0;
    private app: Application;
    private speed: number = 2;
    private backGround !: Background_Page2;
    private componentManager !: ComponentManager;
    private paltoform !: Sprite;
    private Player !: Player;
    private platformContainer !: Container;

    constructor(spawnInterval: number) {
        this.app = Game.the.app;
        this.spawnInterval = spawnInterval;
        this.init();
        this.ticker = new Ticker();
        this.ticker.add(this.update, this);
        this.ticker.start();
        this.addToStage();
    }

    private addToStage() :void{
        this.app.stage.addChild(this.backGround);
        this.app.stage.addChild(this.componentManager);
        this.app.stage.addChild(this.platformContainer);
        this.app.stage.addChild(this.paltoform);
        this.app.stage.addChild(this.Player);
    }

    private init() :void{
        this.backGround = new Background_Page2();
        this.backGround.alpha = 0.3;
        this.componentManager = new ComponentManager();
        this.platformContainer = new Container();
        this.paltoform = new Sprite(Game.the.app.loader.resources['PlatformImg'].texture);
        this.paltoform.position.set(0,window.innerHeight- 120);
        this.paltoform.scale.set(2);
        this.Player = new Player();
        this.Player.position.set(100,this.paltoform.y - this.Player.height + 8);
    }

    private update(delta: number) {
       this.backGround.update();
       this.Player.update(delta);
    }
}