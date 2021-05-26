import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { arcade } from "./rooms/arcade-counter.js";
import { store } from "./rooms/store-counter.js";

const visualNovel = {};
// const roomDisplay = {store: false, spicy: false, arcade: false, food: false};

visualNovel.bg = document.getElementById("mallMap");

visualNovel.display = "arcade";

visualNovel.miniGame = false;

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
    //displays the map  
    case "map":
      helperFunction.background(visualNovel.bg);
      break;
    //displays the arcade
    case "arcade":
      arcade.load();
      break;
    //displays the store
    case "store":
      store.load();
      break;
    //displays Spicy Take
    case "spicy":
      break;
    //displays the Food Court
    case "food":
      visualNovel.miniGame = true;
      break;
  }
};

visualNovel.click = function(event) {
  console.log(helperFunction.getMouseCoordinates(event)); 
  
  switch (visualNovel.display) {
      //runs the click "function" for the map
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
        visualNovel.display = "store";
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
        visualNovel.display = "food";
      }
      break;
    //console.log("there")
      //runs the click "function" for the arcade
    case "arcade":
      arcade.click();
      break;
      //runs the click "function" for the store
    case "store":
      store.click();
      break;
      //runs the click "function" for Spicy Take
    case "spicy":
      break;
      //runs the click "function" for the Food Court
    case "food":
      break;
  }
  
};

//this function is for each screen the "screen" is what ever variable the buttons are stored in for the file its in
visualNovel.returnToMapClick = function(event, screen){
  if (
        helperFunction.button(
          screen.returnToMap.top,
          screen.returnToMap.bottom,
          screen.returnToMap.left,
          screen.returnToMap.right
        )
      ) {
        visualNovel.display = "map";
      }
}

//this function show ths button for return to map, needs the button object, and what color you want it
visualNovel.returnToMapRender = function(screen, color){
  ctx.fillStyle = color;
  ctx.fillRect(
    screen.returnToMap.left,
    screen.returnToMap.top,
    screen.returnToMap.right - screen.returnToMap.left,
    screen.returnToMap.bottom - screen.returnToMap.top
  );
  ctx.font = "48px ariel";
  ctx.fillStyle = 'red'
  ctx.fillText("Back To The Mall", 1720, 100);
}

export { visualNovel };
