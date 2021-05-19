import { character } from "./miniGame/mini-game.js";




function keyDownHandler(event){
  character.keyDownHandler();
  event.preventDefault;
}

function keyUpHandler(event){
  character.keyUpHandler();
  event.preventDefault;
}

function OnClick(event){
  
}

export { keyDownHandler, keyUpHandler }