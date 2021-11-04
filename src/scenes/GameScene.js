import Phaser from "phaser";

let bg;
let maple;
let mushroom;

let keyA;
let keyD;
let keyV;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/image/background3.png');
        this.load.spritesheet('maple','src/image/playerMaple.png',
                                {frameWidth:54, frameHeight:89});
        this.load.spritesheet('mushroom', 'src/image/PoisonousMushroom2.png',
                                {frameWidth:86, frameHeight:82});



    }

    create() {
        bg = this.add.tileSprite(450, 285, 900, 601, 'bg');

        maple = this.physics.add.sprite(40, 382, 'maple');
        maple.setScale(1.25);
        maple.setOffset(0,0);
        this.anims.create({
            key: 'mapleAni',
            frames: this.anims.generateFrameNumbers('maple',{
                start: 0,
                end: 3
            }),
            duration: 800,
            repeat: -1
        })

        maple.setCollideWorldBounds(true)


        mushroom = this.physics.add.sprite(800, 390, 'mushroom');
        mushroom.setScale(1.1);
        mushroom.setOffset(0,0);
        mushroom.setImmovable();
        this.anims.create({
            key: 'mushroomAni',
            frames: this.anims.generateFrameNumbers('mushroom',{
                start: 0,
                end: 4
            }),
            duration: 800,
            repeat: -1
        })
        mushroom.setCollideWorldBounds(true)
        this.physics.add.overlap(maple, mushroom);
        
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V)

    }

    update(delta, time) {
        bg.tilePositionX += 4;

        maple.anims.play('mapleAni', true);
        mushroom.anims.play('mushroomAni', true);

        if(keyA.isDown){
            maple.setVelocityX(-500);
        }else if(keyD.isDown){
            maple.setVelocityX(500);
        }else{
            maple.setVelocityX(0);
            
        }

        if(keyV.isDown){
            maple.setVisible();
        }else if(keyV.isUp){
            maple.setVisible(1);
        }

        mushroom.setVelocityX(-200);
    }
}
export default GameScene;
