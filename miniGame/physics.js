import { canvas, ctx} from "../canvas.js"

const physics = {};

physics.movement = function (obj){
  //these are global movement speeds
  const accel = 1.75;
  const decel = 0.5;
  const speedMax = 6;
  
  //kick starts the movement so the equations later will work
  if(obj.direction.x !== 0){
    obj.speed.x += obj.direction.x;
  }
  
  if(obj.direction.y !== 0){
    obj.speed.y += obj.direction.y;
  }
  
  //generates movement as long as speed is not 0
  obj.pos.x += obj.speed.x * accel;
  obj.pos.y += obj.speed.y * accel;
  
  //if the movement flags stop, this makes the object come to a halt
  if(obj.brakePedal.x){
    obj.direction.x = 0;
    if(Math.abs(obj.speed.x) > 0.9){
      obj.speed.x *= decel;
    } else if (Math.abs(obj.speed.x) <= 0.9){
      obj.speed.x = 0;
    }
  }
  
  if(obj.brakePedal.y){
    obj.direction.y = 0;
    if(Math.abs(obj.speed.y) > 0.9){
      obj.speed.y *= decel;
    } else if (Math.abs(obj.speed.y) <= 0.9){
      obj.speed.y = 0;
    }
  }
  
  //makes the object not be able to move faster than the "speedlimit"
  if(Math.abs(obj.speed.x) >= speedMax){
    if(obj.speed.x > 0){
      obj.speed.x = speedMax;
    } else if (obj.speed.x < 0){
      obj.speed.x = -speedMax;
    }
  }
  
  if(Math.abs(obj.speed.y) >= speedMax){
    if(obj.speed.y > 0){
      obj.speed.y = speedMax;
    } else if (obj.speed.y < 0){
      obj.speed.y = -speedMax;
    }
  }
}

physics.worldSpace = function (obj){
  const worldBoundries = {x: {upper: 5, lower: canvas.height-5,}, y: {right: 5, left: canvas.width - 5} };
  
  for ( let i in worldBoundries.y){
    
  if(obj.pos.y < worldBoundries.y[i]){
    obj.pos.y = worldBoundries.y[i];
  }
    // console.log(worldBoundries.y[i]);
  }
  if(obj.pos.y + obj.size > worldBoundries.lower){
    obj.pos.y = worldBoundries.lower - obj.size;
  }
  
  if(obj.pos.x < worldBoundries.right){
    obj.pos.x = worldBoundries.right;
  }
  
  if(obj.pos.x + obj.size > worldBoundries.left){
    obj.pos.x = worldBoundries.left - obj.size;
  }
}

export { physics }