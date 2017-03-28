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
    width: 952 / 7,
    height: 224,
    hbWidth: 72,
    hbHeight: 224,      // same as this.height (cannot be set to "this.height" because of how objects are constructed)
    hbOffsetX: 32,
    hbOffsetY: 0,
    scaleX: 1,
    scaleY: 1,
    

    // physics data
    gravity: 0,
    bounce: 0.3,
    canMoov: true,
    canRun: true,       // TODO     REMOVE RUN UNTIL DOWNSTAIRS
    running: false,

    // animation data
    alpha: 0,
    animationDirX: 0,                                                           // manages direction of yuu
    LR: "front",                                                                // start off facing forwards
    animationCounter: 0,                                                        // resets counter that makes her face forwards after waiting for some time
    walkSpeed: 175,
    walkFrameRate: 5,                                                           // 5 frames per second
    runSpeed: 500,
    runFrameRate: 5,

    // for saving stuff
    phaserData: null,                                                           // ONLY PHASER SHOULD MODIFY THIS! DO NOT TOUCH!




    // add yuu sprite
    spawn: function(scaleX, scaleY) {
        // enable physics
        game.physics.arcade.enable(this.phaserData);

        this.scaleX = scaleX;
        this.scaleY = scaleY;
        
        // resize yuu
        this.phaserData.scale.setTo(this.scaleX, this.scaleY);

        // hitbox size management
        this.phaserData.body.setSize(this.hbWidth, this.hbHeight, this.hbOffsetX, this.hbOffsetY);
        /* phaser automatically takes care of scaling this; DO NOT MULTIPLY BY scaleX OR scaleY */

        // yuu cannot go out of bounds
        game.physics.arcade.setBounds(0, 0, game.world.width, game.world.height);
        this.phaserData.body.collideWorldBounds = true;

        // order to of frames to run moving animation
        this.phaserData.animations.add("left", [0, 2, 1, 2], 5, true);
        this.phaserData.animations.add("right", [6, 4, 5, 4], 5, true);
    },
    grow: function(value) {
        if (this.hbHeight < 500) {
            yuu.phaserData.y -= value;
            this.hbHeight += value;
            this.phaserData.body.setSize(this.hbWidth, this.hbHeight, this.hbOffsetX, this.hbOffsetY);
        }
    },
    shrink: function(value) {
        if (this.hbHeight > this.height) {
            this.hbHeight -= value;
            this.phaserData.body.setSize(this.hbWidth, this.hbHeight, this.hbOffsetX, this.hbOffsetY);
        }
    }
};
















var textbox = {                                                                 // TODO DELETE
    // for saving stuff
    phaserData: null,                                                           // ONLY PHASER SHOULD MODIFY THIS! DO NOT TOUCH!

    // fading stuff
    fadeInAnimation: null,
    fadeOutAnimation: null,

    loadData: function(delayFadeIn) {                                           // also sets alpha to 0 for fading in
        this.phaserData.alpha = 0;
        this.fadeInAnimation = game.add.tween(this.phaserData).to({alpha: 1}, 250, Phaser.Easing.Linear.None, false, delayFadeIn, 0, false);
        this.fadeOutAnimation = game.add.tween(this.phaserData).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);
    },

    fadeIn: function() {
        this.fadeInAnimation.start();
    },
    fadeOut: function() {
        this.fadeOutAnimation.start();
    },




    text: [],
    options: {},




    speak: function() {
        
    }
};
















function Path(text, type, options, redirect) {
    this.text = text;           // double array of dialogue
    this.type = type;           // either "options", "redir", or "end"
    this.options = options;     // either [["option name 1", redirect], ["option name 2"], redirect] or null
    this.redirect = redirect;   // either name of redirect object or null

    // MAKE SURE THE REDIRECT OBJECT IS DEFINED
}
















var groundSpriteDimensions = {width: 400, height: 32};