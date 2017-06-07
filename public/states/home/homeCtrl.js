
angular.module('qaApp').controller('homeCtrl', function($scope, homeService) {
	
	const max = 99999;
	const min = 0;

	
	let getTodayCount = () => {
		homeService.getTodayCount().then(function(res, err){
			$scope.todayCount = res.data[0].daycount;
		});
	};
	getTodayCount();
	
	let getTotalCount = () => {
		homeService.getTotalCount().then(function(res, err){
			console.log("homeCtrl", res, err);
			$scope.totalCount = res.data[0].totalcount;
		});
	};
	getTotalCount();
	
	
	$scope.increment = () => {
		let date = new Date;
		let day = date.getDate(); //day of the month (1-31)
		let month = date.getMonth(); //month of the year (0-11)
		if ($scope.todayCount >= max) {
			return;
		}
		$scope.todayCount++;
		$scope.totalCount++;
		homeService.increment($scope.todayCount, $scope.totalCount, $scope.day, $scope.month);
	};
	
	$scope.decrement = () => {
		const date = new Date();
		if ($scope.todayCount <= min) {
			return;
		}
		$scope.todayCount--;
		$scope.totalCount--;
		homeService.decrement($scope.todayCount, $scope.totalCount, date);
	};
	
});