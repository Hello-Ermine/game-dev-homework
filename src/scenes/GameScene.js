import Phaser from "phaser";

let bg;
let bird;
let cursor;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {


        this.load.image('bg', '../image/Bg.jpeg');

        this.load.spritesheet('bird','../image/bird.png',
        { frameWidth: 200 , frameHeight: 150});
        

    }

    create() {

        bg = this.add.tileSprite(0, 0, 850, 1400, 'bg').setOrigin(0, 0);
        bird.anims.play('birdfly', true);

        bird = this.physics.add.sprite(600,150,'bird');
        bird.setScale(0.5).setDepth(5).setCollideWorldBounds(true)
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
            bird.setVelocityY(-500);
        }else if(cursor.down.isDown){
            bird.setVelocityY(500);
        }else{
            bird.setVelocityY(0);
        }
        if(cursor.left.isDown){
            bird.setVelocityX(-500);
        }else if(cursor.right.isDown){
            bird.setVelocityX(500);
        }else{
            bird.setVelocityX(0);
        }
    }
}
export default GameScene;
