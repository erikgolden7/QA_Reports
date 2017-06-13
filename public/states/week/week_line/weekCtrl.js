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
		console.log(res);
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
	
	
	// function getISOWeekInMonth(date) {
	// 	var d = new Date(+date);
	// 	if (isNaN(d)) return;
	// 	d.setDate(d.getDate() - d.getDay() + 1);
	// 	return {month: +d.getMonth()+1,
	// 		week: Math.ceil(d.getDate()/7)};
	// }
	//
	// // (year, day, month)
	// [new Date(2017,2,2),   // Thu 2 Mar 2017
	// 	new Date(2017,2,6),   // Mon 6 Mar 2017
	// 	new Date(2017,4,31),  // Wed 31 May 2017
	// 	new Date()].forEach(  // Current date
	// 	function(date) {
	// 		console.log("week: " + getISOWeekInMonth(date).week, "month: " + getISOWeekInMonth(date).month);
	// 	}
	// );
	//
	// getISOWeekInMonth()
	
	// function testing(date) {
	// 	const test = date / 7;
	// 	console.log(test);
	// 	if (test > 0 && test <= 1.107) {
	// 		console.log("1")
	// 	}
	// 	else if (test > 1.107 && test <= 2.2) {
	// 		console.log("2")
	// 	}
	// 	else if (test > 2.2 && test <= 3.32) {
	// 		console.log("3")
	// 	}
	// 	else if (test > 3.32 && test <= 4.428) {
	// 		console.log("14")
	// 	}
	// }
	// testing(28);
	
	
	
	function weekCount(year, month) {
		var firstOfMonth = new Date(year, month - 1, 1);
		console.log(firstOfMonth);
		var lastOfMonth = new Date(year, month, 0);
		console.log(lastOfMonth);
		
		var used = firstOfMonth.getDay() + lastOfMonth.getDate();
		
		var answer =  Math.ceil(used/7);
		console.log(answer);
	}
	weekCount(2017, 1)
	weekCount(2017, 2)
	weekCount(2017, 3)
	weekCount(2017, 4)
	weekCount(2017, 5)
	weekCount(2017, 6)
	weekCount(2017, 7)
});