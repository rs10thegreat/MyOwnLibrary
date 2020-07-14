var object2, movingRect,gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1=createSprite(600,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityY = 5;

  gameObject2=createSprite(600,800,50,50);
  gameObject2.shapeColor = "green";
  gameObject2.velocityY = -5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,fixedRect);
  bounceOff(gameObject1,gameObject2);
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}