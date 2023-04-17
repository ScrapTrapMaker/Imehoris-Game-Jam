import { Scene1 } from './scene/scene1.js'

let config = {
    type: Phaser.AUTO,
    width: window.innerWidth - 4,
    height: window.innerHeight - 4,
    scene: [Scene1]
};

let game = new Phaser.Game(config);

window.addEventListener("resize", function() {
    game.scale.resize(window.innerWidth, window.innerHeight);
});