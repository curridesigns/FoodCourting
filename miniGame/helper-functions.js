import { canvas, ctx } from "../canvas.js";

const kitchenBG = document.getElementById("kitchenBG");

function background() {
  ctx.fillStyle = "blue";
  ctx.drawImage(kitchenBG, 0, 0);
}

function dist(x1, y1, x2, y2) {
  if(!x2 && !y2){
    return y1-x1;
  }else{
    return Math.hypot(x2 - x1, y2 - y1);
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export { background, dist, randomRange };
