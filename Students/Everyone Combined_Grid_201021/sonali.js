
let box06_Sonali = {
  color: '255',
  rectX: 0,
  rectY: 0,
  rectWidth: 100,
  rectHeight: 180,
  transX: 100,
  transY: 180,
  speedX: 2,
  speedY: 2,

}

let box07_Sonali = {
  rectX: 0,
  rectY: 0,
  color: '255',
  rectWidth: 44,
  rectHeight: 20,
  transX: 44,
  transY: 20,
  speedX: -2,
  speedY: -2,

}

let box08_Sonali = {
  rectX: 0,
  rectY: 0,
  color: '255',
  rectWidth: 32,
  rectHeight: 10,
  transX: 32,
  transY: 10,
  speedX: 1.5,
  speedY: 1.5,

}

let box09_Sonali = {
  rectX: 0,
  rectY: 0,
  color: '255',
  rectWidth: 10,
  rectHeight: 30,
  transX: 10,
  transY: 30,
  speedX: -1.5,
  speedY: -1.5,

}

let box10_Sonali = {
  rectX: 0,
  rectY: 0,
  color: '255',
  rectWidth: 20,
  rectHeight: 10,
  transX: 20,
  transY: 10,
  speedX: 2.5,
  speedY: 2.5,

}

let box11_Sonali = {
  rectX: 0,
  rectY: 0,
  color: '255',
  rectWidth: 49,
  rectHeight: 6,
  transX: 49,
  transY: 6,
  speedX: -2.5,
  speedY: -2.5,

}

let box12_Sonali = {
  color: '192',
  rectX: 0,
  rectY: 0,
  rectWidth: 18,
  rectHeight: 25,
  transX: 18,
  transY: 25,
  speedX: .75,
  speedY: .75,

}

let box13_Sonali = {
  rectX: 0,
  rectY: 0,
  color: 'grey',
  rectWidth: 12,
  rectHeight: 16,
  transX: 12,
  transY: 16,
  speedX: -.75,
  speedY: -.75,

}

let box14_Sonali = {
  rectX: 0,
  rectY: 0,
  color: 'grey',
  rectWidth: 10,
  rectHeight: 52,
  transX: 10,
  transY: 52,
  speedX: .5,
  speedY: .5,

}

let box15_Sonali = {
  rectX: 0,
  rectY: 0,
  color: 'grey',
  rectWidth: 100,
  rectHeight: 130,
  transX: 100,
  transY: 130,
  speedX: -.5,
  speedY: -.5,

}

let box16_Sonali = {
  rectX: 0,
  rectY: 0,
  color: 'grey',
  rectWidth: 10,
  rectHeight: 120,
  transX: 10,
  transY: 120,
  speedX: 3,
  speedY: 3,

}

let boxes00_Sonali = [box06_Sonali, box07_Sonali, box08_Sonali, box09_Sonali, box10_Sonali, box11_Sonali];
let boxPosition00_Sonali = [];

let boxes01_Sonali = [box12_Sonali, box13_Sonali, box14_Sonali, box15_Sonali, box16_Sonali];
let boxPosition01_Sonali = [];



class MovedBox00 {
  constructor (incomingBox) {
    this.incomingBox = incomingBox;
  }

  moveBox00() {
    push();
    if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
      this.incomingBox.speedX = this.incomingBox.speedX*-1;
    }
    this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;
    if (this.incomingBox.transY > width || this.incomingBox.transY < 0) {
      this.incomingBox.speedY = this.incomingBox.speedY*-1;
    }
    this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;
    translate(this.incomingBox.transX, this.incomingBox.transY);

    stroke(0);
    strokeWeight(2)
    fill(this.incomingBox.color);
    rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
    pop();
  }

  trackingLines00() {
    stroke(255);
    strokeWeight(1.5)
    line(this.incomingBox.transX, 0,this.incomingBox.transX, height)
    line(0, this.incomingBox.transY, height, this.incomingBox.transY)
  }
}

class MovedBox01 {
  constructor (incomingBox) {
    this.incomingBox = incomingBox;
  }

  moveBox01() {
    push();
    if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
      this.incomingBox.speedX = this.incomingBox.speedX*-1;
    }
    this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;
    if (this.incomingBox.transY > width || this.incomingBox.transY < 0) {
      this.incomingBox.speedY = this.incomingBox.speedY*-1;
    }
    this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;
    translate(this.incomingBox.transX, this.incomingBox.transY);

    stroke(255);
    strokeWeight(1)
    fill(this.incomingBox.color);
    rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
    pop();
  }

  trackingLines01() {
    stroke('red');
    strokeWeight(1)
    line(this.incomingBox.transX, 0,this.incomingBox.transX, height)
    line(0, this.incomingBox.transY, height, this.incomingBox.transY)
  }
}
