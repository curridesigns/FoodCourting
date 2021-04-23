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

function draw() {
  background(200);
  character.render();
  character.movement();
  noodles.render();
  noodles.select(character.grab());
  noodles.selected(character.pos);
}
