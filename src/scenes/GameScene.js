import Phaser from "phaser";

let background;
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
        this.load.image('bg','src/images/background-game-png-2.png');
        this.load.spritesheet('rabbit','src/images/rabbitwalkinganimation.png',{ frameWidth : 197.5, frameHeight : 300});
    
    }

    create() {
        background = this.add.tileSprite(0, 0, 1280, 640, 'bg').setDepth(1);
        background.setOrigin(0, 0);
        rabbit = this.add.sprite(100, 500, 'rabbit').setScale(0.5).setDepth(10);
        this.anims.create({
            key: 'rabbitAni',
            frames: this.anims.generateFrameNumbers('rabbit', {
                start: 0,
                end: 3
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })
        
        rabbit.anims.play('rabbitAni', true);
        
        // keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        // keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        // keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        // keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
        // if (keyW.isDown) {

        //     rabbit.setVelocityY(-500);

        // } else if (keyS.isDown) {

        //     rabbit.setVelocityY(500);

        // } else {

        //     rabbit.setVelocityY(0);

        // }

        // if (keyA.isDown) {

        //     rabbit.setVelocityX(-500);

        // } else if (keyD.isDown) {

        //     rabbit.setVelocityX(500);

        // } else {

        //     rabbit.setVelocityX(0);
        // }
        background.tilePositionX += 2;
    }
}
export default GameScene;
