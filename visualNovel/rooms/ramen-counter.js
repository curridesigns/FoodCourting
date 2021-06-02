import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js";
import { ted } from "../../characters/ted.js";
import { miniGame } from "../../miniGame/mini-game.js"

const ramen = {};
ramen.shiftStart = document.getElementById("splashScreen");
ramen.bg = document.getElementById("storeBG");
ramen.Reg = document.getElementById("storeReg");
let screen = "novel";
ramen.miniGame = false
//ramen.Reg = document.getElementById("")

const buttons = {
  clockIn: { top: 260, bottom: 480, left: 1050, right: 1710 },
  clockOut: { top: 510, bottom: 730, left: 1050, right: 1710 },
  returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }
};

ramen.load = function(tedChat = false) {
  if(miniGame.finished){
    miniGame.reset();
    ramen.miniGame = false
  }
  if (tedChat) {
    helperFunction.background(ramen.bg);
    ted.render(screen);
    helperFunction.background(ramen.Reg);
    visualNovel.returnToMapRender(buttons.returnToMap, "#f9cb9c55");
    if (frameCount % 10 === 0) {
      console.log(visualNovel.display);
    }
  } else {
    helperFunction.background(ramen.shiftStart);
  }
  if(ramen.miniGame){
    miniGame.play();
  }
  //dialogue
};

ramen.click = function(event, tedChat = false) {
      console.log(miniGame.finished)
  if (tedChat) {
    console.log(helperFunction.getMouseCoordinates(event));
    if (visualNovel.returnToMapClick(event, buttons.returnToMap)) {
      visualNovel.display = "map";
      visualNovel.tedChat = false;
    }
  } else {
    if (helperFunction.button.click(buttons.clockIn)) {
      ramen.miniGame = true
    }
    if (helperFunction.button.click(buttons.clockOut)) {
      visualNovel.display = "map";
    }
  }
};

export { ramen };
