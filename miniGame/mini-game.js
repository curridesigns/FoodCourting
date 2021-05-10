/* global variables canvas, ctx */

//import all the necessary files and function
import { canvas, ctx }  from "../canvas.js"
import { Topping }from "./ramen-toppings.js"
import { ingredients } from "./ingredients.js"
import { RamenBowl } from "./ramen-bowl.js"
import { PlayerCharacter } from "../characters/player-character.js";
import * as helperfunction from "./helper-functions.js"
//declare global variables for this page
var character, bowl;

//separating out the mini-game so it can be referenced later as a popup --- ramen-toppings.js will also need to be referenced for the objects to add on - we might not need to separate it out? We can always put it all here
const miniGame = {};

miniGame.preLoad = function() {
 ingredients.preLoad();
}

miniGame.load = function() {
  //moves the initialization of the miniGame to a different function so it can be called when it is needed at the begining of each round
  character = new PlayerCharacter();
  bowl = new RamenBowl(canvas.width / 2, canvas.height / 2);
  //ingredients.generateBowl();
  
  //ingredients.availableIngredients;
};

miniGame.play = function() {
  // All updates

  character.movement();
  ingredients.select(character.grab, character.pos, bowl.pos);
  // ingredients.bowlComplete();
  //toppingBuilder(noodles);
  //toppingBuilder(chashu);

  
  // All drawing
  helperfunction.background();
  character.render();
  bowl.render();
  
  ingredients.renderStarterIngredients();
  //ingredients.renderBowlIngredients();
  //console.log(ingredients.turnedInIngredients.length);
  
  //toppingRender(noodles);
  //toppingRender(chashu);
  
  //console.log(noodles.length)
  // noodles[0].render();
  //   if(!bowl.hasTopping(noodles, character.pos)){

  //   } else {
  //     console.log('hello');
  //   }
};



export { miniGame, character }