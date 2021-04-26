class RamenBowl {
  constructor(tempX, tempY){
    this.pos = {x: tempX, y: tempY};
    this.size = 20;
    this.color = "red";
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
}