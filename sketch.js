var bullet, wall ;

var speed , weight , thickness;

function setup() {

  createCanvas(1200,400);
  
  speed = random(223 , 321);
  weight = random(30,52);
  thickness = random(20,83);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = color(255);

  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = color(230,230,230);
  
   bullet.velocityX = speed;
   
   
}
  
function draw() {

  background(0);  

   if (hasCollided (bullet , wall)){

    bullet.velocityX = 0;

    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10) {
      
    wall.shapeColor=color(255,0,0);
  
  }

  if(damage<10) { 
    
  wall.shapeColor=color(0,255,0); 

  }

   }
  
  drawSprites();

}

function hasCollided (lbullet,lwall){

 bulletRightedge = lbullet.x + lbullet.width;

 wallLeftEdge = lwall.x ;

 if (bulletRightedge >= wallLeftEdge){

  return true;

 }

 return false;

}


