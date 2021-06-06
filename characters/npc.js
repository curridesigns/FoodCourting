//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

//this is used to handle the npc generation
class npc {
  //this requires a string for the npc name, the images, the text array, and the boxes
  //for the text to be displayed in
  constructor(name, imagesObj, dialogueArr, boxesObj) {
    this.name = name;
    this.images = imagesObj;
    this.chats = 0;
    this.state = "idle";
    this.chatNumber = 0;
    this.chatProgress = 0;
    this.dialogue = {};
    this.dialogue.boxes = boxesObj;
    this.dialogue.playerResponse = "a";
    this.dialogue.text = dialogueArr;
    this.talkingTime = 1 * 1000;
    this.endTime = new Date().getTime + this.talkingTime;
    this.playerChose = true;
    this.color;
  }

  //the x and y values are used to place the top left corner of the npc image
  //the states are generated from dialogueRender() and change the npc image to match
  //if they are "talking" or "listening"
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

  //this is where the magic happens, most of the heavy lifting for this class happens in this function, so it will commented heavily
  dialogueRender() {
    //prevents crashing, it should never actually be used anymore as the game
    //should end before hitting this, but it is here in case
    if (this.dialogue.text[this.chatNumber] === undefined) {
      this.chatNumber = 0;
    }
    
    //playerChoices replaces the long path to playerChoices for each chat event
    this.playerChoices = this.dialogue.text[this.chatNumber].response[this.chatProgress][this.dialogue.playerResponse].playerChoices;
    //similar to playerChoices, but is for how long the npc should be in the 
    //"talking" state, then switches back to the "listening" state
    //the time is returned in milliseconds from the Date function, this is *1000 to convert to milliseconds
    this.talkingTime =
      this.dialogue.text[this.chatNumber].response[this.chatProgress][
        this.dialogue.playerResponse
      ].talkingTime * 1000;
    
    //when the player chooses a chat option, the npc switches to talking for the time specified
    if (this.playerChose) {
      this.state = "talking";
      this.endTime = new Date().getTime() + this.talkingTime;
      this.playerChose = false;
    }
    //
    if (Date.now() >= this.endTime) {
      this.state = "listening";
    }

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
          if (this.chatNumber === this.dialogue.text.length - 1) {
            return "ending";
          }
          return "map";
        } else {
          this.dialogue.playerResponse = [prop];
          this.chatProgress++;
          this.playerChose = true;
        }
      }
    }
  }
}

export { npc };
