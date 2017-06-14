angular.module('qaApp').controller('homeCtrl', function($scope, $rootScope, homeService, $window) {
	
	const max = 99999;
	const min = 0;
	const date = new Date;
	const day = date.getDate(); //day of the month (1-31)
	const month = date.getMonth(); //month of the year (0-11)
	const hour = date.getHours(); //Hour time (0-23)
	const year = date.getFullYear(); //4 digit year
	
	
	let getTodayCount = (day, month, year) => {
		homeService.getTodayCount(day, month, year).then((res, err) => {
			$scope.todayCount = res.data[0].count;
		});
	};
	getTodayCount(day, month, year);
	
	let getTotalCount = () => {
		homeService.getTotalCount().then((res, err) => {
			$rootScope.totalCount = res.data[0].count;
		});
	};
	getTotalCount(day, month, year, hour);
	
	$scope.increment = () => {
		const date = new Date;
		const day = date.getDate(); //day of the month (1-31)
		const weekDay = date.getDay(); //day of the week (0-6)
		const month = date.getMonth(); //month of the year (0-11)
		const hour = date.getHours(); //Hour time (0-23)
		const year = date.getFullYear(); //4 digit year
		if ($scope.todayCount >= max) {
			return;
		}
		$scope.todayCount++;
		$scope.totalCount++;
		// homeService.getWeekData().then((res, err) => {
			
			homeService.increment($scope.todayCount, $scope.totalCount, day, weekDay, month, year, hour);
			
		// });
		// }
		
	};
	
	$scope.decrement = () => {
		if ($scope.todayCount <= min) {
			return;
		}
		$scope.todayCount--;
		$scope.totalCount--;
		homeService.decrement();
	};
	
	//Popup Information Modal
	const modal = document.getElementById('popup');
	const info = document.getElementById("info");
	const span = document.getElementsByClassName("close")[0];
	
	info.onclick = function() {
		modal.style.display = "block";
	};

	span.onclick = function() {
		modal.style.display = "none";
	};

	window.onclick = function(event) {
		if (event.target === popup) {
			modal.style.display = "none";
		}
	}
	
});