/*
       document : global.js, for weebisoft
     created on : friday, january 27, 2016, 11:45 am
         author : audrey
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

var i = 0;      // TODO delete me
















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
    touchingGround: true,
    canUseCamera: true,

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

        this.phaserData.frame = 3;                                              // start facing forwards
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
    optionsStyle: {
        font: "16px Finger Paint",
        fontWeight: 100,
        fill: "#000000",
        align: "center",        // text alignment
        boundsAlignH: "center", // horizontal align for *bounding box*
        boundsAlignV: "middle"  // vertical align
    },
    tutorialStyle: {
        font: "20px Finger Paint",
        fontWeight: 100,
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 5,
        align: "center",        // text alignment
        boundsAlignH: "center"  // horizontal align for *bounding box*
    },




    // for saving stuff
    phaserBox: null,                                                            // ONLY PHASER SHOULD MODIFY THIS! DO NOT TOUCH!
    phaserName: null,                                                           // DITTO
    phaserText: null,                                                           // DITTO AGAIN
    phaserTextGroup: null,                                                      // LIKEWISE
    phaserBoxGoup: null,                                                        // WHY ARE WE YELLING?
    options: [],                                                                // this one's fine to modify though, contains the sprites and text

    // fading stuff
    fadeInBox: null,
    fadeOutBox: null,
    fadeInText: null,
    fadeOutText: null,

    // dialogue stuff
    dialogueRunning: false,
    currentPath: null,
    callback: null,
    dialogueProgress: 0,
    textCurrentlyFading: false,
    nextButtonPressed: false,   // the "next button" is space, enter, and screen click
    canGoToNext: true,




    loadBoxData: function() {
        this.phaserBox = game.add.sprite(this.xOffset, this.yOffset, "textbox");    // make sure textbox is already created in the create function of each level
        this.phaserName = game.add.text(this.textXoffset, this.textYoffset, "name placeholder", this.nameStyle);
        this.phaserText = game.add.text(this.textXoffset, this.textYoffset + 40, "dialogue\nplaceholder", this.textStyle);

        this.phaserTextGroup = game.add.group();
        this.phaserTextGroup.add(this.phaserName);
        this.phaserTextGroup.add(this.phaserText);

        this.phaserBoxGroup = game.add.group();
        this.phaserBoxGroup.add(this.phaserBox);
        this.phaserBoxGroup.add(this.phaserTextGroup);

        this.phaserBoxGroup.alpha = 0;

        this.fadeInBox = game.add.tween(this.phaserBoxGroup).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);    // note that this fades the group,
        this.fadeInBox.onComplete.add(function() {this.textCurrentlyFading = false;}, this);                                        // not just the box
        this.fadeOutBox = game.add.tween(this.phaserBoxGroup).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);
        this.fadeOutBox.onComplete.add(function() {
            this.callback();
            this.resetData();
        }, this);
        this.fadeInText = game.add.tween(this.phaserTextGroup).to({alpha: 1}, 250, Phaser.Easing.Linear.None, false, 0, 0, false);
        this.fadeInText.onComplete.add(function() {
            this.textCurrentlyFading = false;
        }, this);
        this.fadeOutText = game.add.tween(this.phaserTextGroup).to({alpha: 0}, 250, Phaser.Easing.Linear.None, false, 0, 0, false);
        this.fadeOutText.onComplete.add(function() {
            this.phaserName.setText(this.currentPath.text[this.dialogueProgress][0]);   // set the new text
            this.phaserText.setText(this.currentPath.text[this.dialogueProgress][1]);

            this.fadeInText.start();                                                    //  fade it back in
        }, this);
    },




    /* returns true when the "next button" is pressed
       prevents user from spamming by holding down the keys
       must be passed an object that contains the space key and enter key
       meant to be used in phaser's update function */
    checkNextKeys: function(keys) {
        if (keys.space.isDown || keys.enter.isDown || game.input.activePointer.isDown) {
            this.nextButtonPressed = true;
        }
        else {
            this.nextButtonPressed = false;
        }

        if (!this.textCurrentlyFading) {
            if (this.canGoToNext && this.nextButtonPressed) {
                this.canGoToNext = false;
                return true;
            }
            else if (!this.nextButtonPressed) {     // key up
                this.canGoToNext = true;
            }
        }
    },




    // I made this a separate function, because it got messy with the onCompletes and the textCurrentlyFading
    switchText: function() {
        this.textCurrentlyFading = true;
        this.fadeOutText.start();
    },




    createOptions: function(options) {  // options is a double array with 5 items MAX
        var _this_textbox = this;

        // positioning stuff for all the options (as a group) + sizing
        var marginYTop = 40;
        var marginYBottom = (canvasDimensions.height - this.yOffset) + 20;
        var spaceBetween = 15;
        var workableArea = canvasDimensions.height - marginYTop - marginYBottom;
        var textboxHeight = ((workableArea - ((options.length - 1) * spaceBetween)) / options.length);

        for (i = 0; i < options.length; i++) {

            // box positioning
            var boxXpos = this.xOffset;
            var boxYpos = marginYTop + (i * (textboxHeight + spaceBetween));
            var boxWidth = textbox.width;
            var boxHeight = textboxHeight;

            var box = game.add.sprite(boxXpos, boxYpos, "options box");
            var scaleY = textboxHeight / 110;   // dividend should be height of options.jpg in pixels
            box.scale.setTo(1, scaleY);




            // text display and positioning
            var text = game.add.text(0, 0, options[i][0], textbox.optionsStyle);
            text.setTextBounds(boxXpos, boxYpos, boxWidth, boxHeight);

            var group = game.add.group();
            group.add(box);
            group.add(text);




            // fading stuff
            group.alpha = 0;
            var fadeIn = game.add.tween(group).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false, i * 200, 0, false);
            fadeIn.start();
            
            var fadeOut = game.add.tween(group).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, i * 200, 0, false);
            var currentlyFading = false;




            // selection handling
            box.inputEnabled = true;      // create event listener for clicks
            box.events.onInputDown.add(_this_textbox.onOptionSelect, {parameter: options[i][1]});




            // store all the options
            this.options[i] = [box, text, fadeOut, currentlyFading];
        }
    },




    onOptionSelect: function() {
        if (!textbox.options[0][3]) {                                           // check the first box to see if it is currently fading
            for (i = 0; i < textbox.options.length; i++) {
                textbox.options[i][0].inputEnabled = false;                     // disable input
                textbox.options[i][3] = true;                                   // set currentlyFading to true
                textbox.options[i][2].start();                                  // start fade
            }
    
            textbox.currentPath = this.parameter;   // make the redirect the new currentPath
            textbox.dialogueProgress = 0;
            textbox.switchText();
        }
    },




    start: function(path, callback) {
        this.dialogueRunning = true;
        this.currentPath = path;
        this.callback = callback;       // callback is stored so that it can be run after the textbox fades out
        this.dialogueProgress = 0;

        // set text
        this.phaserName.setText(path.text[this.dialogueProgress][0]);
        this.phaserText.setText(path.text[this.dialogueProgress][1]);

        // fade in
        this.textCurrentlyFading = true;
        this.fadeInBox.start();
    },




    next: function() {
        if (!this.textCurrentlyFading) {

            // if there is moar text, switch to that
            if (this.dialogueProgress < this.currentPath.text.length - 1) {
                this.dialogueProgress++;
                this.switchText();
            }



            // otherwise, redirect, display the options, or end the dialogue
            else {
                if (this.currentPath.type == "redirect") {
                    this.currentPath = this.currentPath.redirect;   // make the redirect the new currentPath
                    this.dialogueProgress = 0;
                    this.switchText();
                }


                else if (this.currentPath.type == "options") {
                    this.createOptions(this.currentPath.options);
                }


                else {  // if (this.currentPath.type == "end")
                    this.fadeOutBox.start();
                }
            }
        }
    },




    resetData: function() {         // run at the end of every dialogue via callback after fadeout of textbox
        this.phaserBox = null;
        this.phaserName = null;
        this.phaserText = null;
        this.phaserTextGroup = null;
        this.phaserBoxGoup = null;
        this.options = [];

        this.fadeInBox = null;
        this.fadeOutBox = null;
        this.fadeInText = null;
        this.fadeOutText = null;

        this.dialogueRunning = false;
        this.currentPath = null;
        this.callback = null;
        this.dialogueProgress = 0;
        this.textCurrentlyFading = false;
        this.canGoToNext = true;
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