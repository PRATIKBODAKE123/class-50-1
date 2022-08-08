var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg;
var obstacle,obsImg;
var gameOverImg,restartImg;
var gameOver
var restart
function preload(){
bgImg = loadImage("assets/bg.png")
obsImg = loadImage("assets/obsTop2.png");
gameOverImg = loadImage("assets/gameOver.png")
restartImg = loadImage("assets/restart.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

obstacle = createSprite(100,100,20,20);
obstacle.addImage(obsImg);
obstacle.scale = 0.1

gameOver = createSprite(100,100,20,20);
gameOver.visible=false
gameOver.addImage(gameOverImg)
restart = createSprite(100,120,20,20);
restart.visible=false
restart.addImage(restartImg)
}

function draw() {
  
  background("black");
        
  if(balloon.isTouching(obstacle)){
    balloon.remove();
    gameOver.visible=true
    restart.visible=true
  }
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+0.2
   
        drawSprites();
        
}
