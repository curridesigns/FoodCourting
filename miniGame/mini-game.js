/* global variables canvas, ctx */

//import all the necessary files and function
import * as Topping from "./ramen-toppings.js"
import * as RamenBowl from "./ramen-bowl.js"
import * as helperfunv
//declare global variables for this page
var character, noodles, bowl;

//separating out the mini-game so it can be referenced later as a popup --- ramen-toppings.js will also need to be referenced for the objects to add on - we might not need to separate it out? We can always put it all here
let ingredients = [];
const miniGame = {};

miniGame.load = function() {
  //moves the initialization of the miniGame to a different function so it can be called when it is needed at the begining of each round
  bowl = new RamenBowl(canvas.width / 2, canvas.height / 2);
  noodles = [new Topping("noodles", 100, 100, "this should be an image")];
};

miniGame.play = function() {
  // All updates

  character.movement();

  for (let i = 0; i < noodles.length; i++) {
    if (
      noodles[i].hasMoved &&
      !noodles[i].isSelected &&
      noodles[i + 1] === undefined
    ) {
      noodles.push(new Topping("noodles", 100, 100, "this should be an image"));
    }
    if (noodles[i].turnedIn) {
      ingredients.push(noodles.splice(i, 1));
    }

    noodles[i].select(character.grab.flag, character.pos, bowl.pos);
  }

  
  // All drawing
  background();
  character.render();
  bowl.render();

  for (let i = 0; i < noodles.length; i += 1) {
    noodles[i].render();
  }

  //console.log(noodles.length)
  // noodles[0].render();
  //   if(!bowl.hasTopping(noodles, character.pos)){

  //   } else {
  //     console.log('hello');
  //   }
};


export { miniGame }