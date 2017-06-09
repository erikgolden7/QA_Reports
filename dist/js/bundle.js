angular.module('qaApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '../states/home/home.html',
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
	
	var ctx = document.getElementById("allChart");
	var allChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [{
				label: 'Bugs Found',
				data: [12, 19, 3, 78, 2, 73, 123, 53, 7, 35, 66, 4],
				backgroundColor: 'rgba(72,126,173,.3)',
				borderColor: 'rgba(108,108,108,1)',
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
	
});



angular.module('qaApp').controller('dayCtrl', function($scope) {
	
	$scope.test = "Reports: Today";
	
	// $scope.date = moment().format('L');
	
	// var sql = cartodb.SQL({ user: 'andrew' });
	// sql.execute("SELECT date_part('Month', t.date) as month, count(*) total, sum(damage)  damage FROM tornados t GROUP BY date_part('Month', t.date) ORDER BY date_part('Month', t.date) ASC").done(function(data) {
	// 	console.log(data)
	// 	var total = [];
	// 	var damage = [];
	// 	for (i in data.rows){
	// 		total.push(data.rows[i].total)
	// 		damage.push(data.rows[i].damage)
	// 	}
	// 	console.log(data);
	//
	
	let date = new Date;
	let day = date.getDay(); //day of the week (0-6)
	let day2 = date.getDate(); //day of the month (1-31)
	let month = date.getMonth(); //month of the year (0-11)
	
	
	
	
		
		// $scope.getDayData = () => {
		// 	dayService.getDayData().then(function(res, err){
		// 		console.log("homeCtrl", res, err);
		// 		$scope.dayCount = res.data[0].totalcount;
		// 	});
		// };
		// getTotalCount();
	
		
		
	var ctx = document.getElementById("dayChart");
	var dayChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
			datasets: [{
				label: 'Bugs Found',
				data: [2, 159, 343, 486, 274, 433, 413, 553, 447, 355, 646, 443, 244, 159, 343, 386, 524, 733, 413, 553, 447, 355, 646, 43],
				backgroundColor: 'rgba(72,126,173,.3)',
				borderColor: 'rgba(108,108,108,1)',
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
	
});


// angular.module('qaApp').service('homeService', function($http, $q) {
//
//
// 	// this.getDayData = function() {
// 	// 	return $http ({
// 	// 		method: 'GET',
// 	// 		url: '/getDayData'
// 	// 	})
// 	// };
// 	//
//
// });
angular.module('qaApp').controller('homeCtrl', function($scope, $rootScope, homeService) {
	
	const max = 99999;
	const min = 0;
	const date = new Date;
	const day = date.getDate(); //day of the month (1-31)
	const month = date.getMonth(); //month of the year (0-11)
	const hour = date.getHours(); //Hour time (0-23)
	const year = date.getFullYear(); //4 digit year
	
	
	let getTodayCount = (day, month, year) => {
		homeService.getTodayCount(day, month, year).then(function(res, err){
			// console.log(res.data);
			$scope.todayCount = res.data[0].count;
		});
	};
	getTodayCount(day, month, year);
	
	let getTotalCount = () => {
		homeService.getTotalCount().then(function(res, err){
			$rootScope.totalCount = res.data[0].count;
			console.log(res.data[0].count);
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
angular.module('qaApp').service('homeService', function($http, $q) {
	
	this.getTodayCount = function(day, month, year) {
		return $http ({
			method: 'GET',
			url: '/getTodayCount',
			params: {
				'day': day,
				'month' : month,
				'year' : year
			}
		})
	};

	this.getTotalCount = function() {
		return $http ({
			method: 'GET',
			url: '/getTotalCount'
		})
	};
	
	this.increment = (today, total, day, month, year, hour) => {
		return $http({
			method: 'POST',
			url: '/incrementCount',
			data: {
				'today' : today,
				'total' : total,
				'day' : day,
				'month' : month,
				'year' : year,
				'hour' : hour
			}
		})
	};
	
	this.decrement = () => {
		return $http({
			method: 'DELETE',
			url: '/decrementCount',
		})
	};

});
angular.module('qaApp').controller('monthCtrl', function($scope) {
	
	$scope.test = "Reports: This Month";
	
	var ctx = document.getElementById("monthChart");
	var monthChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30","31"],
			datasets: [{
				label: 'Bugs Found',
				data: [32, 659, 343, 386, 274, 533, 213, 353, 27, 345, 346, 33, 324, 659, 343, 386, 274, 733, 213, 353, 27, 345, 246, 33, 32, 659, 343, 486, 274, 533, 213],
				backgroundColor: 'rgba(72,126,173,.3)',
				borderColor: 'rgba(108,108,108,1)',
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
	
});



angular.module('qaApp').controller('weekCtrl', function($scope) {
	
	$scope.test = "Reports: This Week";
	
	var ctx = document.getElementById("weekChart");
	var weekChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			datasets: [{
				label: 'Bugs Found',
				data: [222, 859, 743, 786, 44, 533, 473],
				backgroundColor: 'rgba(72,126,173,.3)',
				borderColor: 'rgba(108,108,108,1)',
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
	
});



//# sourceMappingURL=bundle.js.map
