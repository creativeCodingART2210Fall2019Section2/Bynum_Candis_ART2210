function setup() {
    createCanvas(500, 500);
    }
    function draw() {
    background(254,0,0);
    if (keyIsPressed) {
    if ((key == 'c') || (key == 'C')) {
    strokeWeight(30);
    line(10, 40, 90, 60);
    }
    if ((key == 'b') || (key == 'B')) {
    strokeWeight(30);
    line(30, 20, 90, 100);
    }
    }
    strokeWeight(30);
    line(30, 20, 30, 100);
    line(90, 20, 90, 100);
    }
    