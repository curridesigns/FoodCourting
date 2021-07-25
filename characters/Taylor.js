//imports the npc class from it's file
import { npc } from "./npc.js";

//these are the images for the characters
const images = {
  listening: document.getElementById("taylorL"),
  talking: document.getElementById("taylorT"),
  idle: document.getElementById("Taylor")
};

//this is the text object that is passed into the npc class
const text = [];
//sets up each of the levels for the characters, they will have different numbers of replies for each level
text[1] = [];
text[2] = [];
text[3] = [];
text[4] = [];
text[5] = [];
text[6] = [];
text[7] = [];
text[8] = [];
text[9] = [];
text[10] = [];

text[1][0] = {
  response: [
    {
      a: {
        text: "Oh, player... So, you still work in the foodcourt?",
        playerChoices: 1,
        talkingTime: 1,
      },
    },
    {
      a: {
        text: "Ah haha! Those jokes of yours...",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Right, right.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: { text: "Oh really?", playerChoices: 0, talkingTime: 0.5 }
    },
  ],
  choice: [
    { complete: {text:"Return to Map"} },//0
    { 
      a: { 
        text: "No, I'm stalking you.",
        friendPoints: 5,
      },
      b: {
        text: "Yep, at the Ramen Shop.",
        friendPoints: 5,
      },
      c: {
        text: "I've never worked here.",
        friendPoints: 5,
      },
    },
  ]
};

text[2][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "So are you on break from college or something?",
        friendPoints: 5,
      },
      b: {
        text: "Did you drop out?",
        friendPoints: 5,
      },
      c: {
        text: "Did you already graduate?", 
        friendPoints: 5,
      },
    },
  ]
};

text[3][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "I wanted to talk to you.", 
        friendPoints: 5,
      }, 
      b: "Yeah! (grab something)", 
      c: "It wasn't in stock." },
    { 
      a: {
        text: "Our breakup", 
        friendPoints: 5,
      }, 
      b: {
        text: "Do you like working here?", 
        friendPoints: 5,
      },
      c: {
        text: "Nevermind.", 
        friendPoints: 5,
      },
    },
  ]
};


text[4][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "You know me... Bad with making lists.", 
        friendPoints: 5,
      },
      b: {
        text: "I like to get snacks and energy drinks for my shifts", 
        friendPoints: 5,
      }, 
      c: {
        text: "I haven't seen you in a lont time",
        friendPoints: 5,
      },
    }
  ]
};

text[5][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Cool, cool.", 
        friendPoints: 5,
      }, 
      b: {
        text: "Why?",
        friendPoints: 5,
      }, 
      c: {
        text: "Cool, I could hang out until your shifts starts?",
        friendPoints: 5,
      },
    }
  ]
};

text[6][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "You were kinda an ass about it.",
        friendPoints: 5,
      }, 
      b: {
        text: "Okay...",
        friendPoints: 5,
      }, 
      c: {
        text: "It's fine. Really, let's just.. forget it.",
        friendPoints: 5,
      },
    }
  ]
};

text[7][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Yo, yo, it's the shop man?",
        friendPoints: 5,
      }, 
      b: {
        text: "'Eyy",
        friendPoints: 5,
      }, 
      c: {
        text:"Hey?",
        friendPoints: 5,
      },
    },
  ]
};

text[8][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "For what?",
        friendPoints: 5,
      }, 
      b: {
        text: "What?",
        friendPoints: 5,
      }, 
      c: {
        text: "Yeah, I know.",
        friendPoints: 5,
      },
    },
    { 
      a: {
        text: "Wow.",
        friendPoints: 5,
      }, 
      b: {
        text: "Really?",
        friendPoints: 5,
      }, 
      c: {
        text: "That was stupid.",
        friendPoints: 5,
      },
    },
  ]
};

text[9][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Sure, man.",
        friendPoints: 5,
      }, 
      b: {
        text:"Uh, no.",
        friendPoints: 5,
      },
    },
  ]
};

text[10][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text:"Sounds good.",
        friendPoints: 5,
      }, 
      b: {
        text: "Actually, no.",
        friendPoints: 5,
      }, 
    },
  ]
};

//the various boxes that the text will be displayed in
const color = "#F3D950cc"
const boxes = {
  main: { top: 500, bottom: 850, left: 100, right: 1000, color: color },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 600, color: color },
    b: { top: 920, bottom: 1020, left: 650, right: 1150, color: color },
    c: { top: 920, bottom: 1020, left: 1200, right: 1700, color: color },
    complete: { top: 920, bottom: 1020, left: 100, right: 400, color: color }
  },
};

const taylor = new npc("taylor",images, text, boxes);

export { taylor };
