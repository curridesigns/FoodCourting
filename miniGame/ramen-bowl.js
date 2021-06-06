//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx, frameCount } from "../canvas.js";
import { dist, randomRange } from "../helper-functions.js";
import { ingredients } from "./ingredients.js";

//immediately exports the RamenBowl class
export class RamenBowl {
  //needs the x and y values for the bowl, and the image
  constructor(tempX, tempY, tempImage) {
    this.pos = { x: tempX, y: tempY };
    this.size = 40;
    this.color = "purple";
    this.image = tempImage
    this.lives = 3;
    this.bowlIngredients = [];
    this.turnedInIngredients = [];
    this.newBowlFrameCount = 0;
  }

  //renders the bowl on the screen, and for debug purposes, has a square if the image is lost
  render() {
    if(!this.image) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
    } else {
      ctx.drawImage(this.image, this.pos.x, this.pos.y);
    }
    this.renderIngredients();
  }

  characterNear(characterPOS) {
    if (dist(characterPOS.x, characterPOS.y, this.pos.x, this.pos.y) <= 20) {
      return true;
    }
    return false;
  }

  //tells if the player is close enough to turn in ingredients they are holding  
  hasTopping(topping, characterPOS) {
    if (this.characterNear(characterPOS)) {
      if (topping.isSelected) {
        return true;
      }
    }
    return false;
  }

  //created the ingredients needed to finish the bowl
  generateBowl() {
    this.turnedInIngredients = [];
    this.bowlIngredients = [];
    for (let i = 0; i < randomRange(3, 5); i++) {
      let j = Math.floor(
        (Math.random() * 10) % ingredients.availableIngredients.length
      );
      this.bowlIngredients[i] = {};
      this.bowlIngredients[i].name =
        ingredients.availableIngredients[j][0].name;
      this.bowlIngredients[i].image =
        ingredients.availableIngredients[j][0].image;
      this.bowlIngredients[i].pos = { x: 850 + i * 50, y: 10 };
    }
  }
  
  //renders the ingredients that need to be turned in on the top of the screen
  renderIngredients() {
    for (let i = 0; i < this.bowlIngredients.length; i += 1) {
      ctx.drawImage(
        this.bowlIngredients[i].image,
        this.bowlIngredients[i].pos.x,
        this.bowlIngredients[i].pos.y
      );
    }
  }
}
