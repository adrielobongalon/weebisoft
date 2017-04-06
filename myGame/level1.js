/*
       document : level1.js, for weebisoft
     created on : monday, october 31, 2016, 10:42 am
      cloned on : tuesday, january 24, 2017, 12:06 pm
         author : adrielo (audrey) bongalon
    description : js file for my game, for 11th grade video game programming expeditions course

ウィビソフト

                                                                                                                         ,
                                                                                                                  ,  ,g8^`8,
                                                                                                               ,g8^`8,    `88,
                ,oooooooooo,                                                            ,oooooooooo,         `88,    `88,   `88,
                888      888                                           ,,,              888      888           `88,    `88,  ,88,
 ,oooooooooooooo888      888oooooooooooooo,                           ,d8^`8go,         888      888             `88,   ,8Ygo""
888                                     888                          o8P"    `Ybo,      888      888         ,,,,oo88bo88b,
888      ,oooooooooooooooooooooooo      888                       ,o88"       ,88"      888      8888P^^"""""           `88b,
888      888                   888      888                   ,,88P^"       ,o8"        888                     ,,,,,,oo8888,
888      888                   88"      888              ,,o88P^"        ,odP"          888      8888P^^^^^^""""
888      888                 ,88"       88"         ,,o88P^"           o88"             888      888
"88oooooo88"               ,d8P"       d8P    ,,d8P^""          ,      888              888      888
                       ,,o8P"        ,d8P      `Y8,        ,,o888      888              888      888
                ,,,od8P^"          ,d8P"          `Yo,,gdP^^""888      888              888      Y88 
      `8888888^^""             ,,d8P"               `""       888      888              Y88      `^Y8booooooooooooooooooooooo
       `88                ,,o888^"                            888      888               `8o,                            d8P"
        `Y8g,,,,,,,,,,,gd88P^"                                "88oooooo88"                 `^Y8888888888888888888888888888P"

       ,                                                                                   ,ooooooooooo,
   ,o8^88,                   88888oooo,,   oooooooooooooooooooooooooooooooodP^Y8b,         888      888"
 `88"    `88,                88"     `88"  888                                   Y8b       888      888
   `88,    `88,             ,88       88"  `"""""""""""""""""""""""""""888       888       888      888
     `88,   `88,           ,88"      ,88                              ,888      ,88"       888      888,,,
       `88,  ,88"         ,d8"      ,88"                             ,88P"     ,88P        888           """Yboo,,
        `88v88"          ,88"      ,88"                             ,88P"     ,88P         888      ,,          ""Yboo,,
          ""           ,88"       ,88"                            ,d8P"      ,88"          888      888boo,,         ,888"
                     ,88"       ,o8P"                          ,o88^"      ,88"            888      888    ""Y8oo,, ,888"
                 ,o8P"        ,d8P"                     ,,oo88^""       ,88P"              888      888          """"""
            ,,o8P^"        ,d88^"             `88888888^^""         ,,88P"                 888      888
    ,,,,god8P^"        ,,d8P^"                 `88             ,,o88P^"                    888      888
     `8b,         ,,od8P^"                      `Y8g,,,,,888888P^""                        888      888
       `Y8g,,,gd88P^"                                                                      "88oooooo88"
*/

/* global Phaser game game_state canvasDimensions yuu textbox Path groundSpriteDimensions */




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
    8 8888          8 8888   `8b.    8 8888          8 8888        ` 8888     ,88'  .888888888. `88888.  8 8888     ,o8P'
    8 8888          8 8888     `88.  8 888888888888  8 888888888888   `8888888P'   .8'       `8. `88888. 8 888888888P'
