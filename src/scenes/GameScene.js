import Phaser from "phaser";
import { BaseSoundManager } from "phaser/src/sound";

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
        this.load.image('bg', 'src/image/newbg.jpg');
        
        this.load.spritesheet('bird','src/image/bird.png',
        { frameWidth: 150 , frameHeight: 150});
    }

    create() {

        bg = this.add.tileSprite(0, -500, 850, 1400, 'bg');
        bg.setOrigin(0, 0).setDepth(2);

        bird = this.physics.add.sprite(600, 150,'bird');
        bird.setScale(1).setDepth(5).setCollideWorldBounds(true);
        
    //ควบคุม
        cursor = this.input.keyboard.createCursorKeys();

    //animation
        this.anims.create({
           key: 'birdAni',
           frames: this.anims.generateFrameNumbers('bird', {
           start: 0,
           end: 4
          }),
           duration: 500,    
           repeat: -1      
    })
    }
    update(delta, time) {
        bg.tilePositionX += 2;

        bird.anims.play('birdAni', true);


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
