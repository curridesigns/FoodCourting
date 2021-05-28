import { canvas, ctx } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const raven = {};
raven.images = {
  listening: document.getElementById("ravenL"),
  talking: document.getElementById("ravenT")
};

raven.state = "idle";

raven.render = function(tempX, tempY) {
  switch (raven.state) {
    case "listening":
      ctx.drawImage(raven.images.listening, tempX, tempY);
      break;
    case "talking":
      ctx.drawImage(raven.images.talking, tempX, tempY);
      break;
    default:
      ctx.drawImage(raven.images.listening, tempX, tempY);
  }
};

raven.dialogue = {
  firstDay: { greeting: { npc: "Heya, player! How was your time off?" } }
};
/*

*/
raven.dialogueBoxes = {
  main: { top: 800, bottom: 1500, left: 100, right: 1000 }
};

raven.dialogueRender = function() {
  helperFunction.dialogueBoxes(
    raven.dialogueBoxes.main,
    raven.dialogue.firstDay.greeting,
    ctx
  );
  helperFunction.button.render(raven.dialogueBoxes.main);
};

export { raven };
