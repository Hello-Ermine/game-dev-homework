import Phaser from "phaser";

let bg;
let player;

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
        this.load.image('bg','image/UTBG.png');

        this.load.spritesheet('player','image/walk.png',
        { frameWidth: 68 , frameHeight: 74});
        

    }

    create() {
        bg = this.add.tileSprite(0,80,850,1400,'bg').setOrigin(0,0);

        player = this.physics.add.sprite(425, 700, 'player').setScale(3);

        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 8
            }),
            duration: 650,    
            repeat: -1
        })



        //Player Control
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }
    update(delta, time) {
        bg.tilePositionX +=2;

        player.anims.play('playerAni', true);


        if(keyW.isDown){
            player.setVelocityY(-500);
        }else if(keyS.isDown){
            player.setVelocityY(500);
        }else{
            player.setVelocityY(0);
        }
        if(keyA.isDown){
            player.setVelocityX(-500);
        }else if(keyD.isDown){
            player.setVelocityX(500);
        }else{
            player.setVelocityX(0);
        }
        
    }
}
export default GameScene;
