let box01 = {
  color: 0, //black
  rectX: 237,
  rectY: 250,
  rectWidth: 126,
  rectHight: 309
}

let circle01 = {
  color: 0, //black
  ellipseX: 267,
  ellipseY: 250,
  ellipseWidth: 60,
  ellipseHight: 60
}

let circle02 = {
  color: 0, //black
  ellipseX: 333,
  ellipseY: 250,
  ellipseWidth: 60,
  ellipseHight: 60
}

let triangle01 = {
  color: 0, //black
  triangleX1: 275,
  triangleY1: 221,
  triangleX2: 300,
  triangleY2: 270,
  triangleX3: 325,
  triangleY3: 221
}

let box02 = {
  color: 0, //black
  rectX: 245,
  rectY: 558,
  rectWidth: 110,
  rectHight: 8
}

let circle03 = {
  color: 0, //black
  ellipseX: 245,
  ellipseY: 558,
  ellipseWidth: 16,
  ellipseHight: 16
}

let circle04 = {
  color: 0, //black
  ellipseX: 355,
  ellipseY: 558,
  ellipseWidth: 16,
  ellipseHight: 16
}

let box03 = {
  color: 0, //black
  rectX: 258,
  rectY: 197,
  rectWidth: 84,
  rectHight: 24
}

let box04 = {
  color: 0, //black
  rectX: 258,
  rectY: 177,
  rectWidth: 84,
  rectHight: 18
}

let box05 = {
  color: 0, //black
  rectX: 257,
  rectY: 142,
  rectWidth: 86,
  rectHight: 33
}



let triangle02 = {
  color: 0, //black
  triangleX1: 342,
  triangleY1: 216,
  triangleX2: 342,
  triangleY2: 225,
  triangleX3: 350,
  triangleY3: 225
}



let triangle03 = {
  color: 0, //black
  triangleX1: 259,
  triangleY1: 216,
  triangleX2: 259,
  triangleY2: 225,
  triangleX3: 250,
  triangleY3: 225
}

let box06 = {
  color: 0, //black
  rectX: 252,
  rectY: 112,
  rectWidth: 4,
  rectHight: 60
}

let box07 = {
  color: 0, //black
  rectX: 344,
  rectY: 112,
  rectWidth: 4,
  rectHight: 60
}



let arc01 = {
  color: 0, //black
  arcX: 300,
  arcY: 115,
  arcWidth: 96,
  arcHight: 96,
}

let box08 = {
  color: 0, //black
  rectX: 349,
  rectY: 142,
  rectWidth: 3,
  rectHight: 27
}

let box09 = {
  color: 0, //black
  rectX: 248,
  rectY: 142,
  rectWidth: 3,
  rectHight: 27
}

let arc02 = {
  color: 220, //gray
  arcX: 300,
  arcY: 115,
  arcWidth: 88,
  arcHight: 88,
}

let circle05 = {
  color: 220, //gray
  ellipseX: 350,
  ellipseY: 216,
  ellipseWidth: 16,
  ellipseHight: 16
}

let circle06 = {
  color: 220, //gray
  ellipseX: 250,
  ellipseY: 216,
  ellipseWidth: 16,
  ellipseHight: 16
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220); //gray
  strokeWeight(0)

  //fill(0);
  //bottle body
  drawBox(box01);
  drawCircle(circle01);
  drawCircle(circle02);
  drawTriangle(triangle01);

  //bottle bottom
  drawBox(box02);
  drawCircle(circle03);
  drawCircle(circle04);

  //bottle top
  drawBox(box03);
  drawBox(box04);
  drawBox(box05);
  drawTriangle(triangle02);
  drawTriangle(triangle03);

  //handle
  drawBox(box06);
  drawBox(box07);
  drawArc(arc01);
  drawBox(box08);
  drawBox(box09);

  //overlaped objects
  drawArc(arc02);
  drawCircle(circle05);
  drawCircle(circle06);
}

function drawBox (incomingBox) {
  fill(incomingBox.color); //black
  rect(incomingBox.rectX, incomingBox.rectY, incomingBox.rectWidth, incomingBox.rectHight);
}

function drawCircle (incomingCircle) {
  fill(incomingCircle.color); //black
  ellipse(incomingCircle.ellipseX, incomingCircle.ellipseY, incomingCircle.ellipseWidth, incomingCircle.ellipseHight);
}

function drawTriangle (incomingTriangle) {
  fill(incomingTriangle.color); //black
  triangle(incomingTriangle.triangleX1, incomingTriangle.triangleY1, incomingTriangle.triangleX2, incomingTriangle.triangleY2, incomingTriangle.triangleX3, incomingTriangle.triangleY3); //inside
}

function drawArc (incomingArc) {
  fill(incomingArc.color); //gray
  // arc(incomingArc.arcX, incomingArc.arcY, incomingArc.arcWidth, incomingArc.arcHight, incomingArc.arcStart,
  //   incomingArc.arcStop);
  arc(incomingArc.arcX, incomingArc.arcY, incomingArc.arcWidth, incomingArc.arcHight, PI,
    TWO_PI);
  }
