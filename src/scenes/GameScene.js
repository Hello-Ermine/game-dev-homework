import Phaser from "phaser";

let bg;
let bear;
let cursor;
let keyW;
let keyA;
let keyS;
let keyD;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/bg.png');
        this.load.spritesheet('bear', 'src/image/bear.png',
        { frameWidth: 80, frameHeight: 119 });

    }

    create() {
        // bg = this.add.image(0,360, 'bg').setScale(0.68);
        bg = this.add.tileSprite(0,0,1599,1066, 'bg').setOrigin(0.0).setScale(0.69);
        // bg = this.add.tileSprite(0,0,450,720, 'bg').setScale(1);
        bear = this.physics.add.sprite(220, 500, 'bear').setScale(0.95);


        this.anims.create({
            key: 'bearAni',
            frames: this.anims.generateFrameNumbers('bear',{
                start: 0,
                end: 7
            }),
            duration: 1000,
            repeat: -1
        })
        bear.anims.play('bearAni',true);

        this.input.on('pointermove', (pointer)=>{
            bear.x = pointer.x
            bear.y = pointer.y
        })

        cursor = this.input.keyboard.createCursorKeys();

        bear.setCollideWorldBounds(true)

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }



    update(delta, time) {
        bg.tilePositionX += 6;
        if(cursor.up.isDown){
            bear.setVelocityY(-500);
        }else if(cursor.down.isDown){
            bear.setVelocityY(500);
        }else{
            bear.setVelocityY(0);
        }
        if(cursor.left.isDown){
            bear.setVelocityX(-500);
        }else if(cursor.right.isDown){
            bear.setVelocityX(500);
        }else{
            bear.setVelocityX(0);
        }

        if(keyW.isDown){
            bear.setVelocityY(-500);
        }else if(keyS.isDown){
            bear.setVelocityY(500);
        }else{
            bear.setVelocityY(0);
        }
        if(keyA.isDown){
            bear.setVelocityX(-500);
        }else if(keyD.isDown){
            bear.setVelocityX(500);
        }else{
            bear.setVelocityX(0);
        }


    }
}
export default GameScene;
