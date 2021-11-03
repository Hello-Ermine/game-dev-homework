import Phaser from "phaser";

let bg;
let cloud1;
let cloud2;
let snow;
let keyA;
let keyD;
let queen;
let music;



class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.audio('theme','src/themesong.mp3');
        this.load.image('bg','src/images/bg05.png');
        this.load.image('cloud1','src/images/layers/clouds_1.png');
        this.load.image('cloud2','src/images/layers/clouds_2.png');
        this.load.image('snow','src/images/layers/snowfalling.png');
        this.load.spritesheet('queen','src/images/spritesheet (5).png',{frameWidth: 382, frameHeight : 382});

    
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bg').setOrigin(0,0).setDepth(1);
        cloud1 = this.add.tileSprite(0,0,1920,1080,'cloud1').setOrigin(0,0).setDepth(2);
        cloud2 = this.add.tileSprite(0,0,1920,1080,'cloud2').setOrigin(0,0).setDepth(3);
        snow = this.add.tileSprite(0,0,1920,1080,'snow').setOrigin(0,0).setDepth(4);
      
        queen = this.physics.add.sprite(150,810,'queen').setScale(0.8).setDepth(10);
        this.anims.create({
            key: 'queenAni',
            frames: this.anims.generateFrameNumbers('queen', {
                start: 0,
                end: 38
            }),
            duration: 5000,
            framerate: 10,
            repeat: -1
        })
        
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
                end: 38
            }),
            duration: 2000,
            framerate: 10,
            repeat: -1
        })
        
        queen.setCollideWorldBounds(true);

        music = this.sound.add('theme').setVolume(1);

        music.play({loop: true});
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
    
        
        if (keyA.isDown) {
            queen.setVelocityX(-200);
            
            queen.anims.play('queenSleep', true);
        
         
        }  else if (keyD.isDown) {
            queen.setVelocityX(200);
            queen.anims.play('queenDash', true);
         
        } 
        else {
            queen.setVelocityX(0);
           
           queen.anims.play('queenAni2', true);
           
        }
        

        bg.tilePositionX += 2;
        cloud1.tilePositionX -= 1;
        cloud2.tilePositionX -= 1;
        snow.tilePositionY -= 1;
        
    }
}
export default GameScene;
