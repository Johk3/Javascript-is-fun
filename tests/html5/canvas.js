var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "#424242";
// c.fillRect(100, 100, 100, 100);
// c.fillRect(400, 100, 100, 100);
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

//line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "red";
// c.stroke();

// // Arc
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// for(var i = 0; i<10000; i++){
//   var one = Math.floor((Math.random()) * 255) + 0
//   var two = Math.floor((Math.random()) * 255) + 0
//   var tre = Math.floor((Math.random()) * 255) + 0
//   var fore = Math.floor((Math.random()) * 255) + 0
//   var x = Math.floor((Math.random()) * window.innerWidth) + 1
//   var y = Math.floor((Math.random()) * window.innerHeight) + 1
//
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `rgba(${one}, ${two}, ${tre}, ${fore})`;
//   c.stroke();
// }
function Circle(x,y,dx,dy,r){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = r;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  }
  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

var circle = new Circle(200, 200, 10, 10, 50);
circle.draw();

var x = Math.floor((Math.random()) * window.innerWidth) + 1;
var y = Math.floor((Math.random()) * window.innerHeight) + 1;
var dx = Math.floor((Math.random()) * 100) + -100;
var dy = Math.floor((Math.random()) * 100) + -100;
var radius = 30;

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circle.draw();
  c.beginPath();
  c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
}
animate();
