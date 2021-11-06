import Phaser from "phaser";

let gameOver;
let memeSound;

class GameOver extends Phaser.Scene{
    constructor(test){
        super({
            key: 'GameOver'
        });
    }
    preload(){
        this.load.image('gameOver', 'src/image/gameover.jpg');
        this.load.audio('memeSong', 'src/memesong.mp3');
    }
    
    create(){
        gameOver = this.add.image(250,100,'gameOver').setScale(0.5).setOrigin(0,0)
        
        
        memeSound = this.sound.add('memeSong').setVolume(0.5);
        memeSound.play({loop:true});
    }

    update(delta, time){

    }
}
export default GameOver;