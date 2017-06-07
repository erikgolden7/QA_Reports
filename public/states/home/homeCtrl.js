
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
		const date = new Date();
		if ($scope.todayCount >= max) {
			return;
		}
		$scope.todayCount++;
		$scope.totalCount++;
		homeService.increment($scope.todayCount, $scope.totalCount, date);
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