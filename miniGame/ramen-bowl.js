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
}