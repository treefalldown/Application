let angle = 0
let objectScale = 1

let seed01 = {
x: 60,
y: 90,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 45,
xspeed: 1,
yspeed: 10,
}


let seed02 = {
x: 60,
y: 90,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 75,
xspeed: 6,
yspeed: -3,
}


let seed03 = {
x: 45,
y: 45,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 90,
xspeed: 2,
yspeed: -3,
}


let seed04 = {
x: 25,
y: 100,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 0,
xspeed: 4,
yspeed: 1,
}


let seed05 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 215,
transY: 375,
angle: 15,
xspeed: 2,
yspeed: 7,
}


let seed05a = {
x: 0,
y: 0,
h: 9,
w: 4,
color: 'white',
transX: 220,
transY: 371,
angle: 15,
xspeed: 3,
yspeed: 8,
}


let seed06 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 350,
angle: 51,
xspeed: 4,
yspeed: -3,
}


let seed06a = {
x: 0,
y: 0,
h: 12,
w: 3,
color: 'white',
transX: 302,
transY: 347,
angle: 51,
xspeed: 6,
yspeed: -3,
}


let seed07 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 350,
transY: 325,
angle: 2,
xspeed: 1,
yspeed: -8,
}


let seed07a = {
x: 0,
y: 0,
h: 12,
w: 3,
color: 'white',
transX: 347,
transY: 323,
angle: 2,
xspeed: 2,
yspeed: 1,
}

let seeds = [seed01, seed02, seed03, seed04, seed05, seed05a, seed06, seed06a, seed07, seed07a];
let seedsPosition = [];

class Seed {
  constructor(saidGeo){
    this.saidGeo = saidGeo;
  }
    drawSeed() {
      push();
      noStroke();
      fill(this.saidGeo.color);
      translate(this.saidGeo.transX, this.saidGeo.transY);
      rotate(this.saidGeo.angle);
      ellipse(this.saidGeo.x, this.saidGeo.y, this.saidGeo.h, this.saidGeo.w);
      pop();
    }
  traceObjectPink(){
    push();
    stroke('pink');
    translate(this.saidGeo.transX, this.saidGeo.transY);
    rotate(this.saidGeo.angle);
    line(this.saidGeo.x, -height*2, this.saidGeo.x, height*2);
    line(-width*2, this.saidGeo.y, width*2, this.saidGeo.y);
    pop();
  }
  moveX() {
        if (this.saidGeo.transX > width || this.saidGeo.transX < 0){
        this.saidGeo.xspeed = this.saidGeo.xspeed *-1;
        }
        this.saidGeo.transX = this.saidGeo.transX + this.saidGeo.xspeed;
        }
 moveY(){
        if (this.saidGeo.transY > height || this.saidGeo.transY < 0){
        this.saidGeo.yspeed = this.saidGeo.yspeed *-1;
        }
        this.saidGeo.transY = this.saidGeo.transY + this.saidGeo.yspeed;
        }
}
