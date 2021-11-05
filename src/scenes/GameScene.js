import Phaser from "phaser";

let bg;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','image/BACK.png');
        

    }

    create() {
        bg = this.add.tileSprite(0,100,850,1400,'bg').setOrigin(0,0);
        
    }

    update(delta, time) {
        bg.tilePositionX +=2;
        
    }
}
export default GameScene;
