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

const boxes = {};

const chad = new npc(images, text, boxes);
export { chad }