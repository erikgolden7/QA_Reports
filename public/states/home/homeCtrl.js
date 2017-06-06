
angular.module('qaApp').controller('homeCtrl', function($scope) {
	
	$scope.count = 7;
	$scope.totalCount = 59302;
	
	// let getCount = () => {
	// 	homeService.getCount().then(function(res){
	// 		$scope.count = res.data;
	// 	});
	// };
	// getCount();
	
	
	
	$scope.increment = () => {
		let date = new Date();
		homeService.increment(count, date);
	};
	
	
	
});