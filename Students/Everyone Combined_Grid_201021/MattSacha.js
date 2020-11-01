//headrest

let circle01MS = {

  color: "220",
  circleX: 190,
  circleY: 150,
  circleD: 200,
  speedX: 2,
  speedY: 2

}

//negativecircle1

let circle02MS = {

  color: "black",
  circleX: 190,
  circleY: 150,
  circleD: 155,
  speedX: 2,
  speedY: 2

}

//negativerect1

let rect01MS = {

  color: "black",
  rectX: 90,
  rectY: 150,
  rectW: 200,
  rectH: 150,
  speedX: 2,
  speedY: 2

}

//metalring

let arc01MS = {

  color: "220",
  arcX: 190,
  arcY: 150,
  arcW: 190,
  arcH: 200,
  arcStart: 0,
  speedX: 2,
  speedY: 2

}


//metalringnegative

let arc02MS = {

  color: "black",
  arcX: 190,
  arcY: 150,
  arcW: 175,
  arcH: 185,
  arcStart: 0,
  speedX: 2,
  speedY: 2

}

//negativerect2

let rect02MS = {

  color: "black",
  rectX: 145,
  rectY: 150,
  rectW: 100,
  rectH: 150,
  speedX: 2,
  speedY: 2

}

//ear1

let rect03MS = {

  color: "220",
  rectX: 150,
  rectY: 185,
  rectW: 30,
  rectH: 100,
  speedX: 2,
  speedY: 2

}

//ear2

let rect04MS = {

  color: "220",
  rectX: 200,
  rectY: 185,
  rectW: 30,
  rectH: 100,
  speedX: 2,
  speedY: 2

}

//ear1a

let rect05MS = {

  color: "220",
  rectX: 135,
  rectY: 200,
  rectW: 15,
  rectH: 75,
  speedX: 2,
  speedY: 2

}


//ear2a

let rect06MS = {

  color: "220",
  rectX: 230,
  rectY: 200,
  rectW: 15,
  rectH: 75,
  speedX: 2,
  speedY: 2

}



let rectsMS = [rect01MS, rect02MS, rect03MS, rect04MS, rect05MS, rect06MS];
let rectArrayMS = [];



let circlesMS = [circle01MS, circle02MS];

let circleArrayMS = [];



let arcsMS = [arc01MS, arc02MS];

let arcArrayMS = [];





// function setup() {
//
//   // createCanvas(600, 600);
//
//   for (let i = 0; i < rects.length; i++) {
//     rectArrayMS[i] = new HeadphonesChaos(rects[i]);
//   }
//
//   for (let i = 0; i < circles.length; i++) {
//     circleArrayMS[i] = new HeadphonesChaos(circles[i]);
//   }
//
//   for (let i = 0; i < arcs.length; i++) {
//     arcArrayMS[i] = new HeadphonesChaos(arcs[i]);
//   }
//
// }


//
// function draw() {
//
//   background(0);
//
//
//
//   for (let i = 0; i < rects.length; i++) {
//
//     rectArray[i].moveRect();
//
//     // rectArray[i].trackingLines();
//
//   }
//
//
//
//   for (let i = 0; i < circles.length; i++) {
//
//     circleArray[i].moveCircle();
//
//     // circleArray[i].trackingLines();
//
//   }
//
//
//
//   for (let i = 0; i < arcs.length; i++) {
//
//     arcArray[i].moveArc();
//
//     // arcArray[i].trackingLines();
//
//   }
//
// }



class HeadphonesChaos {

  constructor(incomingShape) {

    this.incomingShape = incomingShape;

  }



  moveCircle() {

    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {

      push()

      fill(this.incomingShape.color);

      if (this.incomingShape.circleX > width || this.incomingShape.circleX < 0) {

        this.incomingShape.speedX = this.incomingShape.speedX * -1;

      }

      this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX;



      if (this.incomingShape.circleY > height || this.incomingShape.circleY < 0) {

        this.incomingShape.speedY = this.incomingShape.speedY * -1;

      }

      this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;



      stroke(255)

      line(this.incomingShape.circleX, 0, this.incomingShape.circleX, height)

      line(0, this.incomingShape.circleY, width, this.incomingShape.circleY)



      translate(this.incomingShape.circleX, this.incomingShape.circleY)

      circle(0, 0, this.incomingShape.circleD)

      pop()

    }

  }



  moveRect() {

    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {

      push()

      if (this.incomingShape.rectX + this.incomingShape.rectW > width || this.incomingShape.rectX < 0) {

        this.incomingShape.speedX = this.incomingShape.speedX * -1;

      }

      this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;



      if (this.incomingShape.rectY > height || this.incomingShape.rectY < 0) {



      // if (this.incomingShape.rectY + this.incomingShape.rectHeight > height || this.incomingShape.rectY < 0) {

        this.incomingShape.speedY = this.incomingShape.speedY * -1;

      }



      this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;


      stroke(255)

      line(this.incomingShape.rectX, 0, this.incomingShape.rectX, height)

      line(0, this.incomingShape.rectY, width, this.incomingShape.rectY)



      translate(this.incomingShape.rectX, this.incomingShape.rectY)

      rect(0, 0, this.incomingShape.rectW, this.incomingShape.rectH);

      pop()

    }

  }



  moveArc() {

    if (this.incomingShape.circleX === undefined && this.incomingShape.rectX === undefined) {

      fill(this.incomingShape.color);



      // fill('red');

      if (this.incomingShape.arcX > width || this.incomingShape.arcX < 0) {

        this.incomingShape.speedX = this.incomingShape.speedX * -1;

      }

      this.incomingShape.arcX = this.incomingShape.arcX + this.incomingShape.speedX;



      if (this.incomingShape.arcY > height || this.incomingShape.arcY < 0) {

        this.incomingShape.speedY = this.incomingShape.speedY * -1;

      }

      this.incomingShape.arcY = this.incomingShape.arcY + this.incomingShape.speedY;



      stroke(255)

      line(this.incomingShape.arcX, 0, this.incomingShape.arcX, height);

      line(0, this.incomingShape.arcY, width, this.incomingShape.arcY);



      push()

      translate(this.incomingShape.arcX, this.incomingShape.arcY);

      arc(0, 0, this.incomingShape.arcW, this.incomingShape.arcH, 0, PI, OPEN);

      pop();

    }

  }



}
