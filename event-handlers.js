import { character } from "./miniGame/mini-game.js";




function keyDownHandler(event){
  character.keyDownHandler();
  event.preventDefault;
}

function keyUpHandler(event){
  character.keyUpHandler();
  event.preventDefault;
}

function onClick(event){
  
}

export { keyDownHandler, keyUpHandler, onClick }