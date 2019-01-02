var circles = [];
var speeds = [];
var initialYs = [];
var numCircles = 0;
var maxSize = 0;
var maxSpeed = 0;

if (view.size.width < 500) {
  numCircles = 15;
  maxSize = 60;
  maxSpeed = 0.1;
//  console.log("Small");
} else if (view.size.width < 1000) {
  numCircles = 20;
  maxSize = 100;
  maxSpeed = 0.2;
//  console.log("Medium");
} else {
  numCircles = 30;
  maxSize = 120;
  maxSpeed = 0.4;
//  console.log("Large");
}

for (var i = 0; i < numCircles; i++) {
  var position = Point.random() * view.size;
  var newInitialY = position.y;
  var radius = Math.random() * (maxSize / 2.0) + (maxSize / 2.0);
  var newCircle = new Path.Circle(position, radius);
  newCircle.fillColor = {
      hue: Math.random() * 360,
      saturation: 1,
      brightness: 1
  };
  newCircle.blendMode = 'soft-light';
  var newSpeed = Math.random() * maxSpeed;
  if (newSpeed < 0.05) {
    newSpeed = 0.05;
  }
  var newVector = new Point({
      angle: 345,
      length: newSpeed
  });
  speeds.push(newVector);
  circles.push(newCircle);
  initialYs.push(newInitialY);
}

function onFrame() {
	for (var i = 0, l = circles.length; i < l; i++) {
      circles[i].position += speeds[i];
      if (circles[i].position.x > view.bounds.width + maxSize) {
        circles[i].position.x = (maxSize * -1);
        circles[i].position.y = initialYs[i];
      }
	}
}