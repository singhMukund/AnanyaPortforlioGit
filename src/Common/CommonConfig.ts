import { Container } from "pixi.js";
import { Platform } from "../app/Component/Platform";

export class CommonConfig {

    protected static _the: CommonConfig;

    private jnvXPosition : number = 0;
    private jnvContainerWidth : number = 0;

    private containers : Platform[] = [];

    static get the(): CommonConfig {
        if (!CommonConfig._the) {
            CommonConfig._the = new CommonConfig();
        }

        return CommonConfig._the;
    }

    public getPlatformContainer() : Platform[]{
        return this.containers;
    }

    public setPlatformContainers(container : Platform) {
        this.containers.push(container);
    }


    constructor() {
        if (CommonConfig._the == null) CommonConfig._the = this;
    }

    public setJnvXPosition(value : number) :void{
       this.jnvXPosition = value;
    }

    public getJnvXPosition() : number{
        return this.jnvXPosition;
    }

    public setJnvContainerWidth(value : number) :void{
        this.jnvContainerWidth = value;
     }
 
     public getJnvContainerWidth() : number{
         return this.jnvContainerWidth;
     }

    
    



}