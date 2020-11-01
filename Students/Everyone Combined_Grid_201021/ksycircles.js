let ksycircle01 = {

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

let ksycircle02 = {

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

let ksycircle03 = {

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

let ksycircle04 = {

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

let ksycircle05 = {

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

let ksycircle06 = {

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

let ksycircle07 = {

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

let ksycircle08 = {

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

let ksycircle09 = {

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

let ksycircle10 = {

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

let ksycircle11 = {

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

let ksycircle12 = {

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

let ksycircle13 = {

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

let ksycircle14 = {

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

let ksycircle15 = {

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

  let ksyloop01 = {

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

  let ksyloop02 = {

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

  let ksycircles = [ksycircle01, ksycircle02, ksycircle03, ksycircle04, ksycircle05, ksycircle06, ksycircle07, ksycircle08, ksycircle09, ksycircle10, ksycircle11]
  let ksycirclePosition = [];

  let ksycircles01 = [ksycircle12, ksycircle13, ksycircle14, ksycircle15]
  let ksycirclePosition01 = [];

  let ksyloops = [ksyloop01, ksyloop02]
  let ksyloopPosition = [];


class KsyCircle {
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

class KsyCircle01 {
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

class KsyLoop {
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
