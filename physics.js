const physics = {};

physics.movement = function (obj){
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
  
  
}