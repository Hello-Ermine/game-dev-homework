import Phaser from "phaser";

let bg;
let bear;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/bgnew.jpg');
        this.load.spritesheet('bear', 'src/image/bear.png',
        { frameWidth: 80, frameHeight: 119 });

    }

    create() {
        // bg = this.add.image(0,360, 'bg').setScale(0.68);
        bg = this.add.tileSprite(0,0,450,720, 'bg').setOrigin(0.0);
        bear = this.physics.add.sprite(220, 500, 'bear').setScale(0.95);


    }

    update(delta, time) {
        bg.tilePositionX += 4;


    }
}
export default GameScene;
