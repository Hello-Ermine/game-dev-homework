import Phaser from "phaser";

let background;
let wolf;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/images/background-game-png-2.png');
        this.load.image('wolf','src/images/wolf.png',{ framewidth : 225, framheight : 400});

    }

    create() {
        //background = this.add.tileSprite(0, 0, 450, 640, 'bg').setOrigin(0, 0);
        wolf = this.physics.add.sprite(100, 500, 'wolf').setScale(0.5).setDepth(99);
        this.anims.create({
            key: 'wolfAni',
            frames: this.anims.generateFrameNumbers('wolf', {
                start: 0,
                end: 9
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })
        wolf.anims.play('wolfAni', true)
    }

    update(delta, time) {
        //background.tilePositionX += 2;
    }
}
export default GameScene;
