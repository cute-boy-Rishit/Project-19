var obstacles, obstacleImage, ObstaclesGroup;
var bananaImage;
var background1, backImage;
var player, player_running, playerImage;
var count = 0;
var gameState = 1;
var ground;
var bananas, bananaImage;


function preload() {
  backImage = loadImage("jungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png",   "Monkey_03.png"    ,"Monkey_04.png", "Monkey_05.png",         "Monkey_06.png", "Monkey_07.png" ,"Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  //playerImage = loadImage("Monkey_01.png");
  
}


function setup() {
  createCanvas(600, 200);
  
  player = createSprite(80,140,20,50);
  player.addAnimation("running", player_running);
  player.scale = 0.1;
  
  ground = createSprite(300,170,600,10);
  ground.visible = false;
  ground.x = ground.width/2;
  ground.velocityX = -2;
  
  ObstaclesGroup = createGroup();
  BananasGroup = createGroup();
}


function draw() {
  background(backImage);
  
  if(gameState === 1){
    ground.velocityX = -6;
    //count = count + Math.round(World.frameRate/62);
    
    text ('Score:'+"count",500,20);
    
    if(ground.x < 0){
       ground.x = ground.width/2;
}  
    
    if(keyDown("space")&& player.y>=99){
       player.velocityY = -12;
      //player.addImage(Monkey_01.png);
}
    
    player.velocityY = player.velocityY + 0.8;
    player.collide(ground);
  
  
    spawnObstacles();
    spawnBananas();
    
    if(BananasGroup.isTouching(player)){
      count = count +1;
}
    
    if(ObstaclesGroup.isTouching(player)){
       gameState = 2;
}

}

  else if (gameState === 2){
        ground.velocityX = 0;
        ObstaclesGroup.setVelocityXEach(0);
        BananasGroup.setVelocityXEach(0);
        bananas.visible = false;
        obstacles.visible = false;
}

  drawSprites();
}


function spawnObstacles(){
  if(frameCount % 140 === 0){
     var obstacles = createSprite(300,140);
     obstacles.addImage(obstacleImage);
     obstacles.scale = 0.12;  
     obstacles.velocityX = -5;
     ObstaclesGroup.add(obstacles);
}
}

function spawnBananas(){
  if(frameCount % 65 === 0){
    var bananas = createSprite(300,70);
    bananas.addImage(bananaImage);
    bananas.scale = 0.06;
    bananas.velocityX = -5;
    BananasGroup.add(bananas);
}
}
