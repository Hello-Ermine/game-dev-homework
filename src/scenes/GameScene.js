import Phaser from "phaser";

let bg;
let playerMan;

//Controller
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
        this.load.image('bg', 'src/image/BgTileSprite.jpg');
        this.load.spritesheet('playerMan', 'src/image/PlayerMan.png',
            { frameWidth: 184, frameHeight: 325 });
    }

    create() {
        bg = this.add.tileSprite(0, -18, 1000, 780, 'bg').setScale(1.1).setOrigin(0, 0).setDepth(1);
        playerMan = this.physics.add.sprite(80, 580, 'playerMan').setScale(0.75).setDepth(2);
        
        this.anims.create({
            key: 'playerManAni',
            frames: this.anims.generateFrameNumbers('playerMan', {
                start: 0,
                end: 7
            }),
            duration: 500,
            repeat: -1
        })

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        playerMan.setCollideWorldBounds(true)

    }

    update(delta, time) {
        bg.tilePositionX += 2;
        playerMan.anims.play('playerManAni', true);

        if(keyW.isDown){
            playerMan.setVelocityY(-500);
        }else if(keyS.isDown){
            playerMan.setVelocityY(500);
        }else{
            playerMan.setVelocityY(0);
        }
        if(keyA.isDown){
            playerMan.setVelocityX(-500);
        }else if(keyD.isDown){
            playerMan.setVelocityX(500);
        }else{
            playerMan.setVelocityX(0);
        }
    }
}
export default GameScene;
