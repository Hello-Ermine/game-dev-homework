import Phaser from "phaser";

let bg;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {


        this.load.image('bg', 'src/image/Bg.jpeg');

       // this.load.spritesheet('bird','src/image/bird.png',
        //{ frameWidth: 410 , frameHeight: 310});
        

    }

    create() {

        background = this.add.tileSprite(0, 0, 850, 1400, 'bg').setOrigin(0, 0);


    //animation
        //this.anims.create({
          //  key: 'birdAni',
         //   frames: this.anims.generateFrameNumbers('bird', {
         //       start: 0,
         //       end: 7
       //     }),
       //     duration: 500,    
       //     repeat: -1
        
    }

    update(delta, time) {
        background.tilePositionY -= 10;
        
    }
}
export default GameScene;
