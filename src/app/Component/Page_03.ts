import { Container, Sprite } from "pixi.js";
import { School_01 } from "./School_01";
import { School_02 } from "./School_02";
import { School_03 } from "./School_03";
import { College_01 } from "./College_01";
import { CommonConfig } from "../../Common/CommonConfig";
import { Game } from "../game";
import { College_03 } from "./College_03";
import { College_04 } from "./College_04";
import { LinkPage } from "./LinkPage";
import { Platform } from "./Platform";
import gsap from "gsap";

export class Page_03 extends Container {
   private gap: number = -20;
   private platform !: Platform;
   private platform2 !: Platform;
   private platform3 !: Platform;
   private platform4 !: Platform;
   private platform5 !: Platform;
   private platform6 !: Platform;
   private Key !: Sprite;
   private college2 !: College_03;
   private college4 !: College_04;
   private linkPage !: LinkPage;
   private guru_sikh !: Sprite;
   private smallPlatform !: Platform;
   private smallPlatform2 !: Platform;
   private smallPlatform3 !: Platform;
   private smallPlatform4 !: Platform;
   private smallPlatform5 !: Platform;
   private largePlatform !: Platform;





   constructor() {
      super();
      this.init();
      this.y = window.innerHeight - 120;
   }

   private init(): void {
      this.guru_sikh = new Sprite(Game.the.app.loader.resources['guru_sikh'].texture);
      this.addChild(this.guru_sikh);
      this.guru_sikh.scale.set(-1.5, 1.5);
      this.guru_sikh.alpha = 0.4;
      this.guru_sikh.position.set(this.guru_sikh.width, - this.guru_sikh.height);


      this.college2 = new College_03();
      this.college2.position.set(0, -this.college2.height * 0.5 + 10);
      this.addChild(this.college2);



      this.platform = new Platform('grass_8x1');
      this.platform.position.set((window.innerWidth) / 3, -(this.platform.height * 2));
      this.addChild(this.platform);
      CommonConfig.the.setPlatformContainers(this.platform);

      this.smallPlatform = new Platform('grass_2x1');
      this.smallPlatform.position.set(this.platform.x + this.platform.width - this.smallPlatform.width / 2, this.platform.y - this.smallPlatform.height * 2);
      this.addChild(this.smallPlatform);
      CommonConfig.the.setPlatformContainers(this.smallPlatform);

      this.platform2 = new Platform('grass_8x1');
      this.platform2.position.set((window.innerWidth + this.platform.width / 2) / 2, this.platform.y - (this.platform.height * 4));
      this.addChild(this.platform2);
      CommonConfig.the.setPlatformContainers(this.platform2);

      this.smallPlatform2 = new Platform('grass_2x1');
      this.smallPlatform2.position.set(this.platform2.x - this.smallPlatform.width, this.platform2.y - this.smallPlatform.height* 2);
      this.addChild(this.smallPlatform2);
      CommonConfig.the.setPlatformContainers(this.smallPlatform2);

      this.college4 = new College_04();
      this.addChild(this.college4);
      this.college4.position.set(this.platform2.x + (this.platform2.width - this.college4.width) / 2, this.platform2.y - (this.college4.height * 0.5));


      this.platform3 = new Platform('grass_4x1');
      this.platform3.position.set((window.innerWidth - this.platform.width) / 2, this.platform2.y - (this.platform.height * 4));
      this.addChild(this.platform3);
      CommonConfig.the.setPlatformContainers(this.platform3);

      this.smallPlatform3 = new Platform('grass_2x1');
      this.smallPlatform3.position.set(this.platform3.x - this.smallPlatform.width, this.platform3.y - this.smallPlatform.height* 2);
      this.addChild(this.smallPlatform3);
      CommonConfig.the.setPlatformContainers(this.smallPlatform3);

      this.smallPlatform4 = new Platform('grass_2x1');
      this.smallPlatform4.position.set(this.smallPlatform3.x - this.smallPlatform.width, this.smallPlatform3.y - this.smallPlatform.height* 2);
      this.addChild(this.smallPlatform4);
      CommonConfig.the.setPlatformContainers(this.smallPlatform4);


      this.smallPlatform5 = new Platform('grass_2x1');
      this.smallPlatform5.position.set(this.smallPlatform4.x - this.smallPlatform.width, this.smallPlatform4.y - this.smallPlatform.height* 2);
      this.addChild(this.smallPlatform5);
      CommonConfig.the.setPlatformContainers(this.smallPlatform5);

      this.largePlatform = new Platform('grass_6x1');
      this.largePlatform.position.set(this.smallPlatform5.x + this.smallPlatform.width*2, this.smallPlatform4.y - this.smallPlatform.height* 2);
      this.addChild(this.largePlatform);
      this.largePlatform.scale.set(3,1);
      CommonConfig.the.setPlatformContainers(this.largePlatform);


      this.platform4 = new Platform('grass_8x1');
      this.platform4.position.set((window.innerWidth + this.platform.width) / 2, this.platform3.y - (this.platform.height * 4));
      //    this.addChild(this.platform4);
      CommonConfig.the.setPlatformContainers(this.platform4);





      this.platform5 = new Platform('grass_8x1');
      this.platform5.position.set((this.platform4.x + this.platform.width), this.platform4.y - (this.platform.height * 3));
      this.addChild(this.platform5);
      CommonConfig.the.setPlatformContainers(this.platform5);

      this.Key = new Sprite(Game.the.app.loader.resources['Key'].texture)
      this.Key.position.set((this.platform5.x + (this.platform5.width - this.Key.width) / 2), this.platform5.y - this.Key.height * 2);
      this.addChild(this.Key);
      let y = this.Key.y;
      gsap.to(this.Key, {
         y: this.Key.y + this.Key.height / 2,
         duration: 1,
         yoyo: true,
         repeat: -1
      })



      this.linkPage = new LinkPage();
      //    this.addChild(this.linkPage);
      this.linkPage.scale.set(0.8);
      //    this.linkPage.position.set(this.trees.x - this.trees.width + 100,-this.linkPage.height);


   }
}