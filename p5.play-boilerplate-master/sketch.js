var fixrect, movingrect;
function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(600, 400, 50, 80);
fixrect.shapeColor = "blue";
fixrect.deBug = true;

movingrect = createSprite(400, 200, 80, 30);
movingrect.shapeColor = "red";
movingrect.deBug = true;

}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
  drawSprites();
}