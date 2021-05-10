import { Topping } from "./ramen-toppings.js";
import { randomRange } from "./helper-functions.js";
import { canvas, ctx } from "../canvas.js";

const ingredients = {};
let checkIndex;
//TODO: implement a limit on the available ingredients subarrays
//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.preLoad = function(){
ingredients.images = { mushroom: document.getElementById("mush") };
  
  ingredients.availableIngredients = [
  [new Topping("noodles", 100, 100, ingredients.images.mushroom, "#FAC600")],
  [new Topping("chashu", 300, 100, ingredients.images.mushroom, "#CE46E0")],
  [new Topping("kakuni", 100, 300, ingredients.images.mushroom, "#59A8F7")],
  [new Topping("nikuSoboro", 300, 300, ingredients.images.mushroom, "#FF9652")],
  [new Topping("ajitama", 100, 600, ingredients.images.mushroom, "#46E052")],
  [new Topping("menma", 300, 600, ingredients.images.mushroom, "#4EFAEC")]
];
}

ingredients.generateBowl = function() {
  ingredients.turnedInIngredients = [];
  ingredients.bowlIngredients = [];
  for (let i = 0; i < randomRange(3, 5); i++) {
    let j = Math.ceil((Math.random() * 10) % 6);
    switch (j) {
      case 1:
        ingredients.bowlIngredients.push(
          new Topping(
            "noodles",
            250 + i * 50,
            10,
            "this should be an image",
            "#FAC600"
          )
        );
        break;
      case 2:
        ingredients.bowlIngredients.push(
          new Topping(
            "chashu",
            250 + i * 50,
            10,
            "this should be an image",
            "#CE46E0"
          )
        );
        break;
      case 3:
        ingredients.bowlIngredients.push(
          new Topping(
            "kakuni",
            250 + i * 50,
            10,
            "this should be an image",
            "#59A8F7"
          )
        );
        break;
      case 4:
        ingredients.bowlIngredients.push(
          new Topping(
            "nikuSoboro",
            250 + i * 50,
            10,
            "this should be an image",
            "#FF9652"
          )
        );
        break;
      case 5:
        ingredients.bowlIngredients.push(
          new Topping(
            "ajitama",
            250 + i * 50,
            10,
            "this should be an image",
            "#46E052"
          )
        );
        break;
      case 6:
        ingredients.bowlIngredients.push(
          new Topping(
            "menma",
            250 + i * 50,
            10,
            "this should be an image",
            "#4EFAEC"
          )
        );
        break;
    }
  }
  checkIndex = 0;
  console.log(ingredients.bowlIngredients);
};

ingredients.checkMatch = function(checkObj) {
  if (checkObj.name === ingredients.bowlIngredients[checkIndex].name) {
    checkIndex++;
    console.log(checkIndex);
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
  for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
    for (let j = 0; j < ingredients.availableIngredients[i].length; j++) {
      let availIngred = ingredients.availableIngredients[i][j];
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
      }
      if (availIngred.turnIn) {
        if (ingredients.checkMatch(availIngred)) {
          ingredients.turnedInIngredients.push(
            ingredients.availableIngredients[i].splice(j, 1)
          );
          console.log(ingredients.turnedInIngredients);
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

// ingredients.bowlComplete = function() {
//   if (checkIndex === ingredients.bowlIngredients.length) {
//     ingredients.turnedInIngredients = [];
//     console.log(checkIndex);
//     ingredients.generateBowl();
//   }
// };

export { ingredients };
