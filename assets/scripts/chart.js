const myChart = document.getElementById("myChart").getContext("2d");

const pieChart = new Chart(myChart, {
	type: "doughnut",
	padding: 25,
	data: {
		labels: ["HTML/CSS", "JavaScript", "PHP", "Laravel", "React"],
		datasets: [{
			data: [
				30,
				25,
				20,
				12.5,
				12.5
			],
			backgroundColor: [
				"rgba(50, 65, 230, 0.4)",
				"rgba(209, 230, 50, 0.4)",
				"rgba(50,65,230,0.4)",
				"rgba(195, 29, 29, 0.4)",
				"rgba(0, 229, 255, 0.4)"
			],
			borderColor: "#3d405b",
		}]
	},
	options: {
		animation: {
			animateScale: true,
		}
	}
});