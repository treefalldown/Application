let scaleFactor = 0.25;

function draw() {
  background(200);
  rectMode(CENTER);

  // Camilo
  push();
  noStroke();
  translate(0, 0);
  scale(scaleFactor);
  for (i=0; i < crectangles.length; i++) {
    crectanglePosition[i].moveRectangle();
    crectanglePosition[i].TracingRectangles();
  }

  for (i=0; i < ctriangles.length; i++) {
    ctrianglePosition[i].moveTriangle();
    ctrianglePosition[i].TracingTriangles();
  }

  for (i=0; i < ccircles.length; i++) {
    ccirclePosition[i].moveCircle();
    ccirclePosition[i].TracingCircles();
  }

  for (i=0; i < clines.length; i++) {
    clinePosition[i].moveLine();
    clinePosition[i].TracingLines();
  }

  for (i=0; i < carcs.length; i++) {
    carcPosition[i].moveArc();
    carcPosition[i].TracingArcs();
  }
  pop();
  //end of Camilo



  // Jamie Guitar START
  push();
  translate(200, 0);
  scale(scaleFactor);

  for (let i = 0; i < circles.length; i++) {
    circleaArray[i].drawCircle();
    circleaArray[i].traceCircle();
  }

  for (let i = 0; i < rects.length; i++) {
    rectArray[i].drawRect();
  }
  for (let i = 0; i < quads.length; i++) {
    quadArray[i].drawQuad();
  }
  pop();
  // Jamie Guitar END




  //  Miguel START
  push();
  translate(400, 0);
  scale(scaleFactor);
  for (i = 0; i < halfCircles.length; i++){
    push();
    halfCirclePosition[i].drawHalfCircle();
    halfCirclePosition[i].traceObjectGreen();
    halfCirclePosition[i].moveX();
    halfCirclePosition[i].moveY();
    pop();
  }

  for (i = 0; i < seeds.length; i++){
    push();
    seedsPosition[i].drawSeed();
    seedsPosition[i].traceObjectPink();
    seedsPosition[i].moveX();
    seedsPosition[i].moveY();
    pop();
  }
  pop();
  //  Miguel END



  //  Josh START
  push();
  translate(600, 0);
  scale(scaleFactor);
  for (let i = 0; i < shapes.length; i++) {
    shapeArray[i].drawBox();
    shapeArray[i].moveRect();
    shapeArray[i].trackingLines();
  }

  for (let i = 0; i < circleslist.length; i++) {
    circleArray[i].drawCircle();
    circleArray[i].moveCircle();
    circleArray[i].trackingLines();
  }
  pop();
  //  Josh END




  //Anna START
  push();
  translate(0, 200);
  scale(scaleFactor);    for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i].moveBox();
    flaskArray[i].trackingLines();
    flaskArray[i].drawCircle();
    flaskArray[i].drawArc();
  }
  pop();
  //Anna END




  // XuWen START
  push();
  translate(200, 200);
  scale(scaleFactor);
  for (let i=0; i < xwtriangles.length; i++) {
    xwtriangleArray[i].drawTriangle();
  }

  for (let i= 0; i< xwcircles.length; i++){
    xwcircleArray[i].drawCircle();
    xwcircleArray[i].tracingObject();
  }
  // having a problem here
  rotate(angle);
  angle = angle + speed
  for (let i= 0; i< xwtriangles.length; i++){
    xwtriangleArray[i].drawTriangle();
  }
  pop();
  // XuWen END





  // Antoine START
  push();
  translate(400, 200);
  scale(scaleFactor);
  fill(0)
  for (let i=0; i < rectangles.length; i++) {
    rectangleArray[i].drawbox();
    rectangleArray[i].tracingBox();
  }
  for (let i=0; i < triangles.length; i++) {
    triangleArray[i].drawtriangle();
  }
  for (let i=0; i < lines.length; i++) {
    lineArray[i].drawline();
  }
  for (let i=0; i < cirs.length; i++) {
    cirArray[i].drawcircle();
    cirArray[i].tracingCircle();
  }
  for (let i=0; i < ellipses.length; i++) {
    ellipseArray[i].drawellipse();
  }
  pop();
  // Antoine END



  // Tom Red Mug START
  push();
  translate(600, 200);
  scale(scaleFactor);
  for (let i = 0; i < shapes01.length; i++) {
    shapeArray01[i].drawBox();
    shapeArray01[i].drawCircle();
    shapeArray01[i].moveShape();
    shapeArray01[i].traceObject();
  }
  pop();
  // Tom Red Mug END



  // Zoe START
  fill(0);
  noStroke();
  push();
  translate(0, 400);
  scale(scaleFactor);
  for (i=0; i < zboxes.length; i++) {
    zboxPosition[i].moveBox();
    zboxPosition[i].tracingLines();
  }
  fill(255);
  for (i=0; i < zcircles.length; i++) {
    zcirclePosition[i].moveCircle();
    zcirclePosition[i].tracingCircles();
  }
  pop();
  // Zoe END



  // Yogesh START
  push();
  translate(200, 400);
  scale(scaleFactor);
  for (let n = 0; n < 3; n++){
    lines[n].draftLine()
    outerBox.draftBox()
    baseLeft.draftLine()
    baseRight.draftLine()
    playLine.draftLine()
    cutOutLine.draftLine()
    baseLeft.moveLineV()
    baseRight.moveLineV()
    playLine.moveLineH()
    cutOutLine.moveLineH()
    bassInnerCircleR.draftCircle()
    bassInnerCircleL.draftCircle()
    bassOuterCircleR.draftCircle()
    bassOuterCircleL.draftCircle()
    speakerOuterCircleR.draftCircle()
    speakerOuterCircleL.draftCircle()
    speakerInnerCircleR.draftCircle()
    speakerInnerCircleL.draftCircle()
  }
  for (let i= 0; i< boxes.length; i++){
    boxArray[i].drawBox();
    boxArray[i].tracingObject();
  }
  pop();
  // Yogesh END




  // Matt Sacha START
  push();
  translate(400, 400);
  scale(scaleFactor);
  for (let i = 0; i < rectsMS.length; i++) {
    rectArrayMS[i].moveRect();
    // rectArray[i].trackingLines();
  }
  for (let i = 0; i < circlesMS.length; i++) {
    circleArrayMS[i].moveCircle();
    // circleArray[i].trackingLines();
  }

  for (let i = 0; i < arcsMS.length; i++) {
    arcArrayMS[i].moveArc();
    // arcArray[i].trackingLines();
    // Matt Sacha END
  }
  pop();


  // Tony START
  // Need to fix Tony's circles in class
  // background(51);
  push();
  translate(600, 400);
  scale(scaleFactor);
  for (let i = 0; i < boxsTP.length; i++){
    boxArrayTP[i].drawRect();
  }
  pop();
  // Tony END



  // Tyler Code
  // background("BLACK");
  push();
  translate(0, 600);
  scale(scaleFactor);
  noStroke();
  for (let i = 0; i < rectsTB.length; i++) {
    rectArrayTB[i].moveRect();
  }
  for (let i = 0; i < circlesTB.length; i++) {
    circleArrayTB[i].moveCircle();
  }
  pop();
  //Tyler Code END


  //Karim START
  push();
  translate(200, 600);
  scale(scaleFactor);
  for (i = 0; i < boxesK.length; i++) {
    boxPositionK[i].moveBox();
    boxPositionK[i].trackingLines();
  }

  for (i = 0; i < loops.length; i++){

    push();
    loopPosition[i].drawLoop();
    loopPosition[i].trackingLines();
    loopPosition[i].moveX();
    loopPosition[i].moveY();
    pop();
  }
  pop();
  // Karim END


  // Yukta START
  push();
  translate(400, 600);
  scale(scaleFactor);
  for (i = 0; i < circlesY.length; i++){
    push();
    circlePositionY[i].drawCircle();
    circlePositionY[i].tracingLines();
    circlePositionY[i].moveX();
    circlePositionY[i].moveY();
    pop();
  }
  for (i = 0; i < circles01Y.length; i++){
    push();
    circlePosition01Y[i].drawCircle01();
    circlePosition01Y[i].tracingLines01();
    circlePosition01Y[i].moveX();
    circlePosition01Y[i].moveY();
    pop();
  }
  pop();
  // Yukta END


  // Sonali START
  push();
  translate(600, 600);
  scale(scaleFactor);
  for (i = 0; i < boxes00_Sonali.length; i++) {
    boxPosition00_Sonali[i].moveBox00();
    boxPosition00_Sonali[i].trackingLines00();
  }

  for (i = 0; i < boxes01_Sonali.length; i++) {
    boxPosition01_Sonali[i].moveBox01();
    boxPosition01_Sonali[i].trackingLines01();
  }
  pop();
  // Sonali END



}
