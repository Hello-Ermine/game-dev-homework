import Phaser from "phaser";

let BG;
let plane;

let meteor;
let meteorEvent;
let objMeteor;

let bullet;
let objBullet;
let eventBullet;

let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //this.load.image('BG', 'src/image/BG.png');
        this.load.image('BG', 'src/image/BG2.jpg');
        this.load.spritesheet('plane', 'src/image/plane.png',
            { frameWidth: 189.2, frameHeight: 185.2 });
        this.load.image('bullet' , 'src/image/bullet.png');
        this.load.image('meteor' ,'src/image/meteor.png');

    }


    create() {
    BG = this.add.tileSprite(0, 0, 500, 800, 'BG');
    BG.setOrigin(0, 0);
    BG.setScale(1);

    plane = this.physics.add.sprite(240, 600, 'plane');
    plane.setScale(0.8);
    plane.setImmovable();

    plane.setCollideWorldBounds(true) 
    
    objMeteor = this.physics.add.group();

    objBullet = this.physics.add.group();

    meteorEvent = this.time.addEvent({
        delay: 500,
        callback : function(){
            meteor = this.physics.add.image(Phaser.Math.Between(100,350), 0, 'meteor')
             .setScale(0.1)
             .setVelocityY(300);

             objMeteor.add(meteor).setVelocityY(200);
            //objMeteor.add(meteor)

            this.physics.add.collider(plane, meteor, meteorDestroy);
        },
            callbackScope: this,
            loop: true
        });

        function meteorDestroy(r,s) {
            s.destroy();
        }

    this.anims.create({
        key: 'planeAni',
        frames: this.anims.generateFrameNumbers('plane', {
            start: 0,
            end: 23
        }),
        duration: 3000,
        repeat: -1
        });

        plane.anims.play('planeAni', true);

        plane.setCollideWorldBounds(true)  

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(delta, time) {
        BG.tilePositionY -= 0.8;
        if(keyW.isDown){
            plane.setVelocityY(-300);
        }else if(keyS.isDown){
            plane.setVelocityY(300);
        }else{
            plane.setVelocityY(0);
        }
        if(keyA.isDown){
            plane.setVelocityX(-300);
        }else if(keyD.isDown){
            plane.setVelocityX(300);
        }else{
            plane.setVelocityX(0);
        }

        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            bullet = this.physics.add.image(plane.x, plane.y-50, 'bullet');
            bullet.setScale(0.1);
            bullet.setOffset(100,100);

            objBullet.add(bullet)
            .setVelocityY(-200);

            this.physics.add.overlap(objBullet, meteor, ()=> {
                meteor.destroy()
                bullet.destroy()
            });
        }

        for (let i = 0; i < objMeteor.getChildren().length; i++) {
            if (objMeteor.getChildren()[i].y <= -50) {
                objMeteor.getChildren()[i].destroy();
            }
        }

        for (let i = 0; i < objBullet.getChildren().length; i++) {
            if (objBullet.getChildren()[i].y <= 0) {
                objBullet.getChildren()[i].destroy();
            }
        }
    }
}
export default GameScene;
