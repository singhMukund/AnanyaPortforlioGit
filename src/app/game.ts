// Game.ts
import { Application, Container, Filter, Graphics, Loader, Sprite, Text, TextStyle, Texture, Ticker, autoDetectRenderer, filters } from 'pixi.js';
import { CommonConfig } from '../Common/CommonConfig';
import { GameManager } from './GameMech/GameManager';
import { LoadingContainer } from './LoadingIntro/Loading';


export class Game {
  protected static _the: Game;
  public app: Application;
  private loader!: Loader;
  private gameContainer!: Container;
  private gameManager !: GameManager
  private loadingContainer !: LoadingContainer;


  static get the(): Game {
    if (!Game._the) {
      Game._the = new Game();
    }

    return Game._the;
  }

  constructor() {
    if (Game._the == null) Game._the = this;
    this.app = new Application({
      backgroundColor: 0x000000,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const pixiContainer = document.getElementById('pixi-container');
    if (pixiContainer) {
      pixiContainer.appendChild(this.app.view);
    }
    this.init();
  }

  init(): void {
   
    this.gameContainer = new Container();
    this.app.stage.addChild(this.gameContainer);
    this.loader = this.app.loader;
    this.loadAssetsAndInitialize();
  }

  private loadImages() {
    this.loader.add('BgImg', './assets/StaticImage/Bg/background.png');
    this.loader.add('Page_2_Bg', './assets/StaticImage/Component/page_02_bg.png');
    this.loader.add('PlatformImg', './assets/StaticImage/Bg/ground.png');
    this.loader.add('Cloud', './assets/StaticImage/Component/cloud.png');
    this.loader.add('schoolBuilding', './assets/StaticImage/Component/schoolBuilding.png');
    this.loader.add('school_logo', './assets/StaticImage/Component/school_logo.png');
    this.loader.add('jnvImg', './assets/StaticImage/Component/jnv.png');
    this.loader.add('jnv_logo', './assets/StaticImage/Component/jnv_logo.png');
    this.loader.add('DAVwith_logo', './assets/StaticImage/Component/davSchool.png');
    this.loader.add('star_score', './assets/StaticImage/Component/star_score.png');
    this.loader.add('college_img', './assets/StaticImage/Component/college_img.png');
    this.loader.add('collegeLogo', './assets/StaticImage/Component/collegeLogo.png');
    this.loader.add('bridge', './assets/StaticImage/Component/bridge.png');
    this.loader.add('indicator', './assets/StaticImage/Component/indicator.png');
    this.loader.add('pointer', './assets/StaticImage/Component/pointer.png');
    this.loader.add('textWrapImg', './assets/StaticImage/Component/textWrapImg.png');
    this.loader.add('dropImg', './assets/StaticImage/Component/drop.png');
    this.loader.add('starImg', './assets/StaticImage/Component/star.png');
    this.loader.add('moonImg', './assets/StaticImage/Component/moon.png');
    this.loader.add('river', './assets/StaticImage/Component/river.png');
    this.loader.add('stone', './assets/StaticImage/Component/stone.png');
    this.loader.add('spaceCraft', './assets/StaticImage/Component/spaceCraft.png');
    this.loader.add('platform_tree1', './assets/StaticImage/Component/platform_tree1.png');
    this.loader.add('platform_tree2', './assets/StaticImage/Component/platform_tree2.png');
    this.loader.add('platform_tree3', './assets/StaticImage/Component/platform_tree3.png');
    this.loader.add('bridge_plat', './assets/StaticImage/Component/bridge_plat.png');
    this.loader.add('bridge_plat2', './assets/StaticImage/Component/bridge_plat2.png');
    this.loader.add('page_02_bgg', './assets/StaticImage/Component/page_02_bgg.png');
    this.loader.add('water', './assets/StaticImage/Component/water.png');
    this.loader.add('college_2_img', './assets/StaticImage/Component/college_2_img.png');
    this.loader.add('trees', './assets/StaticImage/Component/trees.png');
    this.loader.add('LinksImg', './assets/StaticImage/Component/Links.png');
    this.loader.add('college_3_img', './assets/StaticImage/Component/college_3_img.png');
    this.loader.add('college_4_img', './assets/StaticImage/Component/college_4_img.png');
    this.loader.add('PanjabUniversityLogo', './assets/StaticImage/Component/PanjabUniversityLogo.png');
    this.loader.add('Key', './assets/StaticImage/Component/key.png');
    this.loader.add('guru_sikh', './assets/StaticImage/Component/guru_sikh.png');

    this.loader.add('grass_8x1', './assets/StaticImage/Component/grass_8x1.png');
    this.loader.add('grass_6x1', './assets/StaticImage/Component/grass_6x1.png');
    this.loader.add('grass_4x1', './assets/StaticImage/Component/grass_4x1.png');
    this.loader.add('grass_2x1', './assets/StaticImage/Component/grass_2x1.png');
    this.loader.add('grass_1x1', './assets/StaticImage/Component/grass_1x1.png');


    this.loader.add('Player_1', './assets/StaticImage/Component/Player/character_02.png');
    this.loader.add('Player_2', './assets/StaticImage/Component/Player/character_03.png');
    this.loader.add('Player_3', './assets/StaticImage/Component/Player/character_04.png');
    this.loader.add('Player_4', './assets/StaticImage/Component/Player/character_05.png');
    this.loader.add('Player_5', './assets/StaticImage/Component/Player/character_06.png');



    // @ts-ignore
    const loadAssets = () => {
      return new Promise<void>((resolve, reject) => {
        this.loader.load(() => {
          resolve();
        });
        // @ts-ignore
        this.loader.onError.add((error) => {
          console.error("Error loading assets:", error);
          reject(error);
        });
      });
    };


    loadAssets()
      .then(() => {
        this.onLoadComplete();
      })
      .catch((error) => {
      });
  }



  private loadAssetsAndInitialize() {
    this.loadImages();
  }


  private onLoadComplete() {
    new CommonConfig();
    this.loadingContainer = new LoadingContainer();
    this.app.stage.addChild(this.loadingContainer);
    this.loadingContainer.startLoading();
    this.app.stage.on("START_BUTTON_CLICKED", this.onStartButtonClicked, this);
    // 
  }

  private onStartButtonClicked() :void{
    this.loadingContainer.visible =false;
    this.gameManager = new GameManager(1000);
  }


}
