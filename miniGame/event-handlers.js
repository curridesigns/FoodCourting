import { character } from "./mini-game.js";

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


function keyDownHandler(event){
  character.keyDownHandler();
}

function keyUpHandler(event){
  character.keyUpHandler();
}