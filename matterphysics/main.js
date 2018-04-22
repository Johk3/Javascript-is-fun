var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function setup(){
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	var options = {
		isStatic: true
	};
	ground = Bodies.rectangle(windowWidth/2, windowHeight, windowWidth, 10, options);
	World.add(world, ground);
}
function mouseDragged(){
	boxes.push(new Box(mouseX, mouseY, 20, 20));
}
function draw(){
	background(80);
	for(var i = 0; i < boxes.length; i++){
		boxes[i].show();
		if(boxes[i].body.position.y > 1050){
			boxes.splice(i, 1)
		}
	}
	stroke(80, 150, 15);
	fill(170);
	strokeWeight(4);
	rectMode(CENTER);
	line(0, height, width, height)
}