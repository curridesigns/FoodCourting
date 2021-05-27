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
  if(getMouseCoordinates(event).x > left && getMouseCoordinates(event).x < right && getMouseCoordinates(event).y > top && getMouseCoordinates(event).y < bottom){
    return true
  } 
  return false;
}

function dialogueBoxes(top, bottom, left, right, )


export { background, dist, randomRange, getMouseCoordinates, button };
