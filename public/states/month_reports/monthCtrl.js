angular.module('qaApp').controller('monthCtrl', function($scope) {
	
	$scope.test = "Reports: This Month";
	
	var ctx = document.getElementById("monthChart");
	var monthChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [{
				label: 'Bugs Found',
				data: [32, 659, 343, 386, 274, 533, 213, 353, 27, 345, 346, 33],
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


