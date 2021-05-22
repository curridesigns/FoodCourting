import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "./helper-functions.js";

const splashScreen = {};

splashScreen.bg = document.getElementById("splashScreen");
splashScreen.startGame = false;

const buttons = { start: { top: 800, bottom: 900, left: 200, right: 500 } };

splashScreen.load = function() {
  helperFunction.background(splashScreen.bg);
  ctx.fillStyle = "#f9cb9cff";
  ctx.fillRect(
    buttons.start.left,
    buttons.start.top,
    buttons.start.right - buttons.start.left,
    buttons.start.bottom - buttons.start.top
  );
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
  }
};

export { splashScreen };
