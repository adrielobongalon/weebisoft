/*
       document : myGame.js, for firstphasergame
     created on : monday, october 31, 2016, 10:42 AM
         author : adrielo (audrey) bongalon
    description : js file for my game, for 11th grade video game programming expeditions course


                                      88
                                      88
                                      88
    ,adPPYYba,  88       88   ,adPPYb,88  8b,dPPYba,   ,adPPYba,  8b       d8
    ""     `Y8  88       88  a8"    `Y88  88P'   "Y8  a8P,,,,,88  `8b     d8'
    ,adPPPPP88  88       88  8b      :88  88          8PP"""""""   `8b   d8'
    88,    ,88  "8a,   ,a88  "8a,   ,d88  88          "8b,   ,aa    `8b,d8'
    `"8bbdP"Y8   `"YbbdP'Y8   `"8bbdP"Y8  88           `"Ybbd8"'      Y88'
                                                                     d8'
                                                                    d8'
*/

// global phaser

var game = new Phaser.Game(800, 600, Phaser.AUTO, "canvas");
var game_state = {};

var i = 0;




game_state.main = function () {};
game_state.main.prototype = {

/*
    8 888888888o    8 888888888o.    8 888888888888  8 8888           ,o888888o.            .8.          8 888888888o.
    8 8888    `88.  8 8888    `88.   8 8888          8 8888        . 8888     `88.         .888.         8 8888    `^888.
    8 8888     `88  8 8888     `88   8 8888          8 8888       ,8 8888       `8b       :88888.        8 8888        `88.
    8 8888     ,88  8 8888     ,88   8 8888          8 8888       88 8888        `8b     . `88888.       8 8888         `88
    8 8888.   ,88'  8 8888.   ,88'   8 8888888888    8 8888       88 8888         88    .8. `88888.      8 8888          88
    8 888888888P'   8 888888888P'    8 8888          8 8888       88 8888         88   .8`8. `88888.     8 8888          88
    8 8888          8 8888`8b        8 8888          8 8888       88 8888        ,8P  .8' `8. `88888.    8 8888         ,88
    8 8888          8 8888 `8b.      8 8888          8 8888       `8 8888       ,8P  .8'   `8. `88888.   8 8888        ,88'
    8 8888          8 8888   `8b.    8 8888          8 8888        ` 8888     ,88'  .888888888. `88888.  8 8888    ,o88P'
    8 8888          8 8888     `88.  8 888888888888  8 888888888888   `8888888P'   .8'       `8. `88888. 8 888888888P'
*/

	preload: function() {
        game.load.image("sky", "assets/sky.png");
        game.load.image("ground", "assets/platform.png");
        game.load.image("star", "assets/star.png");
        game.load.spritesheet("audrey", "assets/audreyPixelSprite.png", 136, 224);
        game.load.script('webfont', "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
	},








/*
        ,o888888o.     8 888888888o.    8 888888888888          .8.      8888888 8888888888  8 888888888888
       8888     `88.   8 8888    `88.   8 8888                 .888.           8 8888        8 8888
    ,8 8888       `8.  8 8888     `88   8 8888                :88888.          8 8888        8 8888
    88 8888            8 8888     ,88   8 8888               . `88888.         8 8888        8 8888
    88 8888            8 8888.   ,88'   8 8888888888        .8. `88888.        8 8888        8 8888888888
    88 8888            8 888888888P'    8 8888             .8`8. `88888.       8 8888        8 8888
    88 8888            8 8888`8b        8 8888            .8' `8. `88888.      8 8888        8 8888
    `8 8888       .8'  8 8888 `8b.      8 8888           .8'   `8. `88888.     8 8888        8 8888
       8888     ,88'   8 8888   `8b.    8 8888          .888888888. `88888.    8 8888        8 8888
        `8888888P'     8 8888     `88.  8 888888888888 .8'       `8. `88888.   8 8888        8 888888888888
*/

    create: function() {
        // creates the in-game physics from the phaser library
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // adds sprites
        game.add.sprite(0, 0, "sky");
        // game.add.sprite(25, 40, "star");                                     // i don't need a star just floating there
        this.player = game.add.sprite(game.world.width - 50, game.world.height - 250, "audrey");
        this.player.scale.setTo(0.25, 0.25);
        this.player.animationDirX = 0;
        this.player.LR = "front";
        this.player.animationCounter = 0;

        // enable physics on the player
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 1200;
        this.player.body.bounce.y = 0.3;
        this.player.body.collideWorldBounds = true;

        // player animation
        this.player.animations.add("left", [0, 2, 1, 2], 5, true);             // i switched the order to prevent audrey
        this.player.animations.add("right", [6, 4, 5, 4], 5, true);            // from looking like she's "sliding"
        this.player.frame = 3;




        // creates a group for the ground and platforms
        this.platforms = game.add.group();
        this.platforms.enableBody = true;       // applies game physics

        // creates the ground
        var ground = this.platforms.create(0, game.world.height - 64, "ground");
        ground.scale.setTo(2, 2);               // scales to stretch across canvas
        ground.body.immovable = true;           // make ground immoveable

        // creates the platforms
        for (i = 0; i < 6; i++) {
            // top platform
            if (i == 0) {
                var ledge1 = this.platforms.create(10, game.world.height / 8, "ground");
                ledge1.scale.setTo(0.5, 0.75);
                ledge1.body.immovable = true;
            }
            // next three
            else if (i >= 1 && i <= 3) {
                var ledge2 = this.platforms.create(25 * Math.pow(i, 2) + 75 * i + 100, game.world.height * ((i + 1) / 8), "ground");
                ledge2.scale.setTo(0.3, 0.75);
                ledge2.body.immovable = true;
            }
            // bottom two
            else if (i >= 4) {
                var ledge3 = this.platforms.create(-200 * i + 1200, game.world.height * ((i + 1) / 8), "ground");
                ledge3.scale.setTo(0.3, 0.75);
                ledge3.body.immovable = true;
            }
        }




        this.stars = game.add.group();                                          // create group for stars
        this.stars.enableBody = true;                                           // enable physics

        // create the individual stars
        for (i = 0; i < 11; i++) {
            var star = this.stars.create(i * 65 + 25, 10, "star");
            // star.body.gravity.y = 300;
            // star.body.bounce.y = 0.7 + Math.random() * 0.2;
            star.body.gravity.y = Math.floor(Math.random() * (350 - 250 + 1)) + 250;    // random number between 250 and 350
            star.body.bounce.y = 1;
        }




        // keyboard controls
        this.cursors = game.input.keyboard.createCursorKeys();




        // score display
        this.score = 0;
        this.scoreText = game.add.text(game.world.width - 100, 10, "score: " + this.score, {
            font: "20px Poppins",
            fill: "#00ffff"
        });
    },








/*
    8 8888      88  8 888888888o    8 888888888o.            .8.    8888888 8888888888  8 888888888888
    8 8888      88  8 8888    `88.  8 8888    `^888.        .888.         8 8888        8 8888
    8 8888      88  8 8888     `88  8 8888        `88.     :88888.        8 8888        8 8888
    8 8888      88  8 8888     ,88  8 8888         `88    . `88888.       8 8888        8 8888
    8 8888      88  8 8888.   ,88'  8 8888          88   .8. `88888.      8 8888        8 8888888888
    8 8888      88  8 888888888P'   8 8888          88  .8`8. `88888.     8 8888        8 8888
    8 8888      88  8 8888          8 8888         ,88 .8' `8. `88888.    8 8888        8 8888
    ` 8888     ,8P  8 8888          8 8888        ,88'.8'   `8. `88888.   8 8888        8 8888
      8888   ,d8P   8 8888          8 8888    ,o88P' .888888888. `88888.  8 8888        8 8888
       `Y88888P'    8 8888          8 888888888P'   .8'       `8. `88888. 8 8888        8 888888888888
*/

    update: function() {
        // collision detection
        game.physics.arcade.collide(this.player, this.platforms);                               // player on platforms
        game.physics.arcade.collide(this.stars, this.platforms);                                // stars on platforms
        game.physics.arcade.overlap(this.player, this.stars, this.collectStars, null, this);    // player on stars




        // reset player velocity & direction
        this.player.body.velocity.x = 0;
        this.player.animationDirX = 0;
        
        // keypress detecton
        if (this.cursors.left.isDown) {
            this.player.animationDirX -= 1;
        }
        if (this.cursors.right.isDown) {
            this.player.animationDirX += 1;
        }
        if (this.player.animationDirX < 0) {
            this.player.body.velocity.x = -150;
            this.player.animations.play("left");
            this.player.LR = "left";
            this.player.animationCounter = 0;
        }
        if (this.player.animationDirX > 0) {
            this.player.body.velocity.x = 150;
            this.player.animations.play("right");
            this.player.LR = "right";
            this.player.animationCounter = 0;
        }
        if (this.player.animationDirX == 0) {
            this.player.animations.stop();

            if (this.player.animationCounter >= 50) {
                this.player.frame = 3;
            }
            else if (this.player.LR == "left") {
                this.player.frame = 2;
            }
            else if (this.player.LR == "right") {
                this.player.frame = 4;
            }
        }

        this.player.animationCounter++;




        // jumping
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -500;
        }
    },




    collectStars: function(player, star) {
        star.kill();    // removes the star
        this.score += 1;
        this.scoreText.text = "score: " + this.score;
    }
};

game.state.add("main", game_state.main);
game.state.start("main");