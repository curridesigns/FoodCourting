import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "./helper-functions.js";
import { visualNovel } from "./visualNovel/VisualNovel.js"

const splashScreen = {};

splashScreen.bg = document.getElementById("splashScreen");
splashScreen.startGame = false;

const buttons = { start: { top: 800, bottom: 900, left: 200, right: 500 } };

let splashFrameRendered = false;

splashScreen.load = function() {
  if (splashFrameRendered === true) { return; } // If we already rendered the splash screen once, then don't draw it again.
  
  helperFunction.background(splashScreen.bg);
  ctx.fillStyle = "#f9cb9cff";
  ctx.fillRect(
    buttons.start.left,
    buttons.start.top,
    buttons.start.right - buttons.start.left,
    buttons.start.bottom - buttons.start.top
  );
  splashFrameRendered = true;
  // splashScreen.click();
};

splashScreen.click = function(event) {
  if (
    helperFunction.button(
      buttons.start.top,
      buttons.start.bottom,
      buttons.start.left,
      buttons.start.right
    )
  ) {
    splashScreen.startGame = true;
    visualNovel.display = "spicy";
    splashFrameRendered = false;
  }
};

export { splashScreen };
