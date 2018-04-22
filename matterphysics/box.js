function Box(x,y,w,h){
	this.body = Bodies.rectangle(x, y, w, h);
	this.body.friction = kitkas;
	this.body.restitution = hyppys;
	this.w = w;
	this.h = h;
	console.log(this.body.friction, this.body.restitution);
	World.add(world, this.body);

	this.show = function(){
		var pos = this.body.position;
		var angle = this.body.angle;


		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(2);
		stroke(255);
		fill(25);
		rect(0,0,this.w,this.h);

		pop();
	}
	
}