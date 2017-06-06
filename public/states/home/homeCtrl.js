
angular.module('qaApp').controller('homeCtrl', function($scope) {
	
	$scope.count = 7;
	
	$scope.increment = () => {
		let date = new Date();
		
	};
	
	
	
	
	
	
	
	
	$scope.htmlEndTime = () => {
		let date = new Date();
		assessmentService.htmlEndTime($scope.user.id, date);
		$scope.stop1 = false;
	};
	
});