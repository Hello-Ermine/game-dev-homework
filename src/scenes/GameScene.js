import Phaser from "phaser";

let fox;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('fox', 'src/image/fox/playerFox.png',
                                { frameWidth: 500, frameHeight: 300 });

    }

    create() {
        fox = this.physic.add.sprite(200, 500, 'fox').setScale(0.5).setOffset(0, 0);

        this.anims.create({
            key: 'foxAni',
            frames: this.anims.generateFrameNumbers('fox',{
                start: 0,
                end: 7
            }),
            duration: 500,
            repeat: -1
        })
        
        fox.setCollideWorldBounds(true)
        
    }

    update(delta, time) {
        fox.anims.play('foxAni', true);
    }
}
export default GameScene;
