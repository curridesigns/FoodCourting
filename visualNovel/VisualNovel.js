import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { arcade } from "./rooms/arcade-counter.js"

const visualNovel = {};

visualNovel.bg = document.getElementById("mallMap");

visualNovel.display = false
visualNovel.arcadeDisplay = false

const buttons = { store: { top: 275, bottom: 575, left: 77, right:  710}, spicy: { top: 275, bottom: 470, left: 1095, right:  1415}, arcade: { top: 275, bottom: 575, left: 1430, right:  1830}, food: { top: 590, bottom: 870, left: 725, right:  1070} };

visualNovel.load = function() {
  
  helperFunction.background(visualNovel.bg);

  if(visualNovel.arcadeDisplay){
    arcade.load();
  }
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
  if (
    helperFunction.button(
      buttons.spicy.top,
      buttons.spicy.bottom,
      buttons.spicy.left,
      buttons.spicy.right
    )
  ) {
    console.log("spicy");
  }
  if (
    helperFunction.button(
      buttons.arcade.top,
      buttons.arcade.bottom,
      buttons.arcade.left,
      buttons.arcade.right
    )
  ) {
    visualNovel.arcadeDisplay = true;
    visualNovel.display = false;
  }
  if (
    helperFunction.button(
      buttons.food.top,
      buttons.food.bottom,
      buttons.food.left,
      buttons.food.right
    )
  ) {
    console.log("food court");
  }
  
}
    
    export { visualNovel };