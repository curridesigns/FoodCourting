import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"

const store = {};
store.bg = document.getElementById("storeBG");
store.Reg = document.getElementById("storeReg")

const buttons = { returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }};

store.load = function() {
  
  helperFunction.background(store.bg);
  //helperFunction.background();
  helperFunction.background(store.Reg);
  //dialogue
  visualNovel.returnToMapRender(buttons.returnToMap, "#f9cb9c55");
  // endScreen.click();
};

store.click = function(event) {
  visualNovel.returnToMapClick(event, buttons.returnToMap);
}

export { store };