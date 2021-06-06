import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";

const images = {
  listening: document.getElementById("taylorL"),
  talking: document.getElementById("taylorT"),
  idle: document.getElementById("Taylor")
};

const text = [];

text[0] = {
  response: [
    {
      a: {
        text: "Oh, player... So, you still work in the foodcourt?",
        playerChoices: 1,
        talkingTime: 2,
      },
    },
    {
      a: {
        text: "Ah haha! Those jokes of yours...",
        playerChoices: 0,
        talkingTime: 0.75
      },
      b: {
        text: "Right, right.",
        playerChoices: 0,
        talkingTime: 2
      },
      c: { text: "Oh really?", playerChoices: 0, talkingTime: 0.5 }
    },
  ],
  choice: [
    { complete: "Return to Map" },//0
    { a: "No, I'm stalking you.", b: "Yep, at the Ramen Shop.", c: "I've never worked here." },
  ]
};

text[1] = {
  response: [
    {
      a: {
        text: "Welcome to [store name]... Oh, you're back.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: { text: "Uh... Yeah, break between quarters, ya know?", playerChoices: 0, talkingTime: 1 },
      b: {
        text: "No! I'm just on break.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "No, I'm home for break.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "So are you on break from college or something?", b: "Did you drop out?", c: "Did you already graduate?" }
  ]
};

text[2] = {
  response: [
    {
      a: {
        text: "Hey, picking up something?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "About?",
        playerChoices: 2,
        talkingTime: 1
      },
      b: {
        text: "You never used to like this...",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Oh.",
        playerChoices: 0,
        talkingTime: 1
      }
    },
    {
    a: {
        text: "This... Isn't the best time to talk about that.",
        playerChoices: 0,
        talkingTime: 1
    },
    b: {
        text: "Ya know, it's a job.",
        playerChoices: 0,
        talkingTime: 1
    },
    c: {
        text: "Alright...",
        playerChoices: 0,
        talkingTime: 1
    }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "I wanted to talk to you.", b: "Yeah! (grab something)", c: "It wasn't in stock." },
    { a: "Our breakup", b: "Do you like working here?", c: "Nevermind." }
  ]
};


text[3] = {
  response: [
    {
      a: {
        text: "You come to this store a lot.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Oh, yeah. I remember the time that we went to pick up supplies for that project and you forgot the posterboard, like the only thing you *actually* needed.",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Makes sense.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Yeah, it's kinda weird to be back.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "You know me... Bad with making lists.", b: "I like to get snacks and energy drinks for my shifts", c: "I haven't seen you in a lont time" }
  ]
};

text[4] = {
  response: [
    {
      a: {
        text: "Hey, I'm not on clock yet, came in a bit early.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Yeah, someone else will have'ta check you out today.",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "I was out of coffee at my house, haha.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Sure man!",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Cool, cool.", b: "Why?", c: "Cool, I could hang out until your shifts starts?" }
  ]
};

text[5] = {
  response: [
    {
      a: {
        text: "Ya know, I was thinking about our breakup...",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Haha! Yeah.... I'm sorry about that.",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "I'm sorry for all of it.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Okay...",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "You were kinda an ass about it.", b: "Okay...", c: "It's fine. Really, let's just.. forget it." }
  ]
};

text[6] = {
  response: [
    {
      a: {
        text: "Yo, yo, it's the ramen man!",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Haha, yeah!",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Haha, 'eyyyy!'",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "I might've had too much caffeine... haha",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Yo, yo, it's the shop man?", b: "'Eyy", c: "Hey?" }
  ]
};

text[7] = {
  response: [
    {
      a: {
        text: "Hey, I lied. I... I'm not on break from college. I got kicked out.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "It was stupid. I got caught plagerizing... I just didn't have enough time anymore to write paper after paper while still working and all my other classes and... I didn't think they'd check?",
        playerChoices: 2,
        talkingTime: 1
      },
      b: {
        text: "Yeah...",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "You knew? Okay...",
        playerChoices: 0,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Yeah...",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Yeah...",
        playerChoices: 0,
        talkingTime: 1        
      },
      c: {
        text: "Yeah...",
        playerChoices: 0,
        talkingTime: 1        
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "For what?", b: "What?", c: "Yeah, I know." },
    { a: "Wow.", b: "Really?", c: "That was stupid."}
  ]
};

text[8] = {
  response: [
    {
      a: {
        text: "Hey, want to hang out tomorrow?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Cool, cool!",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Cool, cool!",
        playerChoices: 0,
        talkingTime: 1
      },
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Sure, man.", b: "Uh, no."}
  ]
};

text[9] = {
  response: [
    {
      a: {
        text: "Want to just play some games tomorrow?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Nice, I just got in that new shooter - ya know, Zombie Bullets? I've been psyched to break it in, it could be like our good old days!",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Alright, we can find something else then...",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Sounds good.", b: "Actually, no." }
  ]
};

const boxes = {
  main: { top: 500, bottom: 850, left: 100, right: 1000 },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 600 },
    b: { top: 920, bottom: 1020, left: 650, right: 1150 },
    c: { top: 920, bottom: 1020, left: 1200, right: 1700 },
    complete: { top: 920, bottom: 1020, left: 100, right: 400 }
  },
  color: "#F3D950cc"
};

const taylor = new npc("taylor",images, text, boxes);

export { taylor };
