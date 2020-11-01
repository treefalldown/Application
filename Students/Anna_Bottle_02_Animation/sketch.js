let box01 = {
  color: 0, //main body
  rectX: 300,
  rectY: 400,
  rectWidth: 120,
  rectHeight: 300,
  speedX: 2,
  speedY: 1
}

let box02 = {
  color: 0, //neck
  rectX: 300,
  rectY: 210,
  rectWidth: 80,
  rectHeight: 30,
  speedX: 2,
  speedY: 2
}

let box03 = {
  color: 0, //body cover in the middle
  rectX: 300,
  rectY: 220,
  rectWidth: 50,
  rectHeight: 50,
  speedX: -2,
  speedY: 1
}

let box04 = {
  color: 0, //neck cap
  rectX: 300,
  rectY: 182,
  rectWidth: 80,
  rectHeight: 20,
  speedX: 2,
  speedY: 3
}
let box05 = {
  color: 0, //cap
  rectX: 300,
  rectY: 154,
  rectWidth: 80,
  rectHeight: 30,
  speedX: 2,
  speedY: 5
}

let box06 = {
  color: 0, //handle left
  rectX: 255,
  rectY: 140,
  rectWidth: 5,
  rectHeight: 50,
  speedX: 9,
  speedY: 4
}

let box08 = {
  color: 0, //handle left addition
  rectX: 248,
  rectY: 150,
  rectWidth: 5,
  rectHeight: 20,
  speedX: 5,
  speedY: 1
}

let box07 = {
  color: 0, //handle right
  rectX: 345,
  rectY: 140,
  rectWidth: 5,
  rectHeight: 50,
  speedX: 1,
  speedY: 5
}

let box09 = {
  color: 0, //handle right addition
  rectX: 352,
  rectY: 150,
  rectWidth: 5,
  rectHeight: 20,
  speedX: 6,
  speedY: 6
}
let box10 = {
   color: 0, //bottom
  rectX: 300,
  rectY: 550,
  rectWidth: 100,
  rectHeight: 20,
  speedX: 1,
  speedY: 1
}

let circle01 = {
  color: 0, //body left
  ellipseX: 270,
  ellipseY: 250,
  ellipseWidth: 60,
  ellipseHeight: 60,
  speedX: 9,
  speedY: 9
}
let circle02 = {
  color: 0, //body right
  ellipseX: 330,
  ellipseY: 250,
  ellipseWidth: 60,
  ellipseHeight: 60,
  speedX: 7,
  speedY: 7
}
let circle03 = {
  color: 0, //body left low
  ellipseX: 250,
  ellipseY: 550,
  ellipseWidth: 20,
  ellipseHeight: 20,
  speedX: -3,
  speedY: -3
}
let circle04 = {
  color: 0, //body right low
  ellipseX: 350,
  ellipseY: 550,
  ellipseWidth: 20,
  ellipseHeight: 20,
  speedX: -1,
  speedY: -1
}
let arc01 = {
  color: 0, //black
  arcX: 300,
  arcY: 115,
  arcWidth: 95,
  arcHeight: 95,
  speedX: -4,
  speedY: 6

}

let arc02 = {
  color: 255, //black
  arcX: 300,
  arcY: 115,
  arcWidth: 85,
  arcHeight: 85,
  speedX: 4,
  speedY: 4

}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255); //white
  strokeWeight(0);
  rectMode(CENTER);

  drawBox(box01);
  drawBox(box02);
  drawBox(box03);
  drawBox(box04);
  drawBox(box05);
  drawBox(box06);
  drawBox(box07);
  drawBox(box08);
  drawBox(box09);
  drawCircle(circle01);
  drawCircle(circle02);
  drawCircle(circle03);
  drawCircle(circle04);
  drawBox(box10);
  drawArc(arc01);
  drawArc(arc02);

}

function drawBox(incomingBox) {
  fill(incomingBox.color); //black
  push()

    if (incomingBox.rectX > width || incomingBox.rectX < 0) {
      incomingBox.speedX = incomingBox.speedX*-1;
    }
    incomingBox.rectX = incomingBox.rectX + incomingBox.speedX;

    if (incomingBox.rectY > height || incomingBox.rectY < 0) {
      incomingBox.speedY = incomingBox.speedY*-1;
    }
    incomingBox.rectY = incomingBox.rectY + incomingBox.speedY;

  translate(incomingBox.rectX, incomingBox.rectY, 0)

    rect(0, 0, incomingBox.rectWidth, incomingBox.rectHeight)

  pop();


}

function drawCircle(incomingCircle) {
  fill(incomingCircle.color); //black
  push()

    if (incomingCircle.ellipseX > width || incomingCircle.ellipseX < 0) {
     incomingCircle.speedX = incomingCircle.speedX*-1;
    }
    incomingCircle.ellipseX  = incomingCircle.ellipseX  + incomingCircle.speedX;

    if ( incomingCircle.ellipseY > height ||  incomingCircle.ellipseY < 0) {
      incomingCircle.speedY = incomingCircle.speedY*-1;
    }
    incomingCircle.ellipseY  = incomingCircle.ellipseY  + incomingCircle.speedY;


  translate(incomingCircle.ellipseX, incomingCircle.ellipseY, 0)
  ellipse(0, 0, incomingCircle.ellipseWidth, incomingCircle.ellipseHeight);
  pop();


}


function drawArc (incomingArc) {
  fill(incomingArc.color);
    push()

    if (incomingArc.arcX > width || incomingArc.arcX  < 0) {
     incomingArc.speedX = incomingArc.speedX*-1;
    }
    incomingArc.arcX  = incomingArc.arcX + incomingArc.speedX;

    if ( incomingArc.arcY > height ||  incomingArc.arcY < 0) {
      incomingArc.speedY = incomingArc.speedY*-1;
    }
    incomingArc.arcY  = incomingArc.arcY + incomingArc.speedY;

  strokeWeight(0);
  translate(incomingArc.arcX, incomingArc.arcY, 0)
  arc(0, 0, incomingArc.arcWidth, incomingArc.arcHeight, PI,TWO_PI);
  pop();

}
