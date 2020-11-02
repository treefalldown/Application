// Curious Objects
// Joseph Kosuth’s 1965 art piece “One and Three Chairs” explores questions of representation through an assemblage of physical artifact, photograph, and definition. Each form of media is an abstraction of the object. The proposed “Curious Objects” explores abstraction further by constructing a graphic representation of the object through code. This abstraction is then imbued with animation and intelligence. The project explores methods to problematize and reveal underlying modes of representation and data structures, while also exploring the potential of these other forms of abstraction. A series of everyday objects are drawn with primitive shapes using p5.js and then animated. At particular moments, the original form will be reconstituted, while at others, the primitive figures disassemble across the screen through translations that include scale, rotate, and move. Specific elements within each of the objects will be networked and designed to interact, influence, and infect across one another.
// Curious Objects builds on the work by John Caserta: http://fc12.johncaserta.info/triennial/


// Custom scale for each object to fit compositionally on screen.
let scaleFactor = 2/3;

// These parameters are to assist in exporting a frame when ?Frame is used (query string).
let urlParams;
let count = 0;


function setup() {
  // Canvas is tied to the window size.
  cnv = createCanvas(windowWidth, windowHeight);

  // Presets for rectMode and rotation
  rectMode(CENTER);
  angleMode(DEGREES);

  // Initiating wrenchMoveSketch by storing elements in the array into empty array.
  for (let i = 0; i < wrenchMoveElements.length; i++) {
    wrenchMoveArray[i] = new WrenchMove(wrenchMoveElements[i]);
  }

  // Initiating wrenchRotateSketch by storing elements in the array into empty array.
  for (let i = 0; i < wrenchRotateElements.length; i++) {
    wrenchRotate[i] = new WrenchRotate(wrenchRotateElements[i]);
  }
}

function draw() {
  background(180);
  noStroke();

  // Draw still wrench to the left.
  push();
  translate(windowWidth/1000, height/5);
  scale(scaleFactor);
  drawWrench(0);
  pop();

  // Draw wrenchMove in the middle
  push();
  translate(windowWidth/3.2, height/5);
  scale(scaleFactor);
  //Ghosted outline of still wrench.
  drawWrench(165);

  // Draw and move elements of wrench.
  for (let i = 0; i < wrenchMoveElements.length; i++) {
    wrenchMoveArray[i].drawCircle();
    wrenchMoveArray[i].tracingObject();
    wrenchMoveArray[i].drawBox();
    wrenchMoveArray[i].tracingBoxObject();
    wrenchMoveArray[i].drawAngledBox();
    wrenchMoveArray[i].tracingAngledBox();
  }
  pop();

  // Draw wrenchRotate to the right
  push();
  translate(windowWidth/3*2, height/5);
  scale(scaleFactor);
  for (let i = 0; i < wrenchRotateElements.length; i++) {
    wrenchRotate[i].displayCircle();
    wrenchRotate[i].diagramCircle();
    wrenchRotate[i].displayRect();
    wrenchRotate[i].diagramRect();
  }
  pop();

  // Setting up to query string parameters
  urlParams = new URLSearchParams(window.location.search);

  // Conditional statement to see if frame has been entered.
  if (urlParams.has('frame')) {
    // A counter gets started.
    // The counter ensures only 1 image gets saved.
    // The counter value is to offset the start time to show a little variety.
    if (count === 120) {
      save(cnv, 'CuriousObjects.png');
    };
    count++;
  }
}

// Sketch will resize with window.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
