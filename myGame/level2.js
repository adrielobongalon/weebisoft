/*
       document : level2.js, for weebisoft
     created on : tursday, february 2, 2017, 10:05 am
         author : adrielo (audrey) bongalon, angelina
    description : js file for my game, for 11th grade video game programming expeditions course

ウィビソフト

                                                                                                                   ,
                                                                                                             ,  ,g8^`8,
                                                                                                          ,g8^`8,    `8b,
                ,oooooooooo,                                                       ,oooooooooo,         `Y8,    `Yb,   `8b,
                888      888                                         ,,,           888      888           `Yb,    `Yb,  ,88,
 ,oooooooooooooo888      888oooooooooooooo,                         ,d8^`8go,      888      888             `Yb,   ,8Ygo""
888                                     888                        o8P"    `Ybo,   888      888         ,,,,oo88bo88b,
888      ,oooooooooooooooooooooooo      888                     ,o88"       ,88"   888      8888P^^"""""          `88b,
888      888                   888      888                 ,,88P^"       ,o8"     888                     ,,,,,,oo8888,
888      888                   88"      888            ,,o88P^"        ,odP"       888      8888P^^^^^^""""
888      888                 ,88"       88"       ,,o88P^"           o88"          888      888
"88oooooo88"               ,d8P"       d8P  ,,d8P^""          ,      888           888      888
                       ,,o8P"        ,d8P    `Y8,        ,,o888      888           888      888
                ,,,od8P^"          ,d8P"        `Yo,,gdP^^""888      888           888      Y88 
      `8888888^^""             ,,d8^"             `""       888      888           Y88      `^Y8booooooooooooooooooooooo
        88                ,,o88P^"                          888      888            `8o,                            d8P"
        `Y8g,,,,,,,,,,,gd88P^"                              "88oooooo88"              `^Y8888888888888888888888888888P"

        ,,,                    ,oooooooooo,  |                                            |   888"""""""88
    ,o8""`8b,                  888      888  |  888""""""""""""""""""""""""""""""""""888  |     88       88
 `88       `8b,               88        888  |  88                                   88   |      88       88
   `88,       `8,,           ,88       ,88P  |   """""""""""""""""""""""""88        888   |       88       88,,,,,,
     `88,       `88,        ,88"      ,88"   |                            ,88       88"   |        88           """"""88,,,,,,
       `88,      `8,,      ,88"      ,88"    |                          ,88"        88    |         888                 """""88,,,,,
        `88,,,88"        ,,8""      ,88"     |                         ,88"       ,88"    |          888       88"88,,,,,,       """"""8,,,,
           ""          ,8"""       ,88"      |                        ,,8""       ,88"    |           88       88    """""88,,,,,      ,,88"
                ,,,,88"""         ,88"       |                   ,,,,88"""       ,8""     |            888      88          """"88,,,,,,,,8"""
       ,,,,,,,88"""""          ,88""         |            ,,,,,,,,88"""""      ,,88""     |             88       88
  88""""""""""            ,,,88"""           |     ,88"""""""""""          ,,,,8""        |              8       88
  88,              ,,,,,88"""""              |    88,           ,,,,,,,88""""""           |               88       88
   "8,,,,,,,,8888""""""""                    |      88,,,,,888888"""""""""                |                88,,,,,88
	`Y8g,,,,,,,gd88P^"
*/

/* global Phaser game game_state yuu groundSpriteDimensions textbox Path */

// var debugRect = new Phaser.Rectangle(150, 445, 725, 110);                    // TODO     DELETE ME


