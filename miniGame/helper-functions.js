import { canvas, ctx } from "../canvas.js"

function background(){
  ctx.fillStyle = "blue"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function dist(x1,y1,x2,y2){
  Math.hypot(x2-x1,y2-y1);
}



export { background, dist }