*/

	preload: function() {
        game.load.image("grid", "assets/debug-grid-1920x1920.png");
        game.load.image("wall", "assets/TESTwall.png");
        game.load.image("ground", "assets/platform.png");
        game.load.spritesheet("audrey", "assets/audrey_pixel_sprite.png", 136, 224);
        game.load.image("back wall", "assets/backWall.png");
        game.load.image("front wall", "assets/frontWall.png");
        game.load.image("door", "assets/door.png");
        game.load.image("door overlay", "assets/doorOverlay.jpg");
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
        var _this = this;                                                       // hack-y way to store the context
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








        // add back wall and open door (yuu will cover this)
        this.backWall = game.add.sprite(840, 0, "back wall");                   // xPos: frontWall xPos - sprite width
        this.openDoor = game.add.sprite(712, 253, "door");                      // x: frontWall xPos - sprite width, y: canvas height - door height - ground height
        game.physics.arcade.enable(this.openDoor);
        
        this.endDoor = game.add.sprite(1670, 253, "door");                      // x: LEVEL width - door width - 100px, y: canvas height - door height - ground height
        game.physics.arcade.enable(this.endDoor);
        this.endDoorOverlay = game.add.sprite(1670, 253, "door overlay");       // same positioning coordinates as endDoor
        this.endDoorOverlay.alpha = 0;                                                                              // lol i just noticed "endDoor" sounds like "endor"
        game.add.tween(this.endDoorOverlay).to({alpha: 0.25}, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);  // you know. the place in star wars with the ewoks?








        // add yuu sprite
        yuu.phaserData = game.add.sprite(10, game.world.height - this.groundHeight - yuu.height, "audrey");
        yuu.spawn(1, 1);

        yuu.phaserData.alpha = 0;

        // yuu animation
        yuu.phaserData.frame = 3;                                               // start facing forwards

        // fades yuu in
        yuu.phaserData.fadeYuuAnimation = game.add.tween(yuu.phaserData);
        yuu.phaserData.fadeYuuAnimation.to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);

        // yuu cannot move on start (player must go through dialogue)
        // yuu.canMoov = false;                                                 // TODO set to false for final (dev tool)
        yuu.canMoov = true;








        // add front wall (this will cover yuu)
        this.frontWall = game.add.sprite(862, 0, "front wall"); // xPos: canvas width - sprite width - 40px
















        // dialogue paths (defined in order so that paths are already defined when they are referenced within the objects)
        this.path2 = new Path([["Voice", "Good, I have something important to tell you."],      // dialogue
                              ["Yuu", "What is it?"],
                              ["Voice", "You need to go. Arm yourself quickly."]],
                             "end", null, null);                                                // type, options, and redirect


        this.path4 = new Path([["Voice","No need to be so rude. I'm here to help you"],         // dialogue
                              ["Yuu", "Help me?"],
                              ["Voice", "Yes. And you need to find a weapon. Now."]],
                             "end", null, null);                                                // type, options, redirect


        this.path3 = new Path([["Voice", "You’re a terrible liar.\nOne could only respond after being prompted with a question."],  // dialogue
                              ["Voice", "Surely you didn’t think I’d believe you."],
                              ["Yuu", "Leave me alone."]],
                             "redirect", null, this.path4);                                                                            // type, options, redirect


        this.path6 = new Path([["Voice", "You’re wasting time, stop being so childish."]],      // dialogue
                             "redirect", null, this.path2);                                        // type, options, redirect


        this.path5 = new Path([["Voice", "I know you can hear me."]],           // dialogue
                             "options",                                         // type
                             [["Fine. I can.", this.path2],                     // options
                              ["*remain silent*", this.path6]],
                             null);

    
        this.path1 = new Path([["Voice", "Can you hear me?"]],                  // dialogue
                             "options",                                         // type
                             [["Yes.", this.path2],                             // options
                              ["Um...\nYeah?", this.path2],
                              ["No.", this.path3],
                              ["Leave me alone.", this.path4],
                              ["*don't answer*", this.path5]],
                             null);                                             // redirect

        // preload textbox (with placeholder text) and fades
        textbox.loadData();

        // start the dialogue scene
        yuu.phaserData.fadeYuuAnimation.onComplete.add(function() {
            window.setTimeout(function() {                      // delay dialogue so player can see the opening scenery
                textbox.start(_this.path3, function() {
                    yuu.canMoov = true;                         // enable movement after dialogue
                });
            }, 1000);
        }, this);
















        // tutorial text
        this.tutorialMoveText = game.add.text(0, canvasDimensions.height / 3, "Press Z and X to move the camera.", textbox.tutorialStyle);
        this.tutorialMoveText.setTextBounds(0, 0, canvasDimensions.width, canvasDimensions.height);
        this.tutorialMoveText.alpha = 0;
        this.tutorialFade = game.add.tween(this.tutorialMoveText).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);
















        // keyboard controls
        this.arrowKeys = game.input.keyboard.createCursorKeys();
        this.otherKeys = game.input.keyboard.addKeys({
                                                        "q": Phaser.KeyCode.Q,
                                                        "a": Phaser.KeyCode.A,
                                                        "n": Phaser.KeyCode.N,
                                                        "z": Phaser.KeyCode.Z,
                                                        "x": Phaser.KeyCode.X,
                                                        "d": Phaser.KeyCode.D,
                                                        "shift": Phaser.Keyboard.SHIFT,
                                                        "space": Phaser.Keyboard.SPACEBAR,
                                                        "enter": Phaser.Keyboard.ENTER
                                                    });








        // for fading in and fading out
        game.camera.onFlashComplete.add(function() {
            yuu.phaserData.fadeYuuAnimation.start();                            // fade in
            yuu.phaserData.body.gravity.y = 2100;                               // enable gravity
            console.log("yuu spawned");
        }, this);
        game.camera.onFadeComplete.add(function() {
            console.log("switching to end state");
            game.state.start("ending");
        }, this);




        // to make sure that the fade in runs only once, and that switchState function is called only once
        this.started = false;
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
      8888   ,d8P   8 8888          8 8888     ,o8P' .888888888. `88888.  8 8888        8 8888
       `Y88888P'    8 8888          8 888888888P'   .8'       `8. `88888. 8 8888        8 888888888888
*/

    update: function() {

        if (!this.started) {
            this.started = true;
            game.camera.flash(0x000000, 1000);                                  // fade in
        }

        // note: this can't all be one function because the keys are defined on the level files, and not on the global file
        if (textbox.dialogueRunning) {
            if (textbox.checkNextKeys(this.otherKeys)) {
                textbox.next();
            }
        }








        // collision detection
        game.physics.arcade.collide(yuu.phaserData, this.platforms);                                                // yuu on platforms
        game.physics.arcade.overlap(yuu.phaserData, this.openDoor, function() {this.tutorialFade.start();}, null, this);    // yuu with door








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

        // dev commands
        if (this.otherKeys.q.isDown) {
            yuu.grow(5);
        }
        if (this.otherKeys.a.isDown) {
            yuu.shrink(5);
        }
        if (this.otherKeys.z.isDown) {
            game.camera.x -= 10;
        }
        if (this.otherKeys.x.isDown) {
            game.camera.x += 10;
        }








        // win detection
        if (0 >= 1 && !this.switching) {        // TODO fix condition
            this.switching = true;
            console.log("switching to end state");
            game.camera.fade(0x000000, 1000);
        }
    },








// -----------------------------------------------------------------------------








    render: function() {
        game.debug.body(yuu.phaserData);                                        // view yuu's hitbox
        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteInfo(yuu.phaserData, 32, 120);
        game.debug.bodyInfo(yuu.phaserData, 32, 220);
    }
};

game.state.add("level1", game_state.level1);


/*

notes:
-use "deadzone" property of camera?

*/