angular.module('qaApp').controller('weekCtrl', function($scope, $http) {

$scope.title = "Reports: This Week";

const date = new Date;
const day = date.getDate();


	// Get the current day of the week in text format
	(function() {
		var days1 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		Date.prototype.getDayName = function() {
			return days1[ this.getDay() ];
		};
	})();
	const now = new Date();
	const currentDay = now.getDayName();

	
	// Get the week number in the year out of 52
	function getWeekNumber(d) {
		d = new Date(+d);
		d.setHours(0,0,0,0);
		d.setDate(d.getDate() + 4 - (d.getDay()||7));
		const yearStart = new Date(d.getFullYear(),0,1);
		return weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
	}
	const weekNum = getWeekNumber(new Date());


	// Create the chart
	function createChart(week) {
		$http ({
			method: 'GET',
			url: '/getWeekData',
			params: {
				'week': week
			}
		}).then(function successCallback(res) {
			console.log("week success");
			const arr = [];
			for (let i = 1; i < 7; i++) {
				var mondayCount = 0;
				var tuesdayCount = 0;
				var wednesdayCount = 0;
				var thursdayCount = 0;
				var fridayCount = 0;
				var saturdayCount = 0;
				var sundayCount = 0;
				for (key in res.data) {
					if (res.data[key].currentday === "Monday") {
						mondayCount++;
					}
					else if (res.data[key].currentday === "Tuesday"){
						tuesdayCount++;
					}
					else if (res.data[key].currentday === "Wednesday"){
						wednesdayCount++;
					}
					else if (res.data[key].currentday === "Thursday"){
						thursdayCount++;
					}
					else if (res.data[key].currentday === "Friday"){
						fridayCount++;
					}
					else if (res.data[key].currentday === "Saturday"){
						saturdayCount++;
					}
					else if (res.data[key].currentday === "Sunday"){
						sundayCount++;
					}
				}
				arr.splice(0, 1, mondayCount);
				arr.splice(1, 1, tuesdayCount);
				arr.splice(2, 1, wednesdayCount);
				arr.splice(3, 1, thursdayCount);
				arr.splice(4, 1, fridayCount);
				arr.splice(5, 1, saturdayCount);
				arr.splice(6, 1, sundayCount);
			}
			
			const ctx = document.getElementById("weekChart");
			const weekChart = new Chart(ctx, {
				type: 'line',
				responsive: true,
				maintainAspectRatio: true,
				data: {
					labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
			console.log('week fail')
		});
	}
	createChart(weekNum, currentDay);
	
});