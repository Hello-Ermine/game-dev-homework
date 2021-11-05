import Phaser from "phaser";

let buttonPlay;
let bg;

class MainMenu extends Phaser.Scene{
    constructor(test){
        super({
            key: 'MainMenu'
        });
    }
    preload(){
        this.load.image('bg','src/image/background3.png');
        this.load.image('play', 'src/image/playButton.png');
    }
    
    create(){
        bg = this.add.tileSprite(450, 285, 900, 601, 'bg');
        
        buttonPlay = this.add.image(435,250, 'play').setScale(0.5);
        buttonPlay.setInteractive();

        buttonPlay.on('pointerup', ()=>{
            this.scene.start('GameScene');
        })
    }

    update(delta, time){
        bg.tilePositionX += 2;
    }
}
export default MainMenu;