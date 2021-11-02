import Phaser from "phaser";

let background;
let cha1;
let cha2;
let rabbit;
let keyW;
let keyA;
let keyS;
let keyD;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/images/bg02.jpg');
        this.load.spritesheet('cha1','src/images/c2-1.png',{ frameWidth :64, frameHeight :127});
        

    
    }

    create() {
        background = this.add.tileSprite(0, 0, 1024, 512, 'bg').setDepth(1);
        background.setOrigin(0, 0);
        cha1 = this.physics.add.sprite(100,360,'cha1').setScale(1).setDepth(10);
        this.anims.create({
            key: 'cha1Ani',
            frames: this.anims.generateFrameNumbers('cha1', {
                start: 0,
                end: 9
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })
        
      
        
        cha1.setCollideWorldBounds(true);
        cha1.anims.play('cha1Ani', true);
        
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
    
        if (keyA.isDown) {
            cha1.setVelocityX(-300);
            
            

        } else if (keyD.isDown) {
            cha1.setVelocityX(300);
           
        } else {

           cha1.anims.play('cha1Ani', false);
          
        }
        
        
        background.tilePositionX += 2;
    }
}
export default GameScene;
