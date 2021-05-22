import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "./helper-functions.js";

const endScreen = {};

endScreen.bg = document.getElementById("endScreen");
endScreen.endGame = false;

const buttons = { start: { top: 800, bottom: 900, left: 200, right: 500 } };

endScreen.load = function() {
  helperFunction.background(endScreen.bg);
  ctx.fillStyle = "#f9cb9cff";
  ctx.fillRect(
    buttons.start.left,
    buttons.start.top,
    buttons.start.right - buttons.start.left,
    buttons.start.bottom - buttons.start.top
  );
  // endScreen.click();
};

endScreen.click = function(event) {
  if (
    helperFunction.button(
      buttons.start.top,
      buttons.start.bottom,
      buttons.start.left,
      buttons.start.right
    )
  ) {
    endScreen.endGame = false;
  }
};

export { endScreen };
