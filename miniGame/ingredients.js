import { Topping } from "./ramen-toppings.js";
import { randomRange } from "./helper-functions.js";
import { canvas,ctx } from "../canvas.js";

const ingredients = {};

//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.availableIngredients = [
  [new Topping("noodles", 100, 100, "this should be an image", "#FAC600")],
  [new Topping("chashu", 300, 100, "this should be an image", "#CE46E0")],
  [new Topping("kakuni", 100, 300, "this should be an image", "#59A8F7")],
  [new Topping("nikuSoboro", 300, 300, "this should be an image", "#FF9652")],
  [new Topping("ajitama", 100, 600, "this should be an image", "#46E052")],
  [new Topping("menma", 300, 600, "this should be an image", "#4EFAEC")]
];

ingredients.turnedInIngredients = [];

ingredients.bowlIngredients = [];

ingredients.generateBowl = function() {
  for (let i = 0; i < randomRange(5, 10); i++) {
    let j = Math.ceil((Math.random() * 10) % 6);
    switch(j){
      case 1:
        ingredients.bowlIngredients.push(new Topping("noodles", 250+i*50, 10, "this should be an image", "#FAC600"));
        break;
      case 2:
        ingredients.bowlIngredients.push(new Topping("chashu", 250+i*50, 10, "this should be an image", "#CE46E0"));
        break;
      case 3:
        ingredients.bowlIngredients.push(new Topping("kakuni", 250+i*50, 10, "this should be an image", "#59A8F7"));
        break;
      case 4:
        ingredients.bowlIngredients.push(new Topping("nikuSoboro", 250+i*50, 10, "this should be an image", "#FF9652"));
        break;
      case 5:
        ingredients.bowlIngredients.push(new Topping("ajitama", 250+i*50, 10, "this should be an image", "#46E052"));
        break;
      case 6: 
        ingredients.bowlIngredients.push(new Topping("menma", 250+i*50, 10, "this should be an image", "#4EFAEC"));
        break;
    }
    
  }
};

ingredients.renderBowlIngredients = function () {
  for (let i = 0; i < ingredients.bowlIngredients.length; i+=1){
    //ingredients.bowlIngredients[i].pos = {x: 250+i*50, y: 10};
    ingredients.bowlIngredients[i].render();
  }
  // if(ingredients.checkMatch()){
  //   ctx.strokeStyle = `rgb(255,0,0)`;
  //   ctx.beginPath();
  //   ctx.arc(ingredients.bowlIngredients[ingredients.bowlIngredients - 1].)
  // }
}

ingredients.checkMatch = function() {
  if (
    ingredients.turnedInIngredients[
      ingredients.turnedInIngredients.length - 1
    ] != undefined
  ) {
    if (
      ingredients.turnedInIngredients[
        ingredients.turnedInIngredients.length - 1
      ].name !==
      ingredients.bowlIngredients[ingredients.turnedInIngredients.length - 1]
        .name
    ) {
      return true;
    }
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
      if (ingredients.availableIngredients[i][j].turnIn) {
        ingredients.turnedInIngredients.push(
          ingredients.availableIngredients[i].splice(j, 1)
        );
        ingredients.checkFlag = true;
      }

      ingredients.availableIngredients[i][j].select(
        characterGrab,
        characterPOS,
        bowlPOS
      );
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

export { ingredients };