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
        talkingTime: 1.5
      }
    },
    {
      a: {
        text: "I, for one, agree. Astronius set the bar for shooter games. All those hospitalizations in the 90s were a necessary sacrifice.",
        playerChoices: 0,
        talkingTime: 3
      },
      b: {
        text: "Tch, you play a baby game like Rolling Hills? How can it be a classic if it doesn’t even have a gritty reboot?",
        playerChoices: 0,
        talkingTime: 2.6
      },
      c: { 
        text: "Ah, the classic tale of a robot against the world. You know, I watched the film adaptation three times.", 
        playerChoices: 0, 
        talkingTime: 2.5 }
    },
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Astronius (space shooter)", b: "Rolling Hills (platformer)", c: "Rust Bucket (beat-em-up)" },

  ]
};

text[2] = {
  response: [
    {
      a: {
        text: "Looks like the Rolling Hills cabinet broke. Hope you weren’t looking to play that one.",
        playerChoices: 1,
        talkingTime: 2.4
      }
    },
    {
      a: {
        text: "Tch. Rolling Hills was a blight on this arcade’s elite game selection.",
        playerChoices: 0,
        talkingTime: 2
      },
      b: {
        text: "Precisely. I’ve suggested to my manager that we obtain a cabinet of the Japan-exclusive Resident Vicious on-rails shooter to replace it.",
        playerChoices: 0,
        talkingTime: 3.2
      },
      c: { 
        text: "Some plebeian put chewing gum into the quarter slot and jammed it.", 
        playerChoices: 0, 
        talkingTime: 2.5 }
    },
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Aw, that’s a shame.", b: "Not a big loss", c: "Huh, how’d it break?" },

  ]
};

text[3] = {
  response: [
    {
      a: {
        text: "I’m fuming. Someone beat my Rust Bucket highscore that’s been standing for ten months.",
        playerChoices: 1,
        talkingTime: 2.4
      }
    },
    {
      a: {
        text: "Merely a setback. The reign of CHD will rise again.",
        playerChoices: 0,
        talkingTime: 1.5
      },
      b: {
        text: "The identity of ASS remains a secret, I’m afraid.",
        playerChoices: 0,
        talkingTime: 1.4
      },
      c: { 
        text: "Verily so. I’m glad you recognize my mad beat-em-up skills… someone has to.", 
        playerChoices: 0, 
        talkingTime: 2.5 }
    },
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Ouch.", b: "Any idea who?", c: "You’ll get it back." },

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

const chad = new npc(images, text, boxes);
export { chad };