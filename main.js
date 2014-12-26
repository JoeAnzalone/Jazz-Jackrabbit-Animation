var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game-wrap', { preload: preload, create: create, update: update });

function preload() {
    //  32x30 is the size of each frame
    game.load.spritesheet('jazz', 'jazz-run.png', 32, 30);
}

function create() {
    game.things = {};
    game.things.jazz = game.add.sprite(game.width, 200, 'jazz');
    var jazz = game.things.jazz;
    jazz.anchor.setTo(0, 0);

    // Uncomment for moonwalk mode!
    // jazz.scale.x *= -1;

    //  Here we add a new animation called 'run'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'jazz' sprite sheet
    jazz.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  20 is the frame rate (30fps)
    //  true means it will loop when it finishes
    jazz.animations.play('run', 20, true);
}

function update() {
    var jazz = game.things.jazz;
    if (jazz.x >= game.width) {
        jazz.x = - jazz.width;
        var tween = game.add.tween(jazz);
        tween.to({ x: game.width + jazz.width }, 6000);
        tween.start();
    }
}
