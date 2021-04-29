import { character } from "./mini-game.js";




function keyDownHandler(event){
  character.keyDownHandler();
}

function keyUpHandler(event){
  character.keyUpHandler();
}

export { keyDownHandler, keyUpHandler }