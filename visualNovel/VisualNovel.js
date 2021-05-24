import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const visualNovel = {};

visualNovel.bg = document.getElementById("mallMap");

visualNovel.display = false

const buttons = { store: { top: 350, bottom: 575, left: 77, right:  710} };

visualNovel.load = function() {
  
  helperFunction.background(visualNovel.bg);
  // endScreen.click();
};

visualNovel.click = function(event) {
  console.log(helperFunction.getMouseCoordinates(event));
  if (
    helperFunction.button(
      buttons.store.top,
      buttons.store.bottom,
      buttons.store.left,
      buttons.store.right
    )
  ) {
    console.log("store");
  }
  
}
    
    export { visualNovel };