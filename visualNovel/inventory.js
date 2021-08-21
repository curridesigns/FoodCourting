/*
    this is the invenotery class file
    this can be imported into another file so a character can have an inventory system
    ready to go
*/

import { canvas, ctx, frameCount } from "../canvas.js";
import * as helperFunction from "../helper-functions.js";

class inventory {

    constructor(context = "", inventory = []) {
        this.display = false;
        this.items = [];
        this.context = context;
        this.boxes = {
            buttons: {
                mapDisplay: { top: 10, bottom: 50, left: 10, right: 70, color: "#0000FF" },
                leave: { top: 950, bottom: 1050, left: 1400, right: 1800, color: "#0000FF" },
                option: { top: 800, bottom: 900, left: 1400, right: 1800, color: "cyan" },
            },
            background: { top: 70, bottom: 775, left: 100, right: 1800, color: "red" },
            details: { top: 800, bottom: 1050, left: 100, right: 1350, color: "red" },
        };
        this.boxSpacing = 20;
        this.gridHeight = (this.boxes.background.bottom - this.boxes.background.top) / 2
        this.gridWidth = (this.boxes.background.right - this.boxes.background.left) / 5;
        this.clickBoxNumber = 0;
        this.itemArray = inventory;

        
    }

    render() {
        if (this.display) {
            helperFunction.button.render(this.boxes.background);
            helperFunction.dialogueBoxes(this.boxes.buttons.leave, "Close", 10, 30, 20, ctx, "white");
            helperFunction.button.render(this.boxes.details);

            for (let i = this.boxes.background.top; i < this.boxes.background.bottom; i += this.gridHeight) {
                for (let j = this.boxes.background.left; j < this.boxes.background.right; j += this.gridWidth) {
                    let boxHeight = this.gridHeight + i - this.boxSpacing;
                    let boxWidth = this.gridWidth + j - this.boxSpacing;
                    let box = {
                        top: i + this.boxSpacing,
                        bottom: boxHeight,
                        left: j + this.boxSpacing,
                        right: boxWidth,
                        color: "blue"
                    }
                    helperFunction.button.render(box);
                }
            };
            // console.log(index, box.bottom);


            switch (this.context) {
                case "store":
                    helperFunction.button.render(this.boxes.option);
                    break;

                default:
                    helperFunction.button.render(this.boxes.buttons.option);
                    break;
            }
        } else {
            helperFunction.dialogueBoxes(this.boxes.buttons.mapDisplay, "Inventory", 10, 20, 20, ctx, "white");
        }
    };

    click(event) {
        if (this.itemArray === 0) {
            console.log(this.itemArray)
        }
        if (helperFunction.button.click(this.boxes.buttons.mapDisplay)) {
            this.display = true;
        }
        if (helperFunction.button.click(this.boxes.buttons.leave)) {
            this.display = false;
        }
        console.log(helperFunction.getMouseCoordinates(event));
        if (this.display) {
            let boxNumber = 0;
            for (let i = this.boxes.background.top; i < this.boxes.background.bottom; i += this.gridHeight) {
                for (let j = this.boxes.background.left; j < this.boxes.background.right; j += this.gridWidth) {
                    boxNumber++;
                    let boxHeight = this.gridHeight + i - this.boxSpacing;
                    let boxWidth = this.gridWidth + j - this.boxSpacing;
                    let box = {
                        top: i + this.boxSpacing,
                        bottom: boxHeight,
                        left: j + this.boxSpacing,
                        right: boxWidth,
                        color: "blue"
                    }
                    if (helperFunction.button.click(box)) {
                        this.clickBoxNumber = boxNumber;
                    }
                    if (boxNumber === 10) {
                        boxNumber = 1;
                    }
                }
            }
        }
    };

    boxSelect(){

    }

}

export { inventory };