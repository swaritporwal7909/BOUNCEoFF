var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  }else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
 bounceOff(movingRect,fixedRect)
  drawSprites();
}

