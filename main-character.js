class MainCharacter {
  constructor(){
    this.pos = [100,100];
    this.size = 10;
    this.up = 38;
    this.down = 40
    this.right = 39;
    this.left = 37;
    this.select = 32;
  }
  
  render(){
    rect(...this.pos,20);
  }
}