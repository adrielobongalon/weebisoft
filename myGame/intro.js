/*
       document : intro.js, for weebisoft
     created on : thursday, november 10, 2016, 09:33 am
      cloned on : thursday, january 26, 2017, 11:57 am
         author : audrey + angelina
    description : intro, for 11th grade video game programming expeditions course

weebisoft - ウィビソフト

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