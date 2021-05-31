import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

class npc {
  constructor(imagesObj, dialogueArr, boxesObj, talkingTime) {
    this.images = imagesObj;
    this.chats = 0;
    this.state = "idle";
    this.chatNumber = 0;
    this.chatProgress = 0;
    this.dialogue = {};
    this.dialogue.boxes = boxesObj;
    this.dialogue.playerResponse = "a";
    this.dialogue.text = dialogueArr;
    this.talkingTime = talkingTime;
    this.endTime = new Date().getTime + talkingTime;
    this.playerChose = true;
  }

  render(tempX, tempY) {
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
    }
  }

  dialogueRender() {
    if(this.playerChose){
      this.state = "talking";
      this.endTime
    }
    // if (this.startTime === undefined) {
    //   this.startTime = new Date();
    // }
    // console.log(this.elapsedTime);
    // if (this.elapsedTime >= this.talkingTime){
    //   this.startTime = new Date();
    // }
    if (this.dialogue.text[this.chatNumber] === undefined) {
      this.chatNumber = 0;
    }
    this.display = true;
    this.playerChoices = this.dialogue.text[this.chatNumber].response[
      this.chatProgress
    ][this.dialogue.playerResponse].playerChoices;
    helperFunction.button.render(
      this.dialogue.boxes.main,
      this.dialogue.boxes.color
    );
    helperFunction.dialogueBoxes(
      this.dialogue.boxes.main,
      this.dialogue.text[this.chatNumber].response[this.chatProgress][
        this.dialogue.playerResponse
      ].text,
      40,
      60,
      "48px",
      ctx
    );

    for (const prop in this.dialogue.text[this.chatNumber].choice[
      this.playerChoices
    ]) {
      if (frameCount % 10 === 0) {
      }
      helperFunction.button.render(
        this.dialogue.boxes.choices[prop],
        this.dialogue.boxes.color
      );
      helperFunction.dialogueBoxes(
        this.dialogue.boxes.choices[prop],
        this.dialogue.text[this.chatNumber].choice[this.playerChoices][prop],
        5,
        20,
        "24px",
        ctx
      );
      // console.log(raven.dialogue.boxes.choices[prop])
    }
  }

  click() {
    for (const prop in this.dialogue.text[this.chatNumber].choice[
      this.playerChoices
    ]) {
      if (helperFunction.button.click(this.dialogue.boxes.choices[prop])) {
        if (prop == "complete") {
          return true;
        } else {
          this.dialogue.playerResponse = [prop];
          this.chatProgress++;
          this.startTime = undefined;
        }
      }
    }
  }
}

export { npc };
