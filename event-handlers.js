import { character } from "./miniGame/mini-game.js";
import { splashScreen } from "./SplashScreen.js"




function keyDownHandler(event){
  character.keyDownHandler();
  event.preventDefault;
}

function keyUpHandler(event){
  character.keyUpHandler();
  event.preventDefault;
}

function onClick(event){
  splashScreen.click();
}

export { keyDownHandler, keyUpHandler, onClick }