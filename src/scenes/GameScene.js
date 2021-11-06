import Phaser from "phaser";

let bg;
let tenis;
let keyA;
let keyD;
let keyX;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
         this.load.image('bg', 'src/image/Game_Background.jpg');
         this.load.spritesheet('tenis', 'src/image/tenis.png',
            { frameWidth: 100, frameHeight: 100 });  

    }

    create() {
        

        


        tenis = this.physics.add.sprite(225, 500, 'tenis')
            .setScale(0.45)
            .setCollideWorldBounds(true);

            

            

        //key input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
        bg.tilePositionX -= 10;
        tenis = this.physics.add.sprite(150,520,'tenis').setScale(0.7).setDepth(10).setGravityY(1000);;
       
        bg.tilePositionY -= 10;
        // goodfrog.anims.play('frogAni', true);

        tp.anims.play('tpAni', true);

        // if (keyW.isDown) {
        //     goodfrog.setVelocityY(-500);
        // } else if (keyS.isDown) {
        //     goodfrog.setVelocityY(500);
        // } else {
        //     goodfrog.setVelocityY(0);
        // }
        // if (keyA.isDown) {
        //     goodfrog.setVelocityX(-500);
        // } else if (keyD.isDown) {
        //     goodfrog.setVelocityX(500);
        // } else {
        //     goodfrog.setVelocityX(0);
        // }

    
        
      
      
        
        
        tenis.setCollideWorldBounds(true);

        bg = this.sound.add('bg').setVolume(0.2);

        theme.play({loop: true});
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(delta, time) {
    
        bg.tilePositionY -= 10;
        
        if (keyX.isDown) {
            sparkle.play({loop: false});
            queen.anims.play('queenSleep', true,)
        
        }
        else if (keySb.isDown) {
           
            jump.play({loop: false});
            queen.anims.play('queenJump', true,)
            queen.setVelocityY(-100);
        
        }
        else if (keyCtrl.isDown) {
            bloop.play({loop: false});
            queen.anims.play('queenSlide', true,)
            
            
        }
        else if (keyA.isDown) {
            bg.tilePositionX -= 2;
            queen.setVelocityX(-200);
            queen.anims.play('queenDash', true);
            queen.flipX=true;
            
        }  else if (keyD.isDown) {
            bg.tilePositionX += 2;
            queen.setVelocityX(200);
            queen.anims.play('queenDash', true);
            queen.flipX=false;
            
        } 
        else {
            queen.setVelocityX(0);
           
           queen.anims.play('queenAni2', true);
           
        }
        
        
        cloud1.tilePositionX -= 1;
        cloud2.tilePositionX -= 1;
        snow.tilePositionY -= 1;
    }
}
export default GameScene;

