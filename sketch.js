
//Create variables here
var dog
var dogImage
var dogfood
var Foodcount
var score = 30

function preload()
{
  dogImage = loadImage("images/Dog.png");
  
}

function setup() {
    createCanvas(500, 500);
    dog = createSprite(250,250,10,10);
    dog.addImage(dogImage)
    dog.scale = 0.2
    
}


function draw() {  
  background("lightgreen")
  textSize(30)
  text("food "+score,20,40)
  textSize(22)
  text("Press UP for feeding And down for buying food ",10,460)
  drawSprites();
  if(keyDown(UP_ARROW)){
      score = score-1
  }
  if(keyDown(DOWN_ARROW)){
    score = score+1
}
 

  
  dog.display();
}
