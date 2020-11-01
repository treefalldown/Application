//  Additional references to understanding controlling angles
//  https://p5js.org/reference/#/p5/rotate
//  https://www.youtube.com/watch?v=o9sgjuh-CBM&t=18m0s
//  https://genekogan.com/code/p5js-transformations/

let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(20, 100, 100);
  rectMode(CENTER)

  push();
  translate(200, 100);
  rotate(angle);
  noFill();
  circle(0, 0, 120);
  circle(0, 30, 60);
  circle(0, -30, 60);
  circle(30, 0, 60);
  circle(-30, 0, 60);
  circle(-22, 20, 60);
  circle(-22, -20, 60);
  circle(22, 20, 60);
  circle(22, -20, 60);
  pop();

  push();
  translate(200, 210);
  rotate(angle);
  noFill();
  circle(0, 0, 90);
  circle(0, 22, 45);
  circle(0, -22, 45);
  circle(-22, 2, 45);
  circle(22, 2, 45);
  circle(-15, 16, 45);
  circle(15, 16, 45);
  circle(-15, -16, 45);
  circle(15, -16, 45);
  pop();

  push();
  translate(200, 290);
  rotate(angle);
  noFill();
  circle(0, 0, 60);
  circle(15, 0, 30);
  circle(-15, 0, 30);
  circle(0, 15, 30);
  circle(0, -15, 30);
  circle(-10, 10, 30);
  circle(-10, -10, 30);
  circle(10, 10, 30);
  circle(10, -10, 30);
  pop();

  push();
  translate(200, 340);
  rotate(angle);
  noFill();
  circle(0, 0, 30);
  circle(0, 8, 15);
  circle(0, -8, 15);
  circle(-8, 0, 15);
  circle(8, 0, 15);
  pop();

  push();
  translate(100, 160);
  rotate(angle);
  noFill();
  circle(0, 0, 30);
  circle(0, 8, 15);
  circle(0, -8, 15);
  circle(-8, 0, 15);
  circle(8, 0, 15);
  pop();

  push();
  translate(300, 160);
  rotate(angle);
  noFill();
  circle(0, 0, 30);
  circle(0, 8, 15);
  circle(0, -8, 15);
  circle(-8, 0, 15);
  circle(8, 0, 15);
  pop();

  angle++;
  noFill();
  arc(200, 145, 200, 250, 180, 0);
  line(200, 0, 200, 40);
  line(200, 160, 200, 165);
  line(200, 255, 200, 260);
  line(200, 320, 200, 325);
}
