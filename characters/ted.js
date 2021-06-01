import { canvas, ctx } from "../canvas.js";
import { physics } from "../miniGame/physics.js";

const ted = {};

ted.image = document.getElementById("miniTed");

ted.pos = {x: 300, y:300};

ted.render = function (){
  ctx.drawImage(ted.image, ted.pos.x, ted.pos.y);
}