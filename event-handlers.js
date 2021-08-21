//imports the necessary functions and variables from other files
import { player } from "./miniGame/mini-game.js";
import { splashScreen } from "./SplashScreen.js"
import { visualNovel } from "./visualNovel/VisualNovel.js"
import * as helperFunction from "./helper-functions.js"

document.addEventListener

//handles all the key events for the miniGame, with the function below it as well
function keyDownHandler(event){
  event.preventDefault;
  player.keyDownHandler();
}

function keyUpHandler(event){
  event.preventDefault;
  player.keyUpHandler();
}

//handles all the click events for the Novel
function onClick(event){
  if(!splashScreen.startGame){
  splashScreen.click(event);
    
  }else {
    if(splashScreen.startGame){
    visualNovel.click(event);
    }
  }
}

export { keyDownHandler, keyUpHandler, onClick }