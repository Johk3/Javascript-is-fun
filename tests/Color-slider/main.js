function setup(){
	createCanvas(640, 400);
}
function draw(){
	bacvalue = map(mouseX, 0, 640, 0, 255)
	background(bacvalue);
	fill(255 - bacvalue);
	ellipse(mouseX, mouseY, 60);
}