import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
//import start from './scenes/start';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 450,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene,
       // start
    ],
    
    
};

const game = new Phaser.Game(config);