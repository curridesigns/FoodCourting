import { Topping } from "./ramen-toppings.js"

// let noodles, chashu, kakuni, nikuSoboro, ajitama, menma;

const ingredients = {};

//moves the declaration of ingredients to a new spot that can be managed easier
ingredients.availableIngredients = [
  noodles = [new Topping("noodles", 100, 100, "this should be an image","#FAC600")],
  chashu = [new Topping("chashu", 300, 100, "this should be an image", "#CE46E0")],
  kakuni = [new Topping("noodles", 100, 300, "this should be an image","#59A8F7")],
  nikuSoboro = [new Topping("chashu", 300, 300, "this should be an image", "#FF9652")],
  ajitama = [new Topping("noodles", 100, 600, "this should be an image","#46E052")],
  menma = [new Topping("chashu", 300, 600, "this should be an image", "#4EFAEC")],
];

export { ingredients };