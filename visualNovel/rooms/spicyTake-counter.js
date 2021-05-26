import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"
import { raven } from "../../../characters/Raven.js"

const spencers = {};
//spencers.bg = document.getElementById("");
//spencers.Reg = document.getElementById("")

const buttons = { returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }};

spencers.load = function() {
  
  //helperFunction.background(spencers.bg);
  //helperFunction.background();
    raven.render(885,50);
  //helperFunction.background(spencers.Reg);
  //dialogue
  visualNovel.returnToMapRender(buttons, "#f9cb9c55");
  // endScreen.click();
};

spencers.click = function(event) {
  visualNovel.returnToMapClick(event, buttons);
}

export { spencers };