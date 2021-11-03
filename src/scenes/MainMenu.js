import Phaser from "phaser";

let background;
let playButton;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bg', './src/img/background4.png');
        this.load.image('play', './src/img/start.png');
    }

    create() {
        playButton = this.add.image(225, 650, 'play')
            .setScale(0.3)
            .setDepth(1)
        playButton.setInteractive();
        playButton.on('pointerup', () => {
            this.scene.start('GameScene')
        })

        background = this.add.tileSprite(0, 0, 450, 720, 'bg')
            .setOrigin(0, 0)
            .setDepth(0);
    }


    update() {
        background.tilePositionX += 3;
    }
}

export default MainMenu;