import { Container, Sprite, Text } from "pixi.js";
import { School_01 } from "./School_01";
import { School_02 } from "./School_02";
import { School_03 } from "./School_03";
import { College_01 } from "./College_01";
import { CommonConfig } from "../../Common/CommonConfig";
import { Game } from "../game";
import { College_02 } from "./College_02";
import { Platform } from "./Platform";
import gsap from "gsap";

export class Page_02 extends Container{
    private college_01 !: College_01;
    private college_02 !: College_02;
    private platform !: Platform;
    private platform2 !: Platform;
    private platform3 !: Platform;
    private platform4 !: Platform;
    private platform5 !: Platform;
    private platform6 !: Platform;
    private Key !: Sprite;


    private colllege2 !: College_02;


    
    constructor() {
        super();
        this.init();
        this.y = window.innerHeight - 120;
    }

    private init() :void{
        this.platform = new Platform('grass_8x1');
        this.platform.position.set((window.innerWidth)/3,-(this.platform.height  * 2));
        this.addChild(this.platform);
        CommonConfig.the.setPlatformContainers(this.platform);
        
        this.platform2 = new Platform('grass_8x1');
        this.platform2.position.set((window.innerWidth + this.platform.width/2)/2,this.platform.y-(this.platform.height  * 4));
        this.addChild(this.platform2);
        CommonConfig.the.setPlatformContainers(this.platform2);

        this.platform3 = new Platform('grass_8x1');
        this.platform3.position.set((window.innerWidth - this.platform.width)/2,this.platform2.y-(this.platform.height  * 4));
        this.addChild(this.platform3);
        CommonConfig.the.setPlatformContainers(this.platform3);
        
        this.platform4 = new Platform('grass_8x1');
        this.platform4.position.set((window.innerWidth + this.platform.width)/2,this.platform3.y-(this.platform.height  * 4));
        this.addChild(this.platform4);
        CommonConfig.the.setPlatformContainers(this.platform4);

        this.platform5 = new Platform('grass_8x1');
        this.platform5.position.set((this.platform4.x + this.platform.width),this.platform4.y-(this.platform.height  * 3));
        this.addChild(this.platform5);
        CommonConfig.the.setPlatformContainers(this.platform5);

        this.Key = new Sprite(Game.the.app.loader.resources['Key'].texture)
        this.Key.position.set((this.platform5.x + (this.platform5.width - this.Key.width)/2),this.platform5.y - this.Key.height *2);
        this.addChild(this.Key);
        let y = this.Key.y;
        gsap.to(this.Key,{
            y: this.Key.y + this.Key.height/2,
            duration : 1,
            yoyo : true,
            repeat : -1
        })

        this.college_01 = new College_01();
        this.addChild(this.college_01);
        this.college_01.position.set(0, -this.college_01.height * 0.5);

        this.college_02 = new College_02();
        this.addChild(this.college_02);
        this.college_02.position.set(this.platform3.x  + (this.platform3.width - this.college_02.width), this.platform3.y - this.college_02.height * 0.5 + 10);
    }
}