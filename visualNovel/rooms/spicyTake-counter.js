import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"
import { raven } from "../../../characters/Raven.js"

const spicy = {};
spicy.bg = document.getElementById("spicytakesBG");
spicy.Reg = document.getElementById("spicytakesCounter")

const buttons = { returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }};

spicy.load = function() {
  helperFunction.background(spicy.bg);
  //helperFunction.background();
    raven.render(885,50);
  helperFunction.background(spicy.Reg);
  //dialogue
  visualNovel.returnToMapRender(buttons.returnToMap, "#f9cb9c55");
  raven.dialogue.render();
  // endScreen.click();
};

spicy.click = function(event, visualNovelDisplay) {
  //console.log(buttons.returnToMap)
  if(visualNovel.returnToMapClick(event, buttons.returnToMap)){
    raven.chatProgress = 0;
    raven.dialogue.playerResponse = "a"
  }
  if(raven.click(event)){
    visualNovel.display = "map";
    raven.chatProgress = 0;
    raven.dialogue.playerResponse = "a"
  }
}

export { spicy };