import { canvas, ctx, frameCount } from "../canvas.js";
import { physics } from "../miniGame/physics.js";
import * as helperFunction from "../helper-functions.js";

const ted = {};

ted.image = document.getElementById("miniTed");

ted.size = 45;
ted.pos = { x: 600, y: 300 };
ted.up = { range: [1, 5], flag: false };
ted.down = { range: [6, 10], flag: false };
ted.right = { range: [11, 15], flag: false };
ted.left = { range: [16, 20], flag: false };
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
  if (frameCount % 10 === 0) {
    console.log(ted.input)
    // console.log(ted.contact)
    
  }
  ted.brakePedal = { x: true, y: true };
  if (ted.needsMovement) {
    ted.input = Math.floor(helperFunction.randomRange(0, 21));
    ted.needsMovement = false;
  }
  if (ted.input === 0) {
    ted.brakePedal.x = false;
    ted.brakePedal.y = false;
  } else if (ted.input > ted.up.range[0] && ted.input < ted.up.range[1]) {
    ted.up.flag = true;
  } else if (ted.input > ted.down.range[0] && ted.input < ted.down.range[1]) {
    ted.down.flag = true;
  } else if (ted.input > ted.right.range[0] && ted.input < ted.right.range[1]) {
    ted.right.flag = true;
  } else if (ted.input > ted.left.range[0] && ted.input < ted.left.range[1]) {
    ted.left.flag = true;
  }

  if (ted.contact) {
    ted.up.flag = false;
    ted.down.flag = false;
    ted.right.flag = false;
    ted.left.flag = false;
    ted.needsMovement = true;
  }

  //sets the values for the direction to pass to the physics.movement function
  if (ted.up.flag) {
    ted.direction.y = -1;
    ted.brakePedal.y = false;
  }
  //moves the ball down
  if (ted.down.flag) {
    ted.direction.y = 1;
    ted.brakePedal.y = false;
  }
  if (ted.left.flag) {
    ted.direction.x = -1;
    ted.brakePedal.x = false;
  }
  //moves the ball down
  if (ted.right.flag) {
    ted.direction.x = 1;
    ted.brakePedal.x = false;
  }

  physics.movement(ted);
  physics.worldSpace(ted, ted.contact);
  physics.collision(ted, ted.contact);
};

export { ted };
