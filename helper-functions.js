//
import { canvas, ctx } from "../canvas.js";

function background(image) {
  ctx.fillStyle = "blue";
  ctx.drawImage(image, 0, 0);
}

function dist(x1, y1, x2, y2) {
  if (!x2 && !y2) {
    return Math.abs(y1 - x1);
  } else {
    return Math.hypot(x2 - x1, y2 - y1);
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function getMouseCoordinates(event) {
  var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;
  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  };
}

const button = {};
button.render = function(boxObj, color) {
  ctx.fillStyle = color;
  ctx.fillRect(
    boxObj.left,
    boxObj.top,
    boxObj.right - boxObj.left,
    boxObj.bottom - boxObj.top
  );
};
button.click = function(boxObj) {
  if (
    getMouseCoordinates(event).x > boxObj.left &&
    getMouseCoordinates(event).x < boxObj.right &&
    getMouseCoordinates(event).y > boxObj.top &&
    getMouseCoordinates(event).y < boxObj.bottom
  ) {
    return true;
  }
  return false;
};

//requires a boxObj with the main dialogue window, and a max of 3 dialogue options for the character. Also requires a stringObj with the text
//for the NPC, and the player object text
function dialogueBoxes(boxObj, string, leftOffset, topOffset, size, ctx, color) { 
  wrapText(
    ctx,
    string.toString(),
    boxObj.left + leftOffset,
    boxObj.top + topOffset,
    boxObj.right - boxObj.left - 30,
    50,
    size,
    color
  );
}

// x, and y can be anything... but maxWidth should not be the right side of your rectangle.
function wrapText(ctx, text, x, y, maxWidth, lineHeight, size, color) {
  var words = text.split(" ");
  var line = "";
  ctx.font = size + "pt arial";
  ctx.fillStyle = color;

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = ctx.measureText(testLine);
    var testWidth =
      Math.abs(metrics.actualBoundingBoxLeft) +
      Math.abs(metrics.actualBoundingBoxRight);
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

let endTime;
function timer(lengthInSeconds, timerReset) {
  if (timerReset) {
    endTime = new Date().getTime() + (lengthInSeconds * 1000);
    timerReset = false;
  }
  if(Date.now() >= endTime){
    endTime = undefined;
    timerReset = true;
    return true;
  }
  return false, endTime;
}

export {
  background,
  dist,
  randomRange,
  getMouseCoordinates,
  button,
  dialogueBoxes,
  timer
};
