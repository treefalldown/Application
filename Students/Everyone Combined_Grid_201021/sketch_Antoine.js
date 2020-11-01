// body
let box01 = {
  rectX: 254,
  rectY: 125,
  rectWidth: 79,
  rectHeight: 285,
  speedX: 3,
  speedY: 2
}
let box02 = {
  rectX: 333,
  rectY: 158,
  rectWidth: 29,
  rectHeight: 91,
  speedX: 8,
  speedY: -5
}
let box03 = {
  rectX: 225,
  rectY: 158,
  rectWidth: 29,
  rectHeight: 91,
  speedX: -5,
  speedY: 3
}
let box04 = {
  rectX: 333,
  rectY: 272,
  rectWidth: 8,
  rectHeight: 61,
  speedX: -1,
  speedY: 8
}
let box05 = {
  rectX: 246,
  rectY: 272,
  rectWidth: 8,
  rectHeight: 61,
  speedX: 5,
  speedY: 4
}
let box06 = {
  rectX: 333,
  rectY: 355,
  rectWidth: 26,
  rectHeight: 31,
  speedX: -4,
  speedY: -3
}
let box07 = {
  rectX: 228,
  rectY: 355,
  rectWidth: 26,
  rectHeight: 31,
  speedX: 4,
  speedY: -8
}
let triangle01 = {
  X1: 125,
  Y1: 58,
  X2: 154,
  Y2: 58,
  X3: 154,
  Y3: 25,
  transX: 100,
  transY: 100,
  angle: 1,
  speed: 0.05

}
let triangle02 = {
  X1: 262,
  Y1: 58,
  X2: 233,
  Y2: 58,
  X3: 233,
  Y3: 25,
  transX: 100,
  transY: 100,
  angle: 1,
  speed: 0.05
}
let triangle03 = {
  X1: 159,
  Y1: 186,
  X2: 133,
  Y2: 210,
  X3: 133,
  Y3: 186,
  transX: 200,
  transY: 200,
  angle: 1,
  speed: 0.05
}
let triangle04 = {
  X1: 28,
  Y1: 186,
  X2: 54,
  Y2: 210,
  X3: 54,
  Y3: 186,
  transX: 200,
  transY: 200,
  angle: 1,
  speed: 0.05
}
let triangle05 = {
  X1: 33,
  Y1: 55,
  X2: 33,
  Y2: 25,
  X3: 59,
  Y3: 55,
  transX: 300,
  transY: 300,
  angle: 1,
  speed: 0.05
}
let triangle06 = {
  X1: 54,
  Y1: 155,
  X2: 54,
  Y2: 125,
  X3: 28,
  Y3: 155,
  transX: 200,
  transY: 200,
  angle: 1,
  speed: 0.07
}
let triangle07 = {
  X1: 133,
  Y1: 49,
  X2: 133,
  Y2: 80,
  X3: 162,
  Y3: 49,
  transX: 200,
  transY: 200,
  angle: 1,
  speed: 0.075
}
let triangle08 = {
  X1: 54,
  Y1: 49,
  X2: 54,
  Y2: 80,
  X3: 25,
  Y3: 49,
  transX: 200,
  transY: 200,
  angle: 1,
  speed: 0.03
}

//arms
let line01 = {
  X1: 352,
  Y1: 237,
  X2: 498,
  Y2: 166
}
let line02 = {
  X1: 232,
  Y1: 237,
  X2: 96,
  Y2: 166
}
let line03 = {
  X1: 252,
  Y1: 357,
  X2: 115,
  Y2: 430
}
let line04 = {
  X1: 341,
  Y1: 357,
  X2: 475,
  Y2: 430
}

//rotors
let cir01 = {
  circleX:475,
  circleY:430,
  speedX: 5,
  speedY: 4

}
let cir02 = {
  circleX:96,
  circleY:166,
  speedX: 7,
  speedY: 5
}
let cir03 = {
  circleX:115,
  circleY:430,
  speedX: 3,
  speedY: -8
}
let cir04 = {
  circleX:498,
  circleY:166,
  speedX: -5,
  speedY: 3
}

//Blades
let ellipse01 = {
  ellipseTransX:475,
  ellipseTransY:430,
  ellipserotate:-208
}

let ellipse02 = {
  ellipseTransX:96,
  ellipseTransY:166,
  ellipserotate:-208
}

let ellipse03 = {
  ellipseTransX:115,
  ellipseTransY:430,
  ellipserotate:-90
}

