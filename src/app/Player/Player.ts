import { AnimatedSprite, Container, Graphics, Sprite, Texture, utils } from "pixi.js";
import { Game } from "../game";
import { CommonConfig } from "../../Common/CommonConfig";
import { Platform } from "../Component/Platform";

export class Player extends Container {
    private player !: AnimatedSprite;
    private speed: number = 3.5; // Adjust speed as needed
    private jumpHeight: number = 100; // Adjust jump height as needed
    private isJumping: boolean = false;
    private jumpStartY: number = 0;
    private keys: { [key: string]: boolean } = {};
    private path: { x: number, y: number }[];
    private pathImag_page2 !: Graphics;
    private velocityY : number = 0;
    gravity: number;
    private isPlatform : boolean = false;
    // velocityY: number;
    constructor() {
        super();
        this.init();
        this.path = this.createPath();
        this.addChild(this.player);
        this.gravity = 0.5;
        window.addEventListener("keydown", this.handleKeyDown.bind(this));
        window.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    private init(): void {
        const frames: Texture[] = [];
        for (let i = 1; i <= 5; i++) {
            frames.push(Game.the.app.loader.resources[`Player_${i}`].texture);
        }
        this.player = new AnimatedSprite(frames);
        this.player.animationSpeed = 0.1; // Adjust animation speed as needed
        this.player.loop = false;

        // this.player = new Sprite(Game.the.app.loader.resources['Player'].texture);
    }

    private handleKeyDown(event: KeyboardEvent): void {
        this.keys[event.key] = true;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            if (event.key === "ArrowLeft") {
                this.player.scale.set(-1, 1);
            } else {
                this.player.scale.set(1, 1);
            }
            this.player.loop = true;
            this.player.play();
            this.moveAlongPath();
        }
    }

    private handleKeyUp(event: KeyboardEvent): void {
        this.keys[event.key] = false;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            this.player.stop();
        }
    }

    public update(delta: number): void {
        // Move left or right
        let playerHaveToStop : boolean = false;
        if (this.keys["ArrowLeft"]) {
            this.player.x -= this.speed;
        }
        if (this.keys["ArrowRight"]) {
            this.player.x += this.speed;
        }
        // Jumping logic
        if (this.keys["ArrowUp"] && !this.isJumping) {
            this.isJumping = true;
            this.velocityY = -10;
            this.isPlatform = false;
            // this.player.y -= 25;
        }

        // this.velocityY += 0.5; // Gravity
        // this.player.y += this.velocityY;

        // Check for collision with platforms

        // CommonConfig.the.getPlatformContainer().forEach(platform => {
        //     if (this.isCollidingWith(platform)) {
        //         this.velocityY = 0; 
        //         this.isJumping = true;
        //     }
        // });
       

        if (this.isJumping || this.player.y !== 0) {
            if(!this.isPlatform){
                this.velocityY += this.gravity; // Apply gravity to vertical velocity
                this.player.y += this.velocityY; // Move player vertically
            }
           
    
            // Check if player reaches ground level
            if (this.player.y >= 0) {
                this.player.y = 0; // Snap to ground platform
                this.velocityY = 0; // Stop falling
                this.isJumping = false; // Player is on the ground
            }
            CommonConfig.the.getPlatformContainer().forEach(platform => {
                if (this.isCollidingWith(platform) && this.isJumping) {
                    this.player.y = platform.y; // Snap to ground platform
                    this.velocityY = 0; // Stop falling
                    this.isJumping = false; // Player is on the ground
                    this.isPlatform = true;
                }
            });
        } 
    }

    isCollidingWith(platform: Platform): boolean {
        const playerBounds = this.player.getBounds();
        const platformBounds = platform.getBounds();

        return playerBounds.x + playerBounds.width > platformBounds.x &&
               playerBounds.x < platformBounds.x + platformBounds.width &&
               playerBounds.y + playerBounds.height > platformBounds.y &&
               playerBounds.y < platformBounds.y + platformBounds.height;
    }


    private createPath(): { x: number, y: number }[] {
        // Define the path points
        return [
            { x: 100, y: 500 },
            { x: 200, y: 400 },
            { x: 300, y: 300 },
            { x: 400, y: 400 },
            { x: 500, y: 500 }
        ];
    }

    private moveAlongPath(): void {
        // // Animate the player along the path using GSAP
        // const tl = gsap.timeline();
        // this.path.forEach(point => {
        //     tl.to(this.player, {
        //         duration: 1, // Adjust the duration for each segment
        //         x: point.x,
        //         y: point.y,
        //         onComplete: () => {
        //             if (point === this.path[this.path.length - 1]) {
        //                 this.player.stop();
        //             }
        //         }
        //     });
        // });
    }

    public destroy(): void {
        // Clean up event listeners
        window.removeEventListener("keydown", this.handleKeyDown.bind(this));
        window.removeEventListener("keyup", this.handleKeyUp.bind(this));
        super.destroy();
    }
}