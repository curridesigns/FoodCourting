import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"
import { taylor } from "../../../characters/Taylor.js"

//creates the store object
const store = {};
store.entrance = { img: "image", choice: {chat: {top: 750, bottom: 1050, left: 750, right: 1050}}}
store.chat = {render: "function", bool: false};
//store's images
store.bg = document.getElementById("storeBG");
store.Reg = document.getElementById("storeReg");
store.ending = document.getElementById("taylorEnding");
store.entrance.img = document.getElementById("debug");


//run in VisualNovel.js
store.load = function() {
  helperFunction.background(store.entrance.img);

  if (store.chat.bool) {
    store.chatRender();
  }
};

//handles taylor's click()
store.click = function(event) {
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

store.chat.render = function () {
  helperFunction.background(store.bg);
  taylor.render(900,50);
  helperFunction.background(store.Reg);
  
  //dialogue
  taylor.dialogueRender();
}

export { store };