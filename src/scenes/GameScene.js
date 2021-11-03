import Phaser from "phaser";

let bg;
let maple;

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
        this.load.image('bg','src/image/background3.png');
        this.load.spritesheet('maple','src/image/playerMaple.png',
                                {frameWidth:54, frameHeight:89});


    }

    create() {
        bg = this.add.tileSprite(450, 285, 900, 601, 'bg');

        maple = this.physics.add.sprite(40, 382, 'maple');
        maple.setScale(1.25);
        maple.setOffset(0,0);
        this.anims.create({
            key: 'mapleAni',
            frames: this.anims.generateFrameNumbers('maple',{
                start: 0,
                end: 3
            }),
            duration: 800,
            repeat: -1
        })
        
        maple.setCollideWorldBounds(true)
        
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }

    update(delta, time) {
        bg.tilePositionX += 5;

        maple.anims.play('mapleAni', true);
        if(keyW.isDown){
            maple.setVelocityY(-500);
        }else if(keyS.isDown){
            maple.setVelocityY(500);
        }else{
            maple.setVelocityY(0);
        }
        if(keyA.isDown){
            maple.setVelocityX(-500);
        }else if(keyD.isDown){
            maple.setVelocityX(500);
        }else{
            maple.setVelocityX(0);
            
        }
    
    }
}
export default GameScene;
