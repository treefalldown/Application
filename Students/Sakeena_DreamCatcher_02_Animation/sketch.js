let speed = 1;
//large hoops web
let circle1A = {
  circleX: 300,
  circleY: 230,
  circleHeight: 60,
  circleWidth: 60
}
let circle1B = {
  circleX: 300,
  circleY: 170,
  circleHeight: 60,
  circleWidth: 60,
}
let circle1C = {
  circleX: 330,
  circleY: 200,
  circleHeight: 60,
  circleWidth: 60,
}
let circle1D = {
  circleX: 270,
  circleY: 200,
  circleHeight: 60,
  circleWidth: 60,
}
let circle1E = {
  circleX: 278,
  circleY: 220,
  circleHeight: 60,
  circleWidth: 60
}
let circle1F = {
  circleX: 278,
  circleY: 180,
  circleHeight: 60,
  circleWidth: 60
}
let circle1G = {
  circleX: 322,
  circleY: 220,
  circleHeight: 60,
  circleWidth: 60
}
let circle1H = {
  circleX: 322,
  circleY: 180,
  circleHeight: 60,
  circleWidth: 60
}
//medium hoop
let circle2 = {
  circleX: 300,
  circleY: 310,
  circleHeight: 90,
  circleWidth: 90
}
//medium hoops web
let circle2A = {
  circleX: 300,
  circleY: 332,
  circleHeight: 45,
  circleWidth: 45
}
let circle2B = {
  circleX: 300,
  circleY: 288,
  circleHeight: 45,
  circleWidth: 45
}
let circle2C = {
  circleX: 278,
  circleY: 312,
  circleHeight: 45,
  circleWidth: 45
}
let circle2D = {
  circleX: 322,
  circleY: 312,
  circleHeight: 45,
  circleWidth: 45
}
let circle2E = {
  circleX: 285,
  circleY: 326,
  circleHeight: 45,
  circleWidth: 45
}
let circle2F = {
  circleX: 315,
  circleY: 326,
  circleHeight: 45,
  circleWidth: 45
}
let circle2G = {
  circleX: 285,
  circleY: 294,
  circleHeight: 45,
  circleWidth: 45
}
let circle2H = {
  circleX: 315,
  circleY: 294,
  circleHeight: 45,
  circleWidth: 45
}
//small hoop
let circle3 = {
  circleX: 300,
  circleY: 390,
  circleHeight: 60,
  circleWidth: 60
}
//small hoops web
let circle3A = {
  circleX: 315,
  circleY: 390,
  circleHeight: 30,
  circleWidth: 30
}
let circle3B = {
  circleX: 285,
  circleY: 390,
  circleHeight: 30,
  circleWidth: 30
}
let circle3C = {
  circleX: 300,
  circleY: 405,
  circleHeight: 30,
  circleWidth: 30
}
let circle3D = {
  circleX: 300,
  circleY: 375,
  circleHeight: 30,
  circleWidth: 30,
}
let circle3E = {
  circleX: 290,
  circleY: 400,
  circleHeight: 30,
  circleWidth: 30
}
let circle3F = {
  circleX: 290,
  circleY: 380,
  circleHeight: 30,
  circleWidth: 30
}
let circle3G = {
  circleX: 310,
  circleY: 400,
  circleHeight: 30,
  circleWidth: 30
}
let circle3H = {
  circleX: 310,
  circleY: 380,
  circleHeight: 30,
  circleWidth: 30
}
let angle = 10;

let circleGroup1 = [circle1A, circle1B, circle1C, circle1D, circle1E, circle1F, circle1G, circle1H]

let circleGroup2 = [circle2A, circle2B, circle2C, circle2D, circle2E, circle2F, circle2G, circle2H]

let circleGroup3 = [circle3A, circle3B, circle3C, circle3D, circle3E, circle3F, circle3G, circle3H]

function setup() {
  createCanvas(600, 600);
  noFill()
  angleMode(DEGREES)
}

  function draw() {

  for (i = 0; i < circleGroup1.length; i++) {
    push();

    let translatePt = 1*i;
    translate(translatePt, translatePt);
    rotate(1*i);
    strokeWeight(1);
    rotateCircle(circleGroup1[i])

    pop();
    }

    for (i = 0; i < circleGroup2.length; i++) {
    push();

    let translatePt = 3*i;
    translate(translatePt, translatePt);
    rotate(10*i);
    strokeWeight(1);
    rotateCircle(circleGroup2[i])

    pop();
    }

    for (i = 0; i < circleGroup3.length; i++) {
    push();

    let translatePt = 3*i;
    translate(translatePt, translatePt);
    rotate(6*i);
    strokeWeight(1);
    rotateCircle(circleGroup3[i])

    pop();
    }
}

function rotateCircle(incomingCircle) {
  push();
  translate(300, 200);
  rotate(angle);
  circle (incomingCircle.circleX-300, incomingCircle.circleY-200, incomingCircle.circleHeight, incomingCircle.circleWidth);
  // line(0, 0, incomingCircle.circleX-200, incomingCircle.circleY-100);
  pop();
  angle = angle + 0.02;
  hypotenuse = dist(300, 200, incomingCircle.circleX,  incomingCircle.circleY);

fill ('rgba(0,255,0, .01)')
  circle(300, 200, hypotenuse*2 + incomingCircle.circleHeight);

  strokeWeight(1);
  point(300, 200);
}
