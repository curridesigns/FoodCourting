//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { arcade } from "./rooms/arcade-counter.js";
import { store } from "./rooms/store-counter.js";
import { spicy } from "./rooms/spicyTake-counter.js";
import { ramen } from "./rooms/ramen-counter.js";

//creates the visualNovel object
const visualNovel = {};

//the mall map
visualNovel.bg = document.getElementById("mallMap");

//give the display a starting value to avoid bugs
visualNovel.display = "map";

//makes the player go to their shift after talking to a npc
visualNovel.forcedMini = false;

//used for testing images
var debug = document.getElementById("debug");

//the buttons for each of the st
const buttons = {
  store: { top: 275, bottom: 575, left: 77, right: 710 },
  spicy: { top: 275, bottom: 470, left: 1095, right: 1415 },
  arcade: { top: 275, bottom: 575, left: 1430, right: 1830 },
  food: { top: 570, bottom: 1045, left: 725, right: 1320 }
}; 
//

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
      switch (visualNovel.endScene) {
        case "ted":
          var alternate = 16;
          if(frameCount % alternate === alternate/2){
          helperFunction.background(ramen.ending1);
          }
          if(frameCount % alternate === 0){
          helperFunction.background(ramen.ending2);
          }
          break;
        case "raven":
          helperFunction.background(debug);
          ctx.fillText(visualNovel.endScene, 500, 500)
          break;
        case "chad":
          helperFunction.background(debug);
          ctx.fillText(visualNovel.endScene, 500, 500)
          break;
        case "taylor":
          helperFunction.background(debug);
          ctx.fillText(visualNovel.endScene, 500, 500)
          break;
      }
      break;
  }
};

visualNovel.click = function(event) {
  // if (visualNovel.forcedMini) {
  //   if (visualNovel.display === "food") {
  //     ramen.click(event);
  //   } else {
  //     if (helperFunction.button.click(buttons.store)) {
  //       window.alert("Please go to the Food Court for your shift!");
  //     }
  //     //sends you to Spicy Take
  //     if (helperFunction.button.click(buttons.spicy)) {
  //       window.alert("Please go to the Food Court for your shift!");
  //     }
  //     //sends you to the Arcade
  //     if (helperFunction.button.click(buttons.arcade)) {
  //       window.alert("Please go to the Food Court for your shift!");
  //     }
  //     //sends you to the Food Court to work a shift
  //     if (helperFunction.button.click(buttons.food)) {
  //       visualNovel.display = "food";
  //     }
  //   }
  // } else 
  {
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
  }
};

export { visualNovel };
