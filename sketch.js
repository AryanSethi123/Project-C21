var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80); //w=50/2=25 ,,h=80/2=40
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);//w=80/2=40,40+25=65,, h=30/2=15,15+40=55
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1 = createSprite(800, 400, 50, 80); //w=50/2=25 ,,h=80/2=40
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect2 = createSprite(1000, 400, 50, 80); //w=50/2=25 ,,h=80/2=40
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);

  if(is_touching(movingRect,fixedRect2)) //arguments
  {
  movingRect.shapeColor="yellow"
  fixedRect2.shapeColor="yellow"
  }
  else{
    movingRect.shapeColor="green"
  fixedRect2.shapeColor="green"
  }

  if(is_touching(movingRect,fixedRect1)) //arguments
  {
  movingRect.shapeColor="red"
  fixedRect1.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
  fixedRect1.shapeColor="green"
  }
  if(is_touching(movingRect,fixedRect)) //arguments
  {
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"
  }
  else{
    movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
  }
  drawSprites();
}   
