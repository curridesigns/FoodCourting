//separating out the mini-game so it can be referenced later as a popup --- ramen-toppings.js will also need to be referenced for the objects to add on - we might not need to separate it out? We can always put it all here

const miniGame = {};

miniGame.load = function(){
  //this is unused atm, but will eventually have things that need to be initialized for the mini game
}

miniGame.play = function(){
  background();
  character.render();
  character.movement();
  bowl.render();
  
  while(!bowl.hasTopping(noodles, character.pos)){
    noodles.render();
    noodles.select(character.grab.flag, character.pos);
  }
  
}