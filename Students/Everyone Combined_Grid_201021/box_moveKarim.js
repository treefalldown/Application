
let box01K = {
  color: 'skyblue',
  rectX: 0,
  rectY: 0,
  rectWidth: 200,
  rectHeight: 100,
  transX: 200,
  transY: 100,
  speedX: 2.5,
  speedY: 2.5,

}

let box02K = {
  rectX: 0,
  rectY: 0,
  color: 'lightblue',
  rectWidth: 200,
  rectHeight: 25,
  transX: 200,
  transY: 25,
  speedX: 2,
  speedY: 2,

}

let box03K = {
  rectX: 0,
  rectY: 0,
  color: 'lightblue',
  rectWidth: 200,
  rectHeight: 25,
  transX: 200,
  transY: 25,
  speedX: 1.5,
  speedY: 1.5,

}

let box04K = {
  rectX: 0,
  rectY: 0,
  color: 'lightblue',
  rectWidth: 200,
  rectHeight: 25,
  transX: 200,
  transY: 25,
  speedX: 1,
  speedY: 1,

}

let box05K = {
  rectX: 0,
  rectY: 0,
  color: 'lightblue',
  rectWidth: 200,
  rectHeight: 25,
  transX: 200,
  transY: 25,
  speedX: .5,
  speedY: .5,

}

let loop01 = {

  x: 0,
  y: 100,
  h: 200,
  w: 100,
  color: 255,
  transX: 300,
  transY: 300,
  xspeed: 1,
  yspeed: 5,

}

let loop02 = {

  x: 100,
  y: 100,
  h: 200,
  w: 100,
  color: 255,
  transX: 10,
  transY: 300,
  xspeed: 1,
  yspeed: 5,

}


let boxesK = [box01K, box02K, box03K, box04K, box05K];
let boxPositionK = [];

let loops = [loop01, loop02]
let loopPosition = [];

class MovedBoxK {
  constructor (incomingBox) {
    this.incomingBox = incomingBox;
  }

  moveBox() {
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
    strokeWeight(2)
    fill(this.incomingBox.color);
    rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
    pop();
  }

  trackingLines() {
    stroke(255);
    strokeWeight(1.5)
    line(this.incomingBox.transX, 0,this.incomingBox.transX, height)
    line(0, this.incomingBox.transY, height, this.incomingBox.transY)
  }
}

class Loop {
  constructor(incomingLoop){
    this.incomingLoop = incomingLoop;
  }

  drawLoop() {

    push();
    stroke(255);
    strokeWeight(4);
    noFill();
    translate(this.incomingLoop.transX, this.incomingLoop.transY);
    ellipse(this.incomingLoop.x, this.incomingLoop.y, this.incomingLoop.h, this.incomingLoop.w);
    pop();

  }

  trackingLines(){

    push();
    stroke('yellow');
    translate(this.incomingLoop.transX, this.incomingLoop.transY);
    line(this.incomingLoop.x, -height, this.incomingLoop.x, height);
    line(-width, this.incomingLoop.y, width, this.incomingLoop.y);
    pop();

  }

  moveX() {
    if (this.incomingLoop.transX > width || this.incomingLoop.transX < 0){
      this.incomingLoop.xspeed = this.incomingLoop.xspeed *-1;
    }
    this.incomingLoop.transX = this.incomingLoop.transX + this.incomingLoop.xspeed;
  }

  moveY(){

    if (this.incomingLoop.transY > height || this.incomingLoop.transY < 0){
      this.incomingLoop.yspeed = this.incomingLoop.yspeed *-1;
    }

    this.incomingLoop.transY = this.incomingLoop.transY + this.incomingLoop.yspeed;
  }

}
