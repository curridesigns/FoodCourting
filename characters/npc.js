import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

class npc {
  constructor(imagesObj, dialogueArr, boxesObj ){
    this.images = imagesObj;
    this.chats = 0;
    this.state = "idle";
    this.chatNumber = 0;
    this.chatProgress = 0;
    this.dialogue = {};
    this.dialogue.boxes = boxesObj;
    this.dialogue.playerResponse = "a";
    this.dialogue.text = dialogueArr;
  }
  
  render(tempX, tempY){
    switch (this.state) {
    case "listening":
      ctx.drawImage(this.images.listening, tempX, tempY);
      break;
    case "talking":
      ctx.drawImage(this.images.talking, tempX, tempY);
      break;
    default:
      ctx.drawImage(this.images.listening, tempX, tempY);
      break;
    };
  }
  
  dialogueRender(){
    
  }
}