import { canvas, ctx, frameCount } from "../canvas.js";
import { physics } from "../miniGame/physics.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";

const ted = {};

ted.image = {
  miniGame: document.getElementById("miniTed"),
  listening: document.getElementById("tedL"),
  talking: document.getElementById("tedT"),
  idle: document.getElementById("tedL")
};

ted.render = function(state = "miniGame", novelX, novelY, debug = false) {
  switch (state) {
    case "miniGame":
      ctx.translate(ted.miniGame.pos.x, ted.miniGame.pos.y);
      ctx.drawImage(
        ted.image.miniGame,
        ted.miniGame.centerOffset.x,
        ted.miniGame.centerOffset.y
      );
      if (debug) {
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 10, 10);
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = ted.miniGame.color;
        ctx.arc(0, 0, ted.miniGame.size, 0, 2 * Math.PI);
        ctx.stroke();
      }
      ctx.translate(-ted.miniGame.pos.x, -ted.miniGame.pos.y);
      break;
    case "novel":
      ted.novel.render(novelX,novelY);
  }
};

ted.miniGame = {};
//all the miniGame code for ted
{
  ted.miniGame.size = 45;
  ted.miniGame.pos = { x: 1825, y: 300 };
  ted.miniGame.speedMax = 3;
  ted.miniGame.centerOffset = { x: -72, y: -85 };
  ted.miniGame.up = { range: [1, 5], flag: false };
  ted.miniGame.down = { range: [6, 10], flag: false };
  ted.miniGame.right = { range: [1, 5], flag: false };
  ted.miniGame.left = { range: [6, 10], flag: false };
  ted.miniGame.direction = { x: 0, y: 0 };
  ted.miniGame.speed = { x: 0, y: 0 };
  ted.miniGame.brakePedal = { x: true, y: true };
  ted.miniGame.input = { x: 0, y: 0 };
  ted.miniGame.contact = { x: false, y: false };
  ted.miniGame.needsMovement = true;
  ted.miniGame.initial = true;
  ted.miniGame.timer = false;
  ted.miniGame.moveTime = Math.floor(helperFunction.randomRange(0, 21));
  ted.miniGame.endTime = new Date().getTime() + ted.miniGame.moveTime;
  ted.miniGame.movement = function() {
    if (frameCount % 10 === 0) {
      // console.log("input x: " + ted.miniGame.input.x);
      // console.log("input y: " + ted.miniGame.input.y);
      // console.log("contact x: " + ted.miniGame.contact.x);
      // console.log("contact y: " + ted.miniGame.contact.y);
      // console.log("movement: " + ted.miniGame.needsMovement);
      // console.log("timer: " + ted.miniGame.timer);
    }
    if (ted.miniGame.timer) {
      ted.miniGame.moveTime = Math.floor(
        helperFunction.randomRange(1000, 4000)
      );
      ted.miniGame.endTime = new Date().getTime() + ted.miniGame.moveTime;
      ted.miniGame.timer = false;
    }
    if (Date.now() >= ted.miniGame.endTime) {
      ted.miniGame.timer = true;
    }

    ted.miniGame.brakePedal = { x: true, y: true };
    if (ted.miniGame.needsMovement || ted.miniGame.timer) {
      if (ted.miniGame.initial || ted.miniGame.timer) {
        ted.miniGame.input.x = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.left.range[1])
        );
        ted.miniGame.input.y = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.initial = false;
      }
      if (ted.miniGame.contact.x) {
        ted.miniGame.input.x = 0;
        ted.miniGame.input.y = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.contact.x = false;
      }
      if (ted.miniGame.contact.y) {
        ted.miniGame.input.y = 0;
        ted.miniGame.input.x = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.contact.y = false;
      }
      ted.miniGame.needsMovement = false;
    }
    if (ted.miniGame.input.x === 0 && ted.miniGame.input.y === 0) {
      ted.miniGame.up.flag = false;
      ted.miniGame.down.flag = false;
      ted.miniGame.right.flag = false;
      ted.miniGame.left.flag = false;
    }
    if (
      ted.miniGame.input.y >= ted.miniGame.up.range[0] &&
      ted.miniGame.input.y <= ted.miniGame.up.range[1]
    ) {
      ted.miniGame.up.flag = true;
    }
    if (
      ted.miniGame.input.y >= ted.miniGame.down.range[0] &&
      ted.miniGame.input.y <= ted.miniGame.down.range[1]
    ) {
      ted.miniGame.down.flag = true;
    }
    if (
      ted.miniGame.input.x >= ted.miniGame.right.range[0] &&
      ted.miniGame.input.x <= ted.miniGame.right.range[1]
    ) {
      ted.miniGame.right.flag = true;
    }
    if (
      ted.miniGame.input.x >= ted.miniGame.left.range[0] &&
      ted.miniGame.input.x <= ted.miniGame.left.range[1]
    ) {
      ted.miniGame.left.flag = true;
    }
    if (ted.miniGame.contact.y || ted.miniGame.contact.x) {
      ted.miniGame.up.flag = false;
      ted.miniGame.down.flag = false;
      ted.miniGame.right.flag = false;
      ted.miniGame.left.flag = false;
      ted.miniGame.needsMovement = true;
    }

    //sets the values for the direction to pass to the physics.movement function
    if (ted.miniGame.up.flag) {
      ted.miniGame.direction.y = -1;
      ted.miniGame.brakePedal.y = false;
    }
    //moves the ball down
    if (ted.miniGame.down.flag) {
      ted.miniGame.direction.y = 1;
      ted.miniGame.brakePedal.y = false;
    }
    if (ted.miniGame.left.flag) {
      ted.miniGame.direction.x = -1;
      ted.miniGame.brakePedal.x = false;
    }
    //moves the ball down
    if (ted.miniGame.right.flag) {
      ted.miniGame.direction.x = 1;
      ted.miniGame.brakePedal.x = false;
    }

    physics.movement(ted.miniGame);
    physics.worldSpace(ted.miniGame);
    physics.collision(ted.miniGame);
  };
}


