import Phaser from "phaser";

let player;
let background;
let keyA;
let keyD;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', './src/img/background4.png');

        this.load.spritesheet('boy', './src/img/player1.png', {
            frameWidth: 460, frameHeight: 641
        });

    }

    create() {
        background = this.add.tileSprite(0, 0, 450, 720, 'bg')
            .setOrigin(0, 0)
            .setDepth(0);

        player = this.physics.add.sprite(50, 630, 'boy')
            .setScale(0.2)
            .setDepth(99);
        this.anims.create({
            key: 'boyAni',
            frames: this.anims.generateFrameNumbers('boy', {
                start: 0,
                end: 3
            }),
            duration: 700,
            framerate: 0,
            repeat: -1
        })

        player.setCollideWorldBounds(true)

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
        background.tilePositionX += 5;

        player.anims.play('boyAni', true);

        if (keyA.isDown) {
            player.setVelocityX(-500);

        } else if (keyD.isDown) {
            player.setVelocityX(500);

        } else {
            player.setVelocityX(0);
        }
    }
}
export default GameScene;
