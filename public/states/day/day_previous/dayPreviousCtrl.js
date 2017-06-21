angular.module('qaApp').controller('dayPreviousCtrl', function($scope, $http, $state) {
	
	$scope.title = "Reports: Today";
	const hours = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm"];
	const date = new Date;
	const day = date.getDate();
	const newDay = 0;

	var findDay = (newDay) => {
		newDay = day - 1;

		return newDay
	};

	var getDay = () => {
		$state.go('day_previous', {param1: newDay});
	};
	
	function createChart(day) {
		console.log(day);
		$http ({
			method: 'GET',
			url: '/getPreviousDayData',
			params: {
				'day': day
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
			console.log('day failed')
		});
	}
	createChart(findDay(newDay));
});







