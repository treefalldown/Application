let boxDim = 40;
let growth = .5;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(190,200,240);
    if (boxDim > 100 || boxDim < 0) {
      growth = growth*-1;
    }
    boxDim = boxDim + growth;
 noStroke();
 fill(0,0,0);
 rect(220,152,160+boxDim,120+boxDim);
 circle(302, 145+boxDim, 12+boxDim);
 rect(294,230,16+boxDim,60+boxDim);
 rect(275,290,54+boxDim,22+boxDim);
 rect(290,312,24+boxDim,52+boxDim);
 triangle(302, 327, 276, 392, 328, 392);
 rect(276,392,52+boxDim,26+boxDim);
 triangle(276, 418, 302, 453, 328, 418);
 triangle(267, 478, 302, 428, 337, 478);
 rect(264,478,76+boxDim,13+boxDim);


 fill(190,200,240);
 triangle(220+boxDim, 150+boxDim, 220+boxDim, 270+boxDim, 230+boxDim, 150+boxDim);
 triangle(380+boxDim, 150+boxDim, 380+boxDim, 270+boxDim, 370+boxDim, 150+boxDim);
 rect(286,149,20+boxDim,2+boxDim);
 circle(275, 312, 30+boxDim);
 circle(329, 312, 30+boxDim);
}
