angular.module('qaApp').controller('dayCtrl', function($scope) {
	
	$scope.test = "Reports: Today";
	
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [{
				label: 'Bugs Found',
				data: [2, 159, 343, 786, 24, 733, 413, 553, 47, 355, 646, 43],
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

