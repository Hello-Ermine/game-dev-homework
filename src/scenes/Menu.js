import Phaser from "phaser";

let poke;

class Menu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Menu'
        });
    }

    preload() {
        this.load.image('pokeball', 'src/image/pokeball.png')


    }

    create() {
        poke = this.physics.add.image(375, 360, 'pokeball')
        poke.setScale(0.5);
        poke.setSize(250, 280)
        poke.setOffset(240,25);
        

        poke.setInteractive();

        poke.on('pointerup', () => {
            this.scene.start('GameScene');
        });

        poke.on('pointerover', () => {
            poke.setScale(0.25);


        });

        poke.on('pointerout', () => {
            poke.setScale(0.5);
        });
    }

    update(delta, time) {



    }
}
export default Menu;
