//this is more complicated then the other rooms since it handles the miniGame functionality,
//and the weird way you talk to ted

//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js";
import { ted } from "../../characters/ted.js";
import { miniGame } from "../../miniGame/mini-game.js";

//creates the ramen object
const ramen = {};

//the ramen images
ramen.shiftStart = document.getElementById("splashScreen");
ramen.ending1 = document.getElementById("tedEnding1");
ramen.ending2 = document.getElementById("tedEnding2");
ramen.bg = document.getElementById("ramenBG");

//bool for if the miniGame should be loaded
ramen.miniGame = false;

//buttons to give the cash register functionality
const buttons = {
  clockIn: { top: 260, bottom: 480, left: 1050, right: 1710 },
  clockOut: { top: 510, bottom: 730, left: 1050, right: 1710 },
};

//run in the VisualNovel.js file
ramen.load = function() {
  //loads ted's visualNovel functions
  if (miniGame.tedEnding) {
    ramen.miniGame = false;
    helperFunction.background(ramen.bg);
    ted.render("novel", 200, 200);
    ted.render(900, 50);
    ted.novel.dialogueRender();
  } else {
    //loads the cash register at the start and end of a shift, unless you talk to ted
    helperFunction.background(ramen.shiftStart);
  }
  //runs the miniGame when appropriate
  if (ramen.miniGame && !miniGame.finished) {
    miniGame.play();
  }
};

//handles the click events for food court
ramen.click = function(event, tedChat = false) {
  //if you talk to ted, runs the click events for that
  if (miniGame.tedEnding) {
    switch (ted.novel.click(event)) {
      case "map":
        visualNovel.display = "map";
        ted.novel.chatNumber++;
        ted.novel.chatProgress = 0;
        ted.novel.dialogue.playerResponse = "a";
        visualNovel.forcedMini = true
        miniGame.reset();
        break;
      case "ending":
        visualNovel.endScene = "ted";
        visualNovel.display = "ending"
        break;
    }
  } //runs the click events for the cash register 
  else if(!ramen.miniGame || miniGame.finished){
    if (helperFunction.button.click(buttons.clockIn)) {
      ramen.miniGame = true;
      miniGame.reset();
      window.alert(
        "Welcome to your shift! You'll have to complete ___ bowls by going around via WASD and holding space to pick up items. But be cafeul to avoid your creepy manager!"
      );
      visualNovel.forcedMini = false;
    }
    if (helperFunction.button.click(buttons.clockOut)) {
      visualNovel.display = "map";
      if (miniGame.finished) {
        miniGame.reset();
        ramen.miniGame = false;
      }
    }
  }
};

export { ramen };
