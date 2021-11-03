import Phaser from "phaser";

let gameOver;
let reStart;
let mainMenu;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('gameOver','src/image/Gameover.jpg');
        this.load.image('restart','src/image/Try.png');
        this.load.image('mainmenu','src/image/Main.png');
    }

    create() {
        gameOver = this.add.image(-50,-100,'gameOver').setScale(0.4).setOrigin(0,0).setDepth(1);
        // reStart = this.add.image(500,500,'restart').setScale(0.5).setDepth(5);
        // reStart.setInteractive();
        // reStart.on('pointerup', ()=>{
        //     this.scene.start('GameScene');
            
        // })
        
        // mainMenu = this.add.image(500,620,'mainmenu').setScale(0.3).setDepth(6);
        // mainMenu.setInteractive();
        // mainMenu.on('pointerup', ()=>{
        //     this.scene.start('MainMenu');
        // })
      
    }

    update(delta, time) {
        
    }
}
export default GameOver;
