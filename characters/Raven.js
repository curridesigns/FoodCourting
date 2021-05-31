import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const raven = {};
raven.images = {
  listening: document.getElementById("ravenL"),
  talking: document.getElementById("ravenT")
};

raven.display = false;

raven.chats = 0;

raven.state = "idle";

raven.render = function(tempX, tempY) {
  switch (raven.state) {
    case "listening":
      ctx.drawImage(raven.images.listening, tempX, tempY);
      break;
    case "talking":
      ctx.drawImage(raven.images.talking, tempX, tempY);
      break;
    default:
      ctx.drawImage(raven.images.listening, tempX, tempY);
      break;
  }
};

raven.chatProgress = 0;

raven.dialogue = {};

raven.dialogue.playerResponse = "a";

raven.dialogue.text = [];

raven.dialogue.text[0] = {
  response: [
    { a: { text: "Heya, player! How was your time off?", playerChoices: 0 } },
    {
      a: { text: "Boring's better than horrible!", playerChoices: 2 },
      b: {
        text: "I slept for so long, my roommate thought I was dead.",
        playerChoices: 2
      },
      c: { text: "Oh yeah?", playerChoices: 1 }
    },
    {
      a: { text: "Let me know the band later, yeah?", playerChoices: 2 },
      b: { text: "Oh no, the walking dead!", playerChoices: 2 },
      c: { text: "Damn, movie worthy.", playerChoices: 2 }
    }
  ],
  choice: [
    { a: "Boring", b: "Definitely needed", c: "Exciting" },

    {
      a: "Sat back, vibed with some new music.",
      b: "I slept for so long, my roommate thought I was dead.",
      c: "Went out for a long drive that turned into camping."
    },
    { complete: "Return to Map" }
  ]
};

raven.dialogue.boxes = {
  main: { top: 700, bottom: 850, left: 100, right: 1000 },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 400 },
    b: { top: 920, bottom: 1020, left: 450, right: 750 },
    c: { top: 920, bottom: 1020, left: 800, right: 1100 },
    complete: { top: 920, bottom: 1020, left: 100, right: 400 }
  },
  color: "#f9cb9ccc"
};

raven.dialogue.render = function() {
  //raven.display = true;
  raven.playerChoices =
    raven.dialogue.text[0].response[raven.chatProgress][
      raven.dialogue.playerResponse
    ].playerChoices;
  helperFunction.button.render(
    raven.dialogue.boxes.main,
    raven.dialogue.boxes.color
  );
  helperFunction.dialogueBoxes(
    raven.dialogue.boxes.main,
    raven.dialogue.text[0].response[raven.chatProgress][
      raven.dialogue.playerResponse
    ].text,
    40,
    60,
    "48px",
    ctx
  );

  {
    for (const prop in raven.dialogue.text[0].choice[raven.playerChoices]) {
      if (frameCount % 10 === 0) {
      }
      helperFunction.button.render(
        raven.dialogue.boxes.choices[prop],
        raven.dialogue.boxes.color
      );
      helperFunction.dialogueBoxes(
        raven.dialogue.boxes.choices[prop],
        raven.dialogue.text[0].choice[raven.playerChoices][prop],
        5,
        20,
        "24px",
        ctx
      );
    }
  }
};

raven.click = function(event) {
  for (const prop in raven.dialogue.text[0].choice[raven.playerChoices]) {
    if (helperFunction.button.click(raven.dialogue.boxes.choices[prop])) {
      if (prop == "complete") {
        raven.display = false;
      } else {
        raven.dialogue.playerResponse = [prop];
        raven.chatProgress++;
      }
    }
  }
};

export { raven };
