 import { character } from "./miniGame/mini-game.js";
import { splashScreen } from "./SplashScreen.js"
import { endScreen } from "./EndScreen.js"
import { visualNovel } from "./visualNovel/VisualNovel.js"

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
    console.log("hello");
  }else {
    if(splashScreen.startGame){
    visualNovel.click(event);
    }
    if(endScreen.endGame){
    endScreen.click(event);
    }
  }
}

export { keyDownHandler, keyUpHandler, onClick }