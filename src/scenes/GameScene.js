import Phaser from "phaser";

let bg;
let player;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {


        this.load.image('bg', '../image/Bg.jpeg');

        this.load.spritesheet('player','../image/bird.png',
        { frameWidth: 200 , frameHeight: 150});
        

    }

    create() {

        bg = this.add.tileSprite(0, 0, 850, 1400, 'bg').setOrigin(0, 0);

    //ควบคุม
        cursor = this.input.keyboard.createCursorKeys();

    //animation
        this.anims.create({
           key: 'birdfly',
           frames: this.anims.generateFrameNumbers('bird', {
           start: 0,
           end: 4
          }),
           duration: 500,    
           repeat: -1
        
    })
    }

    update(delta, time) {
        background.tilePositionX -= 10;
        

        //ควบคุม
        if(cursor.up.isDown){
            player.setVelocityY(-500);
        }else if(cursor.down.isDown){
            player.setVelocityY(500);
        }else{
            player.setVelocityY(0);
        }
        if(cursor.left.isDown){
            player.setVelocityX(-500);
        }else if(cursor.right.isDown){
            player.setVelocityX(500);
        }else{
            player.setVelocityX(0);
        }
    }
}
export default GameScene;
