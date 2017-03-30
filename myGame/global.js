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
















var textbox = {

    // dimensions
    width: 724,         // match to sprite dimensions
    height: 110,
    xOffset: null,      // since this is an object literal, this.width is not defined yet
    yOffset: null,      // it needs to be defined after this object is created
    textXoffset: null,  // ditto
    textYoffset: null,  // ditto
    textMarginX: 15,
    textMarginY: 10,
    nameStyle: {
        font: "20px Finger Paint",
        fontWeight: 100,
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 5
    },
    textStyle: {
        font: "16px Finger Paint",
        fontWeight: 100,
        fill: "#000000"
    },

    // for saving stuff
    phaserBox: null,                                                            // ONLY PHASER SHOULD MODIFY THIS! DO NOT TOUCH!
    phaserName: null,                                                           // DITTO
    phaserText: null,                                                           // DITTO AGAIN
    phaserGoup: null,                                                           // LIKEWISE

    // fading stuff
    fadeInBox: null,
    fadeOutBox: null,
    fadeInText: null,
    fadeOutText: null,

    loadData: function() {
        this.phaserBox = game.add.sprite(this.xOffset, this.yOffset, "textbox");    // make sure textbox is already created in the create function of each level
        this.phaserName = game.add.text(this.textXoffset, this.textYoffset, "name placeholder", this.nameStyle);
        this.phaserText = game.add.text(this.textXoffset, this.textYoffset + 40, "dialogue\nplaceholder", this.textStyle);

        this.phaserGroup = game.add.group();
        this.phaserGroup.add(this.phaserBox);
        this.phaserGroup.add(this.phaserName);
        this.phaserGroup.add(this.phaserText);

        this.phaserGroup.alpha = 0;

        this.fadeInBox = game.add.tween(this.phaserGroup).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);   // note that this fades the group,
        this.fadeOutBox = game.add.tween(this.phaserGroup).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);  // not just the box
        this.fadeInText = game.add.tween(this.phaserText).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);
        this.fadeOutText = game.add.tween(this.phaserText).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);
    },

    fadeIn: function() {
        // text to display should already be stored when this function is called
        this.fadeInBox.start();
    },

    fadeOut: function() {
        this.fadeOutBox.start();
    },

    speak: function(path, callback) {
        for (i = 0; i < path.text.length; i++) {
            this.phaserName.setText(path.text[i][0]);
            this.phaserText.setText(path.text[i][1]);
        }




        if (path.type == "redirect") {
            
        }
        else if (path.type == "options") {
            
        }
        else if (path.type == "end") {
            this.fadeIn();
            console.log("type: end");

            if (callback && typeof callback === "function") {
                callback();
            }
        }
        else {
            console.error("error: invalid path type");
        }
    },

    resetData: function() {         // RUN THIS AT THE END OF EVERY LEVEL
        this.phaserBox = null;
        this.phaserName = null;
        this.phaserText = null;
        this.phaserGoup = null;

        this.fadeInBox = null;
        this.fadeOutBox = null;
        this.fadeInText = null;
        this.fadeOutText=  null;
    }
};
textbox.xOffset = (canvasDimensions.width - textbox.width) / 2;
textbox.yOffset = canvasDimensions.height - textbox.height - 30;
textbox.textXoffset = textbox.xOffset + textbox.textMarginX;
textbox.textYoffset = textbox.yOffset + textbox.textMarginY;
















function Path(text, type, options, redirect) {
    this.text = text;           // double array of dialogue
    this.type = type;           // either "options", "redirect", or "end"
    this.options = options;     // either [["option name 1", redirect], ["option name 2"], redirect] or null
    this.redirect = redirect;   // either name of redirect object or null

    // MAKE SURE THE REDIRECT OBJECT IS DEFINED
}
















var groundSpriteDimensions = {width: 400, height: 32};