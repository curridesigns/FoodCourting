//separating out the mini-game so it can be referenced later as a popup --- ramen-toppings.js will also need to be referenced for the objects to add on - we might not need to separate it out? We can always put it all here

const miniGame = {};

miniGame.play = function(){
  background();
  character.render();
  character.movement();
  noodles.render();
  noodles.select(character.grab.flag, character.pos);
}