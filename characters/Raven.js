import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const raven = {};
raven.images = {
  listening: document.getElementById("ravenL"),
  talking: document.getElementById("ravenT")
};

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
    { a: "Heya, player! How was your time off?",  },
    {
      a: "Boring's better than horrible!",
      b: "I slept for so long, my roommate thought I was dead.",
      c: "Oh yeah?"
    },
    {
      a: "Let me know the band later, yeah?",
      b: "Oh no, the walking dead!",
      c: "Damn, movie worthy."
    }
  ],
  choice: [
    { a: "Boring", b: "Definitely needed", c: "Exciting" },
    
    {
      a: "Sat back, vibed with some new music.",
      b: "I slept for so long, my roommate thought I was dead.",
      c: "Went out for a long drive that turned into camping."
    }
  ]
};

raven.dialogue.boxes = {
  main: { top: 700, bottom: 850, left: 100, right: 1000 },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 400 },
    b: { top: 920, bottom: 1020, left: 450, right: 750 },
    c: { top: 920, bottom: 1020, left: 800, right: 1100 }
  },
  color: "#f9cb9ccc"
};

raven.dialogue.render = function() {
  helperFunction.button.render(
    raven.dialogue.boxes.main,
    raven.dialogue.boxes.color
  );
  helperFunction.dialogueBoxes(
    raven.dialogue.boxes.main,
    raven.dialogue.text[0].response[raven.chatProgress][raven.dialogue.playerResponse],
    40,
    60,
    "48px",
    ctx
  );

 if(raven.dialogue.text[0].response[raven.chatProgress][raven.dialogue.playerResponse].hasResponse) {for (const prop in raven.dialogue.text[0].choice[raven.chatProgress]) {
    if (frameCount % 120 === 0) {
    
    
  }
    helperFunction.button.render(
      raven.dialogue.boxes.choices[prop],
      raven.dialogue.boxes.color
    );
    helperFunction.dialogueBoxes(
      raven.dialogue.boxes.choices[prop],
      raven.dialogue.text[0].choice[raven.chatProgress][prop],
      5,
      20,
      "24px",
      ctx
    );
  };
 };
};

raven.click = function(event) {
  for (const prop in raven.dialogue.text[0].choice[raven.chatProgress]) {
    if (helperFunction.button.click(raven.dialogue.boxes.choices[prop])) {
      raven.dialogue.playerResponse = [prop];
      raven.chatProgress++;
    }
  }
};

export { raven };
