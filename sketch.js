let ground;
let lander;
var diver_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  diver_img = loadAnimation("diver1.png","diver2.png","diver3.png");
  
  bg_img = loadImage("bg1.jpg");
}

function setup() {
  createCanvas(1000,700);
  var Sophia=createSprite(100,500,15,15);
  Sophia.addAnimation( "dvr",diver_img);
  
  
  var wall1=createSprite(250,50,20,200);
  wall1.shapeColor="blue";
  
  var wall2=createSprite(65,50,20,100);
  wall2.shapeColor="blue";
  
  var wall3=createSprite(50,160,150,20);
  wall3.shapeColor="blue";
  
  var wall4=createSprite(110,50,90,20);
  wall4.shapeColor="blue";
  
  var wall5=createSprite(45,260,20,120);
  wall5.shapeColor="blue";
  
  var wall6=createSprite(190,200,20,110);
  wall6.shapeColor="blue";
  
  var wall7=createSprite(390,330,200,20);
  wall7.shapeColor="blue";
  
  var wall8=createSprite(390,120,130,20);
  wall8.shapeColor="blue";
  
  var wall9=createSprite(300,219,20,100);
  wall9.shapeColor="blue";
  
  var wall10=createSprite(400,400,40,90);
  wall10.shapeColor="yellow";
  
  var wall11=createSprite(240,325,20,120);
  wall11.shapeColor="blue";
  
  var wall12=createSprite(180,320,130,20);
  wall12.shapeColor="blue";
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
 // image(bg_img,0,0);
 
  drawSprites();
}


