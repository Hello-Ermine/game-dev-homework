import Phaser from "phaser";

let bg;
let tenis;
let keyW;
let keyA;
let keyD;
let keyS;

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
            bg.tilePositionX -= 10;
            tenis = this.physics.add.sprite(150,520,'tenis').setScale(0.7).setDepth(10).setGravityY(900);;
           
            bg.tilePositionY -= 10;
             goodfrog.anims.play('tenisAni', true);    

            

            

        //key input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
        bg.tilePositionX -= 10;
        tenis = this.physics.add.sprite(150,520,'tenis').setScale(0.7).setDepth(10).setGravityY(900);;
       
        bg.tilePositionY -= 10;
         goodfrog.anims.play('tenisAni', true);

        tp.anims.play('tpAni', true);

        if (keyW.isDown) {
            tenis.setVelocityY(-500);
        } else if (keyS.isDown) {
           tenis.setVelocityY(500);
        } else {
           tenis.setVelocityY(0);
        }
        if (keyA.isDown) {
           tenis.setVelocityX(-500);
        } else if (keyD.isDown) {
           tenis.setVelocityX(500);
        } else {
           tenis.setVelocityX(0);
        }

    
        
      
      
        
        
        
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    
}
export default GameScene;

