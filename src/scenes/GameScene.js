import Phaser from "phaser";

let player;
let bg;
let keyW;
let keyA;
let keyS;
let keyD;
let keyJump;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player','src/image/Player.png',
            { frameWidth: 94.2, frameHeight: 91 });
        this.load.image('bg','src/image/Bg.jpg')
    }

    create() {
        player = this.physics.add.sprite(250, 500, 'player')
        player.setCollideWorldBounds(true)

        bg = this.physics.add.image(0,200,'bg').setScale(0.25).setOrigin(0,0).setLayer(1)

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyJump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(delta, time) {

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
        if(keyJump.isDown){
            player.setVelocityY(-500);
            player.setVelocityY(500); 
        } 
    }
}
export default GameScene;
