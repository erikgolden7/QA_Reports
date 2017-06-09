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