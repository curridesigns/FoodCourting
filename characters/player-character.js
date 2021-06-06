//imports the necessary functions and variables from the other modules in the project
import { canvas, ctx } from "../canvas.js";
import { physics } from "../miniGame/physics.js";

//creates a PlayerCharacter class, although this probably could've been a normal object
class PlayerCharacter {
  constructor() {
    //postion
    this.pos = { x: 650, y: 250 };
    //used for collison, is a radius
    this.size = 45;
    //the centerOffset values are where I want the player to be centered
    this.centerOffset = {x: -72, y: -85};
    //this was used in the early stages, and Im afraid to remove it
    this.color = "red";
    //these are keyValues, and flags associated with each direction, and the grab key
    this.up = { key: 87, flag: false };
    this.down = { key: 83, flag: false };
    this.right = { key: 68, flag: false };
    this.left = { key: 65, flag: false };
    this.grab = { key: 32, flag: false, hasObject: false };
    //tells the physics engine which direction to move the character, can be either positive or negative 1
    this.direction = { x: 0, y: 0 };
    //current speed of the player, used to make sure the player doesnt fly off the screen
    this.speed = { x: 0, y: 0 };
    this.speedMax = 6;
    //if true, stops the player movement
    this.brakePedal = { x: true, y: true };
    this.image = document.getElementById("character");
    //this actually in here becaure I needed it for the npc in the miniGame, it has no purpose in this
    //file, but I didn't have time to figure out how to remove it
    this.contact = {x: false, y: false};
  }

  //renders the player on the screen, the debug value is used to display some boxes to help line the image
  //up with where it needed to be
  render(debug = false) {
    //the translate makes it so the image can be centered easily and quickly
    ctx.translate(this.pos.x, this.pos.y);
    ctx.drawImage(this.image, this.centerOffset.x, this.centerOffset.y);
    if(debug){
    ctx.fillStyle = "blue";
    ctx.fillRect(0,0,10,10);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.color;
    ctx.arc(0, 0, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    }    
    ctx.translate(-this.pos.x, -this.pos.y);
  }

  //these 2 functions are called in the event-handlers.js file
  keyDownHandler() {
    if (event.keyCode == this.up.key) {
      this.up.flag = true;
    }
    if (event.keyCode == this.down.key) {
      this.down.flag = true;
    }
    if (event.keyCode == this.left.key) {
      this.left.flag = true;
    }
    if (event.keyCode == this.right.key) {
      this.right.flag = true;
    }
    if (event.keyCode == this.grab.key) {
      this.grab.flag = true;
    }
  }

  keyUpHandler() {
    if (event.keyCode == this.up.key) {
      this.up.flag = false;
    }
    if (event.keyCode == this.down.key) {
      this.down.flag = false;
    }
    if (event.keyCode == this.left.key) {
      this.left.flag = false;
    }
    if (event.keyCode == this.right.key) {
      this.right.flag = false;
    }
    if (event.keyCode == this.grab.key) {
      this.grab.flag = false;
    }
  }

  //this is where the physics happen
  movement() {
    //turns the brakePedal on every frame, then turned off by player input
    this.brakePedal = { x: true, y: true };

    //sets the values for the direction to pass to the physics.movement function
    //tells the physics engine to move the player "up" the screen
    if (this.up.flag) {
      this.direction.y = -1;
      this.brakePedal.y = false;
    }
    
    //tells the physics engine to move the player "down" the screen
    if (this.down.flag) {
      this.direction.y = 1;
      this.brakePedal.y = false;
    }
  
    //tells the physics engine to move the player "left" on the screen
    if (this.left.flag) {
      this.direction.x = -1;
      this.brakePedal.x = false;
    }
    
    
    //tells the physics engine to move the player "right" on the screen
    if (this.right.flag) {
      this.direction.x = 1;
      this.brakePedal.x = false;
    }

    //calls the physics functions that actually affect the player pos
    physics.movement(this);
    physics.worldSpace(this);
    physics.collision(this);
  }
}

export { PlayerCharacter };
