//imports the necessary functions and variables from elsewhere in the project
import { miniGame } from "./miniGame/mini-game.js";
import { keyDownHandler, keyUpHandler, onClick } from "./event-handlers.js";
import * as helperFunction from "./helper-functions.js";
import { splashScreen } from "./SplashScreen.js";
import { visualNovel } from "./visualNovel/VisualNovel.js";
import {player} from "./characters/player-character.js";

//sets up the canvas and the frameCount
const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
let frameCount = 0;
//essentially the aspect ratio, as the canvas is actually scaled to the size of your screen
canvas.width = 1920;
canvas.height = 1080;
//the actual variable used elsewhere
var aspectRatio = canvas.width/canvas.height;
//makes it so the game can show up on any sized screen that is 16:9 or bigger
var canvasComputedHeight = window.innerHeight - 300;
var canvasComputedWidth = Math.ceil(canvasComputedHeight*aspectRatio);

//changes the css values after page load
document.getElementById("gameCanvas").style.width = canvasComputedWidth + 'px';
document.getElementById("gameCanvas").style.height = canvasComputedHeight + 'px';

//eventhandlers for the whole document, the functions are found in event-handlers.js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("click", onClick, false);

//setup to generate consistent frameRate no matter the machine
//more of it is in loop()
//thanks to Jeffrey
let lastTime = 0;
let aggregatedTime = 0;
const frameRateInMillis = 1000 / 20; // 60 FPS

function setup() {
  //makes sure the images and other things are setup properly before the player even sees the title
  miniGame.preLoad();
  miniGame.load();
  window.requestAnimationFrame(loop);
}

function draw() {
  //if the player has clicked begin, starts the game
  if (splashScreen.startGame) {
    visualNovel.load();
    //otherwise, sits on the title screen
  } else if (!splashScreen.startGame) {
    splashScreen.load();
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

    aggregatedTime = aggregatedTime - frameRateInMillis; // Reset aggregated time, it can also be carried over.

    // DRAW HERE!
    //this is where the frameCount comes from, constantly counting up from game load
    frameCount++;
    draw();
    //console.log(frameCount)
  }
  
  //draws everthing based on your machines abilities
  window.requestAnimationFrame(loop);
}

//starts the process for the first time
setup();

export { canvas, ctx, frameCount, player };
