const physics = {};

physics.movement = function (obj){
  //these are global movement speeds
  const accel = 1.5;
  const decel = 0.96;
  
  if(obj.direction.x !== 0){
    obj.speed.x += obj.direction.x;
  }
  
  if(obj.direction.y !== 0){
    obj.speed.y += obj.direction.y;
  }
  
  obj.pos.x += obj.speed.x * accel;
  obj.pos.y += obj.speed.y * accel;
  
  if(obj.brakePedal.x){
    obj.direction.x = 0;
    if(Math.abs(obj.speed.x) > 0.9){
      obj.speed.x *= decel;
    } else if (Math.abs(obj.speed.x) <= 0.9){
      obj.spped.x = 0;
    }
  }
  
  if(obj.brakePedal.y){
    obj.direction.y = 0;
    if(Math.abs(obj.speed.y) > 0.9){
      obj.speed.y *= decel;
    } else if (Math.abs(obj.speed.y) <= 0.9){
      obj.spped.y = 0;
    }
  }
}