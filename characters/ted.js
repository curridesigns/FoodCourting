////imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../canvas.js";
import { physics } from "../miniGame/physics.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";

//ted is more complicated than the other npcs since he appears in both the visualNovel and the miniGame
const ted = {};

//ted's images
ted.image = {
  miniGame: document.getElementById("miniTed"),
  listening: document.getElementById("tedL"),
  talking: document.getElementById("tedT"),
  idle: document.getElementById("tedL")
};

//teds render function, the state is to switch between rendering the minigame version or the novel version
ted.render = function(state = "miniGame", novelX, novelY, debug = false) {
  switch (state) {
    case "miniGame":
      //similar to the player rendering system
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
      ted.novel.render(novelX, novelY);
  }
};

ted.miniGame = {};
//all the miniGame code for ted
{
  //a lot of these values are the same for the player in the miniGame, the ones that are different are
  //commented as such
  ted.miniGame.size = 45;
  ted.miniGame.pos = { x: 1825, y: 300 };
  ted.miniGame.speedMax = 3;
  ted.miniGame.centerOffset = { x: -72, y: -85 };
  //ted's movement is essentially just fuzzing the physics system with inputs
  //theses values are generated randomly, and give ted his movement based on which range they hit
  //they are seperated by axis
  ted.miniGame.up = { range: [1, 5], flag: false };
  ted.miniGame.down = { range: [6, 10], flag: false };
  ted.miniGame.right = { range: [1, 5], flag: false };
  ted.miniGame.left = { range: [6, 10], flag: false };
  //the stored random value for the input fuzzing
  ted.miniGame.input = { x: 0, y: 0 };
  ted.miniGame.direction = { x: 0, y: 0 };
  ted.miniGame.speed = { x: 0, y: 0 };
  ted.miniGame.brakePedal = { x: true, y: true };
  //this tells the fuzzing system if it has run into something, and which axis
  ted.miniGame.contact = { x: false, y: false };
  //bool used to tell if it needs to run the random input generation
  ted.miniGame.needsMovement = true;
  //a setup bool used to generate the first input values
  ted.miniGame.initial = true;
  //bool for if the inputs need to be regenerated based on a random time value
  ted.miniGame.timer = false;
  //the variables for the timer
  ted.miniGame.moveTime = Math.floor(helperFunction.randomRange(0, 21));
  ted.miniGame.endTime = new Date().getTime() + ted.miniGame.moveTime;

  ted.miniGame.movement = function() {
    //resets the timer at the top of the next frame after it has fired
    if (ted.miniGame.timer) {
      ted.miniGame.moveTime = Math.floor(
        helperFunction.randomRange(1000, 4000)
      );
      ted.miniGame.endTime = new Date().getTime() + ted.miniGame.moveTime;
      ted.miniGame.timer = false;
    }
    //fires the timer when apporiate
    if (Date.now() >= ted.miniGame.endTime) {
      ted.miniGame.timer = true;
    }

    //sets the brakePedal on every frame to be turned off by the appropriate input value
    ted.miniGame.brakePedal = { x: true, y: true };

    //this generates input values to tell ted where to move
    if (ted.miniGame.needsMovement || ted.miniGame.timer) {
      //if the timer goes off, or the it is the initial run, it generates new values for everything
      if (ted.miniGame.initial || ted.miniGame.timer) {
        ted.miniGame.input.x = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.left.range[1])
        );
        ted.miniGame.input.y = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.initial = false;
      }
      //the contacts generate new movement values for the opposite axis to try and get ted away from where
      //he is
      if (ted.miniGame.contact.x) {
        ted.miniGame.input.x = 0;
        ted.miniGame.input.y = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.contact.x = false;
        ted.miniGame.timer = true;
      }
      if (ted.miniGame.contact.y) {
        ted.miniGame.input.y = 0;
        ted.miniGame.input.x = Math.floor(
          helperFunction.randomRange(0, ted.miniGame.down.range[1])
        );
        ted.miniGame.contact.y = false;
        ted.miniGame.timer = true;
      }
      //resets the needsMovement flag so it doesnt regenerate on the next frame
      ted.miniGame.needsMovement = false;
    }

    //if both input values are 0, it stops ted where he stands
    if (ted.miniGame.input.x === 0 && ted.miniGame.input.y === 0) {
      ted.miniGame.up.flag = false;
      ted.miniGame.down.flag = false;
      ted.miniGame.right.flag = false;
      ted.miniGame.left.flag = false;
    }

    //the fuzz system for the flags
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
    //if he hits something it stops all movement, and regenerates movement values on the next frame
    if (ted.miniGame.contact.y || ted.miniGame.contact.x) {
      ted.miniGame.up.flag = false;
      ted.miniGame.down.flag = false;
      ted.miniGame.right.flag = false;
      ted.miniGame.left.flag = false;
      ted.miniGame.needsMovement = true;
    }

    //sets the values for the direction to pass to the physics.movement function
    //tells the physics engine to move ted "up" the screen
    if (ted.miniGame.up.flag) {
      ted.miniGame.direction.y = -1;
      ted.miniGame.brakePedal.y = false;
    }

    //tells the physics engine to move ted "down" the screen
    if (ted.miniGame.down.flag) {
      ted.miniGame.direction.y = 1;
      ted.miniGame.brakePedal.y = false;
    }

    //tells the physics engine to move ted "left" on the screen
    if (ted.miniGame.left.flag) {
      ted.miniGame.direction.x = -1;
      ted.miniGame.brakePedal.x = false;
    }

    //tells the physics engine to move ted "right" on the screen
    if (ted.miniGame.right.flag) {
      ted.miniGame.direction.x = 1;
      ted.miniGame.brakePedal.x = false;
    }

    //calls the physics functions that actually affect ted's pos
    physics.movement(ted.miniGame);
    physics.worldSpace(ted.miniGame);
    physics.collision(ted.miniGame);
  };
}

