angular.module('qaApp').controller('allBarCtrl', function($scope, $http) {
	
	$scope.title = "Reports: All Time";
	
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const date = new Date;
	const month = date.getMonth();
	
	function createChart(month) {
		$http ({
			method: 'GET',
			url: '/getAllData',
			params: {
				'month': month
			}
		}).then(function successCallback(res) {
			console.log("all success");
			var max = 13;
			var arr = [];
			for (let i = 1; i < max; i++) {
				var count = 0;
				for (key in res.data) {
					if (res.data[key].month === i) {
						count++;
					}
				}
				arr.push(count);
			}
			var ctx = document.getElementById("allChart");
			var allChart = new Chart(ctx, {
				type: 'bar',
				responsive: true,
				maintainAspectRatio: true,
				data: {
					labels: months,
					datasets: [{
						label: 'Bugs Found',
						data: arr,
						backgroundColor: 'rgba(171, 214, 174,0.6)',
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
	createChart(month);
});


