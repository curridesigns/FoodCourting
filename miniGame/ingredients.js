//this is where the ingredients are setup, rendered, selected, and new bowls are generated when one has been completed

import { Topping } from "./ramen-toppings.js";
import { randomRange } from "../helper-functions.js";
import { canvas, ctx } from "../canvas.js";
import { bowl, miniGame } from "./mini-game.js";

const ingredients = {};

//TODO: implement a limit on the available ingredients subarrays
//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.preLoad = function(){
ingredients.images = { mushroom: document.getElementById("mush"), egg: document.getElementById("egg"), sea420: document.getElementById("sea420"), spawn: document.getElementById("spawn"), swirly: document.getElementById("swirly"), noods: document.getElementById("noods") };
  
  ingredients.availableIngredients = [
  [new Topping("mushroom", 750, 100, ingredients.images.mushroom, "#FAC600")],
  [new Topping("egg", 950, 100, ingredients.images.egg, "#CE46E0")],
  [new Topping("sea420", 750, 575, ingredients.images.sea420, "#59A8F7")],
  [new Topping("spawn", 950, 575, ingredients.images.spawn, "#FF9652")],
  [new Topping("swirly", 750, 1000, ingredients.images.swirly, "#46E052")],
  [new Topping("noodles", 950, 1000, ingredients.images.noods, "#4EFAEC")]
];
  ingredients.finishedBowls = 0;
};

ingredients.reset = function(){
  for(let i = 0; i<ingredients.availableIngredients.length;i++){
      ingredients.availableIngredients[i].splice(1); //removes all elements from the array after the first one
    ingredients.availableIngredients[i].push(
          new Topping(
            ingredients.availableIngredients[i][0].name,
            ingredients.availableIngredients[i][0].startPOS.x,
            ingredients.availableIngredients[i][0].startPOS.y,
            ingredients.availableIngredients[i][0].image,
            ingredients.availableIngredients[i][0].color
          )
        );
  }
  ingredients.checkIndex = 0;
  bowl.generateBowl();
  
}

ingredients.checkMatch = function(checkObj) {
  if (bowl.bowlIngredients[ingredients.checkIndex] === undefined){
    return false;
  } else if (checkObj.name === bowl.bowlIngredients[ingredients.checkIndex].name) {
    ingredients.checkIndex++;
    return true;
  }
  return false;
};

ingredients.renderStarterIngredients = function() {
  for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
    for (let j = 0; j < ingredients.availableIngredients[i].length; j++) {
      ingredients.availableIngredients[i][j].render();
    }
  }
};

ingredients.select = function(characterGrab, characterPOS, bowlPOS) {
  //runs through the multidimensional array of avvailableIngredients
  for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
    for (let j = 1; j < ingredients.availableIngredients[i].length; j++) {
      let availIngred = ingredients.availableIngredients[i][j];
      //adds a new ingredient to the array when it has been moved
      if (
        availIngred.hasMoved &&
        !availIngred.isSelected &&
        ingredients.availableIngredients[i][j + 1] === undefined
      ) {
        ingredients.availableIngredients[i].push(
          new Topping(
            ingredients.availableIngredients[i][0].name,
            ingredients.availableIngredients[i][0].startPOS.x,
            ingredients.availableIngredients[i][0].startPOS.y,
            ingredients.availableIngredients[i][0].image,
            ingredients.availableIngredients[i][0].color
          )
        );
        characterGrab.hasObject = false;
      }
      //checks if the 
      if (availIngred.turnIn) {
        if (ingredients.checkMatch(availIngred)) {
          bowl.turnedInIngredients.push(
            ingredients.availableIngredients[i].splice(j, 1)
          );
          ingredients.availableIngredients[i].push(
          new Topping(
            ingredients.availableIngredients[i][0].name,
            ingredients.availableIngredients[i][0].startPOS.x,
            ingredients.availableIngredients[i][0].startPOS.y,
            ingredients.availableIngredients[i][0].image,
            ingredients.availableIngredients[i][0].color
          )
        );
          // console.log(bowl.turnedInIngredients)
        }
      }

      availIngred.select(characterGrab, characterPOS, bowlPOS);
    }
  }

  // for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
  //   for (let j = 0; j < ingredients.availableIngredients[i].length; j++) {
  //     if (
  //       ingredients.availableIngredients[i][j].hasMoved &&
  //       !ingredients.availableIngredients[i][j].isSelected &&
  //       ingredients.availableIngredients[i][j + 1] === undefined
  //     ) {
  //       ingredients.availableIngredients[i].push(
  //         new Topping(
  //           ingredients.availableIngredients[i][0].name,
  //           ingredients.availableIngredients[i][0].startPOS.x,
  //           ingredients.availableIngredients[i][0].startPOS.y,
  //           ingredients.availableIngredients[i][0].image,
  //           ingredients.availableIngredients[i][0].color
  //         )
  //       );
  //     }
  //   }
  // }
};

ingredients.finishBowl = function (finishedBowls){
  //console.log("this is from the ")
  if(ingredients.checkIndex === bowl.bowlIngredients.length){
    ingredients.reset();
    miniGame.finishedBowls+=1;
    
  }
  ctx.font = "48px ariel";
  ctx.fillStyle = 'red'
  ctx.fillText(miniGame.finishedBowls, 1720, 100);
  if(miniGame.finishedBowls === 2){
    return true;
  }
  return false;
};

// ingredients.bowlComplete = function() {
//   if (checkIndex === ingredients.bowlIngredients.length) {
//     ingredients.turnedInIngredients = [];
//     console.log(checkIndex);
//     ingredients.generateBowl();
//   }
// };

export { ingredients };
