// var rows, cols = 10;
// var sf = 1;
// var g_xstep, g_ystep = 10;
// var rings = 30;
// var magnitude = 60;
// var ox, oy, oz;
// let noise_delta = 17;
// let noise_radius = 0.3;

// var arr = [];

// function setup() {
//   createCanvas(500, 500);
//   background('red');
//   stroke('black');
//   strokeWeight(2);
//   //set P5 to draw only once;
  
//   ox = random(10000);
//   oy = random(10000);
//   oz = random(10000);
//   smooth();

//   //setting displacement at each degree angle to be 0;
//   for (var i = 0; i < 360; i++) {
//     arr.push(0);
//   }
// }


// function draw() {
//   // var x = floor(randomGaussian(width / 2, width));
//   // var y = floor(randomGaussian(height / 2, height));
//   // if (x % 2 == 0) strokeWeight(4)
//   // else strokeWeight(2);
//   // point(x, y);
//   // console.log(str(x));
//   push();

//   //translate to a random point on the canvas;
//   translate(randomGaussian(width / 2, width / 10), randomGaussian(height / 2, height / 10));
//   drawTopoLines();
//   pop();
//   drawGrid();
//   //drawCrosses();
// }

// function drawTopoLines() {
//   stroke(0);
//   for (var i = 0; i < rings; i++) {
//     if (i % 5 == 0) {
//       strokeWeight(2);
//     } else {
//       strokeWeight(1);
//     }

//     //TODO: Set fill colours;
//     var new_arr = [];
//     beginShape();
//     for (const ang in arr) {
//       let rad = radians(ang);
//       let new_rad = 5 + arr[ang] + getNoise(rad, i * noise_delta) * magnitude;
//       vertex(new_rad * cos(rad), new_rad * sin(rad));
//       new_arr[ang] = new_rad;
//     }

//     beginContour();
//     for (const ang in arr) {
//       let rad = radians(359 - ang);
//       vertex(arr[359 - ang] * cos(rad), arr[359 - ang] * sin(rad));
//     }

//     endContour();

//     endShape(CLOSE);
//     arr = new_arr;
//   }
// }

// function drawGrid() {
//     console.log("HELLOOOO");
  
//   stroke(0);
//   for (var i = 0; i < rows; i++) {
//     //increment in y-direction;
//     line(0, g_xstep * i, width, g_ystep * i);
//   }
  
//   // for (var j = 0; j < cols; i++) {
//   //   //increment in y-direction;
//   //   line(0, g_ystep * j, width, g_ystep * j);
//   // }
// }

// function getNoise(radian, dim) {
//   let r = radian % TAU;
//   if (r < 0.0) {
//     r += TAU;
//   }
//   return noise(ox + cos(r) * (noise_radius + dim / 200), oy + sin(r) * (noise_radius + dim / 200), dim);
// }


let sketch = function(p) {
  let rings = 36;
  let dim_init = 0;
  var ox, oy, oz;
  
  let arr = [];
  let spacing = -10;
  let magnitude = 80;
  let noise_delta = 17;
  let noise_radius = 0.3;

  let cols = ['#fa4', '#fb3', '#ec4', '#dd5', '#ada', '#9bc'];

  let cols2 = ['#fa4', '#fb4', '#fc5', '#dd5', '#ada', '#8bc'];

  setup = function() {
    createCanvas(800, 800);
    background('#ffffff');
    strokeWeight(1);
    stroke(0, 0, 0);
    ox = random(10000);
    oy = random(10000);
    oz = random(10000);
    smooth();
    noLoop();

    for (let i = 0; i < 360; i++) {
      arr.push(dim_init);
    }
  };

  draw = function() {
    //drawBorder();
    push();
    translate(randomGaussian(width / 2, 250), randomGaussian(height / 2, 250));
    display();
    pop();
    display_crosses();
    display_grid();
  };

  function display() {
    for (let i = 0; i < rings; i++) {
      if (i % 6 == 0) strokeWeight(2);
      else strokeWeight(1);

      fill(cols[floor(i / rings * cols.length)]);
      //p.fill(cols[p.floor(p.random(cols.length))]);

      var new_arr = [];

      beginShape();
      for (const ang in arr) {
        let rad = radians(ang);
        let new_radius = spacing + arr[ang] + getNoise(rad, i * noise_delta) * magnitude;

        vertex(new_radius * cos(rad), new_radius * sin(rad));
        new_arr[ang] = new_radius;
      }
      beginContour();
      for (const ang in arr) {
        let rad = radians(359 - ang);
        vertex(arr[359 - ang] * cos(rad), arr[359 - ang] * sin(rad));
      }
      endContour();

      endShape(CLOSE);

      arr = new_arr;
    }
  }

  function display_crosses() {
    for (var i = 0; i < 80; i++) {
      push();
      translate(random(20, width - 20), random(20, height - 20));

      line(-5, 0, 5, 0);
      line(0, -5, 0, 5);
      pop();
    }
  }

  function display_grid() {
    stroke(0, 80);
    strokeWeight(1);
    let grid_space = 160;
    for (var i = grid_space; i < height; i += grid_space) {
      line(0, i, width, i);
    }
    for (var j = grid_space; j < width; j += grid_space) {
      line(j, 0, j, height);
    }
  }

  function getNoise(radian, dim) {
    let r = radian % TAU;
    if (r < 0.0) {
      r += TAU;
    }
    return noise(ox + cos(r) * (noise_radius + dim / 200), oy + sin(r) * (noise_radius + dim / 200), dim);
  }
};

// function drawBorder() {
//   noFill();
//   stroke(0);
//   strokeWeight(5);
//   rect(0, 0, height, width);
// }

new sketch();