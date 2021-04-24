class Character {
  constructor(){
    this.pos = {x:20,y:20};
    this.size = 10;
    this.up = {key: 87, flag: false}
    this.down = {key: 83, flag: false};
    this.right = {key: 68, flag: false};
    this.left = {key: 65, flag: false};
    this.grab = {key: 32, flag: false};
    this.size = [20,20];
    this.direction = {x:0,y:0};
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
    if(event.keyCode == this.grab.key){
      this.grab.flag = true;
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
      this.grab.flag = false;
    }
  }
  
  movement(){
    //sets the values for the direction to pass to the physics.movement function
      if (this.up.flag) {
        this.direction.x = -1
      }
      //moves the ball down
      if (this.down.flag) {
        this.direction.x = 1;
      }
      if (this.left.flag) {
        this.direction.y = -1;
      }
      //moves the ball down
      if (this.right.flag) {
        this.direction.y = 1;
      }
  }
  
  hello(){
    console.log("this works");
  }
}