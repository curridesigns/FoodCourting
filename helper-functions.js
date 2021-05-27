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

function button(top, bottom, left, right) {
  if (
    getMouseCoordinates(event).x > left &&
    getMouseCoordinates(event).x < right &&
    getMouseCoordinates(event).y > top &&
    getMouseCoordinates(event).y < bottom
  ) {
    return true;
  }
  return false;
}

//requires a boxObj with the main dialogue window, and a max of 3 dialogue options for the character. Also requires a stringObj with the text
//for the NPC, and the player object text
function dialogueBoxes(boxObj, stringObj, ctx) {
  wrapText(ctx, stringObj.npc, boxObj.left-20, boxObj.top-20, 50, 25)
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }
export { background, dist, randomRange, getMouseCoordinates, button };
