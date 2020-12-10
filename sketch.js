//
const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

//Creating variables
var ground1, ground2, ground3, ground4;
var division1, division2, division3, division4, division5, division6, division7, division8;

//Creating arrays
var divisions = [];
var plinkos   = [];
var particles = [];

function setup() {

  //Creating Canvas
  createCanvas(480, 600);
 
  //
  engine = Engine.create();
  world  = engine.world;
  Engine.run(engine);

  //Creating game components
  ground1 = new Ground (240, 595, 480, 10);
  ground2 = new Ground (475, 300, 10, 600);
  ground3 = new Ground (5, 300, 10, 600);
  ground4 = new Ground (240, 5, 480, 10);

  division1 = new Division (240, 583, 461, 15);
  division2 = new Division (15, 455, 10, 240);
  division3 = new Division (465, 455, 10, 240);
  division4 = new Division (80, 455, 15, 240);
  division5 = new Division (160, 455, 15, 240);
  division6 = new Division (240, 455, 15, 240);
  division7 = new Division (320, 455, 15, 240);
  division8 = new Division (400, 455, 15, 240);

  //
  for (var j = 40; j <= width; j = j + 50) {
     plinkos.push(new Plinko(j, 75, 10));
}

for (var j = 15; j <= width-10; j = j + 50) {
     plinkos.push(new Plinko(j, 130, 10));
}

for (var j = 40; j <= width; j = j + 50) {
     plinkos.push(new Plinko(j, 190, 10));
}

for (var j = 15; j <= width-10; j = j + 50) {
     plinkos.push(new Plinko(j, 250, 10));
}
 

}

function draw() {

  //Background color
  background("black");

  

  

  //
  if (frameCount%60===0) {
      particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  //
  
   
  //Displaying created objects
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  
  for (var l = 0; l < plinkos.length; l = l + 1) {
     plinkos[l].display();
}

for (var k = 0; k < particles.length; k++) {
     particles[k].display();
}
  
}