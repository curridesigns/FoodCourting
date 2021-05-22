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


splashScreen.click = function(event){
  if(helperFunction.getMouseCoordinates(event).x > 200 && helperFunction.getMouseCoordinates(event).x < 500 && helperFunction.getMouseCoordinates(event).y > 800 && helperFunction.getMouseCoordinates(event).y > 900){
    console.log("hello");
  }
 }

export { splashScreen };