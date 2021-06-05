import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { arcade } from "./rooms/arcade-counter.js";
import { store } from "./rooms/store-counter.js";
import { spicy } from "./rooms/spicyTake-counter.js";
import { ramen } from "./rooms/ramen-counter.js";

const visualNovel = {};
// const roomDisplay = {store: false, spicy: false, arcade: false, food: false};

visualNovel.bg = document.getElementById("mallMap");

visualNovel.display = "arcade";

visualNovel.miniGame = false;

var debug = document.getElementById("debug")



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
      spicy.load();
      break;
    //displays the Food Court
    case "food":
      ramen.load();
      break;
    case "ending":
      switch (visualNovel.endScene){
        case "ted":
      helperFunction.background(ramen.ending1);
      break;
        default:
          helperFunction.background(debug)
      }
      break;
  }
};

visualNovel.click = function(event) {
  if(visualNovel.forcedMini){
    if (helperFunction.button.click(buttons.store)) {
        visualNovel.display = "store";
      }
      //sends you to Spicy Take
      if (helperFunction.button.click(buttons.spicy)) {
        //console.log("spicy");
        visualNovel.display = "spicy";
      }
      //sends you to the Arcade
      if (helperFunction.button.click(buttons.arcade)) {
        visualNovel.display = "arcade";
      }
      //sends you to the Food Court to work a shift
      if (helperFunction.button.click(buttons.food)) {
        visualNovel.display = "food";
      }
  }
  switch (visualNovel.display) {
    //runs the click "function" for the map
    case "map":
      //sends you to the store
      if (helperFunction.button.click(buttons.store)) {
        visualNovel.display = "store";
      }
      //sends you to Spicy Take
      if (helperFunction.button.click(buttons.spicy)) {
        //console.log("spicy");
        visualNovel.display = "spicy";
      }
      //sends you to the Arcade
      if (helperFunction.button.click(buttons.arcade)) {
        visualNovel.display = "arcade";
      }
      //sends you to the Food Court to work a shift
      if (helperFunction.button.click(buttons.food)) {
        visualNovel.display = "food";
      }
      break;
    //console.log("there")
    //runs the click "function" for the arcade
    case "arcade":
      arcade.click(event);
      break;
    //runs the click "function" for the store
    case "store":
      store.click(event);
      break;
    //runs the click "function" for Spicy Take
    case "spicy":
      spicy.click(event);
      break;
    //runs the click "function" for the Food Court
    case "food":
      ramen.click(event);
      break;
  }
};

//this function is for each screen the "screen" is what ever variable the buttons are stored in for the file its in
visualNovel.returnToMapClick = function(event, boxObj) {
  if (helperFunction.button.click(boxObj)) {
    visualNovel.display = "map";
    return true;
  }
};

//this function show ths button for return to map, needs the button object, and what color you want it
visualNovel.returnToMapRender = function(boxObj, color) {
  helperFunction.button.render(boxObj, color);
  ctx.font = "48px ariel";
  ctx.fillStyle = "red";
  ctx.fillText("Back To The Mall", 1720, 100);
};

export { visualNovel };
