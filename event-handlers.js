 import { character } from "./miniGame/mini-game.js";
import { splashScreen } from "./SplashScreen.js"
import * as helperFunction from "./helper-functions.js"




function keyDownHandler(event){
  character.keyDownHandler();
  event.preventDefault;
}

function keyUpHandler(event){
  character.keyUpHandler();
  event.preventDefault;
}

function onClick(event){
  if(!splashScreen.startGame){
  splashScreen.click(event);
  }
}

export { keyDownHandler, keyUpHandler, onClick }