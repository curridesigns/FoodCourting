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
        text: "",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: { text: "", playerChoices: 0, talkingTime: 1 },
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

text[3] = {
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
        text: "You've never liked this before.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Oh",
        playerChoices: 0,
        talkingTime: 1
      }
    },
    {
    a: {text: "Oh... Yeah, I can get behind that.", playerChoices: 0, talkingTime: 1},
    b: {text: "", playerChoices: 0, talkingTime: 1}
    }
  ],
  choice: [
    { complete: "Return to Map" },
    { a: "I wanted to talk to you", b: "Yeah! (You grab the closest thing in the aisle)", c: "It wasn't in stock" },
    { a: "Our breakup", b: "Do you like working here?", c: "" }
    
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
      a: { text: "", playerChoices: 0, talkingTime: 1 },
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
      a: { text: "", playerChoices: 0, talkingTime: 1 },
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
      a: { text: "", playerChoices: 0, talkingTime: 1 },
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
      a: { text: "", playerChoices: 0, talkingTime: 1 },
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
      a: { text: "", playerChoices: 0, talkingTime: 1 },
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

text[9] = {
  response: [
    {
      a: {
        text: "",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: { text: "", playerChoices: 0, talkingTime: 1 },
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
