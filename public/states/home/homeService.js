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
	
	
	this.increment = (today, total, date) => {
		console.log(today, total, date);
		return $http({
			method: 'PUT',
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
			method: 'PUT',
			url: '/decrementCount',
			data: {
				'today' : today,
				'total' : total,
				'date' : date
			}
		})
	};

});