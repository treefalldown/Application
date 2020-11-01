function setup() {
  // background('red')
  createCanvas(800, 800);
  angleMode(DEGREES);

  //Camilo
  for (i=0; i < crectangles.length; i++) {
    crectanglePosition[i] = new CamiloRectangleMoved(crectangles[i]);
  }

  for (i=0; i < ccircles.length; i++) {
    ccirclePosition[i] = new CamiloCircleMoved(ccircles[i]);
  }

  for (i=0; i < clines.length; i++) {
    clinePosition[i] = new CamiloLineMoved(clines[i]);
  }

  for (i=0; i < carcs.length; i++) {
    carcPosition[i] = new CamiloArcMoved(carcs[i]);
  }

  for (i=0; i < ctriangles.length; i++) {
    ctrianglePosition[i] = new CamiloTriangleMoved(ctriangles[i]);
  }
  //Camilo end



  //Zoe Setup
  for (i=0; i < zboxes.length; i++) {
    zboxPosition[i] = new ZoeBoxMoved(zboxes[i]);
  }
  for (i=0; i < zcircles.length; i++) {
    zcirclePosition[i] = new ZoeCircleMoved(zcircles[i]);
  }
  //Zoe end





  //ksy start

  for (let i = 0; i < ksyboxes.length; i++) {
    ksyboxPosition[i] = new KsyMovedBox(ksyboxes[i]);
  }

  for (let i = 0; i < ksyloops.length; i++){
    ksyloopPosition[i] = new KsyLoop(ksyloops[i]);
  }

  for (let i = 0; i < ksyboxes00.length; i++) {
    ksyboxPosition00[i] = new KsyMovedBox00(ksyboxes00[i]);
  }

  for (let i = 0; i < ksyboxes01.length; i++) {
    ksyboxPosition01[i] = new KsyMovedBox01(ksyboxes01[i]);
  }

  for (let i = 0; i < ksycircles.length; i++){
    ksycirclePosition[i] = new KsyCircle(ksycircles[i]);
  }

  for (let i = 0; i < ksycircles01.length; i++){
    ksycirclePosition01[i] = new KsyCircle01(ksycircles01[i]);
  }

  //ksy end


  for (let i = 0; i < circles.length; i++) {
    circleaArray[i] = new Guitar(circles[i]);
  }
  for (let i = 0; i < rects.length; i++) {
    rectArray[i] = new Guitar(rects[i]);
  }
  for (let i = 0; i < quads.length; i++) {
    quadArray[i] = new Guitar(quads[i]);
  }

  for (let i = 0; i < halfCircles.length; i++){
    halfCirclePosition[i] = new Watermelon(halfCircles[i]);
  }
  for (let i = 0; i < seeds.length; i++){
    seedsPosition[i] = new Seed(seeds[i]);
  }
  for (let i = 0; i < shapes01.length; i++){
    shapeArray01[i] = new MovedShape(shapes01[i]);
  }
  for (let i = 0; i < shapes.length; i++) {
    shapeArray[i] = new Movedshapes(shapes[i]);
  }
  for (let i = 0; i < circleslist.length; i++) {
    circleArray[i] = new Circle(circleslist[i]);
  }

  angleMode(RADIANS);

  for (let i=0; i < rectangles.length; i++) {
    rectangleArray[i] = new Drone(rectangles[i]);
  }

  for (let i=0; i < triangles.length; i++) {
    triangleArray[i] = new Drone (triangles[i]);
  }

  for (let i=0; i < lines.length; i++) {
    lineArray[i] = new Drone (lines[i]);
  }

  for (let i=0; i < cirs.length; i++) {
    cirArray[i] = new Drone (cirs[i]);
  }

  for (let i=0; i < ellipses.length; i++) {
    ellipseArray[i] = new Drone (ellipses[i]);
  }
  // Anna and Xuwen

  for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i] = new MovedFlask (flaskElements[i]);
  }

  push();
  rectMode(CENTER);
  // angleMode(DEGREES);
  for(let i= 0; i<boxes.length; i++){
    boxArray[i] = new BoxMoved(boxes[i]);
  }

  for(let i= 0; i<xwcircles.length; i++){
    xwcircleArray[i] = new CircleMoved(xwcircles[i]);
  }

  for(let i= 0; i<xwtriangles.length; i++){
    xwtriangleArray[i] = new TriangleMoved(xwtriangles[i]);
  }
  pop();

  outerBox = new OuterBox(50, 50, 1, 1);
  for (let n = 0; n < 3; n++)
  lines[0] = new Lines(52, 50, 70, 45, 50, 1.5, 1, 1);
  lines[1] = new Lines(70, 45, 525, 45, 50, 1.5, 1, 1);
  lines[2] = new Lines(525, 45, 548, 50, 50, 1.5, 1, 1);
  baseLeft = new Lines(125, 105, 150, 105, 10, 5, 2, 1);
  baseRight = new Lines(450, 105, 475, 105, 10, 5, 2, 1);
  playLine = new Lines(225, 71, 375, 71, 255, 1, 1, 1);
  cutOutLine = new Lines(200, 101, 400, 101, 255, 12, 1, 1);
  bassInnerCircleR = new Circles(525, 75, 30, 255, 255, 2, 2, 2);
  bassInnerCircleL = new Circles(75, 75, 30, 255, 255, 2, 4, 4);
  bassOuterCircleR = new Circles(75, 75, 25, 255, 5, 4, 2, 4);
  bassOuterCircleL = new Circles(525, 75, 25, 255, 5, 4, 4, 2);
  speakerOuterCircleR = new Circles(475, 75, 20, 5, 250, 4, 3, 3);
  speakerOuterCircleL = new Circles(125, 75, 20, 5, 250, 4, 6, 6);
  speakerInnerCircleR = new Circles(475, 75, 18, 255, 5, 2.5, 3, 6);
  speakerInnerCircleL = new Circles(125, 75, 18, 255, 5, 2.5, 6, 3);


  // Matt Sacha


  for (let i = 0; i < rectsMS.length; i++) {
    rectArrayMS[i] = new HeadphonesChaos(rectsMS[i]);
  }

  for (let i = 0; i < circlesMS.length; i++) {
    circleArrayMS[i] = new HeadphonesChaos(circlesMS[i]);
  }

  for (let i = 0; i < arcsMS.length; i++) {
    arcArrayMS[i] = new HeadphonesChaos(arcsMS[i]);
  }
  // Matt Sacha END



  // Tony start
  // need to fix Tony's circles
  for (let i=0;i < boxsTP.length;i++){
    boxArrayTP[i]= new boxMoved(boxsTP[i]);
  }
  // Tony END


  // Tyler Start
  for (let i = 0; i < rectsTB.length; i++) {
    rectArrayTB[i] = new Group(rectsTB[i]);
  }
  for (let i = 0; i < circlesTB.length; i++) {
    circleArrayTB[i] = new Group(circlesTB[i]);
  }
  // Tyler END


  // Karim START
  for (let i = 0; i < boxesK.length; i++) {
    boxPositionK[i] = new MovedBoxK(boxesK[i]);
  }
  for (let i = 0; i < loops.length; i++){
    loopPosition[i] = new Loop(loops[i]);
  }
  // Karim END


  // Yukta START
  for (let i = 0; i < circlesY.length; i++){
    circlePositionY[i] = new CircleY(circlesY[i]);
  }

  for (let i = 0; i < circles01Y.length; i++){
    circlePosition01Y[i] = new Circle01Y(circles01Y[i]);
  }
  // Yukta END


  // Sonali START
  for (let i = 0; i < boxes00_Sonali.length; i++) {
    boxPosition00_Sonali[i] = new MovedBox00(boxes00_Sonali[i]);
  }

  for (let i = 0; i < boxes01_Sonali.length; i++) {
    boxPosition01_Sonali[i] = new MovedBox01(boxes01_Sonali[i]);
  }
  // Sonali END


}
