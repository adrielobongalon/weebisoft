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

/* global Phaser game_state game */                                             // tells the IDE that Phaser exists in another file




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

        this.text1 = game.add.text(10, 10,
            "(intro here)\n\nウィビソフト presents\ncan you hear me",
            {
                font: "20px Finger Paint",
                fontWeight: 100,
                fill: "#ffffff",
                align: "center",        // text alignment
                boundsAlignH: "center", // horizontal align for *bounding box*
                boundsAlignV: "middle"  // vertical
            }
        );
        this.text1.setTextBounds(0, 0, game.world.width, game.world.height);

        // to fade in after
        game.camera.onFadeComplete.add(this.devSwitch, this);
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
        if (this.spacebar.isDown) {
            game.camera.fade(0x000000, 1000);
        }
        if (this.aKey.isDown) {
            this.switchState();
        }
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