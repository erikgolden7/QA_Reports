angular.module('qaApp').controller('summaryCtrl', function($scope, $http) {

	$scope.title = "Summary Reports";
	
	function createChart() {
		$http({
			method: 'GET',
			url: '/getAllData'
		}).then(function successCallback(res) {
			const arr = [];
			for (let i = 1; i <= res.data.length; i++) {
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
					else if (res.data[key].currentday === "Tuesday") {
						tuesdayCount++;
					}
					else if (res.data[key].currentday === "Wednesday") {
						wednesdayCount++;
					}
					else if (res.data[key].currentday === "Thursday") {
						thursdayCount++;
					}
					else if (res.data[key].currentday === "Friday") {
						fridayCount++;
					}
					else if (res.data[key].currentday === "Saturday") {
						saturdayCount++;
					}
					else if (res.data[key].currentday === "Sunday") {
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
			var ctx = document.getElementById("summaryChart").getContext('2d');
			var summaryChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Mon", "Tues", "Wed", "Thur", "Fri"],
					datasets: [{
						backgroundColor: [
							"#2ecc71",
							"#3498db",
							"#e74c3c",
							"#9b59b6",
							"#f1c40f"
						],
						data: arr,
						responsive: false
					}]
				}
			});
		}, function errorCallback(res) {
			console.log('summary fail')
		});
	}
	createChart();
});