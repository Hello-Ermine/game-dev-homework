import Phaser from "phaser";

let bg;

//charactor
let goodfrog;

//key
let keyW;
let keyA;
let keyS;
let keyD;

//bullet
let bulletGroup;
let bullet;
let bulletEvent;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //backGround
        this.load.image('bg', 'src/image/backGround.png');

        //charactor
        this.load.spritesheet('frog', 'src/image/frog.png',
            { frameWidth: 231, frameHeight: 373 });

        //bullet
        this.load.image('bullet', 'src/image/bullet.png');
    }

    create() {
        // bg = this.add.tileSprite(-100, 0, 1920, 1080, 'bg')
        //     .setScale(0.68)
        //     .setOrigin(0, 0);

        goodfrog = this.physics.add.sprite(225, 500, 'frog')
            .setScale(0.45)
            .setCollideWorldBounds(true);

        //frog animation
        this.anims.create({
            key: 'frogAni',
            frames: this.anims.generateFrameNumbers('frog', {
                start: 0,
                end: 7
            }),
            duration: 500,
            repeat: -1
        })

        //key input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


        //bullet
        bulletGroup = this.physics.add.group();

        bulletEvent = this.time.addEvent({
            delay: 1000,
            callback: function () {
                bullet = this.physics.add.image(goodfrog.x, goodfrog.y-110, 'bullet')
                    .setScale(0.2);

                bulletGroup.add(bullet);

                bulletGroup.setVelocityY(-200);
            },
            callbackScope: this,
            loop: true,
            // pause: false
        });





    }

    update(delta, time) {
        // bg.tilePositionY -= 10;

        goodfrog.anims.play('frogAni', true);

        if (keyW.isDown) {
            goodfrog.setVelocityY(-500);
        } else if (keyS.isDown) {
            goodfrog.setVelocityY(500);
        } else {
            goodfrog.setVelocityY(0);
        }
        if (keyA.isDown) {
            goodfrog.setVelocityX(-500);
        } else if (keyD.isDown) {
            goodfrog.setVelocityX(500);
        } else {
            goodfrog.setVelocityX(0);
        }

        for (let i = 0; i < bulletGroup.getChildren().length; i++) {
            if (bulletGroup.getChildren()[i].y < -100) {
                bulletGroup.getChildren()[i].destroy();
            }
        }

    }
}
export default GameScene;
