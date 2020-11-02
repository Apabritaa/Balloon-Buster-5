

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  score=0;

  
  
  
rballoon = new Group();
  gballoon = new Group();
  bballoon = new Group();
  pballoon = new Group();
  arrowGroup = new Group();
 // arrowGroup = new Group();
 
}

function draw() {
  // moving ground
    background.velocityX = -3 
//score=score+Math.round((frameCount/120));
    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY;
  
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
     createArrow();
   //temp_arrow.addImage(arrowImage);
   // temp_arrow.y = bow.y;
  }
  var select_balloon = Math.round(random(1,4));
  if(frameCount%80===0)
    {
      //console.log(frameCount);
      
  switch(select_balloon)
  
    {
      case 1:
        redballoons();
        break;
        case 2:
        greenballoons();
        break;
        case 3:
        blueballoons();
        break;
        case 4:
        pinkballoons();
        break;
        default: break;
    }
    }
  if (arrowGroup.isTouching(rballoon)){
    rballoon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
   if (arrowGroup.isTouching(bballoon)){
    bballoon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
 
  
   if (arrowGroup.isTouching(pballoon)){
    pballoon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
 
  
   if (arrowGroup.isTouching(gballoon)){
    gballoon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
 
    drawSprites();    
         
    text("Score:"+score,270,30);
  
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  
  arrow.velocityX = -4;
  arrow.y=bow.y;
  arrow.scale = 0.3;
  arrow.addImage(arrowImage);
  //assigning lifetime to the arrow
  arrow.lifetime=100;
  arrowGroup.add(arrow);
}
function redballoons(){
  //if (frameCount%60===0){
    
  
    var redballoon=createSprite(0,Math.round(random(20,370)),10,10);
    redballoon.velocityX=3;
    redballoon.addImage("redballoon",red_balloonImage);
    redballoon.scale=0.1;
  //assigning lifetime so that it destroys itself as soon as it comes very close to the bow
        redballoon.lifetime=150;
  rballoon.add(redballoon);
}


function blueballoons(){
  //if (frameCount%60===0){
    
  
    var blueballoon=createSprite(0,Math.round(random(20,370)),10,10);
    blueballoon.velocityX=3;
    blueballoon.addImage("blueballoon",blue_balloonImage);
    blueballoon.scale=0.1;
         console.log(blueballoon.x);
  //assigning lifetime so that it destroys itself as soon as it comes very close the bow
  blueballoon.lifetime=150;
  bballoon.add(blueballoon);
}


function greenballoons(){
  //if (frameCount%60===0){
    
  
    var greenballoon=createSprite(0,Math.round(random(20,370)),10,10);
    greenballoon.velocityX=3;
    greenballoon.addImage("greenballoon",green_balloonImage);
    greenballoon.scale=0.1;
  //assigning lifetime so that it destroys itself as soon as it comes very close to the bow
        greenballoon.lifetime=150;
  gballoon.add(greenballoon);
}
function pinkballoons(){
  //if (frameCount%60===0){
    
  
    var pinkballoon=createSprite(0,Math.round(random(20,370)),10,10);
    pinkballoon.velocityX=3;
    pinkballoon.addImage("pinkballoon",pink_balloonImage);
    pinkballoon.scale=1;
  //assigning lifetime so that it destroys itself as soon as it comes very close to the bow
       pinkballoon.lifetime=150;
  pballoon.add(pinkballoon);
}
