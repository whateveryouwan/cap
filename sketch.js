
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log,log1
var engine
var world
var house,house1
var ground

function setup() {
  createCanvas(windowWidth, windowHeight-100);

  engine = Engine.create();
  world = engine.world;

  log = new Log(1000, 500, 500, 10,90);

  house = new House(1300, 500, 120, 120);

  house1 = new House(880, 500, 120, 120);
  var options={
    isStatic:true,
    
  }

  ground = Matter.Bodies.rectangle(width/2, height-10, width, 30,options)
  World.add(world, ground)

}


function draw() {
  background(51);
  rectMode(CENTER)
  imageMode(CENTER)
  Engine.update(engine);
  house.display()
  house1.display()
  fill("yellow")
  rect(ground.position.x, ground.position.y, width, 10)
  log.display()
}

