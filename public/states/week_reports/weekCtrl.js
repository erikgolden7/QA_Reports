angular.module('qaApp').controller('weekCtrl', function($scope) {
	
	$scope.test = "Reports: This Week";
	
	var ctx = document.getElementById("weekChart");
	var weekChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			datasets: [{
				label: 'Bugs Found',
				data: [222, 859, 743, 786, 44, 533, 473],
				backgroundColor: 'rgba(120,170,100,.3)',
				borderColor: 'rgba(108,108,108,1)',
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
	
});


