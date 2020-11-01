
let ksybox01 = {
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

let ksybox02 = {
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

let ksybox03 = {
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

let ksybox04 = {
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

let ksybox05 = {
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
let ksybox06 = {
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

let ksybox07 = {
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

let ksybox08 = {
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

let ksybox09 = {
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

let ksybox10 = {
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

let ksybox11 = {
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


let ksybox12 = {
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

let ksybox13 = {
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

let ksybox14 = {
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

let ksybox15 = {
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

let ksybox16 = {
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

let ksyboxes = [ksybox01, ksybox02, ksybox03, ksybox04, ksybox05];
let ksyboxPosition = [];

let ksyboxes00 = [ksybox06, ksybox07, ksybox08, ksybox09, ksybox10, ksybox11];
let ksyboxPosition00 = [];

let ksyboxes01 = [ksybox12, ksybox13, ksybox14, ksybox15, ksybox16];
let ksyboxPosition01 = [];

class KsyMovedBox00 {
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

class KsyMovedBox01 {
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

class KsyMovedBox {
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
