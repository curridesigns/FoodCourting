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
    this.size = 10
  }
  
  render(){
    ctx.fillStyle = "white"
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  select(characterSelect, characterPOS){
    if(this.characterNear(characterPOS)){
      if(characterSelect){
        this.pos = characterPOS;
      }
      if(!characterSelect){
        this.pos = this.pos;
      }
    }
    
  }
  
  characterNear(characterPOS){
    if(characterPOS.x <= this.pos.x + 15 && characterPOS.x >= this.pos.x - 15 && characterPOS.y <= this.pos.y + 15 && characterPOS.y >= this.pos.y - 15){
        return true;
      }
    return false;
  }
}

