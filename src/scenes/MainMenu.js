import Phaser from "phaser";

let buttonPlay;
let bg;
let cloud1;
let cloud2;
let snow;



class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {

        this.load.image('play', 'src/images/playbutton1.png');
        this.load.image('cloud1','src/images/layers/clouds_1.png');
        this.load.image('cloud2','src/images/layers/clouds_2.png');
        this.load.image('snow','src/images/layers/snowfalling.png');
        this.load.image('bg','src/images/bg05.png');
       

    }

    create() {

        buttonPlay = this.add.image(900,550, 'play').setScale(0.5).setDepth(10);
        cloud1 = this.add.tileSprite(0,0,1920,1080,'cloud1').setOrigin(0,0).setDepth(2);
        cloud2 = this.add.tileSprite(0,0,1920,1080,'cloud2').setOrigin(0,0).setDepth(3);
        snow = this.add.tileSprite(0,0,1920,1080,'snow').setOrigin(0,0).setDepth(4);
        bg = this.add.tileSprite(0,0,1920,1080,'bg').setOrigin(0,0).setDepth(1);

       buttonPlay.setInteractive();
       buttonPlay.on('pointerup', ()=>{

        this.scene.start('GameScene');

    })


    }

    update(delta, time) {
        bg.tilePositionX += 2;
        cloud1.tilePositionX -= 1;
        cloud2.tilePositionX -= 1;
        snow.tilePositionY -= 1;
    }
}
export default MainMenu;
