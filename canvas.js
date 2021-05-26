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
  // console.log(endScreen.endGame);

  if (splashScreen.startGame && !endScreen.endGame) {
    //console.log("hello there")
    visualNovel.load();
    if (miniGame.finished) {
      visualNovel.miniGame = false;
      visualNovel.display = "map";
      miniGame.reset();
      miniGame.finished = false;
      // if (frameCount % 10 === 0) {
      //   console.log("there")
      // }
    }
    if (visualNovel.miniGame) {
      
      miniGame.play();
      //debug purposes only
      // if (frameCount % 10 === 0) {
      //   console.log("hello")
      // }
    }
  } else if (!splashScreen.startGame && !endScreen.endGame) {
    splashScreen.load();
  } else if (splashScreen.startGame && endScreen.endGame) {
    endScreen.load();
    miniGame.finishedBowls = 0;
  }

  //console.log(frameCount);

  // noodles.selected(character.pos);
  //console.log(character.grab)
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
