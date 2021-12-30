//defineing all the all the necessassory name spacing
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
//defining all the variables
let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;
var bunny;
var button;

//loading images
function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
//creating rope and fruit
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
// adding fruit_con to Link
  fruit_con = new Link(rope,fruit);
//creating bunny
  bunny = createSprite(250, 620, 15,15);
  bunny.addImage(rabbit);
  bunny.scale = 0.2
//creating button image
  button = createImg("cut_button.png");
  button.position(220, 30);
  button.size(50,50);
  button.mouseClicked(drop)


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  //image at center
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
//placing backgroun in the middle
  image(bg_img,width/2,height/2,490,690);
// adding image of fruit and showing rope
  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

  drawSprites();
  
 
   
}
// making the fruit fall 
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null;
}
