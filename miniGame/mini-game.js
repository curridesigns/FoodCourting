//separating out the mini-game so it can be referenced later as a popup --- ramen-toppings.js will also need to be referenced for the objects to add on - we might not need to separate it out? We can always put it all here
let ingredients = [];
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
  //console.log(noodles.length)
  // noodles[0].render();
//   if(!bowl.hasTopping(noodles, character.pos)){
    
//   } else {
//     console.log('hello');
//   }
  
  
  
  
  
  
  for(let i=0; i<noodles.length;i++){
    if(noodles[i].hasMoved && !noodles[i].isSelected){
      if(noodles[i+1]===undefined){
        noodles.push(new Topping("noodles", 100,100, "this should be an image"));
      }
    }
    if(noodles[i].turnedIn){
      ingredients.push(noodles.shift(noodles[i]));
    }
    noodles[i].render();
    noodles[i].select(character.grab.flag, character.pos, bowl.pos);
  }
  
  
  
  
}