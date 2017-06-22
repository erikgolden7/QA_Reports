angular.module('qaApp').controller('homeCtrl', function($scope, $rootScope, homeService, $state) {
	
	const max = 99999;
	const min = 0;
	const date = new Date;
	const day = date.getDate(); //day of the month (1-31)
	const month = date.getMonth(); //month of the year (0-11)
	const hour = date.getHours(); //Hour time (0-23)
	const year = date.getFullYear(); //4 digit year
	
	
	function getWeekNumber(d) {
		d = new Date(+d);
		d.setHours(0,0,0,0);
		d.setDate(d.getDate() + 4 - (d.getDay()||7));
		var yearStart = new Date(d.getFullYear(),0,1);
		var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
		return weekNo;
	}
	
	
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
		const week = getWeekNumber(new Date());
		
		if ($scope.todayCount >= max) {
			return;
		}
		
		// Get the current day of the week in text format
		(function() {
			var days1 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			Date.prototype.getDayName = function() {
				return days1[ this.getDay() ];
			};
		})();
		const now = new Date();
		const currentDay = now.getDayName();
		
		$scope.todayCount++;
		$scope.totalCount++;
			
		homeService.increment($scope.todayCount, $scope.totalCount, day, currentDay, week, weekDay, month, year, hour).then(function() {
			$state.reload();
		})

	};
	
	$scope.decrement = () => {
		if ($scope.todayCount <= min) {
			return;
		}
		$scope.todayCount--;
		$scope.totalCount--;
		homeService.decrement().then(function() {
			$state.reload();
		});
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
	};
	
	
	
	
	
	
	
	var initialDate = new Date(2012, 11, 1); // Attention: month is zero-based
	var now = Date.now();
	var difference = now - initialDate;
	var millisecondsPerDay = 24 * 60 * 60 * 1000;
	$scope.daysSince = Math.floor(difference / millisecondsPerDay);
	
	
});