//imports the npc class from it's file
import { npc } from "./npc.js";

//these are the images for the characters
const images = {
  listening: document.getElementById("ravenL"),
  talking: document.getElementById("ravenT"),
  idle: document.getElementById("ravenC")
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
        text: "Heya, player! How was your time off?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Boring's better than horrible!",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Niiiiiiiiiccccccccccceeeeeeeeeeeee",
        playerChoices: 0,
        talkingTime: 1
      },
      c: { 
        text: "Oh yeah?", 
        playerChoices: 2, 
        talkingTime: 0.5 
      },
    },
    {
      a: {
        text: "Let me know the band later, yeah?",
        playerChoices: 0,
        talkingTime: 1
      },
      b: { 
        text: "Oh no, the walking dead!", 
        playerChoices: 0, 
        talkingTime: 1 
      },
      c: { 
        text: "Damn, movie worthy.", 
        playerChoices: 0,
        talkingTime: 0.8 
      }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },//0
    {
      a: {
      text: "Boring",
      friendPoints: 0,
    },
      b: {
       text: "Definitely needed",
       friendPoints: 0,
      }, 
      c: {
        text: "Exciting",
        friendPoints: 0,
      },
     },

    {
      a: {
        text: "Sat back, vibed with some new music.",
        friendPoints: 10,
      },
      b: {
        text: "I slept for so long, my roommate thought I was dead.",
        friendPoints: 5,
      },
      c: {
        text: "Went out for a long drive that turned into camping.",
        friendPoints: 5,
      },
    }
  ],
};

text[1][1] = {
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
      c: { 
        text: "Oh really?", 
        playerChoices: 0, 
        talkingTime: 0.5 
      },
    },
  ],
  choice: [
    { complete: {text: "Return to Map"} },//0
    {
      a: {
      text: "Boring",
      friendPoints: 0,
    },
      b: {
       text: "Definitely needed",
       friendPoints: 0,
      }, 
      c: {
        text: "Exciting",
        friendPoints: 0,
      },
     },

    {
      a: {
        text: "Sat back, vibed with some new music.",
        friendPoints: 10,
      },
      b: {
        text: "I slept for so long, my roommate thought I was dead.",
        friendPoints: 5,
      },
      c: {
        text: "Went out for a long drive that turned into camping.",
        friendPoints: 5,
      },
    }
  ],
};



text[2][0] = {
  response: [
    {
      a: {
        text: "this is just to get this working",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "this is just to get this working",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "this is just to get this working",
        playerChoices: 0,
        talkingTime: 1
      },
      c: { 
        text: "this is just to get this working", 
        playerChoices: 2, 
        talkingTime: 0.5 
      },
    },
    {
      a: {
        text: "this is just to get this working",
        playerChoices: 0,
        talkingTime: 1
      },
      b: { 
        text: "this is just to get this working", 
        playerChoices: 0, 
        talkingTime: 1 
      },
      c: { 
        text: "this is just to get this working", 
        playerChoices: 0,
        talkingTime: 0.8 
      }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },//0
    {
      a: {
      text: "this is just to get this working",
      friendPoints: 0,
    },
      b: {
       text: "this is just to get this working",
       friendPoints: 0,
      }, 
      c: {
        text: "this is just to get this working",
        friendPoints: 0,
      },
     },

    {
      a: {
        text: "this is just to get this working",
        friendPoints: 10,
      },
      b: {
        text: "this is just to get this working",
        friendPoints: 5,
      },
      c: {
        text: "this is just to get this working",
        friendPoints: 5,
      },
    }
  ],
};

text[3][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Oh thank god",
        friendPoints: 0,
      }, 
      b: {
        text: "Aw shucks",
        friendPoints: 0,
      }, 
      c: {
        text: "Ah to be a cringey kid",
        friendPoints: 0,
      },
    },
  ]
};

