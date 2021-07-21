//this is where the ingredients are setup, rendered, selected, and new bowls are generated when one has been completed
//imports the necessary functions and variables from the other modules in the project
import { Topping } from "./ramen-toppings.js";
import { randomRange } from "../helper-functions.js";
import { canvas, ctx } from "../canvas.js";
import { bowl, miniGame } from "./mini-game.js";

const ingredients = {};

//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.preLoad = function() {
  //all the images for the ingredients
  ingredients.images = {
    mushroom: document.getElementById("mush"),
    egg: document.getElementById("egg"),
    sea420: document.getElementById("sea420"),
    spawn: document.getElementById("spawn"),
    swirly: document.getElementById("swirly"),
    noods: document.getElementById("noods")
  };

  //the array of ingredients that is looped through later in the code
  ingredients.availableIngredients = [
    [new Topping("mushroom", 750, 100, ingredients.images.mushroom, "#FAC600")],
    [new Topping("noodles", 950, 1000, ingredients.images.noods, "#4EFAEC")],
    [new Topping("egg", 950, 100, ingredients.images.egg, "#CE46E0")],
    [new Topping("sea420", 750, 575, ingredients.images.sea420, "#59A8F7")],
    [new Topping("spawn", 950, 575, ingredients.images.spawn, "#FF9652")],
    [new Topping("swirly", 750, 1000, ingredients.images.swirly, "#46E052")]
  ];
  //how many bowls the player has finished
  ingredients.finishedBowls = 0;
};

//used to reset ingredients, and clean up between bowls, and miniGames
ingredients.reset = function() {
  for (let i = 0; i < ingredients.availableIngredients.length; i++) {
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
};

//checks if the ingredient turned in by the player matches the next one in the bowl
ingredients.checkMatch = function(checkObj) {
  if (bowl.bowlIngredients[ingredients.checkIndex] === undefined) {
    return false;
  } else if (
    checkObj.name === bowl.bowlIngredients[ingredients.checkIndex].name
  ) {
    ingredients.checkIndex++;
    return true;
  }
  return false;
};

//renders the ingredients that are shown on the counters
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
      //checks if the current ingredient wants to be turned in
      if (availIngred.turnIn) {
        //runs checkMatch() on the ingredient that wants to be turned in
        if (ingredients.checkMatch(availIngred)) {
          //puts that ingredient in the bowl
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
        }
      }
      //runs select() for each ingredient
      availIngred.select(characterGrab, characterPOS, bowlPOS);
    }
  }
};

//tells if a bowl has been finished, and if the number of finished bowls has reached to correct 
//value for each shift
ingredients.finishBowl = function() {
  //console.log("this is from the ")
  if (ingredients.checkIndex === bowl.bowlIngredients.length) {
    ingredients.reset();
    miniGame.finishedBowls += 1;
  }
  ctx.font = "48px ariel";
  ctx.fillStyle = "red";
  ctx.fillText(miniGame.finishedBowls, 1720, 100);
};

export { ingredients };
