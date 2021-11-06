import Phaser from "phaser";

let menu;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {

        this.load.spritesheet('menu','image/Menunaja.png',
        { frameWidth: 680 , frameHeight: 553});
        

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
        
    

        
    }
    update(delta, time) {

        menu.anims.play('menuAni', true);
       

        
    }
}
export default MainMenu;
