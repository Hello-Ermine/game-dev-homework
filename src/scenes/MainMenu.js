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
        this.load.image('button', 'src/image/Botton.png');
    }


    create() {
        bg = this.add.tileSprite(0, 0, 900, 1000, 'bg');
        bg.setScale(2);

        Button = this.add.image(230, 300, 'button')
        Button.setScale(0.2)

        Button.setInteractive();

        Button.on('pointerup',()=>{
            this.scene.start('GameScene');
        })    
        Button.on('pointerover', () => {
            Button.setScale(0.22);
        })
        Button.on('pointerout', () => {
            Button.setScale(0.2);
        })
    }

    update(delta, time) {
        bg.tilePositionX += 0.3;
    }

}

export default MainMenu;
