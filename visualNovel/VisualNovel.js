import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const visualNovel = {};

visualNovel.bg = document.getElementById("mallMap");

visualNovel.display = false

const buttons = { start: { top: 800, bottom: 900, left: 200, right: 500 } };

visualNovel.load = function() {
  
  helperFunction.background(visualNovel.bg);
  ctx.fillStyle = "#f9cb9cff";
  ctx.fillRect(
    buttons.start.left,
    buttons.start.top,
    buttons.start.right - buttons.start.left,
    buttons.start.bottom - buttons.start.top
  );
  // endScreen.click();
};

visualNovel.click = function(event) {
  console.log(helperFunction.getMouseCoordinates(event));
  // if (
  //   helperFunction.button(
  //     buttons.start.top,
  //     buttons.start.bottom,
  //     buttons.start.left,
  //     buttons.start.right
  //   )
  // ) {
  // }
}
    
    export { visualNovel };