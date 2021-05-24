import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { arcade } from "./rooms/arcade-counter.js";

const visualNovel = {};
// const roomDisplay = {store: false, spicy: false, arcade: false, food: false};

visualNovel.bg = document.getElementById("mallMap");

visualNovel.display = "map";

const buttons = {
  store: { top: 275, bottom: 575, left: 77, right: 710 },
  spicy: { top: 275, bottom: 470, left: 1095, right: 1415 },
  arcade: { top: 275, bottom: 575, left: 1430, right: 1830 },
  food: { top: 590, bottom: 870, left: 725, right: 1070 }
};

visualNovel.load = function() {
  //console.log(visualNovel.display);
  //changes what is displayed based on the visualNovel.display machine state
  switch (visualNovel.display) {
    case "map":
      helperFunction.background(visualNovel.bg);
      break;
    case "arcade":
      arcade.load();
      break;
    case "store":
      break;
    case "spicy":
      break;
    case "food":
      break;
  }
};

visualNovel.click = function(event) {
  // console.log(helperFunction.getMouseCoordinates(event));
  switch (visualNovel.display) {
    case "map":
      //sends you to the store
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
      //sends you to Spicy Take
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
      //sends you to the Arcade
      if (
        helperFunction.button(
          buttons.arcade.top,
          buttons.arcade.bottom,
          buttons.arcade.left,
          buttons.arcade.right
        )
      ) {
        visualNovel.display = "arcade";
      }
      //sends you to the Food Court to work a shift
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
      break;
    //console.log("there")
    case "arcade":
      arcade.click();
      break;
    case "store":
      break;
    case "spicy":
      break;
    case "food":
      break;
  }
  
};

export { visualNovel };
