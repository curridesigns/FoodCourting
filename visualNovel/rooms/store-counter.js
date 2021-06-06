import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"
import { taylor } from "../../../characters/Taylor.js"

const store = {};
store.bg = document.getElementById("storeBG");
store.Reg = document.getElementById("storeReg")

const buttons = { returnToMap: { top: 1010, bottom: 1110, left: 1650, right: 1850 }};

store.load = function() {
  
  helperFunction.background(store.bg);
  //helperFunction.background
  taylor.render(900,50);
  helperFunction.background(store.Reg);
  //dialogue
  taylor.dialogueRender();
  // endScreen.click();
};

store.click = function(event, visualNovelDisplay) {
  //console.log(buttons.returnToMap)
  switch (taylor.click(event)) {
      case "map":
        visualNovel.display = "map";
        taylor.chatNumber++;
        taylor.chatProgress = 0;
        taylor.dialogue.playerResponse = "a";
      visualNovel.forcedMini = true;
        break;
      case "ending":
        visualNovel.endScene = "taylor";
        visualNovel.display = "ending"
        break;
    }
}

export { store };