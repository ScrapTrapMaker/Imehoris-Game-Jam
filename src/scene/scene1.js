export class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: "Scene1"})
    }

    preload() {
        this.load.image("player", "/assets/player.png");
    }

    create() {
        this.add.image(window.innerWidth / 2, window.innerHeight / 2, "player");
        this.add.text(window.innerWidth / 2 - 80, window.innerHeight / 2 - 50, "This is the player");
    }

    update() {}
}