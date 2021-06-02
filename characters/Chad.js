import { canvas, ctx } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";


const images = {listening: document.getElementById("chadL"), talking: document.getElementById("chadT")};

const text = [];

text[0] = {
  response: [
    {
      a: {
        text: "Oh, it’s you. What brings you to the arcade?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Tch. Trend chaser. Retro was cool before it was retro.",
        playerChoices: 0,
        talkingTime: 2
      },
      b: {
        text: "Hrm. Anything in particular you have your eye on?",
        playerChoices: 2,
        talkingTime: 2
      },
      c: { 
        text: "Fare thee well, then.", 
        playerChoices: 0, 
        talkingTime: 0.5 }
    },
    {
      a: {
        text: "Ah, a cultured choice. The sword is the most noble of all weapons.",
        playerChoices: 0,
        talkingTime: 2
      },
      b: { 
        text: "A fellow intellectual, I see.", 
        playerChoices: 0, 
        talkingTime: 1 },
      c: { 
        text: "Tch. If you’re a jock, begone from this place.", 
        playerChoices: 0, 
        talkingTime: 1.5 }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Retro games", b: "The prizes", c: "Just passing through" },

    {
      a: "The sword",
      b: "The Rubik’s Cube",
      c: "The softball"
    }
  ]
};

text[1] = {
  response: [
    {
      a: {
        text: "Player, settle an argument for me. Which game is the most classic?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "I, for one, agree. Astronius set the bar for shooter games. All those hospitalizations in the 90s were a necessary sacrifice.",
        playerChoices: 0,
        talkingTime: 3
      },
      b: {
        text: "Hrm. Anything in particular you have your eye on?",
        playerChoices: 2,
        talkingTime: 2
      },
      c: { 
        text: "Fare thee well, then.", 
        playerChoices: 0, 
        talkingTime: 0.5 }
    },
    {
      a: {
        text: "Ah, a cultured choice. The sword is the most noble of all weapons.",
        playerChoices: 0,
        talkingTime: 2
      },
      b: { 
        text: "A fellow intellectual, I see.", 
        playerChoices: 0, 
        talkingTime: 1 },
      c: { 
        text: "Tch. If you’re a jock, begone from this place.", 
        playerChoices: 0, 
        talkingTime: 1.5 }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Astronius (space shooter)", b: "Rolling Hills (platformer)", c: "Just passing through" },

    {
      a: "Astronius (space shooter)",
      b: "The Rubik’s Cube",
      c: "The softball"
    }
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
  color: "#8F6EADcc"
};

const chad = new npc(images, text, "black", boxes);
export { chad };