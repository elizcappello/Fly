



  function preload(){
  fly = loadImage("assets/fly.jpg")
  //image name
}

function setup() {
  createCanvas(1200,700)
  frameRate(60)
  noStroke()
  fill(255)
  noCursor()
}

function draw() {
  background(0,204,255)
  image(fly,mouseX,mouseY,100,100)

   //image name, mouse anywhere, size
  
}
  
  
  
 


