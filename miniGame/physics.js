import { canvas, ctx} from "../canvas.js"
import { dist } from "../helper-functions.js"

const physics = {};

physics.movement = function (obj){
  //these are global movement speeds
  const accel = 1.75;
  const decel = 0.5;
  const speedMax = obj.speedMax;
  
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

physics.collision = function (obj, contact){
  // console.log(obj.size)
  const counters = {front: {left: 500, bottom: 900}, top: {left: 655, bottom:165}, island: {top: 430, bottom: 675, left: 655, right: 1720}, bottom: {top: 900, left: 655}}
  if(obj.pos.y < counters.front.bottom){
    if(dist(obj.pos.x, counters.front.left) < obj.size){
      obj.pos.x = counters.front.left + obj.size;
      obj.contact.x = true;
    }
  }
  if(obj.pos.y > counters.bottom.top){
    if(dist(obj.pos.x, counters.bottom.left) < obj.size){
      obj.pos.x = counters.bottom.left - obj.size;
      obj.contact.x = true;
    }
    if(obj.pos.x < counters.front.left)
      if(dist(obj.pos.y, counters.front.bottom) < obj.size){
        obj.pos.y = counters.front.bottom + obj.size;
        obj.contact.y = true;
      }
  }
  if(obj.pos.y < counters.top.bottom){
    if(dist(obj.pos.x, counters.top.left) < obj.size){
      obj.pos.x = counters.top.left - obj.size;
      obj.contact.x = true;
      // console.log("hello")
    }
  }
  if(obj.pos.x > counters.top.left){
    if(dist(obj.pos.y, counters.top.bottom) < obj.size){
      obj.pos.y = counters.top.bottom + obj.size;
      obj.contact.y = true;
    }
    if(dist(obj.pos.y, counters.bottom.top) < obj.size){
      obj.pos.y = counters.bottom.top - obj.size
      obj.contact.y = true;
    }
    if (obj.pos.x < counters.island.right){
      
      if(dist(obj.pos.y,counters.island.bottom) < obj.size){
        obj.pos.y = counters.island.bottom + obj.size;
        obj.contact.y = true;
      }
      if(dist(obj.pos.y,counters.island.top) < obj.size){
        obj.pos.y = counters.island.top - obj.size;
        obj.contact.y = true;
      }
    }
  }
  if(obj.pos.y > counters.island.top && obj.pos.y < counters.island.bottom){
    if(dist(obj.pos.x, counters.island.left) < obj.size){
      obj.pos.x = counters.island.left - obj.size
      obj.contact.x = true;
    }
    if(dist(obj.pos.x, counters.island.right) < obj.size){
      obj.pos.x = counters.island.right + obj.size
      obj.contact.x = true;
    }
  }
}

physics.worldSpace = function (obj, contact){
  const worldBoundries = {y: {upper: 5, lower: canvas.height-5,}, x: {left: 310, right: canvas.width - 46} };
  if(dist(obj.pos.y,worldBoundries.y.lower) < obj.size){
    obj.pos.y = worldBoundries.y.lower - obj.size;
    obj.contact.y = true;
  }
  if(dist(obj.pos.y,worldBoundries.y.upper) < obj.size){
    obj.pos.y = worldBoundries.y.upper + obj.size;
    obj.contact.y = true;
  }
  if(dist(obj.pos.x,worldBoundries.x.right) < obj.size){
    obj.pos.x = worldBoundries.x.right - obj.size;
    obj.contact.y = true;
  }
  if(dist(worldBoundries.x.left,obj.pos.x) < obj.size){
    obj.pos.x = worldBoundries.x.left + obj.size;
    obj.contact.y = true;
  }
  
}

export { physics }