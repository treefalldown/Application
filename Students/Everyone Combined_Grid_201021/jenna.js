let e1x = 150
let e2x = 200
let speedJS = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ramenBowl();
  traceLinesJ();
}

function ramenBowl() {
  strokeWeight(3)
  fill(194, 24, 7)
  arc(180, 155, 50, 50, 0, PI)

  noFill()
  strokeWeight(1);
  arc(174, 155, 54, 45, 0, QUARTER_PI);
  strokeWeight(3);
  line(155, 155, 205, 155);

  strokeWeight(1);
  line(157, 160, 203, 160);
  strokeWeight(3);
  strokeCap(ROUND);

  line(175, 138, 230, 120);
  line(175, 135, 230, 110);

  fill(194, 24, 7);
  rect(170, 180, 20, 5, 20);
  line(180, 129, 180, 155);
  line(177, 130, 177, 155);
  line(183, 128, 183, 155);
  strokeWeight(1);
  noFill();

  bezier(e1x, 138, 154, 145, 170, 145, 160, 150);

  if (e1x > 153) {
    speedJS = speedJS*-1
  }else if (e1x < 120) {
    speedJS = speedJS*-1
  }

  e1x = e1x + speedJS;



  bezier(e2x, 138, 192, 145, 205, 145, 197, 150);
  if (e2x > 140) {
    speedJS = speedJS*-1
  } else if (e2x < 100) {
    speedJS = speedJS*-1
  }
  e2x = e2x + speedJS;
}

function traceLinesJ() {
  line(e1x, 0, e1x, height);
  line(e2x, 0, e2x, height);
}
