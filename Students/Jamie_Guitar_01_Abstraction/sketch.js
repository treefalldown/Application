  function setup() { createCanvas(600,600)
  }

  function draw() {
  background(0,128,128);
  strokeWeight(0)
  //Guitar Body
  //Black Shapes
  fill(0)
  circle(95,348,110)
  circle(110,310,140)
  circle(215,333,105)
  quad(110,401,195,380,190,300,105,310)
  rect(135,245,77,100)
  rect(40,310,40)
  circle(244,287,95)
  //Background Color Shapes
  fill(0,128,128)
  circle(180,429,100)
  circle(185,204,110)
  quad(110,402,168,380,110,450,160,410)
  quad(178,259,120,240,120,220,190,240)
  rect(272,250,30,65)
  rect(238,315,50,75)
  circle(245,335,60)
  circle(263,283,45)
  //Overlaid Black Shapes
  fill(0)
  circle(237,372,16)
  circle(268,255,15)
  square(240,285,15)
  rect(210,315,20,20)
  //Overlaid Background Color Shapes
  fill(0,128,128)
  quad(260,265,268,260,260,280,260,270)
  circle(255,285,30)
  circle(226,336,21)

  //Guitar Neck
  fill(0) //Black
  quad(250,300,480,300,480,320,120,328)

  //Head of Guitar
  //Black Shapes
  rect(490,295,80,25)
  rect(480,297,10,23)
  circle(488,301,10)
  circle(565,325,23)
  rect(480,320,75,18)
  //Background Color Shapes
  fill(0,128,128)
  quad(480,300,484,297,484,280,480,280)
  quad(491,296,570,315,570,280,480,280)
  circle(482,340,40)
  circle(549,340,20)
  quad(548,330,480,340,548,400,480,400)

  //Tuning keys
  fill(0) //Black
  quad(493,296.5,496,298,497.5,295,494.5,293.5)
  quad(500,293.5,499.5,296.25,492.5,293.75,494,291)
  translate(13,3) //Used same shape copied 6 times
  quad(493,296.5,496,298,497.5,295,494.5,293.5)
  quad(500,293.5,499.5,296.25,492.5,293.75,494,291)
  translate(13,3)
  quad(493,296.5,496,298,497.5,295,494.5,293.5)
  quad(500,293.5,499.5,296.25,492.5,293.75,494,291)
  translate(13,3)
  quad(493,296.5,496,298,497.5,295,494.5,293.5)
  quad(500,293.5,499.5,296.25,492.5,293.75,494,291)
  translate(13,3)
  quad(493,296.5,496,298,497.5,295,494.5,293.5)
  quad(500,293.5,499.5,296.25,492.5,293.75,494,291)
  translate(13,3)
  quad(493,296.5,496,298,497.5,295,494.5,293.5)
  quad(500,293.5,499.5,296.25,492.5,293.75,494,291)
  }
