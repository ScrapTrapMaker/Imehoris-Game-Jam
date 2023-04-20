import { Player } from "/src/characters/player.js";

let player;
let ground;

export class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: "Scene1"})
    }

    preload() {
        this.load.image("player", "/assets/player.png");
        this.load.image("ground", "/assets/ground.png");
    }

    create() {
        ground = this.physics.add.staticGroup();
        ground.create(400, window.innerHeight - 50, "ground");

        player = new Player(this, window.innerWidth / 2, window.innerHeight / 2);
        player.platforms[0] = ground;
        player.setGravityType("space");
    }

    update() {
        player.playerUpdate();
    }
}