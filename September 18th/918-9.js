var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.005;


function setup() {
createCanvas(windowWidth,windowHeight);
stroke(50, 150);
}


function draw() {
var targetX = mouseX;
x += (targetX - x) * easing;
var targetY = mouseY;
y += (targetY - y) * easing;
var weight = dist(x, y, px, py);
strokeWeight(weight);
line(x, y, px, py);
py = y;
px = x;
}
