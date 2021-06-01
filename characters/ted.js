import { canvas, ctx } from "../canvas.js";
import { physics } from "../miniGame/physics.js";
import * as helperFunction from "../helper-functions.js";


const ted = {};

ted.image = document.getElementById("miniTed");

ted.pos = { x: 600, y: 300 };
ted.up = { range: [1,5], flag: false };
ted.down = { range: [6,10], flag: false };
ted.right = { range: [11,15], flag: false };
ted.left = { range: [16,20], flag: false };
ted.direction = { x: 0, y: 0 };
ted.speed = { x: 0, y: 0 };
ted.brakePedal = { x: true, y: true };
ted.contact = false;
ted.needsMovement = true;
ted.input = 0;


ted.render = function() {
  ctx.drawImage(ted.image, ted.pos.x, ted.pos.y);
};

ted.movement = function() {
  this.brakePedal = { x: true, y: true };
  if(ted.needsMovement && !ted.contact){
    ted.input = helperFunction.randomRange(0,20)
  }

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

    physics.movement(ted);
    physics.worldSpace(ted, ted.contact);
    physics.collision(ted, ted.contact);
  
};

export { ted };
