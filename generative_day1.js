var radius = 200;
var points = 250;

pts = [];

function setup() {
  stroke(0);
  strokeWeight(2);
  createCanvas(500, 500);
  computePoints();
}

function computePoints() {
  for(var angle = 0.0; angle < 6.2831; angle += (6.2831 / points)) {
    var x_val = cos(angle) * radius + 250;
    var y_val = sin(angle) * radius + 250;
    pts.push({
      x: x_val,
      y: y_val
    })
  }
}

function draw() {
  background('darkslategray');
  drawPoints();
}

function drawPoints() {
  pts.forEach(function(element) {
    // stroke((mouseX + mouseY) / 2);
    line(mouseX, mouseY, element.x, element.y);
  })
}