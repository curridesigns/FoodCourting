//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../canvas.js";
import { dist } from "../helper-functions.js";


//creates the topping class
class Topping {
  //needs a name, where it should be rendered, the image, and a color(this can probably go away)
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
    this.isRendered = false
  }

  //this is where it is rendered, the override system is an old way of getting the bowlIngredients
  //to render in the top, can probably be removed now
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
      this.isRendered = true
    }
  }

  //allows the player to pick up the ingredient
  select(characterGrab, characterPOS, bowlPOS) {
    //sets it to not be selected at the top of every frame, to be changed by player input
    this.isSelected = false;
    //if the player is close enough, and they want to pick it up, sets the pos to follow the player
    if (
      this.characterNear(characterPOS) &&
      characterGrab.flag
    ) {
      this.pos.x = characterPOS.x;
      this.pos.y = characterPOS.y;
      this.isSelected = true;
      this.hasMoved = true;
      characterGrab.hasObject = true;
    }
    //was trying to make the player only able to pick up one ingredient at a time
    //it wasn't working, and I didn't have time to pull this code before beta release
    if (!this.isSelected) {
      this.pos.x = this.pos.x;
      this.pos.y = this.pos.y;
      let droppedFrame = frameCount;
      if(droppedFrame + 100 < frameCount){
      characterGrab.hasObject = false;
      }
    }
    //tells the ingredient system that it wants to be turned in when appropriate
    if (this.isSelected && this.bowlNear(bowlPOS)) {
      this.turnIn = true;
      // characterGrab.hasObject = false;
    }
  }

  characterNear(characterPOS) {
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
