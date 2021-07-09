let photo, maskImage;

function preload() {
  photo = loadImage("baji.jpg");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(800, 800);
  cnv.center();
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  image(photo, -150, -150, 300, 300);

  push();
  stroke("cyan");
  strokeWeight(14);
  point(0, 0);
  pop();

  rotate(-90);
  let h = hour();
  let mi = minute();
  let s = second();
  console.log(`${h}:${mi}:${s}`);
  stroke("gold");
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);

  let secondAngle = map(s, 0, 60, 0, 360);

  let minuteAngle = map(mi, 0, 60, 0, 360) + map(s, 0, 60, 0, 6);

  let hourAngle = map(h % 12, 0, 12, 0, 360);

  stroke("red");
  arc(0, 0, 250, 250, 0, secondAngle);

  stroke("blue");
  fill(255, 255, 255, 40);
  arc(0, 0, 200, 200, 0, minuteAngle, PIE);

  stroke("purple");
  arc(0, 0, 150, 150, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke("green");
  strokeWeight(2);
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("cyan");
  strokeWeight(4);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("tomato");
  strokeWeight(6);
  line(0, 0, 75, 0);
  pop();

  push();
  noFill();
  strokeWeight(2);
  stroke(255);
  rotate(90);
  let M = 12;
  text(M, 0, -170);

  pop();
  push();
  noFill();
  strokeWeight(2);
  stroke(255);
  rotate(90);
  let w = 6;
  text(w, 0, 175);

  pop();

  push();
  noFill();
  strokeWeight(2);
  stroke(255);
  rotate(90);
  let a = 3;
  text(a, 175, 0);

  pop();

  push();
  noFill();
  strokeWeight(2);
  stroke(255);
  rotate(90);
  let b = 9;
  text(b, -175, 0);

  pop();

  push();
  stroke("gold");
  line(180, 90, 360, 90);
  pop();

  push();
  stroke("gold");
  line(180, -90, 360, -90);
  pop();
  push();
  stroke("gold");
  line(-180, 90, -360, 90);
  pop();
  pop();
  push();
  stroke("gold");
  line(-180, -90, -360, -90);
  pop();

  push();
  noFill();
  rotate(90);
  maskImage = createGraphics(300, 200);
  maskImage.ellipse(150, 100, 250, 150);
  photo.mask(maskImage);
  stroke("gold");
  ellipse(0, 0, 395, 395);
  pop();
}
