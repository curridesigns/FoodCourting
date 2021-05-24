import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"

const arcade = {};
arcade.bg = document.getElementById("arcadeCounterBG");
arcade.Reg = document.getElementById("arcadeCounterReg")

const buttons = { returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }};

const dialogueBoxes = {}

arcade.load = function() {
  
  helperFunction.background(arcade.bg);
  //character loading should go here
  helperFunction.background(arcade.Reg);
  //dialoge should go here
  
  ctx.fillStyle = "#f9cb9c55";
  ctx.fillRect(
    buttons.returnToMap.left,
    buttons.returnToMap.top,
    buttons.returnToMap.right - buttons.returnToMap.left,
    buttons.returnToMap.bottom - buttons.returnToMap.top
  );
  // endScreen.click();
};

arcade.click = function(event) {
  visualNovel.returnToMapClick(event, buttons);
}


export { arcade };