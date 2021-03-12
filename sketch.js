
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
	//stoneObj=loadImage("stone/stone.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(1100,50,20);
	mango3=new mango(1000,30,20);
    mango4=new mango(2000,100,50);
	mango5=new mango(1500,400,50);
    mango6=new mango(6000,500,40);

   // stoneObj=new stone(200,500,600);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

 // stoneObj.display();

  groundObject.display();
}
