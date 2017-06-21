angular.module('qaApp').controller('dayBarCtrl', function($scope, $http) {
	
	$scope.reloadPage = () => {
		window.location.reload();
	};
	
	$scope.title = "Reports: Today";
	const hours = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm"];
	const date = new Date;
	const day = date.getDate();
	
	$scope.sayDate = function() {
		console.log($scope.inputDate);
		var inputDate = $scope.inputDate;
		console.log(inputDate);

		var inputYear = inputDate.getFullYear();
		var inputMonth = inputDate.getMonth();
		var inputDay = inputDate.getDate();

		console.log(inputMonth, inputDay, inputYear);
		
		$scope.title = "Reports: Today";
		const hours = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm"];
		const date = new Date;
		const day = date.getDate();
		
		function createChart(inputMonth, inputDay, inputYear) {
			console.log(inputMonth, inputDay, inputYear);
			$http ({
				method: 'GET',
				url: '/getInputDayData',
				params: {
					'inputDay': inputDay,
					'inputMonth' : inputMonth,
					'inputYear' : inputYear
				}
			}).then(function successCallback(res) {
				console.log("day success", res);
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
			console.log("day success");
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
			console.log('day failed')
		});
	}
	createChart(day);
});

