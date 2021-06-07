import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "./helper-functions.js";
import { visualNovel } from "./visualNovel/VisualNovel.js";

const splashScreen = {};

splashScreen.bg = document.getElementById("splashScreen");
splashScreen.startGame = false;

const buttons = {
  start: {top: 70, bottom: 348, left: 73, right: 1025}, //new titlescreen
};

let splashFrameRendered = false;

splashScreen.load = function() {
  if (splashFrameRendered === true) {
    return;
  } // If we already rendered the splash screen once, then don't draw it again.
  
  helperFunction.background(splashScreen.bg);

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
    visualNovel.display = "map";
    splashFrameRendered = false;
  }
};

export { splashScreen };
