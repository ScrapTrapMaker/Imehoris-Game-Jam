export class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.platforms = new Array(10);
        scene.physics.add.collider(this, this.platforms);
        this.body.setCollideWorldBounds(true)

        //Player movement and input setup
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.speed = 200;
    }

    playerUpdate() {
        //left and right movement input
        if (this.cursors.left.isDown) {
            this.body.setVelocityX(-this.speed);
        } else if (this.cursors.right.isDown) {
            this.body.setVelocityX(this.speed);
        } else {
            this.body.setVelocityX(0);
        }

        //jump input
        if (this.cursors.space.isDown && this.body.touching.down) {
            this.body.setVelocityY(this.jumpHeight);
        }
    }

    setGravityType(gravityType) {
        switch (gravityType) {
            case "earth":
                this.body.gravity.y = 1000;
                this.jumpHeight = -400;
                break;
            case "space":
                this.body.gravity.y = 100;
                this.jumpHeight = -200;
                break;
            default:
                console.log("It is not valid! Types valid: (earth/space)");
                break;
        }
    }
}
