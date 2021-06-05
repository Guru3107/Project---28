
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload() {
	boy_img = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650, 580, 1300, 20);
	tree = new Tree(1050, 580)
	stone = new Stone(235, 420, 40)
	mango1 = new mango(1100, 100, 30)
	mango2 = new mango(1170, 130, 30);
	mango3 = new mango(1010, 140, 30);
	mango4 = new mango(1000, 70, 30);
	mango5 = new mango(1100, 70, 30);
	mango6 = new mango(1000, 230, 30);
	mango7 = new mango(900, 230, 40);
	mango8 = new mango(1140, 150, 40);
	mango9 = new mango(1100, 230, 40);
	mango10 = new mango(1200, 200, 40);
	mango11 = new mango(1120, 50, 40);
	mango12 = new mango(900, 160, 40);
	launch = new launcher(stone.body, { x: 235, y: 420 })
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("White");

	image(boy_img, 200, 340, 200, 300);

	ground.display();
	tree.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango4.display();
	mango3.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	launch.display();

	detectCollision(stone,mango1)
	detectCollision(stone,mango2)
	detectCollision(stone,mango3)
	detectCollision(stone,mango4)
	detectCollision(stone,mango5)
	detectCollision(stone,mango6)
	detectCollision(stone,mango7)
	detectCollision(stone,mango8)
	detectCollision(stone,mango9)
	detectCollision(stone,mango10)
	detectCollision(stone,mango11)
	detectCollision(stone,mango12)

	drawSprites();

}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
	launch.fly();
}

function keyPressed() {
	if (keyCode === 32) {

		Matter.Body.setPosition(stone.body, { x: 235, y: 420 })
		launch.attach(stone.body)
	}

}

function detectCollision(stone,mango){
	var mangoPosition = mango.body.position;
	var stonePosition = stone.body.position;

	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);

	if(distance<= mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false)
	}
}
