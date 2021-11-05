import Phaser from "phaser";

let button;
let bg1;
class start extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'start'
        });
    }

    preload() {
        //button
        //this.stage.backgroundColor = '#F0F8FF';
        this.load.image('bg1', 'src/image/twi.jpeg');
        this.load.image('start', 'src/image/start.png');
    }

    create() {
        bg1 = this.add.tileSprite(0, 0, 850, 1400, 'bg1');
        bg1.setOrigin(0, 0);


        button = this.add.image(225, 360, 'start')
            .setScale(0.1);

        button.setInteractive();

        button.on('pointerup', () => {
            this.scene.start('GameScene');
        })
        button.on('pointerover', () => {
            button.setScale(0.12);
        })
        button.on('pointerout', () => {
            button.setScale(0.1);
        })

    }

    update() {
        bg1.tilePositionY += 4;
    }
}

export default start;