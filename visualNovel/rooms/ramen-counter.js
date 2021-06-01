import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js";
import { ted } from "../../characters/ted.js";

const ramen = {};
ramen.bg = document.getElementById("splashScreen");
let screen = "novel";
//ramen.Reg = document.getElementById("")

const buttons = {
  clockIn: { top: 260, bottom: 480, left: 1050, right: 1710 },
  clockOut: { top: 510, bottom: 730, left: 1050, right: 1710 },
  returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }
};

ramen.load = function() {
  helperFunction.background(ramen.bg);
  //ted.render(screen);
  //helperFunction.background(ramen.Reg);
  //dialogue
  //visualNovel.returnToMapRender(buttons.returnToMap, "#f9cb9c55");
  // endScreen.click();
};

ramen.click = function(event) {
  console.log(helperFunction.getMouseCoordinates(event));
  if(helperFunction.button.click(buttons.clockIn)){
    visualNovel.miniGame = true;
  }
  if(helperFunction.button.click(buttons.clockOut)){
    visualNovel.display = "map";
  }
  //visualNovel.returnToMapClick(event, buttons.returnToMap);
};

export { ramen };
