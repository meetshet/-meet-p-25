
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	paper=new Paper(200,300,70)
	ground=new Ground(400,600,1000,50)
	dustbin=new Dustbin(600,505,20,100)
	dustbin2=new Dustbin(700,505,20,100)
	dustbin3=new Dustbin(650,565,120,20)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paper.display();
 ground.display();
 dustbin.display();
 dustbin2.display();
 dustbin3.display();
keyPressed();
  drawSprites ();
 
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    }
}

