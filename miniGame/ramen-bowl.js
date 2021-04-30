import { canvas, ctx } from "../canvas.js"
import { dist } from "./helper-functions.js"

export class RamenBowl {
  constructor(tempX, tempY){
    this.pos = {x: tempX, y: tempY};
    this.size = 20;
    this.color = "purple";
  }
  
  render(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x,this.pos.y,this.size,this.size);
  }
  
  characterNear(characterPOS){
    if(dist(characterPOS.x, characterPOS.y, this.pos.x, this.pos.y) <= 20){
        return true;
      }
    return false;
  }
  
  hasTopping(topping, characterPOS){
    if(this.characterNear(characterPOS)){
      if(topping.isSelected){
        return true;
      }
    }
    return false;
  }
}

