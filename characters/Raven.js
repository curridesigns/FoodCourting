import { canvas, ctx } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const raven = {};
raven.images = {
  listening: document.getElementById("ravenL"),
  talking: document.getElementById("ravenT")
};

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
  }
};

raven.dialogue = {
  firstDay: {
    greeting: {
      response: {
        1: {"Heya, player! How was your time off?"}
      },
      choice: {
        1: { a: "Boring", b: "Definitely needed", c: "Exciting" },
        2: {
          a: "Sat back, vibed with some new music.",
          b: "I slept for so long, my roommate thought I was dead.",
          c: "Went out for a long drive that turned into camping."
        },
      },
      response1: {
        a: "Boring's better than horrible!",
        b: "Niiiiiiiiice",
        c: "Oh yeah?"
      },
      response2: {
        a: "Let me know the band later, yeah?",
        b: "Oh no, the walking dead!",
        c: "Damn, movie worthy."
      }
    }
  },
  color: "red"
};
/*

*/
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
    raven.dialogueBoxes.color
  );
  helperFunction.dialogueBoxes(
    raven.dialogueBoxes.main,
    raven.dialogue.firstDay.greeting.npc,
    "48px",
    ctx
  );

  for (const prop in raven.dialogue.firstDay.greeting.choice1) {
    helperFunction.button.render(
      raven.dialogueBoxes.choices[prop],
      raven.dialogueBoxes.color
    );
    helperFunction.dialogueBoxes(
      raven.dialogueBoxes.choices[prop],
      raven.dialogue.firstDay.greeting.choice1[prop],
      "24px",
      ctx
    );
  }
};

raven.click = function(event) {
  for (const prop in raven.dialogue.firstDay.greeting.choice1) {
    if (helperFunction.button.click(raven.dialogueBoxes.choices[prop])) {
      console.log(prop);
    }
  }
};

export { raven };
