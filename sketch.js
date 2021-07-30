var runner,runnerImg,track,trackImg,left_boundary,right_boundary;
function preload(){
  //pre-load images
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  trackImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400)

   
  //create sprites here
  track=createSprite(200,200)
  track.addImage(trackImg)
  track.velocityY=4
  track.scale=1.2

  //making runner
  runner=createSprite(180,340,50,170);
  runner.addAnimation("running",runnerImg)

  runner.scale=0.1
  runner.x=200
  runner.y=200

 

  //making invisible boundary
  left_boundary=createSprite(0,300,100,600)
  right_boundary=createSprite(390,300,80,600)
  left_boundary.visible=false
  right_boundary.visible=false


}

function draw() {
  background(0);
  runner.x=World.mouseX

  runner.collide(left_boundary)
  runner.collide(right_boundary)

  edges=createEdgeSprites();
  runner.collide(edges[3])

  if(track.y > 400){
    track.y = height/2
  }

  drawSprites();

}


