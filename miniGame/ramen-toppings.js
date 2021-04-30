import { canvas, ctx } from "../canvas.js"
import { dist } from "./helper-functions.js"

class Topping {
  constructor(tempName, tempX, tempY, tempImage, tempColor){
    this.name = tempName;
    this.startPOS = {x: tempX, y: tempY};
    this.pos = {x: tempX, y: tempY};
    this.size = 10;
    this.isSelected = false;
    this.hasMoved = false;
    this.turnedIn = false;
    this.image = tempImage;
    this.color = tempColor;
  }
  
  render(overrideX,overrideY){
    if(overrideX === undefined && overrideY === undefined){
      ctx.fillStyle = this.color
      ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
      if(this.hasMoved){
        ctx.fillStyle = (250,11,0,0.2);
        ctx.fillRect(this.startPOS.x, this.startPOS.y, this.size, this.size);
      }
    } else {
      ctx.fillStyle = this.color
      ctx.fillRect(overrideX, overrideY, this.size, this.size);
    }
  }
  
  select(characterSelect, characterPOS, bowlPOS){
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
    if(!this.isSelected && this.bowlNear(bowlPOS)){
      this.turnedIn = true;
    }
    
    if(this.pos.x != this.startPOS.x && this.pos.y != this.startPOS.y){
      this.hasMoved = true;
    }
    
  }
  
  characterNear(characterPOS){
    //TODO: make a distance function
    if(dist(characterPOS.x, characterPOS.y, this.pos.x, this.pos.y) <= 20){
        return true;
      }
    return false;
  }
  
  bowlNear(bowlPOS){
     if(dist(bowlPOS.x, bowlPOS.y, this.pos.x, this.pos.y)  <= 20){
        return true;
      }
    return false;
  }
}

export { Topping }