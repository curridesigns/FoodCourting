import { canvas, ctx, frameCount } from "../canvas.js";
import { physics } from "../miniGame/physics.js";
import * as helperFunction from "../helper-functions.js";

const ted = {};

ted.image = document.getElementById("miniTed");

ted.size = 45;
ted.pos = { x: 650, y: 250 };
ted.speedMax = 3;
ted.centerOffset = { x: -72, y: -85 };
ted.up = { range: [1, 5], flag: false };
ted.down = { range: [6, 10], flag: false };
ted.right = { range: [11, 15], flag: false };
ted.left = { range: [16, 20], flag: false };
ted.direction = { x: 0, y: 0 };
ted.speed = { x: 0, y: 0 };
ted.brakePedal = { x: true, y: true };
ted.input = {x: 0};
ted.contact = {x: false, y: false};
ted.needsMovement = true;


ted.render = function(debug = false) {
  ctx.translate(ted.pos.x, ted.pos.y);
  ctx.drawImage(ted.image, ted.centerOffset.x, ted.centerOffset.y);
  if (debug) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 10, 10);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = ted.color;
    ctx.arc(0, 0, ted.size, 0, 2 * Math.PI);
    ctx.stroke();
  }
  ctx.translate(-ted.pos.x, -ted.pos.y);
};

ted.movement = function() {
  if (frameCount % 10 === 0) {
    console.log(ted.input);
    console.log(ted.contact);
  }
  ted.brakePedal = { x: true, y: true };
  if (ted.needsMovement) {
    ted.input.x = Math.floor(helperFunction.randomRange(0, 21));
    ted.needsMovement = false;
    if(ted.contact.x){ted.contact.x = false}
    if(ted.contact.y){ted.contact.x = false}
  }
  if (ted.input.x === 0 || ted.input.y === 0) {
    ted.up.flag = false;
    ted.down.flag = false;
    ted.right.flag = false;
    ted.left.flag = false;
  } else if (ted.input >= ted.up.range[0] && ted.input <= ted.up.range[1]) {
    ted.up.flag = true;
  } else if (ted.input >= ted.down.range[0] && ted.input <= ted.down.range[1]) {
    ted.down.flag = true;
  } else if (
    ted.input >= ted.right.range[0] &&
    ted.input <= ted.right.range[1]
  ) {
    ted.right.flag = true;
  } else if (ted.input >= ted.left.range[0] && ted.input <= ted.left.range[1]) {
    ted.left.flag = true;
  }

  if (ted.contact.x) {
    ted.right.flag = false;
    ted.left.flag = false;
    ted.needsMovement = true;
  }
  if (ted.contact.y){
    ted.up.flag = false;
    ted.down.flag = false;
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
  physics.worldSpace(ted);
  physics.collision(ted);
};

export { ted };
