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
	
	this.increment = (count, date) => {
		return $http({
			method: 'PUT',
			url: '/updateCounter',
			data: {
				'count' : count,
				'date' : date
			}
		})
	};
	
	this.decrement = (count, date) => {
		return $http({
			method: 'PUT',
			url: '/updateCounter',
			data: {
				'count' : count,
				'date' : date
			}
		})
	};

});