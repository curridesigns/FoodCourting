import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

const visualNovel = {};

visualNovel.bg = document.getElementById("mallMap");

visualNovel.display = false

// const buttons = { store: { top: 275, bottom: 575, left: 77, right:  710}, spicy: { top: 275, bottom: 470, left: 1095, right:  1415}, arcade: { top: 275, bottom: 575, left: 1430, right:  1830}, food: { top: 590, bottom: 870, left: 725, right:  1070} };

visualNovel.load = function() {
  
  helperFunction.background(visualNovel.bg);
  // endScreen.click();
};