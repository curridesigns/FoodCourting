class Character {
  constructor(){
    this.pos = [20,20];
    this.size = 10;
    this.up = 87;
    this.down = 83;
    this.right = 68;
    this.left = 65;
    this.select = 32;
  }
  
  render(){
    rect(...this.pos,20);
  }
  
  movement(){
    //sets the values for the direction to pass to the physics.movement function
      if (keyIsDown(this.up)) {
        this.pos[1]--;
      }
      //moves the ball down
      if (keyIsDown(this.down)) {
        this.pos[1]++;
      }
      if (keyIsDown(this.left)) {
        this.pos[0]--;
      }
      //moves the ball down
      if (keyIsDown(this.right)) {
        this.pos[0]++;
      }
  }
  
  grab(){
    if(keyIsDown(this.select)){
      return = true;
    }
  }
}