angular.module('qaApp').controller('monthCtrl', function($scope, $http, $state) {
	
	$scope.title = "Reports: This Month";
	
	$scope.reloadPage = () => {
		$state.reload();
	};
	
	const date = new Date;
	const month = date.getMonth();
	
	function createChart(month) {
		$http ({
			method: 'GET',
			url: '/getMonthData',
			params: {
				'month': month
			}
		}).then(function successCallback(res) {
			var arr = [];
			for (let i = 1; i <= 31; i++) {
				var count = 0;
				for (key in res.data) {
					if (res.data[key].day === i) {
						count++;
					}
				}
				arr.push(count);
			}
			var ctx = document.getElementById("monthChart");
			var monthChart = new Chart(ctx, {
				type: 'line',
				responsive: true,
				maintainAspectRatio: true,
				data: {
					labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30","31"],
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
			console.log('month fail')
		});
	}
	createChart(month);
	
	
	$scope.sayDate = function() {
		var inputDate = $scope.inputDate;
		var inputMonth = inputDate.getMonth();
		
		function createChart(month) {
			$http({
				method: 'GET',
				url: '/getMonthData',
				params: {
					'month': month
				}
			}).then(function successCallback(res) {
				var arr = [];
				for (let i = 1; i <= 31; i++) {
					var count = 0;
					for (key in res.data) {
						if (res.data[key].day === i) {
							count++;
						}
					}
					arr.push(count);
				}
				var ctx = document.getElementById("monthChart");
				var monthChart = new Chart(ctx, {
					type: 'line',
					responsive: true,
					maintainAspectRatio: true,
					data: {
						labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
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
				console.log('month fail')
			});
		}
		createChart(inputMonth);
	}
});