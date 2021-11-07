import Phaser from "phaser";

let bg;
let player;
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
        //backGround
         this.load.image('bg', 'src/image/bg.png');
        //player 
         this.load.spritesheet('player', 'src/image/P2.png',
            { frameWidth: 79.6666667, frameHeight: 111 });  
        //dragon
         this.load.image('dragon', 'src/image/dragon.png')    

    }

    create() {
        
        background = this.add.tileSprite(0, 0, 1088, 416, 'bg').setOrigin(0, 0);
        
        //player
        player = this.physics.add.sprite(425, 700, 'player').setScale(0.5).setCollideWorldBounds(true);;
    
    this.anims.create({
        key: 'playerAni',
        frames: this.anims.generateFrameNumbers('player', {
            start: 0,
            end: 5
        }),
        duration: 500,
        framerate: 0,
        repeat: -1
    })
        //tenis
        // tenis = this.physics.add.sprite(225, 500, 'tenis')
        //     .setScale(0.45)
        //     .setCollideWorldBounds(true);
        //     bg.tilePositionX -= 10;
        //     tenis = this.physics.add.sprite(150,520,'tenis').setScale(0.7).setDepth(10).setGravityY(900);;
           
        //     bg.tilePositionY -= 10;
        //      player.anims.play('tenisAni', true);    

          //dragon
        //   bulletGroup = this.physics.add.group();

        //   bulletEvent = this.time.addEvent({
        //       delay: 1000,
        //       callback: function () {
        //           bullet = this.physics.add.image(goodfrog.x, goodfrog.x-90, 'bullet').setScale(0.2);
        //             bulletGroup.add(bullet);
  
        //           bulletGroup.setVelocityY(-200);
        //       },
        //       callbackScope: this,
        //       loop: true,
        //     });

            

        //key input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
        bg.tilePositionX -= 10;

        //player
         player.anims.play('playerAni', true);


        if (keyW.isDown) {
            player.setVelocityY(-250);
        } else if (keyS.isDown) {
           player.setVelocityY(250);
        } else {
           player.setVelocityY(0);
        }
        if (keyA.isDown) {
           player.setVelocityX(-250);
        } else if (keyD.isDown) {
           player.setVelocityX(250);
        } else {
           player.setVelocityX(0);
        }

    
        
      
      
        
        
        
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    
}
export default GameScene;

