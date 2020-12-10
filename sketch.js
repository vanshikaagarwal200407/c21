var fixedRect, movingRect,fixedRect1,fixedRect2,fixedRect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=3;
  movingRect.debug = true;
  fixedRect1 = createSprite(200, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect2 = createSprite(400, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect3 = createSprite(500, 400, 50, 80);
  fixedRect3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  

if(isTouching(fixedRect2, movingRect)){
  movingRect.shapeColor = "red";
  fixedRect2.shapeColor = "red";
}
  
  else {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
  
  bounceOff(fixedRect2,movingRect);
  drawSprites();
}

