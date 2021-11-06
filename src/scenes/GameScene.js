import Phaser from "phaser";

let bg;
let maple;
let mushroom;
let music;
let soundInvis;
let soundFist;


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
        this.load.audio('themesong', 'src/tetris.mp3');
        this.load.audio('soundInvis', 'src/effectInvisible.wav');
        this.load.audio('soundFist', 'src/ora.mp3');
        this.load.spritesheet('playerLeftStand', 'src/image/playerLeftIdle.png',
                                {frameWidth:52, frameHeight:73})

        this.load.spritesheet('playerFist', 'src/image/playerFist.png',
                                {frameWidth:60, frameHeight:75});
        this.load.spritesheet('playerStand', 'src/image/playerStand.png',
                                {frameWidth:52, frameHeight:82});
        this.load.spritesheet('maple','src/image/playerMaple.png',
                                {frameWidth:54, frameHeight:89});
        this.load.spritesheet('playerWalkLeft', 'src/image/mapleWalkLeft.png',
                                {frameWidth:53, frameHeight:72}); 

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
            duration: 1000,
            repeat: -1
        })

        this.anims.create({
            key: 'mapleWalkLeftAni',
            frames: this.anims.generateFrameNumbers('playerWalkLeft',{
                start: 0,
                end: 3
            }),
            duration: 1000,
            repeat: -1
        })

        

        this.anims.create({
            key: 'maplestandAni',
            frames: this.anims.generateFrameNumbers('playerStand',{
                start: 0,
                end: 2
            }),
            duration: 4000,
            repeat: -1
        })

        this.anims.create({
            key: 'mapleLeftStandAni',
            frames: this.anims.generateFrameNumbers('playerLeftStand',{
                start: 0,
                end: 2
            }),
            duration: 4000,
            repeat: -1
        })



        this.anims.create({
            key: 'mapleFist',
            frames: this.anims.generateFrameNumbers('playerFist',{
                start: 0,
                end: 1
            }),
            duration: 220,
            repeat: -1
        })

        maple.setCollideWorldBounds(true)


       
        
        //ตำแหน่ง ขนาด hitbox  เห็ด
        mushroom = this.physics.add.sprite(800, 390, 'mushroom');
        mushroom.setScale(1.1);
        mushroom.setOffset(0,0);
        //mushroom.setImmovable(); ดันสู้ไม่ไหว

        //animation เห็ดเดิน
        this.anims.create({
            key: 'mushroomAni',
            frames: this.anims.generateFrameNumbers('mushroom',{
                start: 0,
                end: 4
            }),
            duration: 700,
            repeat: -1
        })
        mushroom.setCollideWorldBounds(true)
        
        this.physics.add.collider(maple, mushroom,  ()=>{     //ยังแข็งแกร่งไม่พอ
        music.stop();  //หยุดเพลง
        this.scene.start('GameOver');  //เปลี่ยน Scene
        });
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V)
        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K)

        

        soundInvis = this.sound.add('soundInvis').setVolume(0.2); // เสียงล่องหน
        soundFist = this.sound.add('soundFist').setVolume(0.5);//เสียงต่อย

        music = this.sound.add('themesong').setVolume(0.1); // เพลง JOJO
        music.play({loop: true}) // ลูปเพลง
        
    }

    update(delta, time) {
        

        mushroom.anims.play('mushroomAni', true);

        

        if(keyA.isDown){
            maple.setVelocityX(-300); // คนวิ่งถอยหลังช้ากว่า
        }else if(keyD.isDown){
            maple.setVelocityX(300);
            
        }else{
            maple.setVelocityX(0);
            
        }

        if(keyV.isDown){
            maple.setVisible();
            this.physics.add.overlap(maple, mushroom);
        }else if(keyV.isUp){
            maple.setVisible(1);
            soundInvis.play();
            
        }

    

        if(keyK.isDown){
            maple.anims.play('mapleFist', true);
            maple.setVelocityX(0);
            soundFist.play();
        }else if(keyA.isDown){
            maple.anims.play('mapleWalkLeftAni', true);
            bg.tilePositionX -= 2;        
        }else if(keyD.isDown){
            maple.anims.play('mapleAni', true);
            bg.tilePositionX += 2;
        }else{
            maple.anims.play('maplestandAni', true);
        }

        mushroom.setVelocityX(-20);// เห็ดวิ่ง
    }
}
export default GameScene;