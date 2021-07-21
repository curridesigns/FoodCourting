//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js";
import { chad } from "../../../characters/Chad.js";

//creates the arcade object
const arcade = {};
//the images for the arcade
arcade.bg = document.getElementById("arcadeCounterBG");
arcade.Reg = document.getElementById("arcadeCounterReg");
arcade.ending = document.getElementById("chadEnding");

//the render function for the arcade, called in VisualNovel.js
arcade.load = function() {
  helperFunction.background(arcade.bg);
  chad.render(900, 50);
  helperFunction.background(arcade.Reg);
  chad.dialogueRender();
};

//runs chad's click() and handles it's return values as such
arcade.click = function(event) {
  switch (chad.click(event)) {
    case "map":
      visualNovel.display = "map";
      chad.chatNumber++;
      chad.chatProgress = 0;
      chad.dialogue.playerResponse = "a";
      visualNovel.forcedMini = true;
      break;
    case "ending":
      visualNovel.endScene = "chad";
      visualNovel.display = "ending";
      break;
  }
};

export { arcade };
