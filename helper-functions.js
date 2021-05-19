import { canvas, ctx } from "../canvas.js";



function background(image) {
  ctx.fillStyle = "blue";
  ctx.drawImage(image, 0, 0);
}

function dist(x1, y1, x2, y2) {
  if(!x2 && !y2){
    return Math.abs(y1-x1);
  }else{
    return Math.hypot(x2 - x1, y2 - y1);
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export { background, dist, randomRange };
