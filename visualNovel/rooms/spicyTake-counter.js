//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js";
import { raven } from "../../../characters/Raven.js";

//sets up the spicy takes object
const spicy = {};
//spicy takes' images
spicy.bg = document.getElementById("spicytakesBG");
spicy.Reg = document.getElementById("spicytakesCounter");
spicy.ending = document.getElementById("ravenEnding");

//run in VisualNovel.js
spicy.load = function() {
  helperFunction.background(spicy.bg);
  raven.render(900, 50);
  helperFunction.background(spicy.Reg);
  
  //dialogue
  raven.dialogueRender();
};

//handles raven's click()
spicy.click = function(event, visualNovelDisplay) {
  switch (raven.click(event)) {
    case "map":
      visualNovel.display = "map";
      raven.chatNumber++;
      raven.chatProgress = 0;
      raven.dialogue.playerResponse = "a";
      visualNovel.forcedMini = true;
      break;
    case "ending":
      visualNovel.endScene = "raven";
      visualNovel.display = "ending";
      break;
  }
};

export { spicy };
