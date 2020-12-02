const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var particles=[];
var plinkos=[];
var divisions=[];

var ground;
var div1, div2, div3, div4, div5, div6, div7;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  ground=new Ground(200,790,800,20);
  div1=new Division(0,600,20,400);
  div2=new Division(80,600,20,400);
  div3=new Division(160,600,20,400);
  div4=new Division(240,600,20,400);
  div5=new Division(320,600,20,400);
  div6=new Division(400,600,20,400);
  div7=new Division(480,600,20,400);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for (var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();

  fill("white");
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}