//novel related code starts here

//this is the text object that is passed into the npc class
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
        talkingTime: 1
      },
      b: {
        text:
          "I just wanted to tell you you’re on the track for Employee of the Month. Keep at it, old sport!",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text:
          "Actually, you know what? Take the rest of the day off. You’ve earned it!",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" }, //0
    {
      a: "Is there a problem?",
      b: "About what, exactly?",
      c: "I really need to get back to work."
    }
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
        text:
          "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text:
          "Oh, I just noticed how diligent you were being. You know, the last person who worked here wasn’t that motivated. In fact, this one time…",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text:
          "Ha! Well said, Player! You know, I’ve always thought that, but as your manager I feel like I don’t say it enough. So often I’ve gone ‘oh, look at that Player, what a studious employee’... ",
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
        text:
          "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text:
          "Oh, I just noticed how diligent you were being. You know, the last person who worked here wasn’t that motivated. In fact, this one time…",
        playerChoices: 0,
        talkingTime: 1
      }
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
        text:
          "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [{ complete: "Return to Map" }, { a: "Thanks" }]
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
        text:
          "You have really great form, might have to have you retrain ME sometime, haha!",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Woah! I'm just complimenting your work ethic, little worker!",
        playerChoices: 2,
        talkingTime: 1
      }
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
        text:
          "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about…",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [{ complete: "Return to Map" }, { a: "Thanks" }]
};

text[6] = {
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
        text: "What do you do when you're not here?",
        playerChoices: 2,
        talkingTime: 1
      }
    },
    {
      a: {
        text:
          "It's very good to rest up, must be what keeps you optimal while working here!",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Another job? We're not enough for you?",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text:
          "Where? Let me know if you need a hiking buddy to keep you... safe. It's dangerous out there.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Thanks" },
    { a: "Stay home.", b: "I have another job.", c: "Hike" }
  ]
};

text[7] = {
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
        text:
          "A lot better than our last employee, ya know I take this business very seriously. Just because we're in a chain cooporation doesn't mean we can't be... close.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [{ complete: "Return to Map" }, { a: "Thanks" }]
};

text[8] = {
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
        text:
          "Yeah! Well, you always do great, so you don’t need me saying that, haha. Anyway, don’t let me detain you. Hey, did you hear about that attack that happened in the park near here? Better be careful, huh!",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [{ complete: "Return to Map" }, { a: "Thanks" }]
};

text[9] = {
  response: [
    {
      a: {
        text:
          "Hey, Player! So, I know you’re off work tomorrow, buuuut I was wondering if you could come in for overtime? Yknow, since we’re pals and all.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text:
          "Ah, that’s the way it goes, I guess! Not a problem, buddy! I’m going to kill you in your sleep. What? I didn’t say anything.",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "That's the spirit! See you tomorrow then!",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Absolutely not.", b: "Sure, I guess" }
  ]
};

//the various boxes that the text will be displayed in
const boxes = {
  main: { top: 250, bottom: 550, left: 900, right: 1700 },
  choices: {
    a: { top: 600, bottom: 700, left: 1200, right: 1700 },
    b: { top: 750, bottom: 850, left: 1200, right: 1700 },
    c: { top: 900, bottom: 1000, left: 1200, right: 1700 },
    complete: { top: 600, bottom: 700, left: 1200, right: 1700 }
  },
  color: "#91d13dcc"
};

ted.novel = new npc("ted", ted.image, text, boxes);
export { ted };
