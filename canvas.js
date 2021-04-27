var bowl, noodles, character;

const canvas = document.querySelector('#gameCanvas');

const ctx = canvas.getContext('2d');

const canvasSquare = 800;

canvas.width = canvasSquare;
canvas.height = canvasSquare;


let lastTime = 0
let aggregatedTime = 0
const frameRateInMillis =  1000/20 // 30 FPS

function setup(){
  // background();
  noodles = new Topping("noodles", 100,100, "this should be an image");
  character = new PlayerCharacter();
  bowl = new RamenBowl(canvas.width/2,canvas.height/2);
  window.requestAnimationFrame(loop);
}

function draw () {
  miniGame.play();
  
  // noodles.selected(character.pos);
  //console.log(character.grab)

}

function loop (time) { // Add the time parameter, and requestAnimation frame fills it in with the total time since starting
	
  let timeDifference = time - lastTime
  //console.log(timeDifference) // Should be constant, probably around 16 (milliseconds)
  lastTime = time
	
  // Add timeDifference to aggregatedTime
  aggregatedTime += timeDifference
  
  if (aggregatedTime > frameRateInMillis) { // Divide by 1000 to get FPS
  
  	aggregatedTime = aggregatedTime-frameRateInMillis // Reset aggregated time, it turtleCan also be carried over.
  	
    // DRAW HERE!
    draw()
  
  }

	window.requestAnimationFrame(loop)
}

function background(){
  ctx.fillStyle = "blue"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setup();
