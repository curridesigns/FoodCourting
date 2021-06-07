//imports the necessary functions and variables from other files
import { character } from "./miniGame/mini-game.js";
import { splashScreen } from "./SplashScreen.js"
import { visualNovel } from "./visualNovel/VisualNovel.js"
import * as helperFunction from "./helper-functions.js"



//handles all the key events for the miniGame, with the function below it as well
function keyDownHandler(event){
  event.preventDefault;
  character.keyDownHandler();
}

function keyUpHandler(event){
  event.preventDefault;
  character.keyUpHandler();
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