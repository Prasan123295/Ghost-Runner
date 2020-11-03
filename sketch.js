var tower,towerImage;
var door,doorImage,doorGroup,climber,climberImage,climberGroup;
var invisibleBlock,invisibleBlockGroup;
var ghost,ghostImage;
var PLAY =1;
var END =0;
var gameState =PLAY;



function preload(){
   towerImage = loadImage("tower.png");
 
 doorImage = loadImage("door.png");
 climberImage = loadImage("climber.png");
 ghostImage = loadImage("ghost-standing.png");

}

function setup(){
    createCanvas(600,600);
    
  doorGroup = createGroup();
  climberGroup = createGroup();
  invisibleBlockGroup = createGroup();
  
  tower = createSprite(300,300);
  tower.addImage("skin",towerImage);
 tower.velocityY = 2;
 
 ghost = createSprite(300,200,50,50);
 ghost.addImage("chudal",ghostImage);
 ghost.scale = 0.5;
 


}


function draw(){
  background("white");
  
 
  if(gameState === PLAY){
  
  
  if(tower.y>400){
  tower.y = 300;
  }
  
  if(keyDown("right")){
  ghost.x = ghost.x+4;
  }
  
  if(keyDown("left")){
  ghost.x = ghost.x-4;
  }

 spawnDoors();
  if(keyDown("space")){
  ghost.velocityY = -10;
  }
  ghost.velocityY = ghost.velocityY+1;
  
  if(climberGroup.isTouching(ghost)){
  ghost.velocityY = 0;
  
  }

  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600 ){
  ghost.destroy();
  gameState = END;
  
  }  




  
  
  
  
  
  
  drawSprites();
}

if(gameState === END){
  stroke("black");
  fill("white");
  textSize(40); 
  text("GAME OVER ",200,300);

}





}

function spawnDoors(){
if(frameCount % 100 === 0){
 door = createSprite(200,-50);
 climber = createSprite(200,10);
 invisibleBlock = createSprite(200,15);    
      climber.addImage("chadnewala",climberImage);
 invisibleBlock.width = climber.width;
 invisibleBlock.height = 2;
      
 door.x =      Math.round(random(100,400));
door.addImage("darwaza",doorImage);
 door.velocityY = 5;
 climber.velocityY =5;
 invisibleBlock.velocityY = 5;
 climber.x = door.x;
 invisibleBlock.x = door.x;
 door.lifetime = 300;
 climber.lifetime = 300;
 climberGroup.add(climber);
 doorGroup.add(door);
 invisibleBlockGroup.add(invisibleBlock);
 
  ghost.depth = door.depth;
  ghost.depth = ghost.depth+1;
  invisibleBlock.debug = true;

}

















}












