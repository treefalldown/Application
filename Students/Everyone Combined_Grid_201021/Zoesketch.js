let zbox02 = {
  transX: 126,
  transY: 60,
  boxX: 0,
  boxY: 0,
  boxHeight: 95,
  boxWidth: 70,
  color: 0,
  speedX: 1,
  speedY: -2
}

let zbox05 = {
  transX: 131,
  transY: 120,
  boxX: 0,
  boxY: 0,
  boxHeight: 90,
  boxWidth: 10,
  color: 0,
  speedX: 4,
  speedY: 4,
}

let zbox07 = {
  transX: 170,
  transY: 185,
  boxX: 0,
  boxY: 0,
  boxHeight: 8,
  boxWidth: 8,
  color: 0,
  speedX: .5,
  speedY: 1,
}

let zbox08 = {
  transX: 167,
  transY: 193,
  boxX: 0,
  boxY: 0,
  boxHeight: 14,
  boxWidth: 50,
  color: 0,
  speedX: 3.5,
  speedY: 2,
}

let zbox10 = {
  transX: 120,
  transY: 260,
  boxX: 0,
  boxY: 0,
  boxHeight: 90,
  boxWidth: 60,
  color: 255,
  speedX: -1,
  speedY: 1,
}

let zcircle01 = {
  color: 0,
  circleX: 176,
  circleY: 126,
  speedX: 2,
  speedY: 3,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 90,
  ellipseWidth: 120
}

let zcircle03 = {
  color: 255,
  circleX: 176,
  circleY: 126,
  speedX: 2,
  speedY: 1,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 80,
  ellipseWidth: 110

}

let zcircle04 = {
  color: 0,
  circleX: 176,
  circleY: 126,
  ellipseX: 0,
  ellipseY: 0,
  speedX: 1,
  speedY: 1,
  ellipseHeight: 70,
  ellipseWidth: 100,

}

let zcircle06 = {
  circleX: 176,
  circleY: 126,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 50,
  ellipseWidth: 80,
  color: 255,
  speedX: 2,
  speedY: 3,

}

let zcircle09 = {
  circleX: 174,
  circleY: 278,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 70,
  ellipseWidth: 70,
  color: 0,
  speedX: 3,
  speedY: 3,

}

let zboxes = [zbox02, zbox05, zbox07, zbox08, zbox10];
let zboxPosition = [];

let zcircles = [zcircle01, zcircle03, zcircle04, zcircle06, zcircle09];
let zcirclePosition = [];

class ZoeBoxMoved {
  constructor(incomingBox){
    this.incomingBox = incomingBox;
  }

  moveBox() {
    push();

    if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
      this.incomingBox.speedX = this.incomingBox.speedX*-1;

    }

    this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;

    if(this.incomingBox.transY > height || this.incomingBox.transY < 0) {
      this.incomingBox.speedY = this.incomingBox.speedY*-1;

    }

    this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;

    translate(this.incomingBox.transX, this.incomingBox.transY);
    rect(this.incomingBox.boxX, this.incomingBox.boxY, this.incomingBox.boxHeight, this.incomingBox.boxWidth);
    pop();

  }

  tracingLines() {
    stroke(0);
    line(this.incomingBox.transX, 0, this.incomingBox.transX, height)
    line(0, this.incomingBox.transY, height, this.incomingBox.transY)
  }
}
class ZoeCircleMoved {

  constructor(incomingCircle){
    this.incomingCircle = incomingCircle;
  }


  moveCircle() {

    push()

    if (this.incomingCircle.circleX > width || this.incomingCircle.circleX < 0) {
      this.incomingCircle.speedX = this.incomingCircle.speedX*-1;
    }
    this.incomingCircle.circleX = this.incomingCircle.circleX + this.incomingCircle.speedX;

    if (this.incomingCircle.circleY > height || this.incomingCircle.circleY < 0) {
      this.incomingCircle.speedY = this.incomingCircle.speedY*-1;
    }
    this.incomingCircle.circleY = this.incomingCircle.circleY + this.incomingCircle.speedY;

    translate(this.incomingCircle.circleX, this.incomingCircle.circleY)
    ellipse(this.incomingCircle.ellipseX, this.incomingCircle.ellipseY, this.incomingCircle.ellipseHeight, this.incomingCircle.ellipseWidth);
    pop();
  }

  tracingCircles() {
    stroke(0)
    line(this.incomingCircle.transX, 0, this.incomingCircle.transX, height)
    line(0, this.incomingCircle.transY, height, this.incomingCircle.transY)

  }
}
