import Phaser from "phaser";

let buttonPlay;

class MainMenu extends Phaser.Scene{
    constructor(test){
        super({
            key: 'MainMenu'
        });
    }
    preload(){
        this.load.image('play', 'src/image/playButton.png');
    }
    
    create(){
        buttonPlay = this.add.image(450,250, 'play').setScale(0.5);
        buttonPlay.setInteractive();

        buttonPlay.on('pointerup', ()=>{
            this.scene.start('GameScene');
        })
    }

    update(delta, time){

    }
}
export default MainMenu;