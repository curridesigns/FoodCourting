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
    if(characterSelect){
      
    }
    if(this.isSelected){
      this.pos[0] = characterPOS.x;
      this.pos[1] = characterPOS.y - 15;
    }
    
  }
  
  characterNear(characterPOS){
    if(characterPOS.x <= this.pos.x + 15 && characterPOS.x >= this.pos.x - 15){
        console.log("it is near")\;
      }
  }
}

