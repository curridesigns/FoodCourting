import { miniGame } from "./miniGame/mini-game.js";
import { keyDownHandler, keyUpHandler } from "./miniGame/event-handlers.js"


const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext('2d');
let frameCount = 0;

const canvasSquare = 700;

canvas.width = canvasSquare;
canvas.height = canvasSquare;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let lastTime = 0
let aggregatedTime = 0
const frameRateInMillis =  1000/20 // 30 FPS

function setup(){
  // background();
  
  miniGame.load();
  window.requestAnimationFrame(loop);
  
}

function draw () {
  miniGame.play();
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
    draw()
    
  
  }

	window.requestAnimationFrame(loop)
}



setup();

export { canvas, ctx }