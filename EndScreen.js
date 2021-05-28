import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "./helper-functions.js";

const endScreen = {};

endScreen.bg = document.getElementById("endScreen");
endScreen.endGame = false;

const buttons = { start: { top: 800, bottom: 900, left: 200, right: 500 } };

endScreen.load = function() {
  helperFunction.background(endScreen.bg);
  helperFunction.button.render(buttons.start, "#f9cb9cff")
  // endScreen.click();
};

endScreen.click = function(event) {
  if (helperFunction.button.click(buttons.start)) {
    endScreen.endGame = false;
    console.log("hello");
  }
};

export { endScreen };
