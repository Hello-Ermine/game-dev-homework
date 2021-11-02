import Phaser from "phaser";

let bg, player;
let keyA, keyD, keyAtk;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/bg.jpg');
        this.load.spritesheet('player', 'src/image/player.png', { frameWidth: 108, frameHeight: 136 });
    }

    create() {
        //BackG
        bg = this.add.tileSprite(0, -320, 1920, 1080, 'bg').setDepth(1);
        bg.setOrigin(0, 0);

        //Player
        player = this.physics.add.sprite(50, 560, 'player')
            .setDepth(10)
            .setScale(1);

        this.anims.create({
            key: 'playerrun',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 6
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })
        //KEY
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyAtk = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //wallblock
        player.setCollideWorldBounds(true);
    }

    update(delta, time) {
        bg.tilePositionX += 2;
        player.anims.play('playerrun', true);

        
        if (keyA.isDown) {
            player.setVelocityX(-250);
        } else if (keyD.isDown) {
            player.setVelocityX(250);
        } else {
            player.setVelocityX(0);
        } if (keyAtk.isDown) {
            player.setVisible();
        } else if (keyAtk.isUp) {
            player.setVisible(1);
        }

    }
}
export default GameScene;
