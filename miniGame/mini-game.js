//This is the main file for the miniGame. All of the miniGame functions are called here, in order to help keep the canvas.js functions cleaner. All of the necessary files and functions can be found in this folder; except for PlayerCharacter, which can be found in the characters folder.
//import all the necessary files and function
import { canvas, ctx, frameCount } from "../canvas.js";
import { endScreen } from "../EndScreen.js";
import { Topping } from "./ramen-toppings.js";
import { ingredients } from "./ingredients.js";
import { RamenBowl } from "./ramen-bowl.js";
import { PlayerCharacter } from "../characters/player-character.js";
import * as helperFunction from "../helper-functions.js";
//declare global variables for this page
var character, bowl;

const miniGame = {};
const kitchenBG = document.getElementById("kitchenBG");
const bowlImage = document.getElementById("bowl");


miniGame.preLoad = function() {
  ingredients.preLoad();
  
};

miniGame.load = function() {
  //moves the initialization of the miniGame to a different function so it can be called when it is needed at the begining of each round
  character = new PlayerCharacter();
  bowl = new RamenBowl(385, 588, bowlImage);
  miniGame.finishedBowls = 0;
  ingredients.reset();
  
};

miniGame.play = function() {
  // All updates
  character.movement();
  ingredients.select(character.grab, character.pos, bowl.pos);
  
  // All drawing
  helperFunction.background(kitchenBG);
  character.render();
  bowl.render();
  ingredients.renderStarterIngredients();
  if (ingredients.finishBowl()){
    miniGame.finished = true;
    console.log("hello");
  }

  //debug purposes only
  if (frameCount % 10 === 0) {
  }
};

export { miniGame, character, bowl };
