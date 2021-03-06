
//imports the npc class from it's file
import { npc } from "./npc.js";


//these are the images for the characters
const images = {listening: document.getElementById("chadL"), talking: document.getElementById("chadT")};


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
    { complete: {text: "Return to Map",} },
    { 
      a: {
        text: "Retro games",
        friendPoints: 5,
      },
      b: {
        text: "The prizes",
        friendPoints: 5,
      }, 
      c: {
        text: "Just passing through",
        friendPoints: 5,
      }
     },

    {
      a: {
        text: "The sword",
        friendPoints: 5,
      },
      b: {
        text:"The Rubik’s Cube",
        friendPoints: 5,
      },
      c: {
        text:"The softball",
        friendPoints: 5,
      },
    }
  ]
};

text[2][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text:"Astronius (space shooter)",
        friendPoints: 5,
      },
      b: {
        text: "Rolling Hills (platformer)",
        friendPoints: 5,
      },
      c: {
        text:"Rust Bucket (beat-em-up)",
        friendPoints: 5,
      }
     },

  ]
};

text[3][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Aw, that’s a shame.",
        friendPoints: 5,
      }, 
      b: {
        text: "Not a big loss",
        friendPoints: 5,
      }, 
      c: {
        text: "Huh, how’d it break?",
        friendPoints: 5,
      }
    },

  ]
};

text[4][0] = {
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
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Ouch.",
        friendPoints: 5,
      }, 
      b: {
        text:"Any idea who?",
        friendPoints: 5,
      }, 
      c: {
        text: "You’ll get it back.",
        friendPoints: 5,
      },
    },

  ]
};

text[5][0] = {
  response: [
    {
      a: {
        text: "Feh. Once again, I’ve fallen victim to reverse sexism.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Oh, I wouldn’t expect a non-nerd to understand my plight. Off with you! Let me stew with my cheese-flavored Mountained Dew in peace.",
        playerChoices: 0,
        talkingTime: 3.2
      },
      b: {
        text: "I was rejected by a potential dark elf beau on my dating platform of choice, the Wars of Worldcraft unofficial roleplay forum, simply on the virtue of not being a lesbian. Misandry, I say!",
        playerChoices: 2,
        talkingTime: 4
      },
      c: { 
        text: "Very well. I respect the self-centered callousness towards my plight.", 
        playerChoices: 0, 
        talkingTime: 1.5 }
    },
    {
      a: {
        text: "Finally, someone who understands me. You and I are kindred spirits, Player.",
        playerChoices: 0,
        talkingTime: 2
      },
      b: { 
        text: "Oh, I wouldn’t expect a non-nerd to understand my plight. Off with you! Let me stew with my cheese-flavored Mountained Dew in peace.", 
        playerChoices: 0, 
        talkingTime: 4 },
      c: { 
        text: "...I’ve been ‘um actually’d! The highest level of respect among nerds… kudos to you for sharing your superior knowledge, Player. I shall e-pay you a single dogecoin as a token of my appreciation.", 
        playerChoices: 0, 
        talkingTime: 4.8 }
    }
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text:"You are insane.",
        friendPoints: 5,
    },
       b: {
         text:"...What happened?",
         friendPoints: 5,
        }, 
       c: {
         text: "Dude, I’m just here to play the crane game",
         friendPoints: 5,
        },
      },

    {
      a: {
        text:"That’s rough, buddy.",
        friendPoints: 5,
      },
      b: {
        text:"You are insane.",
        friendPoints: 5,
      },
      c: {
        text: 'Wouldn’t that still just be sexism, not “reverse sexism”?',
        friendPoints: 5,
      },
    }
  ]
};

