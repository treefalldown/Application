// This engages the different drawing components of the wrench as figures within a field. Each figure rotates at different rates.

// Relevant coordinates, translations, color, and sizes are organized in the JavaScript objects.
let rotateCircle01 = {
  color: 0,
  transX: 0,
  transY: 600,
  speed: 0,
  ellipseX: 400,
  ellipseY: 0,
  diameter: 80
};

let rotateRect01 = {
  color: 0,
  transX: 400,
  transY: 250,
  transAngle: 0,
  speed: 0,
  boxX: 0,
  boxY: 200,
  width: 80,
  height: 300,
  radius: 0
};

let rotateCircle02 = {
  color: 180,
  transX: 440,
  transY: 300,
  speed: 0,
  ellipseX: -40,
  ellipseY: 300,
  diameter: 40
};

let rotateRect02 = {
  color: 180,
  transX: 400,
  transY: 155,
  transAngle: 0,
  speed: 0,
  boxX: 0,
  boxY: 300,
  width: 5,
  height: 270,
  radius:0
};

let rotateCircle03 = {
  color: 0,
  transX: 350,
  transY: 250,
  speed: 0,
  ellipseX: 50,
  ellipseY: 0,
  diameter: 150
};

let rotateRect03 = {
  color: 180,
  transX: 380,
  transY: 220,
  transAngle: 151,
  speed: 0,
  boxX: 0,
  boxY: 0,
  width: 60,
  height: 110,
  radius: 10
};

// All JavaScript Objects are organized into arrays.
let wrenchRotateElements = [rotateCircle01, rotateRect01, rotateCircle02, rotateRect02, rotateCircle03, rotateRect03];

// Empty array to store values.
let wrenchRotate =[];

// Class to draw and rotate objects.
class WrenchRotate {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }

  // Draw all circles
  displayCircle() {
    if (this.incomingShape.boxX === undefined) {
      noStroke();
      fill(this.incomingShape.color);
      push();
      translate(this.incomingShape.transX, this.incomingShape.transY);
      rotate(this.incomingShape.speed);
      ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.diameter, this.incomingShape.diameter);
      this.incomingShape.speed = this.incomingShape.speed + 0.05+(abs((sin(this.incomingShape.speed/2))));
      pop();
    }
  }

  // Tracing element that reveals what is normally hidden in code.
  diagramCircle() {
    if (this.incomingShape.boxX === undefined) {
      // hypotenuse is need to coordinate diameter of circle
      let hypotenuse = dist(0, 0, this.incomingShape.ellipseX, this.incomingShape.ellipseY);
      stroke(255);
      noFill();
      strokeWeight(0);
      point(this.incomingShape.transX, this.incomingShape.transY);
      strokeWeight(0.5);
      fill(255, 255, 255, 20);
      circle(this.incomingShape.transX, this.incomingShape.transY, hypotenuse*2 + this.incomingShape.diameter);
    }
  }

  // Draw all rectangles
  displayRect() {
    if (this.incomingShape.ellipseX === undefined) {
      if (this.incomingShape.transAngle === 0) {
        fill(this.incomingShape.color);
        noStroke();
        push();
        translate(this.incomingShape.transX, this.incomingShape.transY);
        rotate(this.incomingShape.speed);
        rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.width, this.incomingShape.height, this.incomingShape.radius);
        pop();
        this.incomingShape.speed = this.incomingShape.speed + 0.05+(abs((sin(this.incomingShape.speed/2))));
      } else {
        fill(this.incomingShape.color);
        noStroke();
        push();
        translate(this.incomingShape.transX, this.incomingShape.transY);
        rotate(this.incomingShape.transAngle);
        rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.width, this.incomingShape.height, this.incomingShape.radius);
        pop();
      }
    }
  }

  // Tracing element that reveals what is normally hidden in code.
  diagramRect() {
    if (this.incomingShape.ellipseX === undefined) {
      stroke(255);
      strokeWeight(0.25);
      point(this.incomingShape.transX, this.incomingShape.transY);
      strokeWeight(0.5);
      fill(20, 20, 20, 20);
      circle(this.incomingShape.transX, this.incomingShape.transY, this.incomingShape.boxY*2 + this.incomingShape.height);
      circle(this.incomingShape.transX, this.incomingShape.transY, this.incomingShape.boxY*2 - this.incomingShape.height);
    }
  }
}
