angular.module('qaApp').controller('yearCtrl', function($scope, $http) {
	
	$scope.title = "Reports: Year Time";
	
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const date = new Date;
	const month = date.getMonth();
	
	$scope.reloadPage = () => {
		window.location.reload();
	};
	
	function createChart(month) {
		$http ({
			method: 'GET',
			url: '/getYearData',
			params: {
				'month': month
			}
		}).then(function successCallback(res) {
			console.log("year success");
			var arr = [];
			for (let i = 0; i < 12; i++) {
				var count = 0;
				for (key in res.data) {
					if (res.data[key].month === i) {
						count++;
					}
				}
				arr.push(count);
			}
			var ctx = document.getElementById("yearChart");
			var yearChart = new Chart(ctx, {
				type: 'line',
				responsive: true,
				maintainAspectRatio: true,
				data: {
					labels: months,
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
			console.log('year fail')
		});
	}
	createChart(month);
});

