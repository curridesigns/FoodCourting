import { miniGame } from "./miniGame/mini-game.js";
import { keyDownHandler, keyUpHandler, onClick } from "./event-handlers.js";
import * as helperFunction from "./helper-functions.js";
import { splashScreen } from "./SplashScreen.js";
import { endScreen } from "./EndScreen.js";
import { visualNovel } from "./visualNovel/VisualNovel.js";

const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
let frameCount = 0;

canvas.width = 1920;
canvas.height = 1080;

var aspectRatio = canvas.width/canvas.height;

var canvasComputedHeight = window.innerHeight - 200;
var canvasComputedWidth = Math.ceil(canvasComputedHeight*aspectRatio);


document.getElementById("gameCanvas").style.width = canvasComputedWidth + 'px';
document.getElementById("gameCanvas").style.height = canvasComputedHeight + 'px';


console.log('width: ' + canvasComputedWidth);
console.log('height: ' + canvasComputedHeight);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("click", onClick, false);

let lastTime = 0;
let aggregatedTime = 0;
const frameRateInMillis = 1000 / 20; // 30 FPS
// var startGame = false;

function setup() {
  // background();
  miniGame.preLoad();
  miniGame.load();
  window.requestAnimationFrame(loop);
}

function draw() {
  if (splashScreen.startGame && !endScreen.endGame) {
    visualNovel.load();
  } else if (!splashScreen.startGame && !endScreen.endGame) {
    splashScreen.load();
  } else if (splashScreen.startGame && endScreen.endGame) {
    endScreen.load();
    miniGame.finishedBowls = 0;
  }
}

function loop(time) {
  // Add the time parameter, and requestAnimation frame fills it in with the total time since starting

  let timeDifference = time - lastTime;
  //console.log(timeDifference) // Should be constant, probably around 16 (milliseconds)
  lastTime = time;

  // Add timeDifference to aggregatedTime
  aggregatedTime += timeDifference;

  if (aggregatedTime > frameRateInMillis) {
    // Divide by 1000 to get FPS

    aggregatedTime = aggregatedTime - frameRateInMillis; // Reset aggregated time, it turtleCan also be carried over.

    // DRAW HERE!
    frameCount++;
    draw();
    //console.log(frameCount)
  }

  window.requestAnimationFrame(loop);
}

setup();

export { canvas, ctx, frameCount };
