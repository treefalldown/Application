// WHITE RECTANGLE BACKGROUND
let crect01 = {
  strokeweight: 0,
  color: 255,
  rectX: 190.214,
  rectY: 193.074,
  rectWidth: 409.786 - 190.214,
  rectHeight: 305.635 - 193.074,
  rectTl: 0,
  rectTr: 0,
  rectBl: 0,
  rectBr: 0,
  speedX: -1,
  speedY: 1,
}

//BLACK TRIANGLES
// TOP RIGHT CORNER BLACK TRIANGLE
let ctriangle01 = {
  color: 0,
  strokeweight: 0,
  triX1: 409.786,
  triY1: 193.074,
  triX2: 363.640,
  triY2: 193.074,
  triX3: 409.786,
  triY3: 204.635,
  speedX: -3,
  speedY: 1,
}

// BOTTOM RIGHT CORNER BLACK TRIANGLE
let ctriangle02 = {
  color: 0,
  strokeweight: 0,
  triX1: 409.786,
  triY1: 294.355,
  triX2: 363.640,
  triY2: 305.635,
  triX3: 409.786,
  triY3: 305.635,
  speedX: -4,
  speedY: 1,
}

// TOP LEFT CORNER BLACK TRIANGLE
let ctriangle03 = {
  color: 0,
  strokeweight: 0,
  triX1: 236.360,
  triY1: 193.074,
  triX2: 190.214,
  triY2: 204.355,
  triX3: 190.214,
  triY3: 193.074,
  speedX: -2,
  speedY: 1,
}

// BOTTOM LEFT CORNER BLACK TRIANGLE
let ctriangle04 = {
  color: 0,
  strokeweight: 0,
  triX1: 190.214,
  triY1: 294.355,
  triX2: 236.360,
  triY2: 305.635,
  triX3: 190.214,
  triY3: 305.635,
  speedX: -1,
  speedY: 1,
}

// BLACK VERTICAL LINE CONNECTING TRIANGLE TIPS
// LINE 1
let cline01 = {
  color: 0,
  strokeweight: 1.5,
  lineX1:236.360,
  lineY1:193.074,
  lineX2:236.360,
  lineY2:305.635,
  speedX: -1,
  speedY: 1,
}

// LINE 2
let cline02 = {
  color: 0,
  strokeweight: 1.5,
  lineX1:363.640,
  lineY1:193.074,
  lineX2:363.640,
  lineY2:305.635,
  speedX: -1,
  speedY: 1,
}

// ARCS WITH BLACK FILL
// ARC 1
let carc01 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 1.5,
  arcX: 300,
  arcY: 129.434,
  arcW: 180,
  arcH: 180,
  arcStart: 3.14159/4,
  arcEnd: 3.14159 - 3.14159/4,
  speedX: -1,
  speedY: 1,
}

// ARC 2
let carc02 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 1.5,
  arcX: 300,
  arcY: 369.275,
  arcW: 180,
  arcH: 180,
  arcStart: 3.14159+3.14159/4,
  arcEnd: -3.14159/4,
  speedX: -30,
  speedY: 1,
}

// BASE
let ctriangle05 = {
  color: 255,
  strokeweight: 0,
  triX1: 269.381,
  triY1: 569.566,
  triX2: 300,
  triY2: 30.434,
  triX3: 330.619,
  triY3: 569.566,
  speedX: -30,
  speedY: 1,
}

// REDRAW ARCS WITH NO FILL
// ARC 1
let carc03 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 1.5,
  arcX: 300,
  arcY: 129.434,
  arcW: 180,
  arcH: 180,
  arcStart: 3.14159/4,
  arcEnd: 3.14159 - 3.14159/4,
  speedX: -3,
  speedY: 1,
}

// ARC 2
let carc04 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 1.5,
  arcX: 300,
  arcY: 369.275,
  arcW: 180,
  arcH: 180,
  arcStart: 3.14159+3.14159/4,
  arcEnd: -3.14159/4,
  speedX: -1,
  speedY: 1,
}

// BOTTOM RECTANGLE W RADIUSED CORNERS
let crect02 = {
  stroke: 0,
  strokeweight: 3,
  color: 255,
  rectX: 264.8815,
  rectY: 551.566,
  rectWidth: 70.237,
  rectHeight: 36,
  rectTl: 10,
  rectTr: 10,
  rectBl: 10,
  rectBr: 10,
  speedX: -5,
  speedY: 1,
}

// THINNER RECTANGLE W RADIUSED CORNERS
let crect03 = {
  stroke: 0,
  strokeweight: 3,
  color: 255,
  rectX: 266.831,
  rectY: 480.318,
  rectWidth: 66.339,
  rectHeight: 15,
  rectTl: 10,
  rectTr: 10,
  rectBl: 10,
  rectBr: 10,
  speedX: -10,
  speedY: 1,
}

// WHITE BALL AT TOP
let ccirc01 = {
  strokecol: 0,
  strokeweight: 3,
  color: 255,
  circX: 300,
  circY: 120.434,
  circD: 180,
  speedX: -5,
  speedY: 14,
}

// BLACK LINE THROUGH WHITE BALL
let cline03 = {
  color: 0,
  strokeweight: 1.5,
  lineX1:210,
  lineY1:120.434,
  lineX2:390,
  lineY2:120.434,
  speedX: -80,
  speedY: 1,
}

let crectangles = [crect01, crect02, crect03];
let crectanglePosition = [];

let ccircles = [ccirc01];
let ccirclePosition = [];

let carcs = [carc01, carc02, carc03, carc04];
let carcPosition = [];

let clines = [cline01, cline02, cline03];
let clinePosition = [];

