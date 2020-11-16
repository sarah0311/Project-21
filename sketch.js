var bullet,wall;
var bulletRightEdge;
var wallLeftEdge;
var thickness,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 60, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(255,255,255);
}

function draw() {
  background(0,0,0); 

  if(wall.x - bullet.x <= wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;

    if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;

      damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

      if(damage > 10){
        wall.shapeColor= color(255,0,0);
      }else if(damage < 10){
        wall.shapeColor = color(0,255,0);
      }
    }

    function hasCollided(lbullet,lwall){
      bulletRightEdge = lbullet.x + lbullet.width;
      wallLeftEdge = lwall.x;

      if(bulletRightEdge >= wallLeftEdge){
        return true;
      }else{
        return false;
      }
    }
  }
  console.log(damage);

  drawSprites();
}
