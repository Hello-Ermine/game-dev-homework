import Phaser from "phaser";

let bg;
let maple;
let mushroom;
let music;

let keyA;
let keyD;
let keyV;
let keyK;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/image/background3.png');
        this.load.audio('themesong', 'src/jojo-ayayayay .mp3');
        this.load.spritesheet('playerFist', 'src/image/playerFist.png',
                                {frameWidth:61.5, frameHeight:75});
        this.load.spritesheet('playerStand', 'src/image/playerStand.png',
                                {frameWidth:52, frameHeight:82});
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

        music = this.sound.add('themesong').setVolume(0.5);
        music.play({loop: true})

        maple = this.physics.add.sprite(40, 382, 'maple');
        maple.setScale(1.25);
        maple.setOffset(0,0);
        this.anims.create({
            key: 'mapleFist',
            frames: this.anims.generateFrameNumbers('playerFist',{
                start: 0,
                end: 1
            }),
            duration: 800,
            repeat: -1
        })

        maple.setCollideWorldBounds(true)


        this.anims.create({
            key: 'maplestandAni',
            frames: this.anims.generateFrameNumbers('playerStand',{
                start: 0,
                end: 2
            }),
            duration: 3000,
            repeat: -1
        })

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
        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K)
        
        
    }

    update(delta, time) {
        bg.tilePositionX += 4;

        mushroom.anims.play('mushroomAni', true);

        if(keyA.isDown){
            maple.setVelocityX(-300);
        }else if(keyD.isDown){
            maple.setVelocityX(300);
            
        }else{
            maple.setVelocityX(0);
            
        }

        if(keyV.isDown){
            maple.setVisible();
        }else if(keyV.isUp){
            maple.setVisible(1);
        }

        

        if(keyA.isDown){
            maple.anims.play('mapleAni', true);
        }else if(keyD.isDown){
            maple.anims.play('mapleAni', true);
        }else if(keyK.isDown){
            maple.anims.play('mapleFist', true);
        }else{
            maple.anims.play('maplestandAni', true);
        }

            
            

        mushroom.setVelocityX(-200);
    }
}
export default GameScene;
