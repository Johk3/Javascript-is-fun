function setup(){
	createCanvas(windowWidth, windowHeight)
}
function draw(){
	random = Math.floor((Math.random() * 300) + 0);
	random2 = Math.floor((Math.random() * 300) + 0);
	random3 = Math.floor((Math.random() * 300) + 0);
	random4 = Math.floor((Math.random() * 300) + 0);
	if(mouseIsPressed){
		fill(50);
	}else{
		fill(random, random2, random3);
	}
	ellipse(mouseX, mouseY, 80, 80);
}
