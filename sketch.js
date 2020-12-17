var frect,mrect;




function setup() {
  createCanvas(800,400);

frect=createSprite(300,300,50,20);
mrect=createSprite(400, 100, 70, 50);
mrect.shapeColor="blue";
frect.shapeColor="orange";
}

function draw() {
  background(255,255,255);  
mrect.x=World.mouseX
mrect.y=World.mouseY

if(mrect.y-frect.y<mrect.height/2+frect.height/2
&&  frect.y-mrect.y<mrect.height/2+frect.height/2)
{
  mrect.shapeColor="orange";
  frect.shapeColor="blue";

}
  else{
    mrect.shapeColor="blue";
    frect.shapeColor="orange";

  }
  drawSprites();
}