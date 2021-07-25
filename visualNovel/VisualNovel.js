//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount, player } from "../canvas.js";
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

//the buttons for each of the stores in the mall
const buttons = {
  store: { top: 80, bottom: 605, left: 70, right: 605 },
  spicy: { top: 80, bottom: 350, left: 570, right: 930 },
  arcade: { top: 80, bottom: 605, left: 1350, right: 1830 },
  food: { top: 575, bottom: 1030, left: 575, right: 1315 }
}; 


//visualNovel's render function
visualNovel.load = function() {
  //changes what is displayed based on the visualNovel.display machine state
  switch (visualNovel.display) {
    //displays the map
    case "map":
      visualNovel.mapRender();
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
      //displays the ending cards for each of the characters
    case "ending":
      switch (visualNovel.endScene) {
        case "ted":
          //ted's has two images that it switches back and forth.
          var alternate = 16;
          if(frameCount % alternate === alternate/2){
          helperFunction.background(ramen.ending1);
          }
          if(frameCount % alternate === 0){
          helperFunction.background(ramen.ending2);
          }
          break;
        case "raven":
          helperFunction.background(spicy.ending);
          break;
        case "chad":
          helperFunction.background(arcade.ending);
          break;
        case "taylor":
          helperFunction.background(store.ending);
          break;
      }
      break;
  }
};

visualNovel.click = function(event) {
  //this code can be commented out in order to not have to do a shift after every chat
  /*if (visualNovel.forcedMini) {
    if (visualNovel.display === "food") {
      ramen.click(event);
    } else {
      if (helperFunction.button.click(buttons.store)|| helperFunction.button.click(buttons.spicy)
          || helperFunction.button.click(buttons.arcade) ) {
        visualNovel.forcedShift = true;
      }
      //sends you to the Food Court to work a shift
      if (helperFunction.button.click(buttons.food)) {
        visualNovel.display = "food";
        visualNovel.forcedShift = false;
      }
    }
  } else */
  {
    switch (visualNovel.display) {
      //runs the click "function" for the map
      case "map":
        if (player.invenotery.display) {
          player.invenotery.click(event);
        } else { 
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
          player.invenotery.click(event);
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

visualNovel.mapRender = function() {
  
  var shiftPopup = { top: 80, bottom: 605, left: 70, right: 605 }
  var shiftMessage = "Please go to the Food Court for your shift!"

  helperFunction.background(visualNovel.bg);
  helperFunction.dialogueBoxes(
    player.moneyBox,
    "$" + player.money,
    10,
    30,
    24,
    ctx,
    "white",
    "#00000000"
  );


  if (visualNovel.forcedShift) {
    helperFunction.dialogueBoxes(shiftPopup, shiftMessage, 10, 58, 48, ctx, "black", "white");
  }
  player.invenotery.render();
  
}

export { visualNovel };
