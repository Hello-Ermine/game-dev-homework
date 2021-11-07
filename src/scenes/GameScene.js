import Phaser from "phaser";

let bg;
let player;
let keyW;
let keyA;
let keyD;
let keyS;
let dragonGroup;
let dragonEvent;
let bullet;
let bulletGroup;
let bullEvent;

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
        //bullet
         this.load.image('bullet', 'src/image/')    

    }

    create() {
        
        background = this.add.tileSprite(0, 0, 1088, 416, 'bg').setOrigin(0, 0);
        
        //player
        player = this.physics.add.sprite(80, 100, 'player').setScale(0.5).setCollideWorldBounds(true).setImmovable();
    
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
           

          //dragon
           dragonGroup = this.physics.add.group();

           dragonEvent = this.time.addEvent({
               delay: 3000,
               callback: function () {
                   dragon = this.physics.add.image(dragon.x-90, dragon.y, 'dragon');
                     dragonGroup.add(dragon);
  
                   dragonGroup.setVelocityX(-100);
               },
               callbackScope: this,
               loop: true,
               paused: false,
             });

           //bullet
           bulletGroup = this.physics.add.group();

           bulletEvent = this.time.addEvent({
              delay: 1000,
              callback: function () {
                  bullet = this.physics.add.image(player.x-120, player.y, 'bullet')
                      .setScale(0.2).setSize(0.2);

                  bulletGroup.add(bullet);
                  bulletGroup.setVelocityX(-100);
                },
              callbackScope: this,
              loop: true,
            // pause: false
        });

            

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

        //dragon destroy
        for (let i = 0; i < dragonGroup.getChildren().length; i++) {
            if (dragonGroup.getChildren()[i].x < -1000) {
                dragonGroup.getChildren()[i].destroy();
            }
        }
      
        for (let i = 0; i < bulletGroup.getChildren().length; i++) {
            if (bulletGroup.getChildren()[i].x <= 2000) {
                bulletGroup.getChildren()[i].destroy();
            }
        }
        
        
        
        
        
    }

    
}
export default GameScene;

