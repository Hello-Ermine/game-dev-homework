import Phaser from "phaser";

let buttonPlay;
class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('play', 'src/image/start.png');
    }

    create() {
        buttonPlay = this.add.image(540,360, 'play').setScale(1.5);
        buttonPlay.setInteractive();
        buttonPlay.on('pointerup', ()=>{
            this.scene.start('GameScene');
        })
    }

    update(delta, time) {

    }
        
}
export default MainMenu;