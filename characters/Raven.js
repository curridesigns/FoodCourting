import { canvas, ctx } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const raven = {};
raven.images = {listening: document.getElementById("ravenL"), talking: document.getElementById("ravenT")};

raven.state = "idle"

raven.render = function(tempX, tempY){
  switch(raven.state){
    case "listening":
      ctx.drawImage(raven.images.listening,tempX,tempY);
      break;
    case "talking":
      ctx.drawImage(raven.images.talking,tempX,tempY);
      break;
    default:
      ctx.drawImage(raven.images.listening,tempX,tempY);
  }
  
}

raven.dialogue = function(){
  
}

export { raven }