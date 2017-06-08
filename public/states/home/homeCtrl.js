
angular.module('qaApp').controller('homeCtrl', function($scope, homeService) {
	
	const max = 99999;
	const min = 0;
	const date = new Date;
	const day = date.getDate(); //day of the month (1-31)
	const month = date.getMonth(); //month of the year (0-11)
	const hour = date.getHours(); //Hour time (0-23)
	const year = date.getFullYear(); //4 digit year

	
	let getTodayCount = (day, month, year) => {
		homeService.getTodayCount(day, month, year).then(function(res, err){
			console.log(res.data);
			$scope.todayCount = res.data[0].count;
		});
	};
	getTodayCount(day, month, year);
	
	let getTotalCount = () => {
		homeService.getTotalCount().then(function(res, err){
			console.log("homeCtrl", res, err);
			$scope.totalCount = res.data[0].count;
		});
	};
	getTotalCount(day, month, year, hour);
	
	
	$scope.increment = () => {
		const date = new Date;
		const day = date.getDate(); //day of the month (1-31)
		const month = date.getMonth(); //month of the year (0-11)
		const hour = date.getHours(); //Hour time (0-23)
		const year = date.getFullYear(); //4 digit year
		if ($scope.todayCount >= max) {
			return;
		}
		$scope.todayCount++;
		$scope.totalCount++;
		homeService.increment($scope.todayCount, $scope.totalCount, day, month, year, hour);
	};
	
	$scope.decrement = () => {
		const date = new Date;
		const day = date.getDate(); //day of the month (1-31)
		const month = date.getMonth(); //month of the year (0-11)
		const year = date.getFullYear(); //4 digit year
		if ($scope.todayCount <= min) {
			return;
		}
		$scope.todayCount--;
		$scope.totalCount--;
		homeService.decrement($scope.todayCount, $scope.totalCount, day, month, year);
	};
	
	// $scope.decrement = () => {
	// 	const date = new Date();
	// 	if ($scope.todayCount <= min) {
	// 		return;
	// 	}
	// 	$scope.todayCount--;
	// 	$scope.totalCount--;
	// 	homeService.decrement($scope.todayCount, $scope.totalCount, date);
	// };
	
	
	
	
	// Get the modal
	var modal = document.getElementById('myModal');

// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
	btn.onclick = function() {
		modal.style.display = "block";
	}

// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
});