/*
       document : level1.js, for weebisoft
     created on : monday, october 31, 2016, 10:42 am
      cloned on : tuesday, january 24, 2017, 12:06 pm
         author : adrielo (audrey) bongalon
    description : js file for my game, for 11th grade video game programming expeditions course

http://gaa.o-oku.jp/
ウィビソフト

                                                                                                                     oogooo...
                ,oooooooooo,                                                         ,oooooooooo,             `"8bo..    `b.   `8b.
                888      888                                        ,,,              888      888                `^o. `8b.  `b   88
 ,oooooooooooooo888      888oooooooooooooo,                        ,d8^`8go,         888      888                   "b.  `8b. `^^"
888                                     888                       o8P"    `Ybo,      888      888          ,,oooo..  `b.  ,88
888       oooooooooooooooooooooooo      888                    ,o88"       ,88"      888      888      ,,d8^"  `^88b.  `^^^"
888      888                   888      888                ,,88P^"       ,o8"        888      8888P^^"""          `88b
888      888                   88"      888           ,,o88P^"        ,odP"          888      ""              ,,,o888"
888      888                 ,88"       88"      ,,o88P^"           o88"             888              ,,goo88P^""
"88oooooo88"               ,d8P"       d8P ,,d8P^""          ,      888              888      od888P^""
                       ,,o8P"        ,d8P   `Y8,        ,,o888      888              Y88      Y88,              ,,,,,
                ,,,od8P^"          ,d8P"       `Yo,,gdP^^""888      888               88       `^Y88booooooooo^"   `88o.
      `8888888^^""             ,,d8^"            `""       888      888               `8b,                           `88b.
        88                ,,o88P^"                         888      888                 `8o,                          ,88b
        `Y8g,,,,,,,,,,,gd88P^"                             "88oooooo88"                    `^^Y88888888888888888888888P^"
   ,,,,,,,,,                  ,oooooooooo,   |                                            |   888"""""""88
88"""    "88,,                88       888   |  888""""""""""""""""""""""""""""""""""888  |     88       88
 88       ""8,,               88       888   |  88                                   88   |      88       88
  8,,       ""8,,            ,88       88P   |   """""""""""""""""""""""""88        888   |       88       88,,,,,,
  "88,       "88,           ,88       ,88"   |                            ,88       88"   |        88           """"""88,,,,,,
    88,       "8,,         88"        ,8"    |                          ,88"        88    |         888                 """""88,,,,,
     "88,   ,,,,,88"     ,,8""       ,88"    |                         ,88"       ,88"    |          888       88"88,,,,,,       """"""8,,,,
      """"""""""       ,8"""        ,88"     |                        ,,8""       ,88"    |           88       88    """""88,,,,,      ,,88"
                ,,,,88"""         ,,88"      |                   ,,,,88"""       ,8""     |            888      88          """"88,,,,,,,,8"""
       ,,,,,,,88"""""          ,,88""        |            ,,,,,,,,88"""""      ,,88""     |             88       88
  88""""""""""            ,,,88"""           |     ,88"""""""""""          ,,,,8""        |              8       88
  88,              ,,,,,88"""""              |    88,           ,,,,,,,88""""""           |               88       88
   "8,,,,,,,,8888""""""""                    |      88,,,,,888888"""""""""                |                88,,,,,88
*/

/* global Phaser game game_state */                                             // tells the IDE that Phaser exists in another file




