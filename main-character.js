class Character {
  constructor(){
    this.pos = [20,20];
    this.size = 10;
    this.up = {key: 87, flag: false}
    this.down = {key: 83, flag: false};
    this.right = {key: 68, flag: false};
    this.left = {key: 65, flag: false};
    this.grab = {key: 32, flag: false};
    this.size = [20,20];
    this.steps = 2;
  }
  
  render(){
    ctx.fillStyle = "white"
    ctx.fillRect(...this.pos, ...this.size);
  }
  
  keyDownHandler(){
    if(event.keyCode == this.up.key){
      this.up.flag = true;
    }
    if(event.keyCode == this.down.key){
      this.down.flag = true;
    }
    if(event.keyCode == this.left.key){
      this.left.flag = true;
    }
    if(event.keyCode == this.right.key){
      this.right.flag = true;
    }
  }
  
  keyUpHandler(){
    if(event.keyCode == this.up.key){
      this.up.flag = false;
    }
    if(event.keyCode == this.down.key){
      this.down.flag = false;
    }
    if(event.keyCode == this.left.key){
      this.left.flag = false;
    }
    if(event.keyCode == this.right.key){
      this.right.flag = false;
    }
    if(event.keyCode == this.grab.key){
      this.grab.flag = !this.grab.flag
    }
  }
  
  movement(){
    //sets the values for the direction to pass to the physics.movement function
      if (this.up.flag) {
        this.pos[1] -= this.steps;
      }
      //moves the ball down
      if (this.down.flag) {
        this.pos[1] += this.steps;
      }
      if (this.left.flag) {
        this.pos[0] -= this.steps;
      }
      //moves the ball down
      if (this.right.flag) {
        this.pos[0] += this.steps;
      }
  }
  
  hello(){
    console.log("this works");
  }
}