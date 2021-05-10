import { canvas, ctx } from "../canvas.js"
import { dist, randomRange } from "./helper-functions.js"
import { ingredients } from "./ingredients.js"

export class RamenBowl {
  constructor(tempX, tempY){
    this.pos = {x: tempX, y: tempY};
    this.size = 40;
    this.color = "purple";
    this.lives = 3;
    this.bowlIngredients = [];
  }
  
  render(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x,this.pos.y,this.size,this.size);
  }
  
  characterNear(characterPOS){
    if(dist(characterPOS.x, characterPOS.y, this.pos.x, this.pos.y) <= 20){
        return true;
      }
    return false;
  }
  
  hasTopping(topping, characterPOS){
    if(this.characterNear(characterPOS)){
      if(topping.isSelected){
        return true;
      }
    }
    return false;
  }
  
  generateBowl() {
  this.turnedInIngredients = [];
  this.bowlIngredients = [];
  for (let i = 0; i < randomRange(3, 5); i++) {
    let j = Math.ceil((Math.random() * 10) % 6);
    this.bowlIngredients[i].name = ingredients.availableIngredients[j][0].name;
    this.bowlIngredients[i].image = ingredients.availableIngredients[j][0].image;
    this.bowlIngredients[i].pos = {x: 250+i*50, y: 10}
    // switch(j){
    //   case 1:
    //     this.bowlIngredients.push(new Topping("noodles", 250+i*50, 10, "this should be an image", "#FAC600"));
    //     break;
    //   case 2:
    //     this.bowlIngredients.push(new Topping("chashu", 250+i*50, 10, "this should be an image", "#CE46E0"));
    //     break;
    //   case 3:
    //     this.bowlIngredients.push(new Topping("kakuni", 250+i*50, 10, "this should be an image", "#59A8F7"));
    //     break;
    //   case 4:
    //     this.bowlIngredients.push(new Topping("nikuSoboro", 250+i*50, 10, "this should be an image", "#FF9652"));
    //     break;
    //   case 5:
    //     this.bowlIngredients.push(new Topping("ajitama", 250+i*50, 10, "this should be an image", "#46E052"));
    //     break;
    //   case 6: 
    //     this.bowlIngredients.push(new Topping("menma", 250+i*50, 10, "this should be an image", "#4EFAEC"));
    //     break;
    // }
  }
  //checkIndex = 0;
  console.log(this.bowlIngredients);
}
  renderIngredients() {
  for (let i = 0; i < this.bowlIngredients.length; i+=1){
    
    ctx.drawImage(this.bowlIngredients[i].image, this.bowlIngredients.pos.x,this.bowlIngredients.pos.y);
  }
  
}
}