text[4][0] = {
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
        text: "Sadly.",
        playerChoices: 0,
        talkingTime: 1
      },
      b: {
        text: "Yeah...",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Dead Mouse Trap",
        playerChoices: 2,
        talkingTime: 1
      }
    },
    {
      a: { 
        text: "Haha! Don't think it's weird?", 
        playerChoices: 0, 
        talkingTime: 2, 
      },
      b: { 
        text: "Yeah, I guess so...", 
        playerChoices: 0, 
        talkingTime: 1,
      },
      c: { 
        text: "Yeah? :]", 
        playerChoices: 0, 
        talktingTime: 1, 
      },
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "All managers suck at that, huh.",
        friendPoints: 0,
      }, 
      b: {
        text: "Cool.",
        friendPoints: 0,
      }, 
      c: {
        text: "What band?",
        friendPoints: 0,
      },
    },
    {
      a: {
        text: "I like it!",
        friendPoints: 0,
      },
      b: {
        text: "They sound kinda cringey.",
        friendPoints: 0,
      },
      c: {
        text: "Wannabe grungey, I like it.",
        friendPoints: 0,
      },
    },
  ]
}; 

text[5][0] = {
  response: [
    {
      a: {
        text: "...",
        playerChoices: 1,
        talkingTime: 0
      }
    },
    {
      a: {
        text: "I just can't help but think about what else I want to do with my life...",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "Barely chugging along.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Sure, I could switch off between that and my energy drink!",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Whatcha thinkin' about?",
        friendPoints: 0,
      }, 
      b: {
        text: "How's that one brain cell?",
        friendPoints: 0,
      }, 
      c: {
        text: "Need some coffee?",
        friendPoints: 0,
      },
    },
  ]
};

text[6][0] = {
  response: [
    {
      a: {
        text: "If you could do any job, what would you do? Like you didn't dream of working at the mall right?",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Oooo! You should show me what you make sometime!",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "Aw, come on.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Pure punk, I like it. Fuck government.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "An artist",
        friendPoints: 0,
      }, 
      b: {
        text: "I actually was the weird teen that wanted to work at the mall at least once.",
        friendPoints: 0,
      }, 
      c: {
        text: "I want to run away from society. Middle of the woods, farm, foraging, kinda life.",
        friendPoints: 0,
      },
    },
  ]
};

text[7][0] = {
  response: [
    {
      a: {
        text: "Mornings are NOT my thing.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "I'm surprised we're both here, haha",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "Maybe I should up my dose.",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "That makes me want to off myself, thnx.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Same",
        friendPoints: 0,
      }, 
      b: {
        text: "Need that daily caffeine",
        friendPoints: 0,
      }, 
      c: {
        text: "Go for a run?",
        friendPoints: 0,
      },
    },
  ]
};

text[8][0] = {
  response: [
    {
      a: {
        text: "I've got Saturday off!",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Want to come to that gig with me Saturday?",
        playerChoices: 2,
        talkingTime: 1 },
      },
      {
      a: {
        text: "Nice, can't wait!",
        playerChoices: 0,
        talkingTime: 1 },      
      b: {
        text: "Alright, cool. Come by and let me know if you change your mind.",
        playerChoices: 0,
        talkingTime: 1
    }
}
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Cool! I do too!",
        friendPoints: 0,
      },
    },
    { 
      a: {
        text: "Sure",
        friendPoints: 0,
      }, 
      b: {
        text: "No, thanks",
        friendPoints: 0,
      },
    },
  ]
};

text[9][0] = {
  response: [
    {
      a: {
        text: "Hey!",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "It’s a small alternative pub, Sammies with a side of Anarachy, that has small comedy and rock shows at night sometimes.",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "Mmm, I'm not sure how to explain it. You'll see!",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Ya know, same shit, different day.",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "So, where's this gig?",
        friendPoints: 0,
      }, 
      b: {
        text: "What kinda scene is this gig gonna be?",
        friendPoints: 0,
      }, 
      c: {
        text: "How are ya?",
        friendPoints: 0,
      },
    },
  ]
};

text[10][0] = {
  response: [
    {
      a: {
        text: "You ready for the gig tomorrow??",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Can't wait!",
        playerChoices: 0,
        talkingTime: 1 },
      b: {
        text: "It'll be alright, just stick with me!",
        playerChoices: 0,
        talkingTime: 1
      },
      c: {
        text: "Oh... okay, if you feel like going tomorrow, I'll look out for you!",
        playerChoices: 0,
        talkingTime: 1
      }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Yeah!",
        friendPoints: 0,
      }, 
      b: {
        text: "Nervous",
        friendPoints: 0,
      }, 
      c: {
        text: "Actually, I'm not sure about going.",
        friendPoints: 0,
      },
    },
  ]
};

//the various boxes that the text will be displayed in
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