const text = [];

text[0] = {
  response: [
    {
      a: {
        text: "Player! I wanted to talk to you about your performance at work.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Oh, no. Just wanted to say you're doing a great job!",
        playerChoices: 0,
        talkingTime: 0.75
      },
      b: {
        text: "I just wanted to tell you you’re on the track for Employee of the Month. Keep at it, old sport!",
        playerChoices: 0,
        talkingTime: 2
      },
      c: {
        text: "Actually, you know what? Take the rest of the day off. You’ve earned it!",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },//0
    { a: "Is there a problem?", b: "About what, exactly?", c: "I really need to get back to work." }
  ]
};

text[1] = {
  response: [
    {
      a: {
        text: "Hey, just wanted to say you're doing great today, Player.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0, 
        talkingTime: 1
         },
      b: {
        text: "Oh, I just noticed how diligent you were being. You know, the last person who worked here wasn’t that motivated. In fact, this one time…",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Ha! Well said, Player! You know, I’ve always thought that, but as your manager I feel like I don’t say it enough. So often I’ve gone ‘oh, look at that Player, what a studious employee’... ",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Thanks", b: "What brought this on?", c: "Aren't I always?" }
  ]
};

text[2] = {
  response: [
    {
      a: {
        text: "Hey, just wanted to say you're doing great today, Player.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Oh, I just noticed how diligent you were being. You know, the last person who worked here wasn’t that motivated. In fact, this one time…",
        playerChoices: 0,
        talkingTime: 1
      },
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Thanks", b: "What brought this on?" }
  ]
};

text[3] = {
  response: [
    {
      a: {
        text: "Hey, just wanted to say you're doing great today, Player.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0,
        talkingTime: 1
      },
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Thanks"}
  ]
};

text[4] = {
  response: [
    {
      a: {
        text: "Hey, just wanted to say you're doing great today, Player.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "You have really great form, might have to have you retrain ME sometime, haha!",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Woah! I'm just complimenting your work ethic, little worker!",
        playerChoices: 2,
        talkingTime: 1
      },
    },
    {
      a: {
        text: "Anyways, did you hear about...",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Alright, alright. Anyways, did you hear about...",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Thanks", b: "Again?" },
    { a: "Yeah, sure. Thanks.", b: "No, it's weird." }
  ]
};

text[5] = {
  response: [
    {
      a: {
        text: "Hey, just wanted to say you're doing great today, Player.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0,
        talkingTime: 1
      },
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Thanks"}
  ]
};

// text[6] = {
//   response: [
//     {
//       a: {
//         text: "",
//         playerChoices: 1,
//         talkingTime: 1
//       }
//     },
//     {
//       a: { text: "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…", playerChoices: 0, talkingTime: 1 },
//       b: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       },
//       c: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       }
//     }
//   ],
//   choice: [
//     { complete: "Return to Map" },
//     { a: "", b: "", c: "" }
//   ]
// };

// text[7] = {
//   response: [
//     {
//       a: {
//         text: "Hey, Player! So, I know you’re off work tomorrow, buuuut I was wondering if you could come in for overtime? Yknow, since we’re pals and all.",
//         playerChoices: 1,
//         talkingTime: 1
//       }
//     },
//     {
//       a: { text: "", playerChoices: 0, talkingTime: 1 },
//       b: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       },
//       c: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       }
//     }
//   ],
//   choice: [
//     { complete: "Return to Map" },
//     { a: "", b: "", c: "" }
//   ]
// };

// text[8] = {
//   response: [
//     {
//       a: {
//         text: "",
//         playerChoices: 1,
//         talkingTime: 1
//       }
//     },
//     {
//       a: { text: "", playerChoices: 0, talkingTime: 1 },
//       b: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       },
//       c: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       }
//     }
//   ],
//   choice: [
//     { complete: "Return to Map" },
//     { a: "", b: "", c: "" }
//   ]
// };

// text[9] = {
//   response: [
//     {
//       a: {
//         text: "",
//         playerChoices: 1,
//         talkingTime: 1
//       }
//     },
//     {
//       a: { text: "", playerChoices: 0, talkingTime: 1 },
//       b: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       },
//       c: {
//         text: "",
//         playerChoices: 0,
//         talkingTime: 1
//       }
//     }
//   ],
//   choice: [
//     { complete: "Return to Map" },
//     { a: "", b: "", c: "" }
//   ]
// };


const boxes = {
  main: { top: 250, bottom: 550, left: 900, right: 1700 },
  choices: {
    a: { top: 600, bottom: 700, left: 1200, right: 1700 },
    b: { top: 750, bottom: 850, left: 1200, right: 1700 },
    c: { top: 900, bottom: 1000, left: 1200, right: 1700 },
    complete: { top: 600, bottom: 700, left: 1200, right: 1700 }
  },
  color: "#8F6EADcc"
};

ted.novel = new npc("ted" ,ted.image, text, boxes );
export { ted };
