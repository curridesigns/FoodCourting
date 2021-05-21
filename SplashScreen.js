const splashScreen = {};

splashScreen.load = function(){
  helperFunction.background(splashScreenBG)
  ctx.fillStyle = "#f9cb9cff"
  ctx.fillRect(200,800,300,100);
  
}


splashScreen.click = function(){
  
}

export { splashScreen };