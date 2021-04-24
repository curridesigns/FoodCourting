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
  
  select(characterSelect){
    if(characterSelect){
      this.isSelected = !this.isSelected;
    }
    
  }
  
  selected(characterPOS){
    if(this.isSelected){
      this.pos[0] = characterPOS[0];
      this.pos[1] = characterPOS[1] + 10;
    }
  }
}

