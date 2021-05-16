import { canvas, ctx, frameCount } from "../canvas.js";
import { dist, randomRange } from "./helper-functions.js";
import { ingredients } from "./ingredients.js";

export class RamenBowl {
  constructor(tempX, tempY) {
    this.pos = { x: tempX, y: tempY };
    this.size = 40;
    this.color = "purple";
    this.lives = 3;
    this.bowlIngredients = [];
    this.turnedInIngredients = [];
    this.newBowlFrameCount = 0;
  }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
    this.renderIngredients();
  }

  characterNear(characterPOS) {
    if (dist(characterPOS.x, characterPOS.y, this.pos.x, this.pos.y) <= 20) {
      return true;
    }
    return false;
  }

  hasTopping(topping, characterPOS) {
    if (this.characterNear(characterPOS)) {
      if (topping.isSelected) {
        return true;
      }
    }
    return false;
  }

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
    
    //checkIndex = 0;
    //console.log(this.bowlIngredients);
  }
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
