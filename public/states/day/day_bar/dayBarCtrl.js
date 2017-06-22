angular.module('qaApp').controller('dayBarCtrl', function($scope, $http, $state) {
	
	$scope.reloadPage = () => {
		$state.reload();
	};
	
	$scope.title = "Reports: Today";
	const hours = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm"];
	const date = new Date;
	const day = date.getDate();
	
	$scope.sayDate = function() {
		var inputDate = $scope.inputDate;
		if (inputDate !== undefined) {
			var inputYear = inputDate.getFullYear();
			var inputMonth = inputDate.getMonth();
			var inputDay = inputDate.getDate();
		}else { return }
		
		
		function createChart(inputMonth, inputDay, inputYear) {
			$http ({
				method: 'GET',
				url: '/getInputDayData',
				params: {
					'inputDay': inputDay,
					'inputMonth' : inputMonth,
					'inputYear' : inputYear
				}
			}).then(function successCallback(res) {
				var arr = [];
				for (let i = 1; i <= 24; i++) {
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
					type: 'bar',
					responsive: true,
					maintainAspectRatio: true,
					data: {
						labels: hours,
						datasets: [{
							label: 'Bugs Found',
							data: arr,
							backgroundColor: 'rgba(58, 175, 85, 0.4)',
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
				console.log('day failed')
			});
		}
		createChart(inputMonth, inputDay, inputYear);
	};
	
	function createChart(day) {
		$http ({
			method: 'GET',
			url: '/getDayData',
			params: {
				'day': day
			}
		}).then(function successCallback(res) {
			var arr = [];
			for (let i = 1; i <= 24; i++) {
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
				type: 'bar',
				responsive: true,
				maintainAspectRatio: true,
				data: {
					labels: hours,
					datasets: [{
						label: 'Bugs Found',
						data: arr,
						backgroundColor: 'rgba(58, 175, 85, 0.4)',
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
			console.log('day failed')
		});
	}
	createChart(day);
});

