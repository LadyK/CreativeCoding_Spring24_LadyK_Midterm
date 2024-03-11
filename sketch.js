function setup() {
 // put setup code here
  createCanvas(1200, 1200);
  background(255);
}

function draw() {
  fill(0);
  stroke(145, 200, 89);
  strokeWeight(2);
  rect(width/2, height/2, 400, 400);

  fill(255, 0, 120);
  stroke(0, 0, 255);
  ellipse(200, 200, 50, 50);
}
