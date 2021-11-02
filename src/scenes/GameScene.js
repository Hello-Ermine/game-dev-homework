import Phaser from "phaser";

let doraemon;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('playerdoraemon', 'src/image/playerDoreamon.png',
                                { frameWidth: 300, frameHeight: 500 });

    }

    create() {
        doraemon = this.physic.add.sprite(0, 0, 'playerdoraemon').setScale(0.5).setOffset(0,0);

    //     this.anims.create({
    //         key: 'doraemonAni',
    //         frames: this.anims.generateFrameNumbers('playerdoraemon',{
    //             start: 0,
    //             end: 5
    //         }),
    //         duration: 500,
    //         repeat: -1
    //     })
        
    //     doraemon.setCollideWorldBounds(true)
        
    // }

    // update(delta, time) {
    //     doraemon.anims.play('doraemonAni', true);
    // 
    }
}
export default GameScene;