game_state.level2 = function() {};
game_state.level2.prototype = {

/*
    8 888888888o    8 888888888o.    8 888888888888  8 8888           ,o888888o.            .8.          8 888888888o.
    8 8888    `88.  8 8888    `88.   8 8888          8 8888        . 8888     `88.         .888.         8 8888    `^888.
    8 8888     `88  8 8888     `88   8 8888          8 8888       ,8 8888       `8b       :88888.        8 8888        `88.
    8 8888     ,88  8 8888     ,88   8 8888          8 8888       88 8888        `8b     . `88888.       8 8888         `88
    8 8888.   ,88'  8 8888.   ,88'   8 8888888888    8 8888       88 8888         88    .8. `88888.      8 8888          88
    8 888888888P'   8 888888888P'    8 8888          8 8888       88 8888         88   .8`8. `88888.     8 8888          88
    8 8888          8 8888`8b        8 8888          8 8888       88 8888        ,8P  .8' `8. `88888.    8 8888         ,88
    8 8888          8 8888 `8b.      8 8888          8 8888       `8 8888       ,8P  .8'   `8. `88888.   8 8888        ,88'
    8 8888          8 8888   `8b.    8 8888          8 8888        ` 8888     ,88'  .888888888. `88888.  8 8888     ,o8P'
    8 8888          8 8888     `88.  8 888888888888  8 888888888888   `8888888P'   .8'       `8. `88888. 8 888888888P'
*/

	preload: function() {
        game.load.image("grid", "assets/debug-grid-1920x1920.png");             // TODO stairs on left in background
        game.load.image("ground", "assets/platform.png");
        game.load.spritesheet("audrey", "assets/audrey_pixel_sprite.png", 136, 224);
        game.load.image("textbox", "assets/textbox.jpg");
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
        game.add.tileSprite(0, 0, 1920, 1920, "grid");                          // add background
        game.world.setBounds(0, 0, 1920, game.world.height);








        // creates a group for the ground and platforms
        this.platforms = game.add.group();                                      // creates a group for all the platforms
        this.platforms.enableBody = true;                                       // applies game physics to that group

        // creates the ground
        this.groundHeight = 48;
        this.ground = this.platforms.create(0, game.world.height - this.groundHeight, "ground");
        this.ground.scale.setTo(game.world.width / groundSpriteDimensions.width, this.groundHeight / groundSpriteDimensions.height);      // resize to stretch across canvas
        this.ground.body.immovable = true;                                      // make ground immoveable








        // add yuu sprite
        yuu.phaserData = game.add.sprite(10, game.world.height - this.groundHeight - yuu.height, "audrey");
        yuu.spawn(1, 1);

        yuu.canMoov = false;
        yuu.phaserData.alpha = 0;
        yuu.phaserData.frame = 3;                                               // start facing forwards

        // fades yuu in
        yuu.phaserData.fadeYuuAnimation = game.add.tween(yuu.phaserData);
        yuu.phaserData.fadeYuuAnimation.to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);
















        // keyboard controls
        this.arrowKeys = game.input.keyboard.createCursorKeys();
        this.otherKeys = game.input.keyboard.addKeys({
                                                        "s": Phaser.KeyCode.S,
                                                        "z": Phaser.KeyCode.Z,
                                                        "n": Phaser.KeyCode.N,
                                                        "a": Phaser.KeyCode.A,
                                                        "e": Phaser.KeyCode.E,
                                                        "d": Phaser.KeyCode.D,
                                                        "shift": Phaser.Keyboard.SHIFT
                                                    });








        // for fading in and fading out
        game.camera.onFlashComplete.add(this.fadeYuu, this);
        game.camera.onFadeComplete.add(this.switchState, this);




        // to make sure that the fade in runs only once, and that switchState function is called only once
        this.started = false;
        this.switching = false;
        this.dialogueComplete = false;
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
      8888   ,d8P   8 8888          8 8888     ,o8P' .888888888. `88888.  8 8888        8 8888
       `Y88888P'    8 8888          8 888888888P'   .8'       `8. `88888. 8 8888        8 888888888888
*/

    update: function() {
        // fade in
        if (!this.started) {
            this.started = true;
            game.camera.flash(0x000000, 1000);
        }








        // collision detection
        game.physics.arcade.collide(yuu.phaserData, this.platforms);                                // yuu on platforms
        // game.physics.arcade.overlap(yuu.phaserData, this.stars, this.collectStars, null, this);    // player on stars








        // detect running (before actually moving yuu, so that she moves the correct amount on the correct frame)
        if (this.otherKeys.shift.isDown) {
            yuu.running = true;
        }
        else {
            yuu.running = false;
        }

        // reset player velocity & direction
        yuu.phaserData.body.velocity.x = 0;
        yuu.animationDirX = 0;
        
        // keypress detecton
        if (yuu.canMoov && this.arrowKeys.left.isDown) {
            yuu.animationDirX--;
        }
        if (yuu.canMoov && this.arrowKeys.right.isDown) {
            yuu.animationDirX++;
        }
        if (yuu.animationDirX < 0) {
            if (yuu.running && yuu.canRun) {
                yuu.phaserData.body.velocity.x = -1 * yuu.runSpeed;
                yuu.phaserData.animations.play("left", yuu.runFrameRate, true); // TODO     REPLACE WALK ANIMATION
            }
            else {  // walk
                yuu.phaserData.body.velocity.x = -1 * yuu.walkSpeed;
                yuu.phaserData.animations.play("left", yuu.walkFrameRate, true);
            }
            yuu.LR = "left";
            yuu.animationCounter = 0;
        }
        if (yuu.animationDirX > 0) {
            if (yuu.running && yuu.canRun) {
                yuu.phaserData.body.velocity.x = yuu.runSpeed;
                yuu.phaserData.animations.play("right", yuu.runFrameRate, true); // TODO     REPLACE WALK ANIMATION
            }
            else {  // walk
                yuu.phaserData.body.velocity.x = yuu.walkSpeed;
            yuu.phaserData.animations.play("right", yuu.walkFrameRate, true);
            }
            yuu.LR = "right";
            yuu.animationCounter = 0;
        }
        if (yuu.animationDirX == 0) {                                           // if both left and right are pressed, or if neither
            yuu.phaserData.animations.stop();

            if (yuu.animationCounter >= 50) {
                yuu.phaserData.frame = 3;
            }
            else if (yuu.LR == "left") {
                yuu.phaserData.frame = 2;
            }
            else if (yuu.LR == "right") {
                yuu.phaserData.frame = 4;
            }
        }

        yuu.animationCounter++;




        // jumping
        if (yuu.canMoov && this.arrowKeys.up.isDown && yuu.phaserData.body.touching.down) {
            yuu.phaserData.body.velocity.y = -500;
        }
        if (this.otherKeys.n.isDown) {
                this.score = 42;
        }
        if (this.otherKeys.s.isDown) {
            yuu.grow(5);
        }
        if (this.otherKeys.z.isDown) {
            yuu.shrink(5);
        }
        if (this.otherKeys.a.isDown) {
            game.camera.x -= 10;
        }
        if (this.otherKeys.e.isDown) {
            game.camera.x += 10;
        }




        // enable movement once yuu touches the ground after fading in
        if (this.dialogueComplete) {
            yuu.canMoov = true;
            console.log("yuu movement enabled");
        }

// -----------------------------------------------------------------------------








// -----------------------------------------------------------------------------

        // win detection
        if (this.score >= 1 && !this.switching) {
            this.switching = true;
            console.log("all stars collected");
            console.log("switching to end state");
            game.camera.fade(0x000000, 1000);
        }
    },








    fadeYuu: function() {
        yuu.phaserData.fadeYuuAnimation.start();                                // fade in
        yuu.phaserData.body.gravity.y = 2100;                                   // enable gravity
        console.log("yuu spawned");
    },








    switchState: function() {
        console.log("switching to end state");
        game.state.start("ending");
    },


// -----------------------------------------------------------------------------

    render: function() {
        game.debug.body(yuu.phaserData);                                        // view yuu's hitbox
        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteInfo(yuu.phaserData, 32, 120);
        // game.debug.geom(debugRect, "rgba(255, 0, 0, 0.5)");                  // TODO     DELETE ME
    }
};

game.state.add("level2", game_state.level2);


/*

notes:
-use "deadzone" property of camera

*/