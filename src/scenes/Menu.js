import Phaser from "phaser";

let button;

class Menu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Menu'
        });
    }

    preload() {
        this.load.image('start', 'src/image/start.png');



    }

    create() {
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



    }
}

export default Menu;