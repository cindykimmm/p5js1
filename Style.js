let angle = 0;

function setup() {
  createCanvas(400, 400);
  noFill();

   let canvas=
  createCanvas(100, 100);
   canvas.parent('sketch2');
}

function draw() {
  background(160);
  
  translate(width / 2, height / 2);
  rotate(angle);

  // rotating lines
  for (let i = 0; i < 20; i++) {
    let diameter = i * 20;
    stroke(255 - i * 10, 0, 0); // colors
    ellipse(0, 0, diameter, diameter);
    line(0, -diameter / 2, 0, diameter / 2);
  }

  angle += 0.01; // speed
}
