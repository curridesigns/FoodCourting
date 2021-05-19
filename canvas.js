import { miniGame } from "./miniGame/mini-game.js";
import { keyDownHandler, keyUpHandler, onClick } from "./event-handlers.js"
import * as helperFunction from "./helper-functions.js"


const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext('2d');
let frameCount = 0;



canvas.width = 1920;
canvas.height = 1080;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let lastTime = 0
let aggregatedTime = 0
const frameRateInMillis =  1000/20 // 30 FPS
let StartGame = false;
const splashScreenBG = document.getElementById("splashScreen");

function setup(){
  // background();
  miniGame.preLoad();
  miniGame.load();
  window.requestAnimationFrame(loop);
  
}

function draw () {
  
  
  if(StartGame){
    miniGame.play();
  } else {
    SplashScreen();
  }
  //console.log(frameCount);
  
  // noodles.selected(character.pos);
  //console.log(character.grab)

}

function loop (time) { // Add the time parameter, and requestAnimation frame fills it in with the total time since starting
	
  let timeDifference = time - lastTime
  //console.log(timeDifference) // Should be constant, probably around 16 (milliseconds)
  lastTime = time
	
  // Add timeDifference to aggregatedTime
  aggregatedTime += timeDifference
  
  if (aggregatedTime > frameRateInMillis) { // Divide by 1000 to get FPS
  
  	aggregatedTime = aggregatedTime-frameRateInMillis // Reset aggregated time, it turtleCan also be carried over.
  	
    // DRAW HERE!
    frameCount++;
    draw();
    //console.log(frameCount)
    
  
  }

	window.requestAnimationFrame(loop)
}

function SplashScreen(){
  helperFunction.background(splashScreenBG)
  
}




setup();

export { canvas, ctx, frameCount }