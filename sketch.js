function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym21.png" , "images/gym22.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  astronaut = createSprite(200, 200);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  edges = createSprites();
  astronaut.collide(edges);

  text("Instructions: ", 200, 200);
  text("Up Arrow = Brushing", 200, 225);
  text("Down Arrow = Gymming", 200, 250);
  text("Left Arrow = Eating", 200, 300);
  text("Right Arrow = Bathing", 200, 325);
  text("m key = moving", 200, 350);

}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", gym);
  astronat.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", gym);
  astronat.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("M_KEY")){
  astronaut.addAnimation("moving", gym);
  astronat.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronat.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}



