import { canvas, ctx } from "../canvas.js"

function background(){
  ctx.fillStyle = "blue"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}




export { background }