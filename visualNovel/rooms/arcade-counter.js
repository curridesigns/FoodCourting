
import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js";
import { chad } from "../../../characters/Chad.js";

const arcade = {};
arcade.bg = document.getElementById("arcadeCounterBG");
arcade.Reg = document.getElementById("arcadeCounterReg");

const buttons = {
  returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }
};

const dialogueBoxes = {};

arcade.load = function() {
  helperFunction.background(arcade.bg);
  chad.render(900, 50);
  helperFunction.background(arcade.Reg);
  chad.dialogueRender();
};

arcade.click = function(event, visualNovelDisplay) {
  //runs chad's click() and handles it's return values as such
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
