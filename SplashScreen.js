import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "./helper-functions.js";
import { visualNovel } from "./visualNovel/VisualNovel.js";

const splashScreen = {};

splashScreen.bg = document.getElementById("splashScreen");
splashScreen.startGame = false;

const buttons = {
  start: { top: 258, bottom: 480, left: 1055, right: 1713 },
};

let splashFrameRendered = false;

splashScreen.load = function() {
  if (splashFrameRendered === true) {
    return;
  }  
  helperFunction.button.render(
    buttons.start,
    "#f9cb9cff"
  );
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
