const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2;
//stand 1 : level1
var block1, block2, block3, block4, block5;
//stand 1 : level2
var block6, block7, block8;
///stand 1 : level 3
var block9;

//stand 2 : level1
var block10, block11, block12;
///stand 2 : level 2
var block13;

var polygon, polygonImg;
var launcher;

function preload(){
    polygonImg = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var options = {
        density: 0.08,
        friction: 0.2
    }

    ground = new Ground(600, 390, 1200, 20);
    stand1 = new Ground(480, 240, 280, 20);
    stand2 = new Ground(880, 180, 200, 20);

    //stand 1 : level1
    block1 = new block(400,220,50,70);
    block2 = new block(450,220,50,70);
    block3 = new block(490,220,50,70);
    block4 = new block(530, 220, 50, 70);
    block5 = new block(570, 220, 50, 70);
    //stand 1 : level 2
    block6 = new block(440,185,50,70);
    block7 = new block(490,185,50,70);
    block8 = new block(530,185,50,70);
    //stand 1 : level 3
    block9 = new block(490,150,50,70);

    //stand 2 : level 1
    block10 = new block(817,160,50,70);
    block11 = new block(870,160,50,70);
    block12 = new block(915,160,50,70);
    //stand 2 : level 2
    block13 = new block(870,125,50,70);

    polygon = Bodies.circle(120, 50, 20, options);
    World.add(world, polygon);

    launcher = new elastic(this.polygon, {x: 120, y:100});
}

function draw(){
    background("#6666ff");
    Engine.update(engine);

    fill("#33ffff")
    textSize(20);
    text("Drag the Heaxagonal stone and release it", 20, 40);

    //stand 1 : level 1
    fill("#33ff99")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();    
    //stand 1 : level 2
    fill("pink")
    block6.display();
    block7.display();
    block8.display();
    //stand 1 : level 3
    fill("cyan")
    block9.display();

    //stand 2 : level 1
    fill("#33ff99")
    block10.display();
    block11.display();
    block12.display();
    //stand 2 : level 2
    fill("cyan")
    block13.display();

   // polygon.display();
    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 30*2,30*2);
    launcher.display();

    noStroke();
    fill("#cc00ff");
    stand1.display();
    stand2.display();
    //stroke("black");
    ground.display();
    
}

function keyPressed(){
    if(keyCode===32){
        launcher.attach(this.polygon);
        Matter.Body.setPosition(this.polygon, {x:120, y:50});
    }
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}