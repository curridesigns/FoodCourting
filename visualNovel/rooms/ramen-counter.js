import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"
import { ted } from "../../characters/ted.js"

const ramen = {};
ramen.bg = document.getElementById("splashScreen");
let screen = "novel"
//ramen.Reg = document.getElementById("")

const buttons = {clockIn: {top: 1010, bottom: 1110, left: 1650, right: 1850} ,returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }};

ramen.load = function() {
  
  helperFunction.background(ramen.bg);
  //ted.render(screen);
  //helperFunction.background(ramen.Reg);
  //dialogue
  visualNovel.returnToMapRender(buttons.returnToMap, "#f9cb9c55");
  // endScreen.click();
};

ramen.click = function(event) {
  console.log(helperFunction.getMouseCoordinates(event));
  visualNovel.returnToMapClick(event, buttons.returnToMap);
}

export { ramen };