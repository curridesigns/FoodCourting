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
  if (chad.ending()) {
    console.log("hello");
  }

  helperFunction.background(arcade.bg);
  chad.render(900, 50);
  helperFunction.background(arcade.Reg);
  //dialoge should go here
  // visualNovel.returnToMapRender(buttons.returnToMap, "#f9cb9c55");
  chad.dialogueRender();
  // endScreen.click();
};

arcade.click = function(event, visualNovelDisplay) {
  switch (chad.click(event)) {
    case "map":
      visualNovel.display = "map";
      chad.chatNumber++;
      chad.chatProgress = 0;
      chad.dialogue.playerResponse = "a";
      break;
    case "ending":
      visualNovel.endScene = "chad";
      visualNovel.display = "ending";
      break;
  }
};

export { arcade };
