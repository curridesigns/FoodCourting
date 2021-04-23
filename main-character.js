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
  
  movement(){
    //sets the values for the direction to pass to the physics.movement function
      if (keyIsDown(this.up)) {
        this.pos[0]++;
      }
      //moves the ball down
      if (keyIsDown(this.down)) {
        this.brakePedal = false;
        this.yDirection = 1;
      }
      if (keyIsDown(this.left)) {
        this.brakePedal = false;
        this.xDirection = -1;
      }
      //moves the ball down
      if (keyIsDown(this.right)) {
        this.brakePedal = false;
        this.xDirection = 1;
      }
  }
}