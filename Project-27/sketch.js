const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bob1, bob2, bob3, bob4, bob5;

var rope1, rope2, rope3, rope4, rope5;

var engine, world;

function setup() {

	createCanvas(1280, 605);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height-500,350,25);

	bob1 = new Bob(540,roof.body.position.y+300,25,25);
	bob2 = new Bob(590,roof.body.position.y+300,25,25);
	bob3 = new Bob(width/2,roof.body.position.y+300,25,25);
	bob4 = new Bob(690,roof.body.position.y+300,25,25);
	bob5 = new Bob(740,roof.body.position.y+300,25,25);

	rope1 = new Rope(bob1.body, {x : 540, y : roof.body.position.y});
	rope2 = new Rope(bob2.body, {x : 590, y : roof.body.position.y});
	rope3 = new Rope(bob3.body, {x : width/2., y : roof.body.position.y});
	rope4 = new Rope(bob4.body, {x : 690, y : roof.body.position.y});
	rope5 = new Rope(bob5.body, {x : 740, y : roof.body.position.y});
	
	Engine.run(engine);
  
}


function draw() {

  background("black");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {

    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-45});

    }
  }
