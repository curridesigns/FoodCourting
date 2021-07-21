//This is the main file for the miniGame. All of the miniGame functions are called here, in order to help keep the canvas.js functions cleaner. All of the necessary files and functions can be found in this folder; except for PlayerCharacter, which can be found in the characters folder.
//import all the necessary files and function
import { canvas, ctx, frameCount, player } from "../canvas.js";
import { ingredients } from "./ingredients.js";
import { RamenBowl } from "./ramen-bowl.js";
import { ted } from "../characters/ted.js";
import * as helperFunction from "../helper-functions.js";
//declare global variables for this page
var bowl, timer, timerReset;
const miniGame = {};
//the images for the miniGame that weren't setup elsewhere
const kitchenBG = document.getElementById("kitchenBG");
const bowlImage = document.getElementById("bowl");

//run in setup() on canvas.js
miniGame.preLoad = function() {
  ingredients.preLoad();
};


//run in setup() on canvas.js, has to come after preload so all the images are there
miniGame.load = function() {
  bowl = new RamenBowl(385, 588, bowlImage);
  ingredients.reset();
  miniGame.reset();

};

miniGame.play = function() {
  // All updates
  player.movement();
  ted.miniGame.movement();
  ingredients.select(player.grab, player.pos, bowl.pos);
  
  //if the player runs into ted it ends the miniGame, and sets the tedEnding bool to true
  if (helperFunction.dist( player.pos.x, player.pos.y, ted.miniGame.pos.x, ted.miniGame.pos.y)<player.size + ted.miniGame.size)
  {
    miniGame.tedEnding = true;
    miniGame.ending();
  }

  // All drawing
  helperFunction.background(kitchenBG);
  player.render();
  ted.render("miniGame");
  bowl.render();
  ingredients.renderStarterIngredients();
  ingredients.finishBowl();
  miniGame.timer(60)
  //debug purposes only
  if (frameCount % 10 === 0) {
    //prevents console.log from crashing the screen by slowing the number of logs it generates
  }
};

//used to start the miniGame over again after each attempt
miniGame.reset = function() {
  ingredients.reset();
  miniGame.finished = false;
  miniGame.finishedBowls = 0;
  ted.miniGame.pos = { x: 1825, y: 300 };
  miniGame.tedEnding = false;
  player.pos = { x: 650, y: 250 };
  timerReset = true;
};

miniGame.timer = function(timeInSeconds){
  timer = helperFunction.timer(timeInSeconds,timerReset);
  if (timer != true) {
    timerReset = false;
    let timeBox = {top: 100, bottom: 300, left:100, right: 300,};
    let countDown = {}
    countDown.seconds = (Math.floor((timer - Date.now())/1000))%60;
    countDown.minutes = (Math.floor(((timer - Date.now())/1000)/60));
    if (countDown.seconds < 10) {
      countDown.seconds = "0" + (Math.floor((timer - Date.now())/1000))%60;
    }
    let text = "0" + countDown.minutes + " : " + countDown.seconds;
    helperFunction.dialogueBoxes(timeBox, text, 10, 10, 48, ctx, "red");
  }
  if (timer === true) {
    miniGame.ending();
  }
}

miniGame.ending = function(){
  console.log(miniGame.finishedBowls);
  player.money += (miniGame.finishedBowls*10) + 100;
  console.log(player.money)
  miniGame.finished = true;
  timerReset = true;
}

export { miniGame, player, bowl };
