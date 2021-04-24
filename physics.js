const physics = {};

physics.movement = function (obj){
  //these are global movement speeds
  const accel = 1.75;
  const decel = 0.5;
  const speedMax = 10;
  
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
  
  if(obj.speed.x >= speedMax){
    obj.speed.x = speedMax;
  }
  if(obj.speed.y >= speedMax){
    obj.speed.y = speedMax;
  }
}

physics.boundries = function (obj){
  //if(obj.pos.x < obj.size)
}