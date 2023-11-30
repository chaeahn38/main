

const CANVAS_HEIGHT = 3000;

const MY_STR = "프로토타입";
var initSize;
var sizey = 400;
var al = 255;
var idealSize;

function setup() {
  createCanvas(windowWidth, CANVAS_HEIGHT);
  background(117, 129, 64);  
  var al = 255;

  var idealSize = sizeSolver(300, 0, windowWidth-30);
  print("idealSize is: " + idealSize);
  textAlign(LEFT, TOP);
  textSize(idealSize);

  for (i = 1; i < 1000; i++) {
    push();
    al = al;
    fill(0, al);
    drawRoww(windowWidth, i);
    pop();
    translate(0, idealSize * .83 / i);
  }

  noLoop();
}

function draw() {
	font1 = loadFont('MonumentExtended-Regular.otf');
}

function sizeSolver(oldSize, acc, container) {

  textSize(acc);
  accWidth = textWidth(MY_STR);
  // print("accWidth" + accWidth);
  if ( accWidth >= container ) {
    print("DONE, idealSize is: " + acc);
    return acc;
  } else {
    print(acc);
    // MUST return recursive calls
    return sizeSolver(oldSize, acc + 1, container);
  }
}


function drawRoww(container, iter) {
  // draw first one
  unitWidth = container / (iter);
  push();
  scale(1/iter, 1/iter);
  text(MY_STR, 0, 0);
  for (col = 1; col < iter; col++) {
    translate(unitWidth * iter, 0);
    text(MY_STR, 0, 0);
    textFont('Helvetica');
    // textStyle(BOLD);
  }
  pop();
}
