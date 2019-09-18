var x = 350;
var y = 350;
var w = 500;
var h = 550;
function setup() {
createCanvas(1000 , 1000);
}
function draw() {
background(0);
if ((mouseX > x) && (mouseX < x+w) &&
(mouseY > y) && (mouseY < y+h)) {
fill(255);
}
else {
fill(254,0,0);
}
ellipse(x, y, w, h);
}
