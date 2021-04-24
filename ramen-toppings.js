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
    this.size = [10,10]
  }
  
  render(){
    ctx.fillStyle = "white"
    ctx.fillRect(...this.pos, ...this.size);
  }
  
  select(characterSelect, characterPOS){
    if(characterSelect){
      if(characterPOS[0] <= this.pos[0] + 15 && characterPOS[0] >= this.pos[0] +15){
      this.isSelected = !this.isSelected;
      }
    }
    if(this.isSelected){
      this.pos[0] = characterPOS[0];
      this.pos[1] = characterPOS[1] - 15;
    }
    
  }
  
  selected(characterPOS){
    
  }
}

