//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

//this is used to handle the npc generation
class npc {
  //this requires a string for the npc name, the images, the text array, and the boxes
  //for the text to be displayed in
  constructor(name, imagesObj, dialogueArr, boxesObj) {
    //used to know what character is being talked to, not sure if I use it or not
    this.name = name;
    //the image object used in render
    this.images = imagesObj;

    this.chats = 0;
    this.state = "idle";
    this.chatNumber = 0;
    this.chatProgress = 0;
    this.friendLevel = 1;
    this.levelChange = false
    this.friendPoints = 1;
    this.levelGap = 10;
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
    //logs friendPoints for testing
    if (frameCount % 10 === 0) {
      
    }
    //should advance the friendLevel, unlocks more Dialoge options
    //? should it unlock more actions? like should you have to be a certain level to give a gift?
    if (this.friendPoints> this.friendLevel*this.levelGap) {
      this.levelChange = true;
      console.log(this.friendLevel)
    }
    //after running through each of the 
    if (this.dialogue.text[this.friendLevel][this.chatNumber] === undefined) {
      console.error("the chatNumber is undefined");
      this.chatNumber = 0;
    };
    //playerChoices replaces the long path to playerChoices for each chat event

    this.playerChoices = this.dialogue.text[this.friendLevel][this.chatNumber].response[this.chatProgress][this.dialogue.playerResponse].playerChoices;
    //similar to playerChoices, but is for how long the npc should be in the 
    //"talking" state, then switches back to the "listening" state
    //the time is returned in milliseconds from the Date function, this is *1000 to convert to milliseconds
    this.talkingTime =
      this.dialogue.text[this.friendLevel][this.chatNumber].response[this.chatProgress][
        this.dialogue.playerResponse
      ].talkingTime * 1000;
    
    //when the player chooses a chat option, the npc switches to talking for the time specified
    if (this.playerChose) {
      this.state = "talking";
      this.endTime = new Date().getTime() + this.talkingTime;
      this.playerChose = false;
    }
    //switches back to listening after the alloted time
    if (Date.now() >= this.endTime) {
      this.state = "listening";
    }

    //renders the text box for the npc
    helperFunction.button.render(
      this.dialogue.boxes.main,
      this.dialogue.boxes.color
    );
    //renders the text inside of the npc box
    helperFunction.dialogueBoxes(
      this.dialogue.boxes.main,
      this.dialogue.text[this.friendLevel][this.chatNumber].response[this.chatProgress][
        this.dialogue.playerResponse
      ].text,
      30,
      60,
      48,
      ctx,
      "white",
      this.dialogue.boxes.color
    );

    //runs through the playerChoices and displays them in the appropriate spot
    for (const prop in this.dialogue.text[this.friendLevel][this.chatNumber].choice[
      this.playerChoices
    ]) {
      helperFunction.button.render(
        this.dialogue.boxes.choices[prop],
        this.dialogue.boxes.color
      );

      helperFunction.dialogueBoxes(
        this.dialogue.boxes.choices[prop],
        this.dialogue.text[this.friendLevel][this.chatNumber].choice[this.playerChoices][prop].text,
        10,
        40,
        30,
        ctx,
        "white",
        this.dialogue.boxes.color
      );
    }
  }

  //function to handle all the click events for each character on the appropiate page
  click() {
    //runs through each of the options that given to the character and gives that value back to 
    //dialogueRender() so it can move the conversation forward
    for (const prop in this.dialogue.text[this.friendLevel][this.chatNumber].choice[this.playerChoices]) {
      var friendPoints = this.dialogue.text[this.friendLevel][this.chatNumber].choice[this.playerChoices][prop].friendPoints;
      if (helperFunction.button.click(this.dialogue.boxes.choices[prop])) {
        //if the chat options for a path have been exhausted, it spits the player back to the map, or sends
        //them to the ending for the character they are currently talking to if they have finished all the
      //dialogue for that character
        if (prop == "complete") {
          this.chatNumber = Math.floor(helperFunction.randomRange(0,this.dialogue.text[this.friendLevel].length));
          this.chatProgress = 0;
          this.dialogue.playerResponse = "a"
          if (this.levelChange) {
            this.friendLevel++;
            this.chatNumber = 0;
          }
          if (this.chatNumber === this.dialogue.text.length - 1) {
            return "ending";
          }
          return "map";
        } else {
          this.dialogue.playerResponse = [prop];
          this.chatProgress++;
          this.playerChose = true;
          if (friendPoints != undefined) {
            this.friendPoints += friendPoints;
          }
        }
      }
    }
  }
}

export { npc };
