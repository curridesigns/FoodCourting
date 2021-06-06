import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js";
import { ted } from "../../characters/ted.js";
import { miniGame } from "../../miniGame/mini-game.js";

const ramen = {};
ramen.shiftStart = document.getElementById("splashScreen");
ramen.ending1 = document.getElementById("tedEnding1");
ramen.ending2 = document.getElementById("tedEnding2");
ramen.bg = document.getElementById("ramenBG");
let screen = "novel";
ramen.miniGame = false;

const buttons = {
  clockIn: { top: 260, bottom: 480, left: 1050, right: 1710 },
  clockOut: { top: 510, bottom: 730, left: 1050, right: 1710 },
  returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }
};

ramen.load = function(tedChat = false) {
  if (miniGame.tedEnding) {
    ramen.miniGame = false;
    helperFunction.background(ramen.bg);
    ted.render("novel", 200, 200);
    ted.render(900, 50);
    ted.novel.dialogueRender();
  } else {
    helperFunction.background(ramen.shiftStart);
  }
  if (ramen.miniGame && !miniGame.finished) {
    miniGame.play();
  }
  //dialogue
};

ramen.click = function(event, tedChat = false) {
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
  } else if(!ramen.miniGame || miniGame.finished){
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
