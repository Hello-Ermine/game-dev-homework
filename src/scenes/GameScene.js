import Phaser from "phaser";

let bg;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {


        this.load.image('bg', '../src/image/Bg.jpeg');

       // this.load.spritesheet('bird','src/image/bird.png',
        //{ frameWidth: 410 , frameHeight: 310});
        

    }

    create() {

        bg = this.add.tileSprite(0, 0, 298, 254, 'bg').setOrigin(0, 0);




    keyW_Atk = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA_Walkleft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD_Walkright = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)


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
        background.tilePositionX += 1;
        
    }
}
export default GameScene;
