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
  constructor(tempName, tempX, tempY, tempImage){
    this.name = tempName;
    this.startPOS = {x: tempX, y: tempY};
    this.pos = {x: tempX, y: tempY};
    this.size = 10;
    this.isSelected = false;
    this.hasMoved = false;
    this.image = tempImage;
  }
  
  render(){
    ctx.fillStyle = "white"
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  select(characterSelect, characterPOS){
    this.isSelected = false;
    if(this.characterNear(characterPOS)){
      if(characterSelect){
        this.pos.x = characterPOS.x;
        this.pos.y = characterPOS.y;
        this.isSelected = true;
        this.hasMoved = true;
      }
    }
    if(!this.isSelected){
        this.pos.x = this.pos.x;
        this.pos.y = this.pos.y;
      }
    
  }
  
  characterNear(characterPOS){
    if(characterPOS.x <= this.pos.x + 15 && characterPOS.x >= this.pos.x - 15 && characterPOS.y <= this.pos.y + 15 && characterPOS.y >= this.pos.y - 15){
        return true;
      }
    return false;
  }
}

