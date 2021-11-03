import Phaser from "phaser";

let bg;
let Button;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/MainMenu.jpg');
        this.load.image('botton', 'src/image/Botton.png');

    }


    create() {
        bg = this.add.tileSprite(0, 0, 900, 1000, 'bg');
        bg.setScale(2);

        Button = this.add.image(230, 300, 'botton')
        Button.setScale(0.2)

        Button.setInteractive();

        Button.on('pointerup',()=>{
            this.scene.start('GameScene');
        })    
    }

    update(delta, time) {
        bg.tilePositionX += 1;
    }

}

export default MainMenu;
