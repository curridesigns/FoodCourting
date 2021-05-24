import { canvas, ctx } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const chad = {};
chad.images = {listening: document.getElementById("chadL"), talking: document.getElementById("chadT")};

chad.state = "idle"

chad.render = function(tempX, tempY){
  switch(chad.state){
    case "listening":
      ctx.drawImage(chad.images.listening,tempX,tempY);
      break;
    case "talking":
      ctx.drawImage(chad.images.talking,tempX,tempY);
      break;
    default:
      ctx.drawImage(chad.images.listening,tempX,tempY);
  }
  
}


export { chad }