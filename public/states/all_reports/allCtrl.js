angular.module('qaApp').controller('allCtrl', function($scope) {
	
	$scope.test = "Reports: All Time";
	
	// $scope.htmlEndTime = () => {
	// 	let date = new Date();
	// 	assessmentService.htmlEndTime($scope.user.id, date);
	// 	$scope.stop1 = false;
	// };
	
	var ctx = document.getElementById("allChart");
	var allChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [{
				label: 'Bugs Found',
				data: [12, 19, 3, 78, 2, 73, 123, 53, 7, 35, 66, 4],
				backgroundColor: 'rgba(72,126,173,.3)',
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


