import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";

const store = {};
store.bg = document.getElementById("storeBG");
store.Reg = document.getElementById("storeCounter")

const buttons = { store: { top: 275, bottom: 575, left: 77, right:  710}, spicy: { top: 275, bottom: 470, left: 1095, right:  1415}, arcade: { top: 275, bottom: 575, left: 1430, right:  1830}, food: { top: 590, bottom: 870, left: 725, right:  1070} };

store.load = function() {
  
  helperFunction.background(store.bg);
  
  helperFunction.background(store.Reg);
  
  ctx.fillStyle = "#f9cb9cff";
  ctx.fillRect(
    buttons.store.left,
    buttons.store.top,
    buttons.store.right - buttons.store.left,
    buttons.store.bottom - buttons.store.top
  );
  // endScreen.click();
};

store.click = function() {
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


export { store };