angular.module('qaApp').controller('dayCtrl', function($scope, $http) {
	
	$scope.title = "Reports: Today";
	const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
	const date = new Date;
	const day = date.getDate();
	
	function createChart(day) {
		$http ({
			method: 'GET',
			url: '/getDayData',
			params: {
				'day': day
			}
		}).then(function successCallback(res) {
			console.log("success");
			var max = 24;
			var arr = [];
			for (let i = 0; i < max; i++) {
				var count = 0;
				for (key in res.data) {
					if (res.data[key].hour === i) {
						count++;
					}
				}
				arr.push(count);
			}
			var ctx = document.getElementById("dayChart");
			var dayChart = new Chart(ctx, {
				type: 'line',
				responsive: true,
				maintainAspectRatio: true,
				data: {
					labels: hours,
					datasets: [{
						label: 'Bugs Found',
						data: arr,
						backgroundColor: 'rgba(72,126,173,.3)',
						borderColor: 'rgba(108,108,108,1)',
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			})
		}, function errorCallback(res) {
			console.log('failed to get day data')
		});
	}
	createChart(day);
});



	


