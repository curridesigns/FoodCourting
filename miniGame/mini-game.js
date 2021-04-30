/* global variables canvas, ctx */

//import all the necessary files and function
import { canvas, ctx }  from "../canvas.js"
import { Topping }from "./ramen-toppings.js"
import { ingredients } from "./ingredients.js"
import { RamenBowl } from "./ramen-bowl.js"
import {PlayerCharacter} from "../characters/player-character.js";
import * as helperfunction from "./helper-functions.js"
//declare global variables for this page
var character, noodles, chashu, bowl;

//separating out the mini-game so it can be referenced later as a popup --- ramen-toppings.js will also need to be referenced for the objects to add on - we might not need to separate it out? We can always put it all here
const miniGame = {};

miniGame.load = function() {
  //moves the initialization of the miniGame to a different function so it can be called when it is needed at the begining of each round
  character = new PlayerCharacter();
  bowl = new RamenBowl(canvas.width / 2, canvas.height / 2);
  
};

miniGame.play = function() {
  // All updates

  character.movement();

  //toppingBuilder(noodles);
  //toppingBuilder(chashu);
  
  ingredients.availableIngredients[1].render();
  
  // All drawing
  helperfunction.background();
  character.render();
  bowl.render();
  
  //toppingRender(noodles);
  //toppingRender(chashu);
  
  //console.log(noodles.length)
  // noodles[0].render();
  //   if(!bowl.hasTopping(noodles, character.pos)){

  //   } else {
  //     console.log('hello');
  //   }
};

function toppingBuilder(array){
  
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].hasMoved &&
      !array[i].isSelected &&
      array[i + 1] === undefined
    ) {
      array.push(new Topping(array[0].name, array[0].startPOS.x, array[0].startPOS.y, array[0].image, array[0].color));
    }
    if (array[i].turnedIn) {
      ingredients.push(array.splice(i, 1));
    }

    array[i].select(character.grab, character.pos, bowl.pos);
  }
  
}

function toppingRender(array){
  for (let i = 0; i < array.length; i += 1) {
    array[i].render();
  }

}

function ingredientsBuilder() {
  
}

export { miniGame, character }