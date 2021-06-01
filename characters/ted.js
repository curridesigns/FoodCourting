import { canvas, ctx } from "../canvas.js";
import { physics } from "../miniGame/physics.js";

const ted = {};

ted.image = document.getElementById("miniTed");

ted.pos = { x: 600, y: 300 };
ted.up = { range: [0,5], flag: false };
ted.down = { range: [0,5], flag: false };
ted.right = { range: [0,5], flag: false };
ted.left = { range: [0,5], flag: false };
ted.direction = { x: 0, y: 0 };
ted.speed = { x: 0, y: 0 };
ted.brakePedal = { x: true, y: true };


ted.render = function() {
  ctx.drawImage(ted.image, ted.pos.x, ted.pos.y);
};

ted.movement = function() {};

export { ted };
