
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var canvas;
var balloon1, balloon2, balloon3;
var gun;
var backgroundImg;
var playerBullet;
var playerBullet = [];


function preload() {
  balloon1 = loadImage("./assets/Balloon1.png")
  balloon2 = loadImage("./assets/Balloon2.png")
  balloon3 = loadImage("./assets/Balloon3.png")
  backgroundImg = loadImage("./assets/bg.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  
    gun = new Gun(
    200,
    200,
    120,
    100
  );

  playerBullet = new PlayerBullet(
    340,
    88,
    120,
    120
  );


  
}

function draw() {
  background(backgroundImg );
  Engine.update(engine);
  
  gun.display();

  for (var i = 0; i < playerBullet.length; i++) {
    if (playerBullet[i] !== undefined) {
      playerBullet[i].display();

      //with distance formula
      // d1 = dist(playerBullet[i].body.position.x,playerBullet[i].body.position.y, board1.body.position.x,board1.body.position.y)
      //if(d1<=100)
    // {
     //   console.log("collision");
     // }
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    
    var posX = gun.body.position.x;
    var posY = gun.body.position.y;
    var angle = gun.body.angle;

   var bullet = new PlayerBullet(posX, posY, 100, 20, angle);

    // bullet.trajectory = [];
    Matter.Body.setAngle(bullet.body, angle);
    playerBullet.push(bullet);
    
  }
}

function keyReleased() {
  if (keyCode === 32) {
    if (playerBullet.length) {
      var angle = gun.body.angle;
      gun[gun.length - 1].shoot(angle);
    }
  }
}




