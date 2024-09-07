import { Container } from "pixi.js";
import { School_01 } from "./School_01";
import { School_02 } from "./School_02";
import { School_03 } from "./School_03";
import { College_01 } from "./College_01";
import { CommonConfig } from "../../Common/CommonConfig";

export class Page_01 extends Container{
    private firstSchool !: School_01;
    private school_02 !: School_02;
    private school_03 !: School_03;
    private college_01 !: College_01;

    private gap : number = -20;
    constructor() {
        super();
        this.init();
        this.y = window.innerHeight - 390;
    }

    private init() :void{
        this.firstSchool = new School_01();
        this.addChild(this.firstSchool);
        this.firstSchool.x = 160;
        this.school_02 = new School_02();
        this.addChild(this.school_02);
        this.school_02.position.set(this.firstSchool.x + this.firstSchool.width + this.gap, this.school_02.y);

        this.school_03 = new School_03();
        this.addChild(this.school_03);
        this.school_03.position.set(this.school_02.x + this.school_02.width + this.gap - 20, this.school_03.y);
        CommonConfig.the.setJnvXPosition(this.school_03.x);
        CommonConfig.the.setJnvContainerWidth(this.school_03.width);

        // this.college_01 = new College_01();
        // this.addChild(this.college_01);
        // this.college_01.position.set(60, this.college_01.y);
    }
}