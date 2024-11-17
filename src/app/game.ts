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
    this.loader.add('pathBg', './assets/StaticImage/Bg/pathBg.png');
    this.loader.add('BackgroundPage3', './assets/StaticImage/Bg/Background_01.png');
    this.loader.add('LastPagePlatform', './assets/StaticImage/Bg/platfrom_large.png');
    this.loader.add('Page_2_Bg', './assets/StaticImage/Component/page_02_bg.png');
    this.loader.add('path', './assets/StaticImage/Component/path.png');
    this.loader.add('path_green', './assets/StaticImage/Component/path_green.png');
    this.loader.add('PlatformImg_green', './assets/StaticImage/Bg/ground.png');
    this.loader.add('PlatformImg', './assets/StaticImage/Bg/ground_red.png');
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
    this.loader.add('indicator2', './assets/StaticImage/Component/indicator2.png');
    this.loader.add('logo_instagram', './assets/StaticImage/Component/logo_instagram.png');
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

    this.loader.add('infoBtn_disable', './assets/StaticImage/Component/infoBtn_disable.png');
    this.loader.add('infoBtn', './assets/StaticImage/Component/infoBtn.png');
    this.loader.add('bulb', './assets/StaticImage/Component/bulb.png');
    this.loader.add('lock', './assets/StaticImage/Component/lock.png');
    this.loader.add('books_0', './assets/StaticImage/Component/books_0.png');
    this.loader.add('skull', './assets/StaticImage/Component/skull.png');
    this.loader.add('contacts', './assets/StaticImage/Component/contacts.png');
    this.loader.add('home', './assets/StaticImage/Component/home.png');
    this.loader.add('home_disable', './assets/StaticImage/Component/home_disable.png');
    this.loader.add('babyFace', './assets/StaticImage/Component/babyFace.png');


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

    const platformerPage3Link: string = './assets/StaticImage/Platformer/PlatformerPage3/';

    this.loader.add('PlatformerPage3_Bonus', `${platformerPage3Link}Bonus.png`);
    this.loader.add('PlatformerPage3_Brick_01', `${platformerPage3Link}Brick_01.png`);
    this.loader.add('PlatformerPage3_Brick_02', `${platformerPage3Link}Brick_02.png`);
    this.loader.add('PlatformerPage3_Bridge_01', `${platformerPage3Link}Bridge_01.png`);
    this.loader.add('PlatformerPage3_Bridge_02', `${platformerPage3Link}Bridge_02.png`);
    this.loader.add('PlatformerPage3_Decor_Brick', `${platformerPage3Link}Decor_Brick.png`);
    this.loader.add('PlatformerPage3_Ground_01', `${platformerPage3Link}Ground_01.png`);
    this.loader.add('PlatformerPage3_Ground_02', `${platformerPage3Link}Ground_02.png`);
    this.loader.add('PlatformerPage3_Ground_03', `${platformerPage3Link}Ground_03.png`);
    this.loader.add('PlatformerPage3_Ground_04', `${platformerPage3Link}Ground_04.png`);
    this.loader.add('PlatformerPage3_Ground_05', `${platformerPage3Link}Ground_05.png`);
    this.loader.add('PlatformerPage3_Ground_06', `${platformerPage3Link}Ground_06.png`);
    this.loader.add('PlatformerPage3_Ground_07', `${platformerPage3Link}Ground_07.png`);
    this.loader.add('PlatformerPage3_Ground_08', `${platformerPage3Link}Ground_08.png`);
    this.loader.add('PlatformerPage3_Ground_09', `${platformerPage3Link}Ground_09.png`);
    this.loader.add('PlatformerPage3_Ground_10', `${platformerPage3Link}Ground_10.png`);
    this.loader.add('PlatformerPage3_Ground_11', `${platformerPage3Link}Ground_11.png`);
    this.loader.add('PlatformerPage3_Ground_12', `${platformerPage3Link}Ground_12.png`);
    this.loader.add('PlatformerPage3_Ground_13', `${platformerPage3Link}Ground_13.png`);
    this.loader.add('PlatformerPage3_Ground_Additional_01', `${platformerPage3Link}Ground-Additional_01.png`);
    this.loader.add('PlatformerPage3_Ground_Additional_02', `${platformerPage3Link}Ground-Additional_02.png`);
    this.loader.add('PlatformerPage3_Ground_Additional_03', `${platformerPage3Link}Ground-Additional_03.png`);
    this.loader.add('PlatformerPage3_Ground_Additional_04', `${platformerPage3Link}Ground-Additional_04.png`);
    this.loader.add('PlatformerPage3_Ground_Additional_05', `${platformerPage3Link}Ground-Additional_05.png`);
    this.loader.add('PlatformerPage3_Ground_Additional_06', `${platformerPage3Link}Ground-Additional_06.png`);
    this.loader.add('PlatformerPage3_Ground_Additional_07', `${platformerPage3Link}Ground-Additional_07.png`);
    this.loader.add('PlatformerPage3_Ladder', `${platformerPage3Link}Ladder.png`);
    this.loader.add('PlatformerPage3_Spikes', `${platformerPage3Link}Spikes.png`);
    this.loader.add('PlatformerPage3_Wooden_Barrel', `${platformerPage3Link}Wooden_Barrel.png`);
    this.loader.add('PlatformerPage3_Wooden_Box', `${platformerPage3Link}Wooden_Box.png`);

    const environment3Link: string = './assets/StaticImage/Environment/';
    this.loader.add('EnvironmentPage3_Decor_Statue', `${environment3Link}Decor_Statue.png`);
    this.loader.add('EnvironmentPage3_Decor_Plant', `${environment3Link}Decor_Plant.png`);
    this.loader.add('EnvironmentPage3_Decor_Ruins_01', `${environment3Link}Decor_Ruins_01.png`);
    this.loader.add('EnvironmentPage3_Decor_Ruins_02', `${environment3Link}Decor_Ruins_02.png`);
    this.loader.add('EnvironmentPage3_Fence', `${environment3Link}Fence.png`);
    this.loader.add('EnvironmentPage3_Grass_01', `${environment3Link}Grass_01.png`);
    this.loader.add('EnvironmentPage3_Grass_02', `${environment3Link}Grass_02.png`);
    this.loader.add('EnvironmentPage3_Lion_Bas_Relief', `${environment3Link}Lion_Bas_Relief.png`);
    this.loader.add('EnvironmentPage3_Little_Wreckage', `${environment3Link}Little_Wreckage.png`);
    this.loader.add('EnvironmentPage3_Rock_01', `${environment3Link}Rock_01.png`);
    this.loader.add('EnvironmentPage3_Rock_02', `${environment3Link}Rock_02.png`);
    this.loader.add('EnvironmentPage3_Rock_03', `${environment3Link}Rock_03.png`);
    this.loader.add('EnvironmentPage3_Rock_04', `${environment3Link}Rock_04.png`);
    this.loader.add('EnvironmentPage3_Rock_05', `${environment3Link}Rock_05.png`);
    this.loader.add('EnvironmentPage3_Rock_06', `${environment3Link}Rock_06.png`);
    this.loader.add('EnvironmentPage3_Rock_07', `${environment3Link}Rock_07.png`);
    this.loader.add('EnvironmentPage3_Rock_08', `${environment3Link}Rock_08.png`);
    this.loader.add('EnvironmentPage3_Sign_01', `${environment3Link}Sign_01.png`);
    this.loader.add('EnvironmentPage3_Sign_02', `${environment3Link}Sign_02.png`);
    this.loader.add('EnvironmentPage3_Sign_03', `${environment3Link}Sign_03.png`);
    this.loader.add('EnvironmentPage3_Sign_04', `${environment3Link}Sign_04.png`);
    this.loader.add('EnvironmentPage3_Sign_05', `${environment3Link}Sign_05.png`);
    this.loader.add('EnvironmentPage3_Sign_06', `${environment3Link}Sign_06.png`);




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

  private onStartButtonClicked(): void {
    this.loadingContainer.visible = false;
    this.gameManager = new GameManager(1000);
  }


}
