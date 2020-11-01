//Apple Watch

// Large Band
let box01TP = {
  color:51,
  boxX:50,
  boxY:280,
  boxXBoundary: 100,
  boxYBoundary:300,
  boxWidth: 200,
  boxHeight:40,
  speedX:.25,
  speedY:.25
}

// Short Band
let box02TP = {
  color:51,
  boxX: 300,
  boxY: 280,

  boxXBoundary: 400,
  boxYBoundary:400,

  boxWidth:100,
  boxHeight:40,
  speedX:.5,
  speedY:.5
}

// Watch Face Large
let box03TP = {
  color:51,
  boxX:250.5,
  boxY:274.5,
  boxXBoundary: 500,
  boxYBoundary:400,
  boxWidth: 55,
  boxHeight:50,
  boxRound: 15,
  speedX:1,
  speedY:1

}

// Watch Face Small
let box04TP = {
  color:51,
  boxX:248,
  boxY:272,
  boxWidth: 60,
  boxHeight:55,
  boxRound: 15,
  speedX:1,
  speedY:1

}

// Large Band Circle
let circ01TP = {
  color:51,
  circX:50,
  circY:300,
  circledia:40,
  speedX:1,
  speedY:1
}

// Short Band Circle
let circ02TP = {
  color:51,
  circX:400,
  circY:300,
  circledia:40,
  speedX:1,
  speedY:1

}

// Small Band Side Circle
let circ03TP = {
  color:51,
  circX:355,
  circY:281,
  circledia:9,
  speedX:1,
  speedY:1

}

// Small Band Side Circle 2
let circ04TP = {
  color:51,
  circX:355,
  circY:319,
  circledia:9,
  speedX:1,
  speedY:1

}

// Large Band Small Circle
let circ05TP = {
  color:51,
  circX:80,
  circY:300,
  circledia:8,
  speedX:1,
  speedY:1

}

let circ06TP = {
  color:51,
  circX:92,
  circY:300,
  circledia:8,
  speedX:1,
  speedY:1

}

let circ07TP = {
  color:51,
  circX:104,
  circY:300,
  circledia:8,
  speedX:1,
  speedY:1

}

let circ08TP = {
  color:51,
  circX:116,
  circY:300,
  circledia:8,
  speedX:1,
  speedY:1

}

let circ09TP = {
  color:51,
  circX:128,
  circY:300,
  circledia:8,
  speedX:1,
  speedY:1

}

let circ10TP = {
  color:51,
  circX:140,
  circY:300,
  circledia:8,
  speedX:1,
  speedY:1

}

let circ11TP = {
  color:51,
  circX:152,
  circY:300,
  circledia:8,
  speedX:1,
  speedY:1

}

let boxsTP = [box01TP, box02TP, box03TP, box04TP];
let boxArrayTP = [];

let circsTP = [circ01TP, circ02TP,circ03TP,circ04TP,circ05TP,circ06TP,circ07TP,circ08TP,circ09TP,circ10TP,circ11TP];
let circArrayTP = [];


// function setup() {
//   createCanvas(600, 600);
//
//   for (let i=0;i < boxsTP.length;i++){
//     boxArrayTP[i]= new boxMoved(boxsTP[i]);
//   }
//
// }

// function draw() {
//   background(51);
//   for (let i = 0; i < boxsTP.length; i++){
//     boxArrayTP[i].drawRect();
//   }
//
//   // //rect
//   // rectFromClass01.rectMoved();
//   // rectFromClass01.trackingLines();
//   //
//   // rectFromClass02.rectMoved();
//   // rectFromClass02.trackingLines();
//   //
//   // rectFromClass03.rectMoved();
//   // rectFromClass03.trackingLines();
//   //
//   // rectFromClass04.rectMoved();
//   // rectFromClass04.trackingLines();
//
// }

class boxMoved{
  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }

  drawRect(){
    // console.log(this.incomingShape.speedX)
    push()

    fill(255, 204, 128);

    if (this.incomingShape.boxX > this.incomingShape.boxXBoundary ||this.incomingShape.boxX < 0){
      this.incomingShape.speedX = this.incomingShape.speedX * -1;
    }
    this.incomingShape.boxX = this.incomingShape.boxX + this.incomingShape.speedX;

    if (this.incomingShape.boxY > this.incomingShape.boxYBoundary || this.incomingShape.boxY < 0){
      this.incomingShape.speedY = this.incomingShape.speedY * -1;
    }
    this.incomingShape.boxY = this.incomingShape.boxY + this.incomingShape.speedY;



    translate(this.incomingShape.boxX, this.incomingShape.boxY)
    rect(0, 0,this.incomingShape.boxWidth,this.incomingShape.boxHeight);
    // rect(this.incomingShape.rectX, this.incomingShape.rectY,this.incomingShape.rectWidth,this.incomingShape.rectHeight,this.incomingShape.rectRound)
    pop();
  }


  // function drawRect(incomingRect){
  //   push()
  //
  //   fill(255, 204, 128);
  //
  //   if (this.incomingShape.rectX > this.incomingShape.rectWidth ||this.incomingShape.rectX < 0){
  //     this.incomingShape.speedX = this.incomingShape.speedX * -1;
  //   }
  //   this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;
  //
  //   if (this.incomingShape.rectY > this.incomingShape.rectHeight || this.incomingShape.rectY < 0){
  //     this.incomingShape.speedY = incomingRect.speedY * -1;
  //   }
  //   this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;



  //
  // //Line Rect
  // stroke(255)
  // line(incomingRect.rectX, 0, incomingRect.rectX, height)
  // line(0, incomingRect.rectY, width, incomingRect.rectY)
  //
  // translate(incomingRect.rectX, incomingRect.rectY)
  // circle(0,0,incomingRect.rectWidth)
  //
  // pop()


}

class CircMoved{

  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }
}


// function drawCircle(incomingCircle){
//   circle(incomingCircle.circX, incomingCircle.circY,incomingCircle.circWidth,incomingCircle.circHeight)
//
// }
//
// function drawCircle( incomingCircle){
//   push()
//
//   fill(255, 204, 128);
//
//   if (this.incomingShape.circX > width || this.incomingShape.circX < 0){
//     this.incomingShape.speedX = this.incomingShape.speedX * -1;
//   }
//   this.incomingShape.circX = this.incomingShape.circX + this.incomingShape.speedX;
//
//   if (this.incomingShape.circY > height || this.incomingShape.circY < 0){
//     this.incomingShape.speedY = this.incomingShape.speedY * -1;
//   }
//   this.incomingShape.circY = this.incomingShape.circY + this.incomingShape.speedY;
//   translate(this.incomingShape.circX, this.incomingShape.circY)
//   circle(0,0,this.incomingShape.circWidth)
//
//
//   //Line Rect
//   trackingLines() {
//     stroke(255)
//     line(this.incomingShape.circX, 0, this.incomingShape.circX, height)
//     line(0, this.incomingShape.circY, width, this.incomingShape.circY)
//
//     translate(this.incomingShape.circX, this.incomingShape.circY)
//     circle(0,0,this.incomingShape.circWidth)
//
//
//   }
// }