game_state.level1 = function() {};
game_state.level1.prototype = {

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
        game.load.image("black", "assets/blackBG.png");
        game.load.image("sky", "assets/sky.png");
        game.load.image("ground", "assets/platform.png");
        game.load.spritesheet("audrey", "assets/audrey_pixel_sprite.png", 136, 224);
        game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
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
        game.physics.startSystem(Phaser.Physics.ARCADE);                        // creates the in-game physics from the phaser library

        // adds sprites
        game.add.sprite(0, 0, "sky");                                           // add sky background








        // add audrey sprite
        this.player = game.add.sprite(10, game.world.height - 64 - 224, "audrey");
        this.player.scale.setTo(1, 1);                                          // resize player
        this.player.alpha = 0;

        this.player.animationDirX = 0;                                          // manages direction of audrey
        this.player.LR = "front";                                               // start off facing forwards
        this.player.animationCounter = 0;                                       // resets counter that makes her face forwards after waiting for some time

        // enable physics on the player
        game.physics.arcade.enable(this.player);                                // enable physics
        this.player.body.setSize(72, 224, 32, 0);                               // hitbox size management
        this.player.body.gravity.y = 0;                                         // start off in position (no gravity)
        this.player.body.bounce.y = 0.3;                                        // bounce
        this.player.canMoov = false;                                            // cannot move until spawned
        game.physics.arcade.setBounds(0, 0, game.world.width, game.world.height);
        this.player.body.collideWorldBounds = true;                             // makes sure you can't fall off the map

        // player animation
        this.player.animations.add("left", [0, 2, 1, 2], 5, true);              // order to of frames to run moving animation
        this.player.animations.add("right", [6, 4, 5, 4], 5, true);
        this.player.frame = 3;                                                  // start facing forwards

        // fades audrey in
        this.fadeAudreyAnimation = game.add.tween(this.player);
        this.fadeAudreyAnimation.to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);








        // creates a group for the ground and platforms
        this.platforms = game.add.group();                                      // creates a group for all the platforms
        this.platforms.enableBody = true;                                       // applies game physics to that group

        // creates the ground
        this.ground = this.platforms.create(0, game.world.height - 64, "ground");
        this.ground.scale.setTo(3, 2);                                          // scales to stretch across canvas
        this.ground.body.immovable = true;                                      // make ground immoveable








        // keyboard controls
        this.arrowKeys = game.input.keyboard.createCursorKeys();









        // black box, for fading in
        this.black = game.add.sprite(0, 0, "black");
        this.black.alpha = 1;
        this.fadeInAnimation = game.add.tween(this.black);
        this.fadeInAnimation.to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
        this.fadeInAnimation.onComplete.add(this.fadeAudrey, this);
        this.fadeOutAnimation = game.add.tween(this.black);
        this.fadeOutAnimation.onComplete.add(this.switchState, this);
        this.fadeOutAnimation.to({alpha: 1}, 1000, Phaser.Easing.Linear.None, false, 1750, 0, false);




        // to make sure the switchState function is called only once
        this.switching = false;
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
        game.debug.body(this.player);                                           // to view hitbox

        // collision detection
        game.physics.arcade.collide(this.player, this.platforms);                               // player on platforms
        game.physics.arcade.collide(this.stars, this.platforms);                                // stars on platforms
        // game.physics.arcade.overlap(this.player, this.stars, this.collectStars, null, this);    // player on stars








        // reset player velocity & direction
        this.player.body.velocity.x = 0;
        this.player.animationDirX = 0;
        this.player.walkSpeed = 175;
        this.player.walkFrameRate = 5;                                          // 5 frames per second
        
        // keypress detecton
        if (this.player.canMoov && this.arrowKeys.left.isDown) {
            this.player.animationDirX--;
        }
        if (this.player.canMoov && this.arrowKeys.right.isDown) {
            this.player.animationDirX++;
        }
        if (this.player.animationDirX < 0) {
            this.player.body.velocity.x = -1 * this.player.walkSpeed;
            this.player.animations.play("left", this.player.walkFrameRate, true);
            this.player.LR = "left";
            this.player.animationCounter = 0;
        }
        if (this.player.animationDirX > 0) {
            this.player.body.velocity.x = this.player.walkSpeed;
            this.player.animations.play("right", this.player.walkFrameRate, true);
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
        if (this.player.canMoov && this.arrowKeys.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -500;
        }




        // enable movement once audrey touches the ground after fading in
        if (!this.player.canMoov && this.player.body.touching.down) {
            this.player.canMoov = true;
            console.log("audrey movement enabled");
        }








        // win detection
        // if (this.score >= this.stars.length && !this.switching) {
        if (this.score >= 1 && !this.switching) {
            this.switching = true;
            console.log("all stars collected");
            this.fadeOutAnimation.start();
        }
    },








    fadeAudrey: function() {
        this.fadeAudreyAnimation.start();                                       // fade in
        this.player.body.gravity.y = 2100;                                      // enable gravity
        console.log("audrey spawned");
    },








    switchState: function() {
        console.log("switching to end state");
        game.state.start("ending");
    }
};

game.state.add("level1", game_state.level1);