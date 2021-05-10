import { character } from "./mini-game.js";




function keyDownHandler(event){
  character.keyDownHandler();
  event.preventDefault;
}

function keyUpHandler(event){
  character.keyUpHandler();
  event.preventDefault;
}

export { keyDownHandler, keyUpHandler }