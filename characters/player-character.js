import { canvas, ctx } from "../canvas.js";
import { physics } from "../miniGame/physics.js";

class PlayerCharacter {
  constructor() {
    this.pos = { x: 650, y: 250 };
    this.size = 45;
    this.centerOffset = {x: this.pos.x + 75, y: this.pos.y + 90};
    this.color = "red";
    this.up = { key: 87, flag: false };
    this.down = { key: 83, flag: false };
    this.right = { key: 68, flag: false };
    this.left = { key: 65, flag: false };
    this.grab = { key: 32, flag: false, hasSelected: false };
    this.direction = { x: 0, y: 0 };
    this.speed = { x: 0, y: 0 };
    this.brakePedal = { x: true, y: true };
    this.image = document.getElementById("character");
  }

  render(debug = false) {
    ctx.drawImage(this.image, this.pos.x, this.pos.y);
    this.centerOffset = {x: this.pos.x + 75, y: this.pos.y + 90};
    if(debug){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.color;
    ctx.arc(this.centerOffset.x, this.centerOffset.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    }    
  }

  keyDownHandler() {
    if (event.keyCode == this.up.key) {
      this.up.flag = true;
    }
    if (event.keyCode == this.down.key) {
      this.down.flag = true;
    }
    if (event.keyCode == this.left.key) {
      this.left.flag = true;
    }
    if (event.keyCode == this.right.key) {
      this.right.flag = true;
    }
    if (event.keyCode == this.grab.key) {
      this.grab.flag = true;
    }
  }

  keyUpHandler() {
    if (event.keyCode == this.up.key) {
      this.up.flag = false;
    }
    if (event.keyCode == this.down.key) {
      this.down.flag = false;
    }
    if (event.keyCode == this.left.key) {
      this.left.flag = false;
    }
    if (event.keyCode == this.right.key) {
      this.right.flag = false;
    }
    if (event.keyCode == this.grab.key) {
      this.grab.flag = false;
    }
  }

  movement() {
    this.brakePedal = { x: true, y: true };

    //sets the values for the direction to pass to the physics.movement function
    if (this.up.flag) {
      this.direction.y = -1;
      this.brakePedal.y = false;
    }
    //moves the ball down
    if (this.down.flag) {
      this.direction.y = 1;
      this.brakePedal.y = false;
    }
    if (this.left.flag) {
      this.direction.x = -1;
      this.brakePedal.x = false;
    }
    //moves the ball down
    if (this.right.flag) {
      this.direction.x = 1;
      this.brakePedal.x = false;
    }

    physics.movement(this);
    physics.worldSpace(this);
  }
}

export { PlayerCharacter };
