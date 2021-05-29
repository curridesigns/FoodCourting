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
function dialogueBoxes(boxObj, stringObj, leftOffset, topOffset, size, ctx) {
  wrapText(
    ctx,
    stringObj,
    boxObj.left + leftOffset,
    boxObj.top + topOffset,
    boxObj.right - 10,
    50,
    size
  );
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, size) {
  var words = text.split(" ");
  var line = "";
  ctx.font = size + " ariel";
  ctx.fillStyle = "red";

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = ctx.measureText(testLine);
    var testWidth =
      Math.abs(metrics.actualBoundingBoxLeft) +
      Math.abs(metrics.actualBoundingBoxRight) + 100;
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
export {
  background,
  dist,
  randomRange,
  getMouseCoordinates,
  button,
  dialogueBoxes
};
