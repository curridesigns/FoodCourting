//grouping of objects for the mini-ramen-game - will be referenced in mini-game
// const  ramen = {};

// ramen.noodles = function (){
  
// }

// ramen.egg = function (){  
  
// }

// ramen.weed = function (){
  
// }

// ramen.broth = function (){
  
// }

//some pseudo code to try and help me figure out some back end


class Topping {
  constructor(tempName, tempLocation, tempImage){
    this.name = tempName;
    this.pos = tempLocation;
    this.image = tempImage;
    this.isSelected = false;
  }
  
  render(){
    rect(...this.pos,20);
  }
  
  selected(characterPOS){
    if(this.isSelected){
      this.pos[]
    }
  }
}

