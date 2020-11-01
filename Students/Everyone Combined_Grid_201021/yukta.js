let circle01Y = {

  x: 0,
  y: 0,
  h: 150,
  w: 90,
  color: 204,
  transX: 0,
  transY: 0,
  xspeed: 1.5,
  yspeed: 1.5,

}

let circle02Y = {

  x: 0,
  y: 0,
  h: 140,
  w: 140,
  color: 255,
  transX: 600,
  transY: 600,
  xspeed: -1.5,
  yspeed: -1.5,

}

let circle03Y = {

  x: 0,
  y: 0,
  h: 70,
  w: 70,
  color: 204,
  transX: 100,
  transY: 100,
  xspeed: 2,
  yspeed: 2,

}

let circle04Y = {

  x: 0,
  y: 0,
  h: 70,
  w: 70,
  color: 204,
  transX: 370,
  transY: 225,
  xspeed: -2,
  yspeed: -2,

}

let circle05Y = {

  x: 0,
  y: 0,
  h: 200,
  w: 200,
  color: 'red',
  transX: 300,
  transY: 300,
  xspeed: 3,
  yspeed: 3,

}

let circle06Y = {

  x: 0,
  y: 0,
  h: 180,
  w: 180,
  color: 204,
  transX: 300,
  transY: 300,
  xspeed: -3,
  yspeed: -3,

}

let circle07Y = {

  x: 0,
  y: 0,
  h: 10,
  w: 10,
  color: 255,
  transX: 300,
  transY: 300,
  xspeed: 1.5,
  yspeed: 1.5,

}

let circle08Y = {

  x: 0,
  y: 0,
  h: 7,
  w: 7,
  color: 0,
  transX: 250,
  transY: 300,
  xspeed: 4,
  yspeed: 4,

}

let circle09Y = {

  x: 0,
  y: 0,
  h: 7,
  w: 7,
  color: 0,
  transX: 370,
  transY: 300,
  xspeed: -4,
  yspeed: -4,

}

let circle10Y = {

  x: 0,
  y: 0,
  h: 7,
  w: 7,
  color: 0,
  transX: 300,
  transY: 400,
  xspeed: 5,
  yspeed: 5,

}

let circle11Y = {

  x: 0,
  y: 0,
  h: 7,
  w: 7,
  color: 0,
  transX: 400,
  transY: 300,
  xspeed: -5,
  yspeed: -5,

}

let circle12Y = {

  x: 50,
  y: 50,
  h: 67,
  w: 3.5,
  color: 255,
  transX: 150,
  transY: 200,
  xspeed: 1,
  yspeed: 10,

}

let circle13Y = {

  x: 50,
  y: 50,
  h: 67,
  w: 3.5,
  color: 255,
  transX: 250,
  transY: 300,
  xspeed: 1,
  yspeed: 10,

}

let circle14Y = {

  x: 100,
  y: 100,
  h: 7,
  w: 170,
  color: 0,
  transX: 350,
  transY: 400,
  xspeed: 1,
  yspeed: 10,

}

let circle15Y = {

  x: 100,
  y: 100,
  h: 7,
  w: 170,
  color: 0,
  transX: 450,
  transY: 500,
  xspeed: 1,
  yspeed: 10,

}

let circlesY = [circle01Y, circle02Y, circle03Y, circle04Y, circle05Y, circle06Y, circle07Y, circle08Y, circle09Y, circle10Y, circle11Y]
let circlePositionY = [];

let circles01Y = [circle12Y, circle13Y, circle14Y, circle15Y]
let circlePosition01Y = [];


class CircleY {
  constructor(incomingCircle){
    this.incomingCircle = incomingCircle;
  }

  drawCircle() {

    push();
    stroke(255);
    strokeWeight(2);
    fill(this.incomingCircle.color);
    translate(this.incomingCircle.transX, this.incomingCircle.transY);
    ellipse(this.incomingCircle.x, this.incomingCircle.y, this.incomingCircle.h, this.incomingCircle.w);
    pop();

  }

  tracingLines(){

    push();
    stroke('blue');
    translate(this.incomingCircle.transX, this.incomingCircle.transY);
    line(this.incomingCircle.x, -height, this.incomingCircle.x, height);
    line(-width, this.incomingCircle.y, width, this.incomingCircle.y);
    pop();

  }

  moveX() {
    if (this.incomingCircle.transX > width || this.incomingCircle.transX < 0){
      this.incomingCircle.xspeed = this.incomingCircle.xspeed *-1;
    }
    this.incomingCircle.transX = this.incomingCircle.transX + this.incomingCircle.xspeed;
  }

  moveY(){

    if (this.incomingCircle.transY > height || this.incomingCircle.transY < 0){
      this.incomingCircle.yspeed = this.incomingCircle.yspeed *-1;
    }

    this.incomingCircle.transY = this.incomingCircle.transY + this.incomingCircle.yspeed;
  }

}


class Circle01Y {
constructor(incomingCircle){
this.incomingCircle = incomingCircle;
  }

 drawCircle01() {

   push();
   stroke(255);
   strokeWeight(2);
   fill(this.incomingCircle.color);
   translate(this.incomingCircle.transX, this.incomingCircle.transY);
   ellipse(this.incomingCircle.x, this.incomingCircle.y, this.incomingCircle.h, this.incomingCircle.w);
   pop();

    }

  tracingLines01(){

    push();
    stroke('blue');
    translate(this.incomingCircle.transX, this.incomingCircle.transY);
    line(this.incomingCircle.x, -height, this.incomingCircle.x, height);
    line(-width, this.incomingCircle.y, width, this.incomingCircle.y);
    pop();

  }

  moveX() {
        if (this.incomingCircle.transX > width || this.incomingCircle.transX < 0){
        this.incomingCircle.xspeed = this.incomingCircle.xspeed *-1;
        }
        this.incomingCircle.transX = this.incomingCircle.transX + this.incomingCircle.xspeed;
        }

 moveY(){

        if (this.incomingCircle.transY > height || this.incomingCircle.transY < 0){
        this.incomingCircle.yspeed = this.incomingCircle.yspeed *-1;
      }

        this.incomingCircle.transY = this.incomingCircle.transY + this.incomingCircle.yspeed;
      }

}
