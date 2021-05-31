import { canvas, ctx } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";
import { npc } from "./npc.js";


const images = {listening: document.getElementById("chadL"), talking: document.getElementById("chadT")};

const text = [];

const boxes = {};

const chad = new npc(images, text, boxes);
export { chad }