import { canvas, ctx} from "../canvas.js"
import { dist } from "./helper-functions.js"

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

physics.collision = function (obj){
  if(obj.pos.x > 655){
    if(dist(obj.pos.y, 165) < obj.size){
    console.log("hello");
      obj.pos.y = 165 + obj.size;
    }
    if(dist(obj.pos.y, 910) < obj.size){
      obj.pos.y = 910 - obj.size
    }
    if (obj.pos.x < 1720){
      console.log("hello");
      if(dist(obj.pos.y,675) < obj.size){
        obj.pos.y = 675 + obj.size;
      }
      if(dist(obj.pos.y,430) < obj.size){
        obj.pos.y = 430 - obj.size;
      }
    }
  }
  if(obj.pos.y )
}

physics.worldSpace = function (obj){
  const worldBoundries = {y: {upper: 5, lower: canvas.height-5,}, x: {left: 310, right: canvas.width - 46} };
  if(dist(obj.pos.y,worldBoundries.y.lower) < obj.size){
    obj.pos.y = worldBoundries.y.lower - obj.size;
  }
  if(dist(obj.pos.y,worldBoundries.y.upper) < obj.size){
    obj.pos.y = worldBoundries.y.upper + obj.size;
  }
  if(dist(obj.pos.x,worldBoundries.x.right) < obj.size){
    obj.pos.x = worldBoundries.x.right - obj.size;
  }
  if(dist(worldBoundries.x.left,obj.pos.x) < obj.size){
    obj.pos.x = worldBoundries.x.left + obj.size;
  }
  
}

export { physics }