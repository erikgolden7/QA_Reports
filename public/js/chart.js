
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
	type: 'line',
	responsive: true,
	maintainAspectRatio: true,
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		datasets: [{
			label: 'Bugs Found',
			data: [12, 19, 3, 78, 2, 73, 123, 53, 7, 35, 66, 4],
			backgroundColor: 'rgba(0,0,0,0.3)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});