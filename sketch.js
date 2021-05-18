const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stone1 = new Stone(700,300,70,70);
    ground = new Ground(width/2,height,width,20)
    rubber1 = new Rubber (810,250,300,PI/2);
    hammer = new Hammer(200,100);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(stone1.body.position.x);
    console.log(stone1.body.position.y);
    console.log(stone1.body.angle);
    stone1.display();
    ground.display();
    rubber1.display();
    hammer.display();
}



