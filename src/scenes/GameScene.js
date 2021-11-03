import Phaser from "phaser";

let bg, player;
let keyA, keyD, keyVis;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/bg1.jpg');
        this.load.spritesheet('player', 'src/image/player1.png', { frameWidth: 180, frameHeight: 247 });
    }

    create() {
        //BackG
        bg = this.add.tileSprite(0, -100, 1980, 1080, 'bg')
            .setDepth(1)
            .setScale(0.8)
            .setOrigin(0, 0);

        //Player
        player = this.physics.add.sprite(120, 570, 'player')
            .setDepth(10)
            .setScale(0.8);

        //Aims set
        this.anims.create({
            key: 'playerrun',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 6
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })
        //KEY
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyVis = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //wallblock
        player.setCollideWorldBounds(true);
    }

    update(delta, time) {
        bg.tilePositionX += 4;
        //Key A D STOP
        if (keyA.isDown) {player.setVelocityX(-180);}
        else if (keyD.isDown) {player.setVelocityX(240);}
        else {player.setVelocityX(0);}
        
        //Anims
        if (keyA.isDown) {player.anims.play('playerrun', true);}
        else if (keyD.isDown) {player.anims.play('playerrun', true);}
        else {player.anims.play('playerrun', false);}
        
        //Visible
        if (keyVis.isDown) {player.setVisible();}
        else if (keyVis.isUp) {player.setVisible(1);}
    }
}
export default GameScene;
