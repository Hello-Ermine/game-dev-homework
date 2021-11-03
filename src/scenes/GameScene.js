import Phaser from "phaser";

let BG;
let plane;

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
        this.load.image('BG', 'src/image/BG.png');
        this.load.spritesheet('plane', 'src/image/plane.png',
            { frameWidth: 189.2, frameHeight: 185.2 });
    }


    create() {
    BG = this.add.tileSprite(0, 0, 200, 500, 'BG');
    BG.setOrigin(0, 0);
    BG.setScale(3);

    plane = this.physics.add.sprite(240, 600, 'plane');
    plane.setScale(0.6);

    plane.setCollideWorldBounds(true)  

    this.anims.create({
        key: 'planeAni',
        frames: this.anims.generateFrameNumbers('plane', {
            start: 0,
            end: 23
        }),
        duration: 3000,
        repeat: -1
        });

        plane.anims.play('planeAni', true);

        plane.setCollideWorldBounds(true)  

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update(delta, time) {
        BG.tilePositionY -= 2;
        if(keyW.isDown){
            plane.setVelocityY(-500);
        }else if(keyS.isDown){
            plane.setVelocityY(500);
        }else{
            plane.setVelocityY(0);
        }
        if(keyA.isDown){
            plane.setVelocityX(-500);
        }else if(keyD.isDown){
            plane.setVelocityX(500);
        }else{
            plane.setVelocityX(0);
        }
    }
}
export default GameScene;