let ctriangles = [ctriangle01, ctriangle02, ctriangle03, ctriangle04, ctriangle05];
let ctrianglePosition = [];


class CamiloRectangleMoved {
  constructor(incomingrectangle){
    this.incomingrectangle = incomingrectangle;
  }

  moveRectangle() {
    push();

    //MOVE X
    if (this.incomingrectangle.rectX > width || this.incomingrectangle.rectX < 0){this.incomingrectangle.speedX = this.incomingrectangle.speedX * -1;}
    this.incomingrectangle.rectX = this.incomingrectangle.rectX + this.incomingrectangle.speedX;

    //MOVE Y
    if (this.incomingrectangle.rectY > height || this.incomingrectangle.rectY < 0){this.incomingrectangle.speedY = this.incomingrectangle.speedY * -1;}
    this.incomingrectangle.rectY = this.incomingrectangle.rectY + this.incomingrectangle.speedY;

    rect(this.incomingrectangle.rectX, this.incomingrectangle.rectY, this.incomingrectangle.rectWidth, this.incomingrectangle.rectHeight, this.incomingrectangle.rectTl, this.incomingrectangle.rectTr, this.incomingrectangle.rectBl, this.incomingrectangle.rectBr);
    pop();
  }

  //TRACE
  TracingRectangles() {
    strokeWeight(1);
    stroke("red");
    line(this.incomingrectangle.rectX, 0, this.incomingrectangle.rectX, height)
    line(0, this.incomingrectangle.rectY, height, this.incomingrectangle.rectY)
  }
}

class CamiloCircleMoved {
  constructor(incomingcircle){
    this.incomingcircle = incomingcircle;
  }

  moveCircle() {
    push()

    //MOVE X
    if (this.incomingcircle.circY > height || this.incomingcircle.circY < 0){this.incomingcircle.speedY = this.incomingcircle.speedY * -1;}
    this.incomingcircle.circY = this.incomingcircle.circY + this.incomingcircle.speedY;

    //MOVE Y
    if (this.incomingcircle.circX > height || this.incomingcircle.circX < 0){this.incomingcircle.speedX = this.incomingcircle.speedX * -1;}
    this.incomingcircle.circX = this.incomingcircle.circX + this.incomingcircle.speedX;

    circle(this.incomingcircle.circX, this.incomingcircle.circY, this.incomingcircle.circD)
    pop();
  }

  //TRACE
  TracingCircles() {
    strokeWeight(1);
    stroke("blue");
    line(this.incomingcircle.circX, 0, this.incomingcircle.circX, height)
    line(0, this.incomingcircle.circY, height, this.incomingcircle.circY)
  }
}

class CamiloArcMoved {
  constructor(incomingarc){
    this.incomingarc = incomingarc;
  }

  moveArc() {
    push()

    //MOVE X
    if (this.incomingarc.arcY > height || this.incomingarc.arcY < 0){this.incomingarc.speedY = this.incomingarc.speedY * -1;}
    this.incomingarc.arcY = this.incomingarc.arcY + this.incomingarc.speedY;

    //MOVE Y
    if (this.incomingarc.arcX > height || this.incomingarc.arcX < 0){this.incomingarc.speedX = this.incomingarc.speedX * -1;}
    this.incomingarc.arcX = this.incomingarc.arcX + this.incomingarc.arcX;

    arc(this.incomingarc.arcX, this.incomingarc.arcY, this.incomingarc.arcW, this.incomingarc.arcH, this.incomingarc.arcStart, this.incomingarc.arcEnd)
    pop();
  }

  //TRACE
  TracingArcs() {
    strokeWeight(1);
    stroke("yellow");
    line(this.incomingarc.arcX, 0, this.incomingarc.arcX, height);
    line(0, this.incomingarc.arcY, width, this.incomingarc.arcY);
  }
}

class CamiloLineMoved {
  constructor(incomingline){
    this.incomingline = incomingline;
  }

  moveLine() {
    push()

    //MOVE X
    if (this.incomingline.lineX1 > width || this.incomingline.lineX1 < 0){this.incomingline.speedX = this.incomingline.speedX * -1;}
    this.incomingline.lineX1 = this.incomingline.lineX1 + this.incomingline.speedX;

    line(this.incomingline.lineX1, this.incomingline.lineY1, this.incomingline.lineX2, this.incomingline.lineY2);
    pop();
  }

  //TRACE
  TracingLines() {
    strokeWeight(1);
    stroke("green");
    line(this.incomingline.lineX1, 0, this.incomingline.lineX1, height);
    line(0, this.incomingline.lineY1, width, this.incomingline.lineY1);
  }
}

class CamiloTriangleMoved {
  constructor(incomingtriangle){
    this.incomingtriangle = incomingtriangle;
  }

  moveTriangle() {
    push()

    // MOVE X
    if (this.incomingtriangle.triX1 > width || this.incomingtriangle.triX1 < 0){this.incomingtriangle.speedX = this.incomingtriangle.speedX * -1;}
    this.incomingtriangle.triX1 = this.incomingtriangle.triX1 + this.incomingtriangle.speedX;

    triangle(this.incomingtriangle.triX1, this.incomingtriangle.triY1, this.incomingtriangle.triX2, this.incomingtriangle.triY2, this.incomingtriangle.triX3, this.incomingtriangle.triY3);
    pop();
  }

  //TRACE
  TracingTriangles() {
    strokeWeight(1);
    stroke("purple");
    line(this.incomingtriangle.triX1, 0, this.incomingtriangle.triX1, height);
    line(0, this.incomingtriangle.triY1, width, this.incomingtriangle.triY1);
  }
}
