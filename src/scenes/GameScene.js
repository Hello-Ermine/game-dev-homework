import Phaser from "phaser";

let bg;
let cloud1;
let cloud2;
let snow;
let keyA;
let keyD;
let keyX;
let queen;
let theme;
let keySb;
let keyCtrl;
let jump;
let bloop;
let sparkle;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.audio('theme','src/cookietheme.mp3');
        this.load.audio('jump','src/jump.mp3');
        this.load.audio('bloop','src/bell.mp3');
        this.load.audio('sparkle','src/sparkle.mp3');
        this.load.image('bg','src/images/bg05.png');
        this.load.image('cloud1','src/images/layers/clouds_1.png');
        this.load.image('cloud2','src/images/layers/clouds_2.png');
        this.load.image('snow','src/images/layers/snowfalling.png');
        this.load.spritesheet('queen','src/images/spritesheet (5).png',{frameWidth: 382, frameHeight : 382});
        this.load.spritesheet('queen2','src/images/cookie1.png',{frameWidth: 382, frameHeight : 382});

    
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bg').setOrigin(0,0).setDepth(1).setScale(0.67);
        cloud1 = this.add.tileSprite(0,0,1920,1080,'cloud1').setOrigin(0,0).setDepth(2).setScale(0.67);
        cloud2 = this.add.tileSprite(0,0,1920,1080,'cloud2').setOrigin(0,0).setDepth(3).setScale(0.67);
        snow = this.add.tileSprite(0,0,1920,1080,'snow').setOrigin(0,0).setDepth(5).setScale(0.67);
        
      
        queen = this.physics.add.sprite(150,520,'queen').setScale(0.7).setDepth(10).setGravityY(1000);;
       
        this.anims.create({
            key: 'queenAni2',
            frames: this.anims.generateFrameNumbers('queen', {
                start: 10,
                end: 15
            }),
            duration: 1000,
            framerate: 10,
            repeat: -1
            
        })
        this.anims.create({
            key: 'queenDash',
            frames: this.anims.generateFrameNumbers('queen', {
                start: 16,
                end: 21
            }),
            duration: 1000,
            framerate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'queenSleep',
            frames: this.anims.generateFrameNumbers('queen', {
                start: 23,
                end: 36
            }),
            duration: 2000,
            framerate: 10,
            repeat: -1,
            yoyo: true
           
        })
        this.anims.create({
            key: 'queenJump',
            frames: this.anims.generateFrameNumbers('queen2', {
                start: 0,
                end: 8
            }),
            duration: 1000,
            framerate: 9,
            repeat: 1,
           
        }) 
        this.anims.create({
            key: 'queenSlide',
            frames: this.anims.generateFrameNumbers('queen2', {
                start: 13,
                end: 16
            }),
            duration: 500,
            framerate: 4,
            repeat: 1,
           
        }) 
      
      
        
        
        queen.setCollideWorldBounds(true);

        theme = this.sound.add('theme').setVolume(0.2);
        jump = this.sound.add('jump').setVolume(0.2);
        bloop = this.sound.add('bloop').setVolume(0.2);
        sparkle = this.sound.add('sparkle').setVolume(0.2);

        theme.play({loop: true});
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyCtrl = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
    }

    update(delta, time) {
    
        
        
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
