angular.module('qaApp').controller('weekCtrl', function($scope, $http) {

$scope.title = "Reports: This Week";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const date = new Date;
const day = date.getDay();

function createChart(day) {
	$http ({
		method: 'GET',
		url: '/getWeekData',
		params: {
			'day': day
		}
	}).then(function successCallback(res) {
		console.log("month success");
		var max = 7;
		var arr = [];
		for (let i = 1; i < max; i++) {
			var count = 0;
			for (key in res.data) {
				if (res.data[key].day === i) {
					count++;
				}
			}
			arr.push(count);
		}
		var ctx = document.getElementById("weekChart");
		var weekChart = new Chart(ctx, {
			type: 'line',
			responsive: true,
			maintainAspectRatio: true,
			data: {
				labels: days,
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