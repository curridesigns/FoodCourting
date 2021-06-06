import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"
import { taylor } from "../../../characters/Taylor.js"

//creates the store object
const store = {};
//store's images
store.bg = document.getElementById("storeBG");
store.Reg = document.getElementById("storeReg");
store.ending = document.getElementById("taylorEnding");

//run in VisualNovel.js
store.load = function() {
  helperFunction.background(store.bg);
  taylor.render(900,50);
  helperFunction.background(store.Reg);
  
  //dialogue
  taylor.dialogueRender();
};

//handles taylor's click()
store.click = function(event, visualNovelDisplay) {
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