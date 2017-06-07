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


angular.module('qaApp').controller('monthCtrl', function($scope) {
	
	$scope.test = "Reports: This Month";
	
	// $scope.htmlEndTime = () => {
	// 	let date = new Date();
	// 	assessmentService.htmlEndTime($scope.user.id, date);
	// 	$scope.stop1 = false;
	// };
	
});




angular.module('qaApp').controller('homeCtrl', function($scope, homeService) {
	
	$scope.totalCount = 0;
	$scope.todayCount = 0;
	
	$scope.increment = () => {
		const date = new Date();
		$scope.todayCount++;
		$scope.totalCount++;
		homeService.increment($scope.todayCount, $scope.totalCount, date);
	};
	
	$scope.decrement = () => {
		const date = new Date();
		$scope.todayCount--;
		$scope.totalCount--;
		homeService.decrement($scope.todayCount, $scope.totalCount, date);
	};
	
	
	
	let getTodayCount = () => {
		homeService.getTodayCount().then(function(res){
			$scope.todayCount = res.data;
		});
	};
	getTodayCount();

	let getTotalCount = () => {
		homeService.getTotalCount().then(function(res){
			$scope.totalCount = res.data;
		});
	};
	getTotalCount();

	
});
angular.module('qaApp').service('homeService', function($http, $q) {

	this.increment = (today, total, date) => {
		console.log(today, total, date);
		return $http({
			method: 'POST',
			url: '/incrementCount',
			data: {
				'today' : today,
				'total' : total,
				'date' : date
			}
		})
	};

	this.decrement = (today, total, date) => {
		return $http({
			method: 'POST',
			url: '/decrementCount',
			data: {
				'today' : today,
				'total' : total,
				'date' : date
			}
		})
	};
	
	this.getTodayCount = function() {
		return $http ({
			method: 'GET',
			url: '/getTodayCount'
		})
	};
	
	this.getTotalCount = function() {
		return $http ({
			method: 'GET',
			url: '/getTotalCount'
		})
	};

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
