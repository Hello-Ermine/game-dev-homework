import Phaser from "phaser";

let player;
let cursor;
let background;
let diglett;
let psyduck;
let keyW;
let space;
let action1;
let action2;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('run', 'src/image/orangeRun.png',
        {frameWidth : 368, frameHeight : 368});

        this.load.spritesheet('skill', 'src/image/orangeAction1.png',
        {frameWidth : 367, frameHeight : 368});

        this.load.spritesheet('jump', 'src/image/orangeAction2.png',
        {frameWidth : 368, frameHeight : 368});


        this.load.image('bg','src/image/pokeGrass.png');

        this.load.image('dig','src/image/diglett.png');

        this.load.image('psy','src/image/psyduck.png')

        

    }

    create() {
        background = this.add.tileSprite(0,-450,1000,1500,'bg').setOrigin(0,0).setDepth(0.6).setScale();

        player = this.physics.add.sprite(100,580,'run').setScale(0.5).setDepth(0.9);
        player.setSize(180, 210);
        player.setOffset(70,80);

        action1 = this.physics.add.sprite(100,580,'skill').setScale(0.5).setDepth(0.1);
        action1.setSize(180, 210);
        action1.setOffset(70,80);

        action2 = this.physics.add.sprite(100,580,'jump').setScale(0.5).setDepth(0.1);
        action2.setSize(180, 210);
        action2.setOffset(70,80);

        diglett = this.physics.add.image(580,650,'dig').setScale(0.15).setDepth(0.7);
        diglett.setVelocityX(-200);

        this.physics.add.overlap(player, diglett, ()=>{
            diglett.setVisible();
            
            
        });
        psyduck = this.physics.add.image(580,50,'psy').setScale(0.15).setDepth(0.7);
        psyduck.setVelocityY(200);
        

        this.physics.add.overlap(player, psyduck, ()=>{
            psyduck.setVisible();
            
            
        });

        
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        
        cursor = this.input.keyboard.createCursorKeys();

        player.setCollideWorldBounds(true)
        action1.setCollideWorldBounds(true)
        action2.setCollideWorldBounds(true)

        this.anims.create({
            key: 'runAni',
            frames: this.anims.generateFrameNumbers('run', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        this.anims.create({
            key: 'skillAni',
            frames: this.anims.generateFrameNumbers('skill', {
                start: 1,
                end: 8
            }),
            duration: 600,    
            repeat: 0
        })

        this.anims.create({
            key: 'jumpAni',
            frames: this.anims.generateFrameNumbers('jump', {
                start: 0,
                end: 5
            }),
            duration: 600,    
            repeat: 0
        })
    }

    update(delta, time) {
        background.tilePositionX -= 7;


        if(keyW.isDown){
            action1.anims.play('skillAni', true);
            action1.setDepth(0.9);
            player.setDepth(0.1);
        }else if(keyW.isUp){
            action1.setDepth(0.1);
            player.setDepth(0.9);
            player.anims.play('runAni', true);
        }

        if(space.isDown){
            action2.anims.play('jumpAni', true);
            action2.setDepth(0.9);
            player.setDepth(0.1);
        }else if(space.isUp){
            action2.setDepth(0.1);
        }else{
            player.setDepth(0.9);
            player.anims.play('runAni', true);
        }

        // ใช้ps ตัดรูป action ตามด้วย run ปกติ 4 frame ?? เนียน? **** กระโดดแปะสูงขึ้นหน่อย
      


        player.anims.play('runAni', true);

        

        
        if(cursor.up.isDown){
            player.setVelocityY(-500);
            action1.setVelocityY(-500);
            action2.setVelocityY(-500);
        }else if(cursor.down.isDown){
            player.setVelocityY(500);
            action1.setVelocityY(500);
            action2.setVelocityY(500);
        }else{
            player.setVelocityY(0);
            action1.setVelocityY(0);
            action2.setVelocityY(0);
        }
        if(cursor.left.isDown){
            player.setVelocityX(-500);
            action1.setVelocityX(-500);
            action2.setVelocityX(-500);
        }else if(cursor.right.isDown){
            player.setVelocityX(500);
            action1.setVelocityX(500);
            action2.setVelocityX(500);
        }else{
            player.setVelocityX(0);
            action1.setVelocityX(0);
            action2.setVelocityX(0);
        }

        
        
    }
}
export default GameScene;
