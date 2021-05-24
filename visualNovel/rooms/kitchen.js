import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"

const kitchen = {};
//kitchen.bg = document.getElementById("");
//kitchen.Reg = document.getElementById("")

const buttons = { returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }};

kitchen.load = function() {
  
  //helperFunction.background(kitchen.bg);
  //helperFunction.background();
  //helperFunction.background(kitchen.Reg);
  //dialogue
  visualNovel.returnToMapRender(buttons, "#f9cb9c55");
  // endScreen.click();
};

kitchen.click = function(event) {
  visualNovel.returnToMapClick(event, buttons);
}

export { kitchen };