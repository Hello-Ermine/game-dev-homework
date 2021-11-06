import Phaser from "phaser";

let bg;
let player;
let wall;
let music;
let running;
let soundButton;
let menuButton;
let cross;

let profile;
let menu;

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

        this.load.image('kris','image/profile.png');

        this.load.image('menu','image/menu.png');

        this.load.image('wall','image/ThinkingPug.png');

        this.load.image('exit','image/menubutton.png');

        this.load.image('sound','image/soundbutton.png');
        this.load.image('cross','image/cross.png');

        this.load.spritesheet('player','image/UTwalk.png',
        { frameWidth: 68 , frameHeight: 74});

        this.load.audio('music', ['ost/deltarune_chapter_2_ost_spamton_battle_-778026409569618682.mp3',
        'ost/deltarune_chapter_2_ost_spamton_battle_-778026409569618682.ogg',
        'ost/deltarune_chapter_2_ost_spamton_battle_-778026409569618682.wav']);
        this.load.audio('running', ['ost/run2.mp3']);


    }

    create() {
        bg = this.add.tileSprite(0,80,850,1400,'bg').setOrigin(0,0);

        profile = this.add.image(150,50,'kris').setScale(0.6);
        menu = this.add.image(650,50,'menu').setScale(0.6);

        cross = this.add.image(410, 100, 'cross').setScale(0.2);

        wall = this.physics.add.image(400,-230,'wall')
        .setScale(2)
        .setVisible()
        .setImmovable();

        player = this.physics.add.sprite(200, 450, 'player').setScale(1.5);

        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 8
            }),
            duration: 650,    
            repeat: -1
        })

        
        soundButton = this.add.image(410, 100, 'sound').setScale(0.2);
        soundButton.setInteractive();
        soundButton.on('pointerup',()=>{
            if(!this.sound.mute){
                this.sound.mute = true;
            }else{
                this.sound.mute = false;
            }             
        }) 

        menuButton = this.add.image(410, 50, 'exit').setScale(0.3);



        //Player Control
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    player.setCollideWorldBounds(true) 


    
    this.physics.add.collider(player, wall);



    music = this.sound.add('music').setVolume(0.3);
    music.play({loop: true});

    running = this.sound.add('running').setVolume(0.2);
    running.play({loop: true});

    

        
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
