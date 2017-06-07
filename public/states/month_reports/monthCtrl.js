angular.module('qaApp').controller('monthCtrl', function($scope) {
	
	$scope.test = "Reports: This Month";
	
	var ctx = document.getElementById("monthChart");
	var monthChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30","31"],
			datasets: [{
				label: 'Bugs Found',
				data: [32, 659, 343, 386, 274, 533, 213, 353, 27, 345, 346, 33, 324, 659, 343, 386, 274, 733, 213, 353, 27, 345, 246, 33, 32, 659, 343, 486, 274, 533, 213],
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


