import { canvas, ctx } from "../canvas.js"

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
    if(characterPOS.x <= this.pos.x + 15 && characterPOS.x >= this.pos.x - 15 && characterPOS.y <= this.pos.y + 15 && characterPOS.y >= this.pos.y - 15){
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

