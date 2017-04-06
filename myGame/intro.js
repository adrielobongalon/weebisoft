/*
       document : intro.js, for weebisoft
     created on : thursday, november 10, 2016, 09:33 am
      cloned on : thursday, january 26, 2017, 11:57 am
         author : adrielo (audrey) bongalon
    description : intro, for 11th grade video game programming expeditions course


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

/* global Phaser game_state game canvasDimensions */                                             // tells the IDE that Phaser exists in another file




game_state.intro = function() {};
game_state.intro.prototype = {

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
	    // google font loader (may not work on all browsers, make sure to add hidden tag before phaser html element)
        game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
        game.load.image("logo", "assets/weebisoftLogo.png");
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
        game.stage.backgroundColor = "#000000";                                 // plain black background
        this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);   // adds event listener on spacebar
        this.aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);

        //adds the logo come in spinning
        this.logoWidth = 335 * 0.5;     // multiply image width by scale x
        this.logo = game.add.sprite(-this.logoWidth, canvasDimensions.height / 3, "logo");
        this.logo.scale.setTo(0.5, 0.5);
        this.logo.anchor.setTo(0.5, 0.5);
        this.started = false;
        this.moveLogo = game.add.tween(this.logo).to({x: canvasDimensions.width / 2, angle: 360}, 2000, Phaser.Easing.Linear.None, false, 0, 0, false);
        this.moveLogo.onComplete.add(function() {
            this.fadeInText1.start();
            this.fadeInText2.start();
        }, this);


        this.textStyle = {
            font: "20px Finger Paint",
            fontWeight: 100,
            fill: "#ffffff",
            align: "center",        // text alignment
            boundsAlignH: "center", // horizontal align for *bounding box*
        };

        //first text
        this.text1 = game.add.text(0, canvasDimensions.height * (2 / 3), "ウィビソフト presents:\nCan You Hear Me?", this.textStyle);
        this.text1.setTextBounds(0, 0, game.world.width, game.world.height);
        this.text1.alpha = 0;

        this.fadeInText1 =  game.add.tween(this.text1).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, false, 500, 0, false);
        
        //second text
        this.text2 = game.add.text(0, canvasDimensions.height * (7 / 8), "(Press space to begin.)", this.textStyle);
        this.text2.setTextBounds(0, 0, game.world.width, game.world.height);
        this.text2.alpha = 0; 
        this.fadeInText2 =  game.add.tween(this.text2).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, false, 2000, -1, true);

        // to fade in after
       game.camera.onFadeComplete.add(this.switchState, this);
    
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
            this.moveLogo.start();
        }




        if (this.spacebar.isDown) {
            game.camera.fade(0x000000, 1000);
        }
        if (this.aKey.isDown) {
            this.devSwitch();
        }
    },




    render: function() {
        // game.debug.body(this.logo);
        // game.debug.spriteInfo(this.logo, 32, 32);
    },








    switchState: function() {
        console.log("switching state to level 1");
        game.state.start("level1");
    },
    devSwitch: function() {
        console.log("switching state to level 2");
        game.state.start("level2");
    }
};

game.state.add("intro", game_state.intro);
game.state.start("intro");