angular.module('qaApp').controller('yearCtrl', function($scope, $http, $state) {
	
	$scope.title = "Reports: This Year";
	
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const date = new Date;
	const month = date.getMonth();
	
	$scope.reloadPage = () => {
		$state.reload();
	};
	
	function createChart(month) {
		$http ({
			method: 'GET',
			url: '/getYearData',
			params: {
				'month': month
			}
		}).then(function successCallback(res) {
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
						backgroundColor: 'rgba(73, 125, 175, .5)',
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

