// Function to draw a still wrench.

// wrenchColor parameter is needed to draw the "ghosted" wrench for the wrenchMoveSketch
function drawWrench(wrenchColor) {
  noStroke();

  //bottom black circle
  fill(wrenchColor);
  ellipse(400, 600, 80, 80);

  //black handle rectangle
  fill(wrenchColor);
  rect(400, 450, 80, 300);

  //bottom white circle
  fill(180);
  ellipse(400, 600, 40, 40);

  //white thin handle part
  fill(180);
  rect(400, 470, 5, 270);

  //wrench head circle
  fill(wrenchColor);
  ellipse(400, 250, 150, 150);

  //angled wrench head
  fill(180);
  push();
  translate(380, 220);
  angleMode(DEGREES);
  rotate(151);
  rect(0, 0, 60, 110, 10);
  pop();
}
