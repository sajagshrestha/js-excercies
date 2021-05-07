var container = document.querySelector("#pointsContainer");
var points = [
	{ x: 20, y: 30 },
	{ x: 200, y: 400 },
	{ x: 120, y: 300 },
	{ x: 205, y: 200 },
	{ x: 421, y: 130 },
];

points.forEach((point) => {
	var newPoint = document.createElement("div");
	newPoint.classList.add("point");
	newPoint.style.top = `${point.y}px`;
	newPoint.style.left = `${point.x}px`;
	container.appendChild(newPoint);
});

var plottedPoints = document.querySelectorAll(".point");

plottedPoints.forEach((plottedPoint) => {
	plottedPoint.addEventListener("click", (e) => {
		container.removeChild(e.target);
	});
});
