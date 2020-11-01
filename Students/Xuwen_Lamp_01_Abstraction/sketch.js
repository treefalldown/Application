//https://p5js.org/reference/#/p5/rotate
//https://www.youtube.com/watch?v=o9sgjuh-CBM&t=18m0s
//https://genekogan.com/code/p5js-transformations/

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(190,200,240);


    noStroke();



  fill(0,0,0);
  rect(220 ,152 ,160,120);
  circle(302 , 145 , 12);
  rect(294 ,230 ,16,60);
  rect(275 ,290 ,54,22);
  rect(290 ,312 ,24,52);
  triangle(302 , 327 , 276 , 392 , 328 , 392 );
  rect(276 ,392 ,52,26);
  triangle(276 , 418 , 302 , 453 , 328 , 418 );
  triangle(267 , 478 , 302 , 428 , 337 , 478 );
  rect(264 ,478 ,76,13);


  fill(190,200,240);
  triangle(220 , 150 , 220 , 270 , 230 , 150 );
  triangle(380 , 150 , 380 , 270 , 370 , 150 );
  rect(286 ,149 ,20,2);
  circle(275 , 312 , 30);
  circle(329 , 312 , 30);



    // how would you create a spinning object?
}
