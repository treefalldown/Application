// let angle = 0
// let objectScale = 1
let greenHalfCircle = {
x: 0,
y: 0,
xWidth: 300,
yHeight: 300,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'green',
transX: 300,
transY: 300,
xspeed: 2,
yspeed: -6,
}


let whiteHalfCircle = {
x: 0,
y: 0,
xWidth: 290,
yHeight: 290,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 255,
transX: 300,
transY: 300,
xspeed: 4,
yspeed: -5,
}


let redHalfCircle = {
x: 0,
y: 0,
xWidth: 285,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'red',
transX: 300,
transY: 300,
xspeed: 1,
yspeed: -3,
}


let pinkHalfCircle = {
x: 0,
y: 0,
xWidth: 200,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'pink',
transX: 300,
transY: 300,
xspeed: -.5,
yspeed: -1,
}


let halfCircles = [greenHalfCircle, whiteHalfCircle, redHalfCircle, pinkHalfCircle];
let halfCirclePosition = [];


class Watermelon{
  constructor(saidGeo){
  this.saidGeo = saidGeo;
  }
  drawHalfCircle() {
      push();
      noStroke();
      translate(this.saidGeo.transX, this.saidGeo.transY)
      fill(this.saidGeo.color)
      arc(this.saidGeo.x, this.saidGeo.y, this.saidGeo.xWidth, this.saidGeo.yHeight, this.saidGeo.start, this.saidGeo.HowMuchPi)
      pop();
    }
  traceObjectGreen(){
        stroke('green');
        push();
        translate(this.saidGeo.transX, this.saidGeo.transY)
        rotate(this.saidGeo.angle)
        line(this.saidGeo.x, -2000, this.saidGeo.x, 2*height)
        line(-2000, this.saidGeo.y, 2*width, this.saidGeo.y)
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
