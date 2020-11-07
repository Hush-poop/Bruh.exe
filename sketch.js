var Movingrect, fixedRect;
var gb1,gb2,gb3,gb4;

function setup() {
  createCanvas(1200,800);
 Movingrect= createSprite(400, 200, 80, 30);
 fixedRect= createSprite(600,400,50,80);
 Movingrect.shapeColor= "green";
 fixedRect.shapeColor="green";
gb1= createSprite(100,100,50,50)
gb2=createSprite(200,100,50,50)
gb3= createSprite(300,100,50,50)
gb4=createSprite(400,100,50,50)
}

function draw() {
  background(255,255,255);  
  Movingrect.x= World.mouseX;
  Movingrect.y= World.mouseY;

  if(ExamsSuk(Movingrect,gb2)){
    Movingrect.shapeColor="red"
      gb2.shapeColor="red"
    }
    else{
      Movingrect.shapeColor= "green";
 gb2.shapeColor="green";
    }
  
  
  drawSprites();
}
function ExamsSuk(ahh1,ahh2){
  if( ahh1.x-ahh2.x< ahh1.width/2+ ahh2.width/2&&
    ahh2.x- ahh1.x< ahh1.width/2+ ahh2.width/2&&
    ahh1.y- ahh2.y< ahh1.height/2+ ahh2.height/2&&
    ahh2.y- ahh1.y< ahh1.height/2+ahh2.height/2) {
      return true;
    }
    else{
      return false;
    }
}