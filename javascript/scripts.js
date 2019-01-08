var circles = [];
var speeds = [];
var colorSpeeds = [];
var initialYs = [];
var initialPositions = [];
var numCircles = 0;
var maxSize = 0;
var maxSpeed = 0;

if (view.size.width < 500) {
  numCircles = 15;
  maxSize = 60;
  maxSpeed = 0.2;
//  console.log("Small");
} else if (view.size.width < 1000) {
  numCircles = 20;
  maxSize = 100;
  maxSpeed = 0.3;
//  console.log("Medium");
} else {
  numCircles = 30;
  maxSize = 120;
  maxSpeed = 0.4;
//  console.log("Large");
}

for (var i = 0; i < numCircles; i++) {
  var position = Point.random() * view.size;
  for (var pos = 0; pos < initialPositions.length; pos++) {
    if (position.getDistance(initialPositions[pos]) < maxSize) {
      position.x += maxSize
    }
  }
  var newInitialY = position.y;
  var radius = Math.random() * (maxSize / 2.0) + (maxSize / 2.0);
  var newCircle = new Path.Circle(position, radius);
  var newColor = {
      hue: Math.random() * 360,
      saturation: 1,
      brightness: 1
  };
  var blurStart = (Math.random() * 0.1) + 0.7;
  newCircle.fillColor = {
    gradient: {
        stops: [[newColor, blurStart], [new Color(255, 255, 255, 0), 1]],
        radial: true
    },
    origin: newCircle.position,
    destination: newCircle.bounds.rightCenter
  };
  newCircle.opacity = (Math.random() * 0.8) + 0.2;
  newCircle.blendMode = 'overlay';
  var newSpeed = Math.random() * maxSpeed;
  if (newSpeed < 0.05) {
    newSpeed = 0.05;
  }
  var newVector = new Point({
      angle: (15 * ((Math.random() * 2) - 1)),
      length: newSpeed
  });
  var newColorSpeed = ((Math.random() * 2) - 1) * 0.01;
  colorSpeeds.push(newColorSpeed);
  speeds.push(newVector);
  circles.push(newCircle);
  initialYs.push(newInitialY);
  initialPositions.push(position);
}

function onFrame() {
	for (var i = 0, l = circles.length; i < l; i++) {
      circles[i].position += speeds[i];
      circles[i].opacity += colorSpeeds[i];
//      if (circles[i].opacity <= 0.02 || circles[i].opacity >= 0.98) {
//        colorSpeeds[i] *= -1;
//      }
      if (circles[i].opacity <= 0.02) {
        colorSpeeds[i] = Math.random() * 0.01;
      } else if (circles[i].opacity >= 0.98) {
        colorSpeeds[i] = Math.random() * -0.01;
      }
      if (circles[i].position.x > view.bounds.width + maxSize) {
        circles[i].position.x = (maxSize * -1);
        circles[i].position.y = initialYs[i];
      }
	}
}