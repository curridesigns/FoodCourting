//This is the main file for the miniGame. All of the miniGame functions are called here, in order to help keep the canvas.js functions cleaner. All of the necessary files and functions can be found in this folder; except for PlayerCharacter, which can be found in the characters folder.
//import all the necessary files and function
import { canvas, ctx, frameCount } from "../canvas.js";
import { endScreen } from "../EndScreen.js";
import { Topping } from "./ramen-toppings.js";
import { ingredients } from "./ingredients.js";
import { RamenBowl } from "./ramen-bowl.js";
import { PlayerCharacter } from "../characters/player-character.js";
import { ted } from "../characters/ted.js";
import * as helperFunction from "../helper-functions.js";
//declare global variables for this page
var character, bowl;
const miniGame = {};
//the images for the miniGame that weren't setup elsewhere
const kitchenBG = document.getElementById("kitchenBG");
const bowlImage = document.getElementById("bowl");

//run in setup() on canvas.js
miniGame.preLoad = function() {
  ingredients.preLoad();
};


//run in setup() on canvas.js, has to come after preload so all the images are there
miniGame.load = function() {
  character = new PlayerCharacter();
  bowl = new RamenBowl(385, 588, bowlImage);
  ingredients.reset();
  miniGame.reset();
};

miniGame.play = function() {
  // All updates
  character.movement();
  ted.miniGame.movement();
  ingredients.select(character.grab, character.pos, bowl.pos);
  
  //if the player runs into ted it ends the miniGame, and sets the tedEnding bool to true
  if (
    helperFunction.dist(
      character.pos.x,
      character.pos.y,
      ted.miniGame.pos.x,
      ted.miniGame.pos.y
    ) <
    character.size + ted.miniGame.size
  ) {
    miniGame.tedEnding = true;
    miniGame.finished = true;
  }

  // All drawing
  helperFunction.background(kitchenBG);
  character.render();
  ted.render("miniGame");
  bowl.render();
  ingredients.renderStarterIngredients();
  if (ingredients.finishBowl()) {
    miniGame.finished = true;
  }
  //debug purposes only
  if (frameCount % 10 === 0) {
    //prevents console.log from crashing the screen by slowing the number of logs it generates
  }
};

//used to start the miniGame over again after each attempt
miniGame.reset = function() {
  ingredients.reset();
  miniGame.finished = false;
  miniGame.finishedBowls = 0;
  ted.miniGame.pos = { x: 1825, y: 300 };
  miniGame.tedEnding = false;
  character.pos = { x: 650, y: 250 };
};

export { miniGame, character, bowl };
