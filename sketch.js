var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyImg2,fairySound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//fairyImg2 = loadImage("fairy.png");

	//fairySound = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	//fairySound.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(200,450,20,20);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale = 0.3;
	fairy.setCollider("rectangle",400,50,250,150);
	fairy.debug = true;
	



	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  keyPressed();
  //write code to stop star in the hand of fairy
  if(star.isTouching(fairy)){
	console.log("star");
	starBody.isStatic = true;
	star.velocityY = 0;


  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("LEFT_ARROW")){
		fairy.x = fairy.x-10;
		fairy.addAnimation("fairyFlying",fairyImg);
    }
	
	if(keyDown("RIGHT_ARROW")){
		fairy.x = fairy.x+10;
		fairy.addAnimation("fairyFlying",fairyImg);
    }

}
