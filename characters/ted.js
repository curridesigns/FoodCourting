import { canvas, ctx, frameCount } from "../canvas.js";
import { physics } from "../miniGame/physics.js";
import * as helperFunction from "../helper-functions.js";

const ted = {};

ted.image = { miniGame: document.getElementById("miniTed") };


ted.render = function(debug = false, state = "miniGame") {
  switch (state) {
    case "miniGame":
      ctx.translate(ted.pos.x, ted.pos.y);
      ctx.drawImage(ted.image.miniGame, ted.centerOffset.x, ted.centerOffset.y);
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
      break;
    case "food":
      ted.novel.render()
  }
};

ted.miniGame.size = 45;
ted.miniGame.pos = { x: 1825, y: 300 };
ted.miniGame.speedMax = 3;
ted.miniGame.centerOffset = { x: -72, y: -85 };
ted.miniGame.up = { range: [1, 5], flag: false };
ted.miniGame.down = { range: [6, 10], flag: false };
ted.miniGame.right = { range: [1, 5], flag: false };
ted.miniGame.left = { range: [6, 10], flag: false };
ted.miniGame.direction = { x: 0, y: 0 };
ted.miniGame.speed = { x: 0, y: 0 };
ted.miniGame.brakePedal = { x: true, y: true };
ted.miniGame.input = { x: 0, y: 0 };
ted.miniGame.contact = { x: false, y: false };
ted.miniGame.needsMovement = true;
ted.miniGame.initial = true;
ted.miniGame.timer = false;
ted.miniGame.moveTime = Math.floor(helperFunction.randomRange(0, 21));
ted.miniGame.endTime = new Date().getTime() + ted.moveTime;
ted.miniGame.movement = function() {
  if (frameCount % 10 === 0) {
    // console.log("input x: " + ted.input.x);
    // console.log("input y: " + ted.input.y);
    // console.log("contact x: " + ted.contact.x);
    // console.log("contact y: " + ted.contact.y);
    // console.log("movement: " + ted.needsMovement);
    // console.log("timer: " + ted.timer);
  }
  if (ted.timer) {
    ted.moveTime = Math.floor(helperFunction.randomRange(1000, 4000));
    ted.endTime = new Date().getTime() + ted.moveTime;
    ted.timer = false;
  }
  if (Date.now() >= ted.endTime) {
    ted.timer = true;
  }

  ted.brakePedal = { x: true, y: true };
  if (ted.needsMovement || ted.timer) {
    if (ted.initial || ted.timer) {
      ted.input.x = Math.floor(
        helperFunction.randomRange(0, ted.left.range[1])
      );
      ted.input.y = Math.floor(
        helperFunction.randomRange(0, ted.down.range[1])
      );
      ted.initial = false;
    }
    if (ted.contact.x) {
      ted.input.x = 0;
      ted.input.y = Math.floor(
        helperFunction.randomRange(0, ted.down.range[1])
      );
      ted.contact.x = false;
    }
    if (ted.contact.y) {
      ted.input.y = 0;
      ted.input.x = Math.floor(
        helperFunction.randomRange(0, ted.down.range[1])
      );
      ted.contact.y = false;
    }
    ted.needsMovement = false;
  }
  if (ted.input.x === 0 && ted.input.y === 0) {
    ted.up.flag = false;
    ted.down.flag = false;
    ted.right.flag = false;
    ted.left.flag = false;
  }
  if (ted.input.y >= ted.up.range[0] && ted.input.y <= ted.up.range[1]) {
    ted.up.flag = true;
  }
  if (ted.input.y >= ted.down.range[0] && ted.input.y <= ted.down.range[1]) {
    ted.down.flag = true;
  }
  if (ted.input.x >= ted.right.range[0] && ted.input.x <= ted.right.range[1]) {
    ted.right.flag = true;
  }
  if (ted.input.x >= ted.left.range[0] && ted.input.x <= ted.left.range[1]) {
    ted.left.flag = true;
  }
  if (ted.contact.y || ted.contact.x) {
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
  physics.worldSpace(ted);
  physics.collision(ted);
};

export { ted };
