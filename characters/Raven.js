import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";



const images = {
  listening: document.getElementById("ravenL"),
  talking: document.getElementById("ravenT")
};

const text = [];

text[0] = {
  response: [
    { a: { text: "Heya, player! How was your time off?", playerChoices: 1 } },
    {
      a: { text: "Boring's better than horrible!", playerChoices: 0 },
      b: {
        text: "Niiiiiiiiiccccccccccceeeeeeeeeeeee",
        playerChoices: 0
      },
      c: { text: "Oh yeah?", playerChoices: 2 }
    },
    {
      a: { text: "Let me know the band later, yeah?", playerChoices: 0 },
      b: { text: "Oh no, the walking dead!", playerChoices: 0 },
      c: { text: "Damn, movie worthy.", playerChoices: 0 }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Boring", b: "Definitely needed", c: "Exciting" },

    {
      a: "Sat back, vibed with some new music.",
      b: "I slept for so long, my roommate thought I was dead.",
      c: "Went out for a long drive that turned into camping."
    },
  ]
};

text[1] = {
  response: [
    { a: { text: "How's the ramen slingin' today?", playerChoices: 1 } },
    {
      a: { text: "I feel that.", playerChoices: 0 },
      b: {
        text: "Niiiiiiiiccceeeeeeeee",
        playerChoices: 0
      },
      c: { text: "...that's the wrong pasta.", playerChoices: 0 }
    },
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Life sucking", b: "Gooooooooooooooooood", c: "Fun-chini :]" },
  ]
};

const boxes = {
  main: { top: 700, bottom: 850, left: 100, right: 1000 },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 400 },
    b: { top: 920, bottom: 1020, left: 450, right: 750 },
    c: { top: 920, bottom: 1020, left: 800, right: 1100 },
    complete: { top: 920, bottom: 1020, left: 100, right: 400 }
  },
  color: "#f9cb9ccc"
};

const raven = new npc(images, text, boxes, 1);

export { raven };