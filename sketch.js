var t = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  noStroke();
  fill(0, 10);
  rect(0, 0, width, height);

  translate(300, 300);
  scale(sin(t));

  var i = 0;
  var x = 0;
  var y = 0;

  while (i < 360) {
    x = cos(t + i);
    y = sin(t + i);
    x = map(x, -1, 1, -200, 200);
    y = map(y, -1, 1, -200, 200);

    fill(255,10);
    ellipse(x, y, 100, 100);

    i = i + 22.5;
  }
  t++;
}