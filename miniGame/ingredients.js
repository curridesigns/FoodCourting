import { Topping } from "./ramen-toppings.js"

let noodles = [new Topping("noodles", 100, 100, "this should be an image","#FAC600"),0],
  chashu = [new Topping("chashu", 300, 100, "this should be an image", "#CE46E0")],
  kakuni = [new Topping("kakuni", 100, 300, "this should be an image","#59A8F7")],
  nikuSoboro = [new Topping("nikuSoboro", 300, 300, "this should be an image", "#FF9652")],
  ajitama = [new Topping("ajitama", 100, 600, "this should be an image","#46E052")],
  menma = [new Topping("menma", 300, 600, "this should be an image", "#4EFAEC")];

const ingredients = {};

//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.availableIngredients = [
  [new Topping("noodles", 100, 100, "this should be an image","#FAC600")],
  [new Topping("chashu", 300, 100, "this should be an image", "#CE46E0")],
  [new Topping("kakuni", 100, 300, "this should be an image","#59A8F7")],
  [new Topping("nikuSoboro", 300, 300, "this should be an image", "#FF9652")],
  [new Topping("ajitama", 100, 600, "this should be an image","#46E052")],
  menma[0].name,
];

ingredients.render = function () {
  for (let i = 0; i < ingredients.availableIngredients.length; i += 1) {
    ingredients.availableIngredients[i].render();
  }
}

export { ingredients };