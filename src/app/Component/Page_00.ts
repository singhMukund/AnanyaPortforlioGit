import { Container } from "pixi.js";

export class Page_00 extends Container{
    private gap : number = -20;
    constructor() {
        super();
        this.init();
        this.y = window.innerHeight - 390;
    }

    private init() :void{
        
    }
}