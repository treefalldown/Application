//big circle L
let circle01a = {
  color: 255,
  circleX: 260,
  circleY: 170,
  circleR: 60,
  xspeed:-3,
  yspeed:-2
}

//big circle R
let circle02a = {
  color: 255,
  circleX: 340,
  circleY: 170,
  circleR: 60,
  xspeed:-3,
  yspeed:-2
}

//top sq
let rect01a = {
  color: 255,
  rectX: 270,
  rectY: 35,
  rectWidth: 55,
  rectHeight: 150,
  rectR: 8,
  xspeed:1,
  yspeed:1
}

//bottom rect
let rect02a = {
  color: 255,
  rectX: 230,
  rectY: 170,
  rectWidth: 140,
  rectHeight: 350,
  rectR: 8,
  xspeed:-1,
  yspeed:-1
}

//top fill in
let rect03a = {
  color: 255,
  rectX: 256,
  rectY: 115,
  rectWidth: 85,
  rectHeight: 40,
  rectR: 8,
  xspeed:11,
  yspeed:5
}

//fill circle Background R
let circle03a = {
  color: 'rgb(188,143,143)',
  circleX: 340,
  circleY: 125,
  circleR: 30,
  xspeed:-8,
  yspeed:2
}

//fill circle Background L
let circle04a = {
  color: 'rgb(188,143,143)',
  circleX: 255,
  circleY: 125,
  circleR: 30,
  xspeed:4,
  yspeed:4
}

//top rect fill in R
let rect04a = {
  color: 'rgb(188,143,143)',
  rectX: 325,
  rectY: 30,
  rectWidth: 30,
  rectHeight: 100,
  rectR: 8,
  xspeed:6,
  yspeed:-3
}

//top rect fill in L
let rect05a = {
  color: 'rgb(188,143,143)',
  rectX: 240,
  rectY: 30,
  rectWidth: 30,
  rectHeight: 100,
  rectR: 8,
  xspeed:3,
  yspeed:7
}

//top rect fill labe
let rect06a = {
  color: 'rgb(176,196,222)',
  rectX: 240,
  rectY: 220,
  rectWidth: 120,
  rectHeight: 140,
  rectR: 8,
  xspeed:5,
  yspeed:2
}

//bottom rect fill labe
let rect07a = {
  color: 'rgb(176,196,222)',
  rectX: 240,
  rectY: 371,
  rectWidth: 120,
  rectHeight: 40,
  rectR: 8,
  xspeed:2,
  yspeed:3
}

let circleslist = [circle01a,circle02a,circle03a,circle04a];
let circleArray = [];
let shapes = [rect01a,rect02a,rect03a,rect04a,rect05a,rect06a,rect07a];
let shapeArray = [];


class Circle{
  constructor(inputGeo) {
    this.inputGeo = inputGeo;
  }
  drawCircle(){
    // if(this.inputGeo.rectX== true){
    //  translate(this.inputGeo.rectX, this.inputGeo.rectY, 50);
    noStroke();
    fill(this.inputGeo.color);
    ellipse(this.inputGeo.circleX, this.inputGeo.circleY, this.inputGeo.circleR);

  }
  moveCircle(){

    if (this.inputGeo.circleX > width || this.inputGeo.circleX < 0) {
      this.inputGeo.xspeed = this.inputGeo.xspeed*-1;
    }
    this.inputGeo.circleX = this.inputGeo.circleX + this.inputGeo.xspeed;
    if (this.inputGeo.circleY > width || this.inputGeo.circleY < 0) {
      this.inputGeo.yspeed = this.inputGeo.yspeed*-1;
    }
    this.inputGeo.circleY = this.inputGeo.circleY + this.inputGeo.yspeed;
  }
  trackingLines() {
    stroke(255);
    strokeWeight(1.5);
    line(this.inputGeo.circleX, 0, this.inputGeo.circleX, height)
    line(0, this.inputGeo.circleY, height, this.inputGeo.circleY)
  }
}
class Movedshapes {
  constructor(inputGeo) {
    this.inputGeo = inputGeo;
  }

  drawBox(){
    noStroke();
    fill(this.inputGeo.color);
    rect(this.inputGeo.rectX, this.inputGeo.rectY, this.inputGeo.rectWidth, this.inputGeo.rectHeight);
  }



  moveRect() {
    if (this.inputGeo.rectX > width || this.inputGeo.rectX < 0) {
      this.inputGeo.xspeed = this.inputGeo.xspeed*-1;
    }
    this.inputGeo.rectX = this.inputGeo.rectX + this.inputGeo.xspeed;
    if (this.inputGeo.rectX > width || this.inputGeo.rectX < 0) {
      this.inputGeo.yspeed = this.inputGeo.yspeed*-1;
    }
    this.inputGeo.rectY = this.inputGeo.rectY + this.inputGeo.yspeed;
  }

  trackingLines() {
    stroke(255);
    strokeWeight(1.5);
    line(this.inputGeo.rectX+this.inputGeo.rectWidth/2, 0, this.inputGeo.rectX+this.inputGeo.rectWidth/2, height)
    line(0, this.inputGeo.rectY+this.inputGeo.rectHeight/2, height, this.inputGeo.rectY+this.inputGeo.rectHeight/2)

  }
}
