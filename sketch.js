//let img;
const noodles = new Topping("noodles",[100,100],"this should be an image");
const character = new Character();

function preload(){
  //img = loadImage('https://cdn.glitch.com/f9aed2f6-b263-4ccf-a15b-15c9b3d05497%2FTurtle.png?v=1619061218924');
}


//this function runs once on page load, allows for setting static variables
function setup() {
  rectMode(CENTER);
  createCanvas(800,800);
  
  // noodles.render();
  //image(img,10,10);
}

//this is the animation loop, it is the frame
function draw() {
  background(200);
  character.render();
  character.movement();
  noodles.render();
  noodles.select(character.hold);
  noodles.selected(character.pos);
  //console.log(character.grab)
}

function keyPressed(){
  if(keyCode==='Space'){
    if(character.hold){
    character.hold = false;
    } else {
      character.hold = true;
    }
  }
}
