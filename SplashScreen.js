import { canvas, ctx, frameCount }  from "../canvas.js";
import * as helperFunction from "./helper-functions.js";


const splashScreen = {};

splashScreen.bg = document.getElementById("splashScreen");

splashScreen.load = function(){
  helperFunction.background(splashScreen.bg)
  ctx.fillStyle = "#f9cb9cff"
  ctx.fillRect(200,800,300,100);
  // splashScreen.click();
}


splashScreen.click = function(){
  console.log(event.clientX, event.clientY);
}

export { splashScreen };