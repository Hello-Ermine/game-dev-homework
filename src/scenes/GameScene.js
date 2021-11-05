import Phaser from "phaser";

let bg;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','image/BG.png');
        

    }

    create() {
        bg = this.add.tileSprite(0,320,850,400,'bg').setOrigin(0,0);
        
    }

    update(delta, time) {
        bg.tilePositionX +=2;
        
    }
}
export default GameScene;
