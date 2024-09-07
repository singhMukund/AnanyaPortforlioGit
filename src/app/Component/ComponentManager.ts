import { Container, Sprite } from "pixi.js";
import { Page_01 } from "./Page_01";
import { Page_02 } from "./Page_02";
import { Game } from "../game";
import { Page_03 } from "./Page_03";
import { Page_00 } from "./Page_00";
import { Page_02Component } from "./Page_02Component";

export class ComponentManager extends Container {
    private page_00 !: Page_00;
    private page_01 !: Page_01;
   
    private page_03 !: Page_03;
    private page_02 !: Page_02;


    constructor() {
        super();
        this.init();
    }

    private init(): void {
        // this.page_00 = new Page_00();
        // this.addChild(this.page_00);

        //    this.page_01 = new Page_01();
        //    this.addChild(this.page_01);


        // this.page_02 = new Page_02();
        // this.addChild(this.page_02);
        this.page_03 = new Page_03();
        this.addChild(this.page_03);
    }
}