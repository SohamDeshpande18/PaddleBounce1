var ball,img,paddle;
var ballImage,paddleImage;

function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,10,10);
  paddle = createSprite(60,200,15,40);
  
  ball.addImage("ball",ballImage);
  paddle.addImage("paddle",paddleImage);
  
  ball.velocityX = 9;
  
}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[1]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  paddle.collide(edges[1]);
  
  if(keyDown("UP_ARROW")){
    ball.velocityY = -2;
  }  
  
  if(keyDown("DOWN_ARROW")){
    ball.velocityY = 2;
  }
  
  randomVelocity();
  
  drawSprites();
  
}

function randomVelocity(){
  ball.velocityY = random(1,3);
}
