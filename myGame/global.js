/*
       document : global.js, for weebisoft
     created on : friday, january 27, 2016, 11:45 am
         author : adrielo (audrey) bongalon
    description : global player object


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

/* global Phaser */




var canvasDimensions = {width: 1024, height: 576};
var game = new Phaser.Game(canvasDimensions.width, canvasDimensions.height, Phaser.AUTO, "canvas");
var game_state = {};

var i = 0;
















var yuu = {
    // general data
    width: 72,
    height: 224,

    // physics data
    gravity: 0,
    bounce: 0.3,
    canMoov: false,

    // animation data
    alpha: 0,
    animationDirX: 0,                                                           // manages direction of yuu
    LR: "front",                                                                // start off facing forwards
    animationCounter: 0,                                                        // resets counter that makes her face forwards after waiting for some time
    walkSpeed: 175,
    walkFrameRate: 5,                                                           // 5 frames per second
    runSpeed: 400,

    // for saving stuff
    phaserData: null,                                                           // ONLY PHASER SHOULD MODIFY THIS! DO NOT TOUCH!
    // phaserStuff: null,




    // add yuu sprite
    spawn: function(xScale, yScale, hbWidth, hbHeight, hbOffsetX, hbOffsetY) {
        game.physics.arcade.enable(this.phaserData);                            // enable physics
        this.phaserData.scale.setTo(xScale, yScale);                            // resize sprite
        this.phaserData.body.setSize(hbWidth, hbHeight, hbOffsetX, hbOffsetY);  // hitbox size management

        // yuu cannot go out of bounds
        game.physics.arcade.setBounds(0, 0, game.world.width, game.world.height);
        this.phaserData.body.collideWorldBounds = true;

        this.phaserData.animations.add("left", [0, 2, 1, 2], 5, true);          // order to of frames to run moving animation
        this.phaserData.animations.add("right", [6, 4, 5, 4], 5, true);
    }
};


