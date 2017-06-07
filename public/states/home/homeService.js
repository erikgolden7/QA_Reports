angular.module('qaApp').service('homeService', function($http, $q) {
	
	
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
	
	
	this.increment = (today, total, day, month) => {
		console.log(today, total, day, month);
		return $http({
			method: 'PUT',
			url: '/incrementCount',
			data: {
				'today' : today,
				'total' : total,
				'day' : day,
				'month' : month
			}
		})
	};

	this.decrement = (today, total, day, month) => {
		return $http({
			method: 'PUT',
			url: '/decrementCount',
			data: {
				'today' : today,
				'total' : total,
				'day' : day,
				'month' : month
			}
		})
	};

});