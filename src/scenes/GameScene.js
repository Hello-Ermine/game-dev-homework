import Phaser from "phaser";
import { BaseSoundManager } from "phaser/src/sound";

let bg;
let bird;
let cursor;
let heart;
let heartEvent;
let heartGroup;

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

        this.load.image('heart', 'src/image/heart.png');
    }

    create() {

        bg = this.add.tileSprite(0, -500, 850, 1400, 'bg');
        bg.setOrigin(0, 0).setDepth(2);

        bird = this.physics.add.sprite(-200, 300,'bird');
        bird.setScale(1).setDepth(5).setCollideWorldBounds(true);
        
    //ควบคุม
        cursor = this.input.keyboard.createCursorKeys();

    //event
        heartGroup = this.physics.add.group();
        heartEvent = this.time.addEvent({
            delay: 1000,
            callback: function () {
                heart = this.physics.add.image(-200, 300, 'heart')
                    .setScale(1);

                    heartGroup.add(heart);

                heartGroup.setVelocityX(200);
            },
            callbackScope: this,
            loop: flase,
            startAt: 1000,
             timeScale: 1,
             repeat: 10
        });
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
         for (let i = 0; i < heartGroup.getChildren().length; i++) {
         if (heartGroup.getChildren()[i].x < 100) {
            heartGroup.getChildren()[i].destroy();
         }
    

        }
    }
}
export default GameScene;
