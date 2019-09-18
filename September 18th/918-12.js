function setup() {
    createCanvas(windowWidth,windowHeight);
    strokeWeight(100);
    }
    function draw() {
    background(230);
    stroke(102);
    line(20, 0, 100, height);
    if (mouseIsPressed) {
    if (mouseButton == LEFT) {
    stroke(254,0,0);
    } else {
    stroke(250,0,0);
    }
    line(0, 70, width, 50);
    }
    }
    