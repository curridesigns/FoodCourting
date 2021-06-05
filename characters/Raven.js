import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";

const images = {
  listening: document.getElementById("ravenL"),
  talking: document.getElementById("ravenT"),
  idle: document.getElementById("ravenC")
};

const text = [];

text[0] = {
  response: [
    {
      a: {
        text: "Heya, player! How was your time off?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Boring's better than horrible!",
        playerChoices: 0,
        talkingTime: 0.75
      },
      b: {
        text: "Niiiiiiiiiccccccccccceeeeeeeeeeeee",
        playerChoices: 0,
        talkingTime: 2
      },
      c: { text: "Oh yeah?", playerChoices: 2, talkingTime: 0.5 }
    },
    {
      a: {
        text: "Let me know the band later, yeah?",
        playerChoices: 0,
        talkingTime: 2
      },
      b: { text: "Oh no, the walking dead!", playerChoices: 0, talkingTime: 1 },
      c: { text: "Damn, movie worthy.", playerChoices: 0, talkingTime: 0.8 }
    }
  ],
  choice: [
    { complete: "Return to Map" },//0
    { a: "Boring", b: "Definitely needed", c: "Exciting" },

    {
      a: "Sat back, vibed with some new music.",
      b: "I slept for so long, my roommate thought I was dead.",
      c: "Went out for a long drive that turned into camping."
    }
  ]
};

text[1] = {
  response: [
    {
      a: {
        text: "How's the ramen slingin' today?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: { text: "I feel that.", playerChoices: 0, talkingTime: 1 },
      b: {
        text: "Niiiiiiiiccceeeeeeeee",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "...that's the wrong pasta.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Life sucking", b: "Gooooooooooooooooood", c: "Fun-chini :]" }
  ]
};

text[2] = {
  response: [
    {
      a: {
        text: "Ugh, you just missed the most annoying kids.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Hot pink hair, band shirts, bad eyeliner, the works.",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "If only you were here earlier so we could make fun of them together.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Haha right? To only have to worry about your eyeliner and what Syndey said online.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "Oh thank god", b: "Aw shucks", c: "Ah to be a cringey kid" }
  ]
};

text[3] = {
  response: [
    {
      a: {
        text: "There's a local concert this weekend, I'm waiting for my manager to let me know if I have Saturday off or not.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Dead Mouse Trap",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "Yeah? :]",
        playerChoices: 2,
        talkingTime: 1
      },
      c: {
        text: "Sadly.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
    
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "What's the band?", b: "Wannabe grungey, I like it.", c: "All managers suck at that, huh." }
  ]
};

text[4] = {
  response: [
    {
      a: {
        text: "",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "", b: "", c: "" }
  ]
};

text[5] = {
  response: [
    {
      a: {
        text: "",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "", b: "", c: "" }
  ]
};

text[6] = {
  response: [
    {
      a: {
        text: "",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "", b: "", c: "" }
  ]
};

text[7] = {
  response: [
    {
      a: {
        text: "",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "", b: "", c: "" }
  ]
};

text[8] = {
  response: [
    {
      a: {
        text: "",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "", b: "", c: "" }
  ]
};

/*const boxes = {
  main: { top: 700, bottom: 850, left: 100, right: 1000 },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 400 },
    b: { top: 920, bottom: 1020, left: 450, right: 750 },
    c: { top: 920, bottom: 1020, left: 800, right: 1100 },
    complete: { top: 920, bottom: 1020, left: 100, right: 400 }
  },
  color: "#8F6EADcc"
};*/

const boxes = {
  main: { top: 500, bottom: 850, left: 100, right: 1000 },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 600 },
    b: { top: 920, bottom: 1020, left: 650, right: 1150 },
    c: { top: 920, bottom: 1020, left: 1200, right: 1700 },
    complete: { top: 920, bottom: 1020, left: 100, right: 400 }
  },
  color: "#8F6EADcc"
};


const raven = new npc("raven",images, text, boxes);

export { raven };
