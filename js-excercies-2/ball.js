const ball = document.querySelector(".ball");

let PositionY = 0;
let gravity = 1;
function move() {
	if (PositionY === 0) {
		gravity = 1;
	}
	if (PositionY > 395) {
		gravity = -1;
	}
	if (gravity === 1) {
		PositionY += 5;
	} else {
		PositionY -= 5;
	}
	ball.style.top = `${PositionY}px`;
	window.requestAnimationFrame(move);
}
window.requestAnimationFrame(move);