let ellipse04 = {
  ellipseTransX:498,
  ellipseTransY:166,
  ellipserotate:-90
}


let rectangles = [box01, box02, box03, box04, box05, box06, box07];
let rectangleArray = [];

let triangles = [triangle01, triangle02, triangle03, triangle04, triangle05, triangle06, triangle07, triangle08];
let triangleArray = [];

let lines = [line01, line02, line03, line04];
let lineArray = [];

let cirs = [cir01, cir02, cir03, cir04];
let cirArray = [];

let ellipses = [ellipse01, ellipse02, ellipse03, ellipse04];
let ellipseArray = [];


class Drone {

  constructor (incomingShape) { // AC NOTE: I made a mistake on an earlier version. I will need to fix this.
    this.incomingShape = incomingShape;
  }
  // } // AC NOTE: you've closed off the class here. the rest of the code below is cut off from the class. I have commented out this curly bracket.

  drawbox () {
    // fill('red')
    push();
    strokeWeight(0)
    if (this.incomingShape.rectX > width || this.incomingShape.rectX < 0) {
      // if (this.incomingShape.rectX + this.incomingShape.rectWidth > width || this.incomingShape.rectX < 0) {

      this.incomingShape.speedX = this.incomingShape.speedX*-1;
    }
    this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;

    if (this.incomingShape.rectY > height || this.incomingShape.rectY < 0) {
      // if (this.incomingShape.rectY + this.incomingShape.rectHeight > height || this.incomingShape.rectY < 0) {

      this.incomingShape.speedY = this.incomingShape.speedY*-1;
    }
    this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;

    translate(this.incomingShape.rectX, this.incomingShape.rectY)
    rect(0, 0, this.incomingShape.rectWidth, this.incomingShape.rectHeight);
    pop()
    // console.log(box01.rectY)
  }

  drawtriangle (){
    push()
    strokeWeight(0)
    translate(this.incomingShape.transX, this.incomingShape.transY)
    rotate(this.incomingShape.angle)
    this.incomingShape.angle = this.incomingShape.angle + this.incomingShape.speed
    triangle(this.incomingShape.X1, this.incomingShape.Y1, this.incomingShape.X2, this.incomingShape.Y2, this.incomingShape.X3, this.incomingShape.Y3)
    pop()
  }

  drawline (){
    strokeWeight(25)
    line(this.incomingShape.X1, this.incomingShape.Y1, this.incomingShape.X2, this.incomingShape.Y2)
  }

  drawcircle (){
    push()
    strokeWeight(0)
    if (this.incomingShape.circleX + 22 > width || this.incomingShape.circleX - 22 < 0) {
      this.incomingShape.speedX = this.incomingShape.speedX*-1;
    }
    this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX;

    if (this.incomingShape.circleY + 22 > height || this.incomingShape.circleY - 22 < 0) {
      this.incomingShape.speedY = this.incomingShape.speedY*-1;
    }
    this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;

    translate(this.incomingShape.circleX, this.incomingShape.circleY)
    circle (0, 0, 44);
    pop()
  }

  drawellipse (){
    push()
    strokeWeight(0)
    translate(this.incomingShape.ellipseTransX, this.incomingShape.ellipseTransY)
    rotate (this.incomingShape.ellipserotate)
    this.incomingShape.ellipserotate = this.incomingShape.ellipserotate + 100
    blade()
    pop()
  }

  tracingBox () {
    stroke(1)
    strokeWeight(1)
    line (this.incomingShape.rectX + this.incomingShape.rectWidth / 2, 0, this.incomingShape.rectX + this.incomingShape.rectWidth / 2, height)
    line (0, this.incomingShape.rectY + this.incomingShape.rectHeight / 2, width, this.incomingShape.rectY + this.incomingShape.rectHeight / 2)
  }

  tracingCircle () {
    stroke(1)
    strokeWeight(1)
    line (this.incomingShape.circleX, 0, this.incomingShape.circleX, height)
    line (0, this.incomingShape.circleY, width, this.incomingShape.circleY)
  }

} // AC NOTE: you need to close off this code with a closing curly bracket

function blade () { // AC NOTE: you had function in front of blade - this is improper syntax
  push()
  translate(0,60)
  ellipse(0,0,25,123);
  pop()
  push()
  translate(0,-60)
  ellipse(0,0,25,123);
  pop()
}