text[6][0] = {
  response: [
    {
      a: {
        text: "Good afternoon, ____. I’m afraid I can’t talk right now, I’m participating in a Sorcery: The Meeting draft event on my phone.",
        playerChoices: 1,
        talkingTime: 2.8
      }
    },
    {
      a: {
        text: "Mono-teal aristocrats with a beige splash for the Beaver tribal archetype, if you must know.",
        playerChoices: 0,
        talkingTime: 1.5
      },
      b: {
        text: "Please, as if I need to concern myself with the goings-on of the peons who spend their quarters here. Nobody ever gets enough tickets for a prize, anyway.",
        playerChoices: 0,
        talkingTime: 3
      },
      c: { 
        text: "Oh, excellent! I’ll have to let you borrow one of my lower-tier General decks sometime.", 
        playerChoices: 0, 
        talkingTime: 1.5 }
    },
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "What are you drafting?",
        friendPoints: 5,
        }, 
      b: {
        text:"Aren’t you at work?",
        friendPoints: 5,
      },
      c: {
        text:"Huh, I’ve been meaning to play that.",
        friendPoints: 5,
      },
    },

  ]
};

text[7][0] = {
  response: [
    {
      a: {
        text: "My displeasure is immeasurable and my day is ruined.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "[You do.]",
        playerChoices: 0,
        talkingTime: 0
      },
      b: {
        text: "Once again, people are wrong online and require my correction. A hero’s work is never done, I suppose.",
        playerChoices: 0,
        talkingTime: 2.6
      },
      c: { 
        text: "[You walk away while he keeps talking.]", 
        playerChoices: 0, 
        talkingTime: 1.5 }
    },
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "I’m going to ignore you now.",
        friendPoints: 5,
      },
      b: {
        text: "What is it this time?",
        friendPoints: 5,
      }, 
      c: {
        text:"Huh. Okay!",
        friendPoints: 5,
      },
    },

  ]
};

text[8][0] = {
  response: [
    {
      a: {
        text: "Feh. I’m crashed from War of Worldcraft raids all night.",
        playerChoices: 1,
        talkingTime: 1
      }
    },
    {
      a: {
        text: "Yes, my problems are more important than everyone else’s problems. I'm glad you understand.",
        playerChoices: 0,
        talkingTime: 2.5
      },
      b: {
        text: "Please, I don’t sully my body with that swill. I’ll stick to perfectly formulated Full Day Energy, thank you very much.",
        playerChoices: 0,
        talkingTime: 2.8
      },
      c: { 
        text: "Extremely well, in fact. I hit platinum rank on my gnome archer.", 
        playerChoices: 0, 
        talkingTime: 1.5 }
    },
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text: "Sounds like a you problem.",
        friendPoints: 5,
      },
      b: {
        text: "That’s rough. Need coffee?",
        friendPoints: 5,
      },
      c: {
        text: "How’d that go?",
        friendPoints: 5,
      },
    },

  ]
};

text[9][0] = {
  response: [
    {
      a: {
        text: "“I’m heading to a rally tomorrow, by the way. I believe I heard that you have the day off - care to join me?",
        playerChoices: 1,
        talkingTime: 3
      }
    },
    {
      a: {
        text: "Hmm. Well, I wouldn’t expect someone who isn’t a devotee to the cause to understand. No “work hours” could keep me from my quest.",
        playerChoices: 0,
        talkingTime: 2.5
      },
      b: {
        text: "Then this is where our paths diverge. Farewell, fellow mallworker.",
        playerChoices: 0,
        talkingTime: 1.8
      },
      c: { 
        text: "Excellent. My friends will be so impressed that I have a date. I shall be king of the nerds!", 
        playerChoices: 0, 
        talkingTime: 2.2 }
    },
  ],
  choice: [
    { complete: {text: "Return to Map"} },
    { 
      a: {
        text:"...Wait, do YOU have the day off?",
        friendPoints: 5,
      },
      b: {
        text:"I’m busy.",
        friendPoints: 5,
      },
      c: {
        text: "Sure!",
        friendPoints: 5,
      }, 
    },

  ]
};

//the various boxes that the text will be displayed in
const color = "#2987D7cc";
const boxes = {
  main: { top: 500, bottom: 850, left: 100, right: 1000, color: color },
  choices: {
    a: { top: 920, bottom: 1020, left: 100, right: 600, color: color },
    b: { top: 920, bottom: 1020, left: 650, right: 1150, color: color },
    c: { top: 920, bottom: 1020, left: 1200, right: 1700, color: color },
    complete: { top: 920, bottom: 1020, left: 100, right: 400, color: color }
  },
};

const chad = new npc("chad",images, text, boxes);
export { chad };