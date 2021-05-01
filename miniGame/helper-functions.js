import { canvas, ctx } from "../canvas.js"

function background(){
  ctx.fillStyle = "blue"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function dist(x1,y1,x2,y2){
  return Math.hypot(x2-x1,y2-y1);
}

function randomRange(min, max){
  return Math.random() * (max-min) + min;
}



export { background, dist, randomRange }