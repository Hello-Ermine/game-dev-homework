import Phaser from "phaser";

let menuza;
let startbutton;
let menumusic;
let menutheme;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {

        this.load.spritesheet('menunaja','image/Menunaja.png',
        { frameWidth: 680 , frameHeight: 553});

        this.load.image('delta','image/delta.png');

        this.load.image('rush','image/rush.png');

        this.load.image('soul','image/yellow heart.png');
        
        this.load.image('start','image/bigshot.png');

        this.load.audio('menusound',['ost/soundnae.mp3']);

        this.load.audio('menuark',['ost/soundnae.mp3']);

        this.load.audio('menunak',['ost/menumusic.mp3']);

    }

    create() {

        menuza = this.physics.add.sprite(400, 361, 'menunaja').setScale(1.3);

        this.anims.create({
            key: 'menuAni',
            frames: this.anims.generateFrameNumbers('menunaja', {
                start: 0,
                end: 4
            }),
            duration: 500,    
            repeat: -1
        })

        menumusic = this.sound.add('menusound').setVolume(0.2);
        menumusic.play({loop: false});

        menutheme = this.sound.add('menunak').setVolume(0.1);
        delay: 1000;
        menutheme.play({loop: true});

        if(true){
            menumusic.play({loop: false});
            delay: 5000;
            menutheme.play({loop: true});
        }

        this.add.image(200,250,'delta').setScale(0.7);

        this.add.image(600,250,'rush').setScale(0.7);

        this.add.image(395,250,'soul').setScale(0.1);

        startbutton = this.add.image(395,400,'start').setScale(0.75);
        startbutton.setInteractive();
        startbutton.on('pointerup',()=>{
            this.scene.start('GameScene');
            menutheme.stop();
            
            
        });
    

        
    }
    update(delta, time) {

        menuza.anims.play('menuAni', true);
       

        
    }
}
export default MainMenu;
