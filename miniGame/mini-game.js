//This is the main file for the miniGame. All of the miniGame functions are called here, in order to help keep the canvas.js functions cleaner. All of the necessary files and functions can be found in this folder; except for PlayerCharacter, which can be found in the characters folder.
//import all the necessary files and function
import { canvas, ctx, frameCount }  from "../canvas.js"
import { Topping }from "./ramen-toppings.js"
import { ingredients } from "./ingredients.js"
import { RamenBowl } from "./ramen-bowl.js"
import { PlayerCharacter } from "../characters/player-character.js";
import * as helperfunction from "./helper-functions.js"
//declare global variables for this page
var character, bowl, finishedBowls;

const miniGame = {};

miniGame.preLoad = function() {
 ingredients.preLoad();
}

miniGame.load = function() {
  //moves the initialization of the miniGame to a different function so it can be called when it is needed at the begining of each round
  character = new PlayerCharacter();
  bowl = new RamenBowl(385, 588);
  bowl.generateBowl();
  finishedBowls = 0;  
};

miniGame.play = function() {
  // All updates
  
  character.movement();
  ingredients.select(character.grab, character.pos, bowl.pos);
  if(frameCount%10 === 0){
    console.log(ingredients.availableIngredients[0][0].isRendered)
  }
  // All drawing
  helperfunction.background();
  character.render();
  bowl.render();
  ctx.font = "48px ariel";
  ctx.fillStyle = 'red'
  ctx.fillText(finishedBowls, 1720, 100);
  
  ingredients.renderStarterIngredients();
  ingredients.finishBowl(finishedBowls);
};



export { miniGame, character, bowl }