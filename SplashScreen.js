import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "./helper-functions.js";
import { visualNovel } from "./visualNovel/VisualNovel.js";

const splashScreen = {};

splashScreen.bg = document.getElementById("splashScreen");
splashScreen.startGame = false;

const buttons = { start: { top: 800, bottom: 900, left: 200, right: 500 } };

let splashFrameRendered = false;

splashScreen.load = function() {
  if (splashFrameRendered === true) {
    return;
  } // If we already rendered the splash screen once, then don't draw it again.

  helperFunction.background(splashScreen.bg);
  helperFunction.button.render(
    buttons.start,
    "#f9cb9cff"
  );
  splashFrameRendered = true;
  // splashScreen.click();
};

splashScreen.click = function(event) {
  if (
    helperFunction.button.click(
      buttons.start
    )
  ) {
    splashScreen.startGame = true;
    visualNovel.display = "food";
    splashFrameRendered = false;
  }
};

export { splashScreen };
