import Phaser from "phaser";

let GameOver;

class MainMenu extends Phaser.Scene{
    constructor(test){
        super({
            key: 'GameOver'
        });
    }
    preload(){
        this.load.image('GameOver', 'src/image/gameover.jpg');
    }
    
    create(){
        GameOver = this.add.image(200,200,'GameOver').setScale(1);
        
    }

    update(delta, time){

    }
}
export default GameOver;