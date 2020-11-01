let rect01b = {
  color: 'red',
  rectX: 124,
  rectY: 162,
  rectWidth: 160,
  rectHeight: 140,
  speedX: 3,
  speedY: 1,
}

//handle exterior
let circle01b = {
  color: 'rgb(190,25,41)',
  circleX: 302,
  circleY: 225,
  circleWidth: 90,
  circleHeight: 100,
  speedX: 2,
  speedY: 3,
}

//handle interior
let circle02b = {
  color: 'rgb(220, 220, 220)',
  circleX: 306,
  circleY: 225,
  circleWidth: 55,
  circleHeight: 70,
  speedX: 1,
  speedY: 2,
}

//black rim
let rect02b = {
  color: 'black',
  rectX: 120,
  rectY: 162,
  rectWidth: 170,
  rectHeight: 5,
  speedX: 3,
  speedY: 3,
}

//shine and shadow
let circle03b = {
  color: 'white',
  circleX: 136,
  circleY: 180,
  circleWidth: 9,
  circleHeight: 9,
  speedX: 5,
  speedY: 3,
}

//vertical long shine
let rect03b = {
  color: 'white',
  rectX: 132,
  rectY: 200,
  rectWidth: 7,
  rectHeight: 60,
  speedX: 2,
  speedY: 5,
}

let rect04b = {
  color: 'white',
  rectX: 128,
  rectY: 163,
  rectWidth: 30,
  rectHeight: 2,
  speedX: 1,
  speedY: 3,
}

let rect05b = {
  color: 'rgb(190,25,41)',
  rectX: 254,
  rectY: 167,
  rectWidth: 30,
  rectHeight: 135,
  speedX: 3,
  speedY: 4
}

let shapes01 = [rect01b, circle01b, circle02b, rect02b, circle03b, rect03b, rect04b, rect05b];
let shapeArray01 = [];

class MovedShape {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }

  drawBox() {
    fill(this.incomingShape.color);
    rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight);
  }

  drawCircle(){
    fill(this.incomingShape.color);
    ellipse(this.incomingShape.circleX, this.incomingShape.circleY, this.incomingShape.circleWidth, this.incomingShape.circleHeight);
  }


  //moveX & Y

  moveShape() {
    if(this.incomingShape.rectX > width || this.incomingShape.rectX < 0){
      this.incomingShape.speedX = this.incomingShape.speedX*-1;
    }
    this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;

    if(this.incomingShape.rectY > height || this.incomingShape.rectY < 0){
      this.incomingShape.speedY = this.incomingShape.speedY*-1;
    }
    this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;

    if(this.incomingShape.circleX > width || this.incomingShape.circleX < 0){
      this.incomingShape.speedX = this.incomingShape.speedX*-1;
    }
    this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX

    if(this.incomingShape.circleY > height || this.incomingShape.circleY < 0){
      this.incomingShape.speedY = this.incomingShape.speedY*-1;
    }
    this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;
  }

  traceObject(){
    stroke('rgb(40,135,204)')
    line(this.incomingShape.rectX + this.incomingShape.rectWidth/2, 0, this.incomingShape.rectX + this.incomingShape.rectWidth/2, height)
    line(0, this.incomingShape.rectY + this.incomingShape.rectHeight/2, width, this.incomingShape.rectY + this.incomingShape.rectHeight/2)
  }

}
