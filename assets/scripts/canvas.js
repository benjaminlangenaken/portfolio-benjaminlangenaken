const canvas = document.querySelector("canvas");

// Create variable for context
const c = canvas.getContext("2d");

// Improve pixel ratio
const canvasWidth = 1000;
const canvasHeight = 500;

const scale = window.devicePixelRatio;
canvas.width = canvasWidth  * scale;
canvas.height = canvasHeight  * scale;

c.scale(scale, scale);

// Create Circle object (OOP)
class Circle {
	constructor(x, y, dx, dy, radius, color, fillText) {
		this.x = x;
		this.y = y + 0.5;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.color = color;
		this.fillText = fillText;

		this.draw = () => {
			c.beginPath();
			c.fillStyle = this.color;
			c.strokeStyle = "rgba(43,45,65,0.9)";
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.fill();
			c.stroke();

			c.font = "bold 20px Open Sans";
			c.fillStyle = "rgba(43,45,65,0.9)";
			c.textBaseline = "middle";
			c.textAlign ="center";
			c.fillText(this.fillText, this.x, this.y);
		};

		// Add update function for our Circle object
		this.update = () => {
			// Add wall bounce
			if (
				this.x + this.radius > canvas.width - 1 ||
				this.x - this.radius < 1
			) {
				this.dx = -this.dx;
			}

			if (
				this.y + this.radius > canvas.height - 1 ||
				this.y - this.radius < 1
			) {
				this.dy = -this.dy;
			}

			this.x += this.dx;
			this.y += this.dy;

			this.draw();
		};
	}
}

// Create array to store all different circles
let circleArray = [];

const htmlCss = () => {
	// Create variable for radius
	let radius = 120;
	// Create variable outside of function for x-axis and y-axis
	let x = 0.5 * (canvas.width + radius * 2) - radius;
	let y = 0.5 * (canvas.height + 2 + radius * 2) - radius;
	// Create variables for velocity
	let dx = (Math.random()) * 2;
	let dy = (Math.random()) * -1.5;
	// Create variable for color
	let color = "rgba(50,65,230,0.4)";

	let fillText = "HTML/CSS";

	// Add all random circles to the array
	circleArray.push(new Circle(x, y, dx, dy, radius, color, fillText));
}

const js = () => {
	// Create variable for radius
	let radius = 100;
	// Create variable outside of function for x-axis and y-axis
	let x = 0.3 * (canvas.width + radius * 2) - radius;
	let y = 0.6 * (canvas.height + 2 + radius * 2) - radius;
	// Create variables for velocity
	let dx = (Math.random()) * -1.5;
	let dy = (Math.random()) * 2;
	// Create variable for color
	let color = "rgba(209,230,50,0.4)";

	let fillText = "JavaScript";

	// Add all random circles to the array
	circleArray.push(new Circle(x, y, dx, dy, radius, color, fillText));
}

const laravel = () => {
	// Create variable for radius
	let radius = 85;
	// Create variable outside of function for x-axis and y-axis
	let x = 0.6 * (canvas.width + radius * 2) - radius;
	let y = 0.3 * (canvas.height + 2 + radius * 2) - radius;
	// Create variables for velocity
	let dx = (Math.random()) * 2;
	let dy = (Math.random()) * -2.5;
	// Create variable for color
	let color = "rgba(195,29,29,0.4)";

	let fillText = "PHP/Laravel";

	// Add all random circles to the array
	circleArray.push(new Circle(x, y, dx, dy, radius, color, fillText));
}

const react = () => {
	// Create variable for radius
	let radius = 85;
	// Create variable outside of function for x-axis and y-axis
	let x = 0.6 * (canvas.width + radius * 2) - radius;
	let y = 0.6 * (canvas.height + 2 + radius * 2) - radius;
	// Create variables for velocity
	let dx = (Math.random()) * -2.5;
	let dy = (Math.random()) * 2;
	// Create variable for color
	let color = "rgba(0,229,255,0.4)";


	let fillText = "React";

	// Add all random circles to the array
	circleArray.push(new Circle(x, y, dx, dy, radius, color, fillText));
}

htmlCss();
js();
laravel();
react();

// Create infinite loop for animation
let animateBackground = () => {
	requestAnimationFrame(animateBackground);

	// Reset canvas for each frame
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
};

animateBackground();
