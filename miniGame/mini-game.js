//separating out the mini-game so it can be referenced later as a popup --- ramen-toppings.js will also need to be referenced for the objects to add on - we might not need to separate it out? We can always put it all here

const miniGame = {};

miniGame.load = function(){
  //moves the initialization of the miniGame to a different function so it can be called when it is needed at the begining of each round
  bowl = new RamenBowl(canvas.width/2,canvas.height/2);
  noodles = [new Topping("noodles", 100,100, "this should be an image")];
}

miniGame.play = function(){
  background();
  character.render();
  character.movement();
  bowl.render();
  //noodles[0].render();
  if(!bowl.hasTopping(noodles, character.pos)){
    
  } else {
    console.log('hello');
  }
  
  
  
  
  
  
  
  for(let i = 0; i > noodles.length+1; i++){
    // if(noodles[i].pos != noodles[i].startPOS){
    //   noodles.push(new Topping("noodles", 100,100, "this should be an image"));
    // }
    console.log('hello')
  }
  
  
  
  
}