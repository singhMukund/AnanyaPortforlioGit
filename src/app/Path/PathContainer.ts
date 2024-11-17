import { Container, Sprite } from "pixi.js";
import { Game } from "../game";
import { Indicator } from "./Indicator";

export class PathContainer extends Container {
    private path !: Sprite; 
    private birthIndicator !: Indicator;
    private firstSchoolIndicator !: Indicator;
    private secondSchoolIndicator !: Indicator;
    private thirdSchoolIndicator !: Indicator;
    private firstCollegeIndicator !: Indicator;
    private secondCollegeIndicator !: Indicator;
    private thirdCollegeIndicator !: Indicator;
    private fourthCollegeIndicator !: Indicator;
    private infoBtnIndicator !: Indicator;

    constructor() {
        super();
        this.init();
    }

    private init(): void {
        this.path = new Sprite(Game.the.app.loader.resources['path_green'].texture);
        this.path.scale.set(1.4,0.85);
        this.addChild(this.path);

        this.birthIndicator = new Indicator('babyFace');
        this.addChild(this.birthIndicator);

        this.firstSchoolIndicator = new Indicator('home');
        this.addChild(this.firstSchoolIndicator);
        this.firstSchoolIndicator.scale.set(0.6);
        this.firstSchoolIndicator.position.set(100,95);

        this.secondSchoolIndicator = new Indicator('home');
        this.addChild(this.secondSchoolIndicator);
        this.secondSchoolIndicator.scale.set(0.6);
        this.secondSchoolIndicator.position.set(250,20);

        this.thirdSchoolIndicator = new Indicator('home');
        this.addChild(this.thirdSchoolIndicator);
        this.thirdSchoolIndicator.scale.set(0.6);
        this.thirdSchoolIndicator.position.set(435,95);

        this.firstCollegeIndicator = new Indicator('home');
        this.addChild(this.firstCollegeIndicator);
        this.firstCollegeIndicator.scale.set(0.75);
        this.firstCollegeIndicator.position.set(565,20);

        this.secondCollegeIndicator = new Indicator('home',true);
        this.addChild(this.secondCollegeIndicator);
        this.secondCollegeIndicator.scale.set(0.75);
        this.secondCollegeIndicator.position.set(700,70);

        this.thirdCollegeIndicator = new Indicator('home',true);
        this.addChild(this.thirdCollegeIndicator);
        this.thirdCollegeIndicator.scale.set(0.75);
        this.thirdCollegeIndicator.position.set(860,70);

        this.fourthCollegeIndicator = new Indicator('home',true);
        this.addChild(this.fourthCollegeIndicator);
        this.fourthCollegeIndicator.scale.set(0.75);
        this.fourthCollegeIndicator.position.set(950,20);

        this.infoBtnIndicator = new Indicator('infoBtn',true);
        this.addChild(this.infoBtnIndicator);
        this.infoBtnIndicator.scale.set(0.75);
        this.infoBtnIndicator.position.set(1250,20);

    }
}