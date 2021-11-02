import Phaser from "phaser";

let background;
let buttonStart;

class MainMenu extends Phaser.Scene {  
    constructor(test) {
        super({
            key: 'MainMenu'  
        });
    }

    preload() {
        this.load.image('background','src/image/Background.jpg');
        this.load.image('start','src/image/StartButton.png');
    }

    create() {
        background = this.add.tileSprite(0, 0, 480, 720, 'background').setOrigin(0, 0).setDepth(1);
        buttonStart = this.add.image(240, 360, 'start').setScale(0.5).setDepth(2);
        buttonStart.setInteractive();

        buttonStart.on('pointerdown',()=>{
            this.scene.start('GameScene');
        })
    }
    
    
    update() {
        
    }
}

export default MainMenu;  