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
var mouse = {
  x: undefined,
  y: undefined
};
var maxRadius = 40;
var minRadius = 5;

var colorArray = [
  '#247ba0',
  '#70c1b3',
  '#b2dbbf',
  '#f3ffbd',
  '#ff1654'
];

window.addEventListener('mousemove', (event)=>{
  mouse.x = event.x;
  mouse.y = event.y;
});
window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Circle(x,y,dx,dy,r){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = r;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length) + 0];
  this.minRadius = r;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
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

    // Interactivity
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
      if(this.radius < maxRadius){
        this.radius += 2;
      }
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }
    this.draw();
  }
}

var circleArray = [];

function init(){
  for (var i = 0; i < 1000; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.floor((Math.random()) * (window.innerWidth - radius * 2)) + radius;
    var y = Math.floor((Math.random()) * (window.innerWidth - radius * 2)) + radius;
    var dx = Math.floor((Math.random()) * 1) + -1;
    var dy = Math.floor((Math.random()) * 1) + -1;
    circleArray.push(new Circle(x,y,dx,dy,radius));
  }
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    if(circleArray.length > 1000){
      circleArray.splice(i, 1);
    }
    circleArray[i].update();
  }
}
init();
animate();
