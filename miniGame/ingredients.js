import { Topping } from "./ramen-toppings.js"

const ingredients = {};

//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.availableIngredients = [
  [new Topping("noodles", 100, 100, "this should be an image","#FAC600")],
  [new Topping("chashu", 300, 100, "this should be an image", "#CE46E0")],
  [new Topping("kakuni", 100, 300, "this should be an image","#59A8F7")],
  [new Topping("nikuSoboro", 300, 300, "this should be an image", "#FF9652")],
  [new Topping("ajitama", 100, 600, "this should be an image","#46E052")],
  [new Topping("menma", 300, 600, "this should be an image", "#4EFAEC")],
];

ingredients.render = function () {
  for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
    for(let j = 0; j < ingredients.availableIngredients[i].length; j++){
      ingredients.availableIngredients[i][j].render();
    }
  }
}

ingredients.select = function (characterGrab) {
  
  for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
    for(let j = 0; j < ingredients.availableIngredients[i].length; j++){
      if (
      ingredients.availableIngredients[i][j].hasMoved &&
      !ingredients.availableIngredients[i][j].isSelected &&
      ingredients.availableIngredients[i][j + 1] === undefined
    ) {
      ingredients.availableIngredients[i].push(new Topping(ingredients.availableIngredients[i][0].name, ingredients.availableIngredients[i][0].startPOS.x, ingredients.availableIngredients[i][0].startPOS.y, ingredients.availableIngredients[i][0].image, ingredients.availableIngredients[i][0].color));
    }
    if (ingredients.availableIngredients[i][j].turnedIn) {
      ingredients.push(ingredients.availableIngredients[i][j].splice(i, 1));
    }

    array[i].select(character.grab, character.pos, bowl.pos);
  }
    }
  
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

export { ingredients };