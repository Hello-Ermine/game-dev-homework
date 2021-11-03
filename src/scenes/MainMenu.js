import Phaser from "phaser";
import { PlayAnimation } from "phaser/src/actions";

let buttonPlay;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }
    preload() {
        this.load.image('play', 'src/image/cherry.png');

    }
    create() {
        buttonPlay = this.add.image(232,350, 'play').setScale(0.2);
        buttonPlay.setInteractive();

        buttonPlay.on('pointerup', ()=>{
            this.scene.start('GameScene');


        })



    }


    update(delta, time) {

    }
}
export default MainMenu;
