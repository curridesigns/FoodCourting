import { canvas, ctx, frameCount } from "../canvas.js";
import { physics } from "../miniGame/physics.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";

const ted = {};

ted.image = {
  miniGame: document.getElementById("miniTed"),
  listening: document.getElementById("tedL"),
  talking: document.getElementById("tedT"),
  idle: document.getElementById("tedL")
};

ted.render = function(state = "miniGame", debug = false) {
  switch (state) {
    case "miniGame":
      ctx.translate(ted.miniGame.pos.x, ted.miniGame.pos.y);
      ctx.drawImage(
        ted.miniGame.image.miniGame,
        ted.miniGame.centerOffset.x,
        ted.miniGame.centerOffset.y
      );
      if (debug) {
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 10, 10);
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = ted.miniGame.color;
        ctx.arc(0, 0, ted.miniGame.size, 0, 2 * Math.PI);
        ctx.stroke();
      }
      ctx.translate(-ted.miniGame.pos.x, -ted.miniGame.pos.y);
      break;
    case "novel":
      ted.novel.render();
  }
};

ted.miniGame = {};
//all the miniGame code for ted
{
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
  ted.miniGame.endTime = new Date().getTime() + ted.miniGame.moveTime;
  ted.miniGame.movement = function() {
    if (frameCount % 10 === 0) {
      // console.log("input x: " + ted.miniGame.input.x);
      // console.log("input y: " + ted.miniGame.input.y);
      // console.log("contact x: " + ted.miniGame.contact.x);
      // console.log("contact y: " + ted.miniGame.contact.y);
      // console.log("movement: " + ted.miniGame.needsMovement);
      // console.log("timer: " + ted.miniGame.timer);
    }
    if (ted.miniGame.timer) {
      ted.miniGame.moveTime = Math.floor(
        helperFunction.randomRange(1000, 4000)
      );
      ted.miniGame.endTime = new Date().getTime() + ted.miniGame.moveTime;
      ted.miniGame.timer = false;
    }
    if (Date.now() >= ted.miniGame.endTime) {
      ted.miniGame.timer = true;
    }

    ted.miniGame.brakePedal = { x: true, y: true };
    if (ted.miniGame.needsMovement || ted.miniGame.timer) {
      if (ted.miniGame.initial || ted.miniGame.timer) {
        ted.miniGame.input.x = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.left.range[1])
        );
        ted.miniGame.input.y = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.initial = false;
      }
      if (ted.miniGame.contact.x) {
        ted.miniGame.input.x = 0;
        ted.miniGame.input.y = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.contact.x = false;
      }
      if (ted.miniGame.contact.y) {
        ted.miniGame.input.y = 0;
        ted.miniGame.input.x = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.contact.y = false;
      }
      ted.miniGame.needsMovement = false;
    }
    if (ted.miniGame.input.x === 0 && ted.miniGame.input.y === 0) {
      ted.miniGame.up.flag = false;
      ted.miniGame.down.flag = false;
      ted.miniGame.right.flag = false;
      ted.miniGame.left.flag = false;
    }
    if (
      ted.miniGame.input.y >= ted.miniGame.up.range[0] &&
      ted.miniGame.input.y <= ted.miniGame.up.range[1]
    ) {
      ted.miniGame.up.flag = true;
    }
    if (
      ted.miniGame.input.y >= ted.miniGame.down.range[0] &&
      ted.miniGame.input.y <= ted.miniGame.down.range[1]
    ) {
      ted.miniGame.down.flag = true;
    }
    if (
      ted.miniGame.input.x >= ted.miniGame.right.range[0] &&
      ted.miniGame.input.x <= ted.miniGame.right.range[1]
    ) {
      ted.miniGame.right.flag = true;
    }
    if (
      ted.miniGame.input.x >= ted.miniGame.left.range[0] &&
      ted.miniGame.input.x <= ted.miniGame.left.range[1]
    ) {
      ted.miniGame.left.flag = true;
    }
    if (ted.miniGame.contact.y || ted.miniGame.contact.x) {
      ted.miniGame.up.flag = false;
      ted.miniGame.down.flag = false;
      ted.miniGame.right.flag = false;
      ted.miniGame.left.flag = false;
      ted.miniGame.needsMovement = true;
    }

    //sets the values for the direction to pass to the physics.movement function
    if (ted.miniGame.up.flag) {
      ted.miniGame.direction.y = -1;
      ted.miniGame.brakePedal.y = false;
    }
    //moves the ball down
    if (ted.miniGame.down.flag) {
      ted.miniGame.direction.y = 1;
      ted.miniGame.brakePedal.y = false;
    }
    if (ted.miniGame.left.flag) {
      ted.miniGame.direction.x = -1;
      ted.miniGame.brakePedal.x = false;
    }
    //moves the ball down
    if (ted.miniGame.right.flag) {
      ted.miniGame.direction.x = 1;
      ted.miniGame.brakePedal.x = false;
    }

    physics.movement(ted.miniGame);
    physics.worldSpace(ted.miniGame);
    physics.collision(ted.miniGame);
  };
}
ted.text = [];
ted.text[0] = {
  
}

ted.novel = new npc(ted.image, ted.text,  );
export { ted };
