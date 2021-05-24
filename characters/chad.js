import { canvas, ctx } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const chad = {};
chad.iamges = {listening: document.getElementById("chadL"), talking: document.getElementById("chadT")};

chad.state = "idle"

chad.render = function(){
  switch(chad.state){
    case "listening":
      ctx.drawImage()
  }
  
}


export { chad }