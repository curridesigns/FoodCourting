import { canvas, ctx, frameCount } from "../canvas.js";
import { dist } from "./helper-functions.js";

class Topping {
  constructor(tempName, tempX, tempY, tempImage, tempColor) {
    this.name = tempName;
    this.startPOS = { x: tempX, y: tempY };
    this.pos = { x: tempX, y: tempY };
    this.size = 30;
    this.isSelected = false;
    this.hasMoved = false;
    this.turnIn = false;
    this.image = tempImage;
    this.color = tempColor;
  }

  render(overrideX, overrideY) {
    if (overrideX === undefined && overrideY === undefined) {
      ctx.drawImage(this.image, this.pos.x, this.pos.y);
      if (this.hasMoved) {
        ctx.fillStyle = (250, 11, 0, 0.2);
        ctx.drawImage(this.image, this.startPOS.x, this.startPOS.y);
      }
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(overrideX, overrideY, this.size, this.size);
    }
  }

  select(characterGrab, characterPOS, bowlPOS) {
    this.isSelected = false;
    //console.log(characterGrab.test);
    if (
      this.characterNear(characterPOS) &&
      characterGrab.flag &&
      !characterGrab.hasObject
    ) {
      this.pos.x = characterPOS.x;
      this.pos.y = characterPOS.y;
      this.isSelected = true;
      this.hasMoved = true;
      characterGrab.hasObject = true;
    }
    if(this.isSelected){
      this
    }
    if (!this.isSelected) {
      this.pos.x = this.pos.x;
      this.pos.y = this.pos.y;
      let droppedFrame = frameCount;
      if(droppedFrame + 100 < frameCount){
      characterGrab.hasObject = false;
      }
    }
    if (this.isSelected && this.bowlNear(bowlPOS)) {
      this.turnIn = true;
      // characterGrab.hasObject = false;
    }

    if (this.pos.x != this.startPOS.x && this.pos.y != this.startPOS.y) {
      this.hasMoved = true;
    }
  }

  characterNear(characterPOS) {
    //TODO: make a distance function
    if (dist(characterPOS.x, characterPOS.y, this.pos.x, this.pos.y) <= 150) {
      return true;
    }
    return false;
  }

  bowlNear(bowlPOS) {
    if (dist(bowlPOS.x, bowlPOS.y, this.pos.x, this.pos.y) <= 175) {
      return true;
    }
    return false;
  }
}

export { Topping };
