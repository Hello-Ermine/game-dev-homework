import Phaser from "phaser";

let menu;
let startbutton;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {

        this.load.spritesheet('menu','image/Menunaja.png',
        { frameWidth: 680 , frameHeight: 553});

        this.load.image('delta','image/delta.png');

        this.load.image('rush','image/rush.png');

        this.load.image('soul','image/yellow heart.png');
        
        this.load.image('start','image/bigshot.png');

    }

    create() {

        menu = this.physics.add.sprite(400, 361, 'menu').setScale(1.3);

        this.anims.create({
            key: 'menuAni',
            frames: this.anims.generateFrameNumbers('menu', {
                start: 0,
                end: 4
            }),
            duration: 500,    
            repeat: -1
        })

        this.add.image(200,250,'delta').setScale(0.7);

        this.add.image(600,250,'rush').setScale(0.7);

        this.add.image(395,250,'soul').setScale(0.1);

        startbutton = this.add.image(395,400,'start').setScale(0.75);
        soundButton.setInteractive();
        soundButton.on('pointerup',()=>{
            
        });
    

        
    }
    update(delta, time) {

        menu.anims.play('menuAni', true);
       

        
    }
}
export default MainMenu;
