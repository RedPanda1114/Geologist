const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(100,590,10,200)
    rubber2 = new Rubber(110,590,10,200)
    rubber3 = new Rubber(120,590,10,200)
    rubber4 = new Rubber(130,590,10,200)
    rubber5 = new Rubber(140,590,10,200)
    stone = new Stone(400,590)
    iron = new Iron(1000,590)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone.display();
    iron.display();
}