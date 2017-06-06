
angular.module('qaApp').controller('homeCtrl', function($scope) {
	
	// $scope.todayCount = 0;
	$scope.totalCount = 0;
	
	// let getTodayCount = () => {
	// 	homeService.getTodayCount().then(function(res){
	// 		$scope.todayCount = res.data;
	// 	});
	// };
	// getTodayCount();
	//
	// let getTotalCount = () => {
	// 	homeService.getTotalCount().then(function(res){
	// 		$scope.totalCount = res.data;
	// 	});
	// };
	// getTotalCount();
	
	
	$scope.todayCount = 0;
	let max = $scope.todayCount + 99999;
	let min = $scope.todayCount;
	
	$scope.increment = function() {
		if ($scope.todayCount >= max) { return; }
		$scope.todayCount++;
		$scope.totalCount++;
	};
	$scope.decrement = function() {
		if ($scope.todayCount <= min) { return; }
		$scope.todayCount--;
		$scope.totalCount--;
	};
	
	
	
	
	// $scope.increment = () => {
	// 	// let date = new Date();
	// 	// homeService.increment(count, date);
	// 	todayCount++;
	// 	console.log(todayCount);
	// 	return todayCount;
	// };
	//
	// $scope.decrement = (todayCount) => {
	// 	// let date = new Date();
	// 	// homeService.decrement(count, date);
	// 	todayCount--;
	// 	return todayCount;
	// };
	
	
});