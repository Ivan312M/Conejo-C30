const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var suelo;
var cuerda;
var fruta;
var frutaCuerda;

var bg_image;
var bunny_image;
var melon_image;
var bunny;
var button;

function preload(){
  bg_image = loadImage("background.png");
  bunny_image = loadImage("Rabbit-01.png");
  melon_image = loadImage("melon.png");
}


function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  /*var frutaOption = {
    density: 0.001
  };*/

  suelo = new Floor (200, 690, 600, 20);

  fruta = Bodies.circle(300, 300, 20);

  cuerda = new Rope (7, {x: 245, y: 30});

  Matter.Composite.add(cuerda.body, fruta);
  frutaCuerda = new Link(cuerda, fruta);

  bunny = createSprite(250, 650, 100, 100);
  bunny.addImage(bunny_image);
  bunny.scale = 0.2;

  button = createImg('cut_button.png');
  button.position(220, 30);
  button.size(50, 50);
  button.mouseClicked(drop);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  imageMode(CENTER);
  
  
}

function draw() 
{
  background(51);
  image(bg_image, 0, 0, displayWidth+80, displayHeight);
  Engine.update(engine);

  suelo.show();
  cuerda.show();
  image(melon_image, fruta.position.x, fruta.position.y, 60, 60);

  

  drawSprites();
}

function drop(){
  cuerda.break();
  frutaCuerda.detach();
  frutaCuerda = null;
}




