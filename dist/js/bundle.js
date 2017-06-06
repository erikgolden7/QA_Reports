angular.module('qaApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/login');
	
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: './index.html',
		controller: 'homeCtrl'
	})
	.state('day', {
		url: '/day',
		templateUrl: '../states/day_reports/day.html',
		controller: 'dayCtrl'
	})
	.state('week', {
		url: '/week',
		templateUrl: '../states/week_reports/week.html',
		controller: 'weekCtrl'
	})
	.state('month', {
		url: '/month',
		templateUrl: '../states/month_reports/month.html',
		controller: 'monthCtrl'
	})
	.state('all', {
		url: '/all',
		templateUrl: '../states/all_reports/all.html',
		controller: 'allCtrl'
	})
	
});

angular.module('qaApp').controller('allCtrl', function($scope) {
	
	$scope.test = "Reports: All Time";
	
	// $scope.htmlEndTime = () => {
	// 	let date = new Date();
	// 	assessmentService.htmlEndTime($scope.user.id, date);
	// 	$scope.stop1 = false;
	// };
	
});



angular.module('qaApp').controller('dayCtrl', function($scope) {
	
	$scope.test = "Reports: Today";
	
	// $scope.htmlEndTime = () => {
	// 	let date = new Date();
	// 	assessmentService.htmlEndTime($scope.user.id, date);
	// 	$scope.stop1 = false;
	// };
	
});



angular.module('qaApp').controller('homeCtrl', function($scope) {
	
	$scope.count = 7;
	
	$scope.htmlEndTime = () => {
		let date = new Date();
		assessmentService.htmlEndTime($scope.user.id, date);
		$scope.stop1 = false;
	};
	
});
angular.module('qaApp').controller('monthCtrl', function($scope) {
	
	$scope.test = "Reports: This Month";
	
	// $scope.htmlEndTime = () => {
	// 	let date = new Date();
	// 	assessmentService.htmlEndTime($scope.user.id, date);
	// 	$scope.stop1 = false;
	// };
	
});



angular.module('qaApp').controller('weekCtrl', function($scope) {
	
	$scope.test = "Reports: This Week";
	
	// $scope.htmlEndTime = () => {
	// 	let date = new Date();
	// 	assessmentService.htmlEndTime($scope.user.id, date);
	// 	$scope.stop1 = false;
	// };
	
});



//# sourceMappingURL=bundle.js.map
