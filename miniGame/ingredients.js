import { Topping } from "./ramen-toppings.js";
import { randomRange } from "./helper-functions.js";
import { canvas, ctx } from "../canvas.js";
import { bowl } from "./mini-game.js";

const ingredients = {};

//TODO: implement a limit on the available ingredients subarrays
//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.preLoad = function(){
ingredients.images = { mushroom: document.getElementById("mush"), egg: document.getElementById("egg"), sea420: document.getElementById("sea420"), spawn: document.getElementById("spawn"), swirly: document.getElementById("swirly") };
  
  ingredients.availableIngredients = [
  [new Topping("mushroom", 750, 100, ingredients.images.mushroom, "#FAC600")],
  [new Topping("egg", 950, 100, ingredients.images.egg, "#CE46E0")],
  [new Topping("sea420", 750, 575, ingredients.images.sea420, "#59A8F7")],
  [new Topping("spawn", 950, 575, ingredients.images.spawn, "#FF9652")],
  [new Topping("swirly", 750, 1000, ingredients.images.swirly, "#46E052")],
  //[new Topping("menma", 300, 600, ingredients.images.mushroom, "#4EFAEC")]
];
  ingredients.checkIndex = 0;
}

ingredients.checkMatch = function(checkObj) {
  if (checkObj.name === bowl.bowlIngredients[ingredients.checkIndex].name) {
    ingredients.checkIndex++;
    console.log(ingredients.checkIndex);
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
    for (let j = 0; j < ingredients.availableIngredients[i].length; j++) {
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
          // console.log(ingredients.turnedInIngredients);
        }
      }

      availIngred.select(characterGrab, characterPOS, bowlPOS);
    }
  }

  for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
    for (let j = 0; j < ingredients.availableIngredients[i].length; j++) {
      if (
        ingredients.availableIngredients[i][j].hasMoved &&
        !ingredients.availableIngredients[i][j].isSelected &&
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
      }
    }
  }
};

ingredients.finishBowl = function (){
  if(ingredients.checkIndex > bowl.ingredients)
};

// ingredients.bowlComplete = function() {
//   if (checkIndex === ingredients.bowlIngredients.length) {
//     ingredients.turnedInIngredients = [];
//     console.log(checkIndex);
//     ingredients.generateBowl();
//   }
// };

export { ingredients };
