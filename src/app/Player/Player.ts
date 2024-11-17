import { AnimatedSprite, Container, Graphics, Sprite, Texture, utils } from "pixi.js";
import { Game } from "../game";
import { CommonConfig } from "../../Common/CommonConfig";
import { Platform } from "../Component/Platform";

class CustomGraphics extends Graphics {
    public getPoints(): number[] {
        return (this.geometry as any).points.slice();
    }
}

export class Player extends Container {
    player !: AnimatedSprite;
    private speed: number = 3.5; // Adjust speed as needed
    private jumpHeight: number = 100; // Adjust jump height as needed
    private isJumping: boolean = false;
    private jumpStartY: number = 0;
    private keys: { [key: string]: boolean } = {};
    private pathImag_page2 !: Graphics;
    private velocityY: number = 0;
    gravity: number;
    private isPlatform: boolean = false;
    private platformBounds !: Graphics;

    private currentIndex: number = 0; // Track current point in path
    private isMovingLeft: boolean = false; // Flag to control movement direction
    private slop : number = 0;
    private negativeSlop : number = 0
    private y1 : number = 0;
    private y2 : number = 0;
    // velocityY: number;
    constructor() {
        super();
        this.init();
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

        this.platformBounds = new Graphics();
        let maxY : number = -window.innerHeight * 0.46 + (this.player.height - 8);
        this.y1 = -(this.player.height - 8) + 70;
        this.y2 = maxY;
        this.player.y = this.y1;
        this.slop = (maxY - this.y1)/ (window.innerWidth + 100);
        this.negativeSlop = (this.y1 - maxY)/(-100 - window.innerWidth);
        this.platformBounds.beginFill(0xf1c40f);
        this.platformBounds.drawPolygon([-100, this.y1,
            window.innerWidth, maxY,
            window.innerWidth, (this.player.height - 8),
            -100, (this.player.height - 8)
        ]);
        this.platformBounds.endFill();
        this.platformBounds.position.set(0, 0);
        // this.addChild(this.platformBounds);

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
        let playerHaveToStop: boolean = false;
        if (this.keys["ArrowLeft"]) {
            this.player.x -= this.speed;
            this.player.y = (this.slop * (this.player.x - window.innerWidth)) + this.y2;
        }
        if (this.keys["ArrowRight"]) {
            this.player.x += this.speed;
            this.player.y = (this.slop * (this.player.x + 100)) + this.y1;
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


        // if (this.isJumping) {
        //     if (!this.isPlatform) {
        //         this.velocityY += this.gravity; // Apply gravity to vertical velocity
        //         this.player.y += this.velocityY; // Move player vertically
        //     }


        //     // Check if player reaches ground level
        //     if (this.player.y >= 0) {
        //         this.player.y = 0; // Snap to ground platform
        //         this.velocityY = 0; // Stop falling
        //         this.isJumping = false; // Player is on the ground
        //     }
        //     CommonConfig.the.getPlatformContainer().forEach(platform => {
        //         if (this.isCollidingWith(platform) && this.isJumping) {
        //             this.player.y = platform.y; // Snap to ground platform
        //             this.velocityY = 0; // Stop falling
        //             this.isJumping = false; // Player is on the ground
        //             this.isPlatform = true;
        //         }
        //     });
        // }
    }

    isCollidingWith(platform: Platform): boolean {
        const playerBounds = this.player.getBounds();
        const platformBounds = platform.getBounds();

        return playerBounds.x + playerBounds.width > platformBounds.x &&
            playerBounds.x < platformBounds.x + platformBounds.width &&
            playerBounds.y + playerBounds.height > platformBounds.y &&
            playerBounds.y < platformBounds.y + platformBounds.height;
    }

    public destroy(): void {
        // Clean up event listeners
        window.removeEventListener("keydown", this.handleKeyDown.bind(this));
        window.removeEventListener("keyup", this.handleKeyUp.bind(this));
        super.destroy();
    }
}