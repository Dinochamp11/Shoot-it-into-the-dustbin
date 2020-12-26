const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var paperMage = loadImage("paperPic.png");


function preload()
{
		
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	//paper
	 paper1 = new Paper(200, 200, 44);
	 
	 //dustbin
	 dustbinRight = new Dusty(856, 540, 10, 150);
	 dustbinMiddle = new Dusty(750, 600, 200, 10); 
	 dustbinLeft = new Dusty(647, 540, 10, 150);

	 //blocker1 = new Dusty(570,460,150,10);
	 //blocker2 = new Dusty(930,460,150,10);
	 blocker3 = new Dusty(856,380,10,150);
	 blocker4 = new Dusty(647,380,10,150);
	  //ground 
	  ground = new Ground(600, height-35, 1600, 15);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  paper1.display();
  
  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();
  //blocker1.display();
  //blocker2.display();
  blocker3.display();
  blocker4.display();
  //blocker1.display();
  //image(this.paperMage,paper1.x,paper1.y);
  //image(this.dustypic,200,300);
  
  ground.display();
  
  drawSprites();
  
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:105,y:-105});

	}
	if(keyCode === DOWN_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-105,y:105});

	}
}

