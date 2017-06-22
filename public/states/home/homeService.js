angular.module('qaApp').service('homeService', function($http, $q) {
	
	this.getTodayCount = (day, month, year) => {
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

	this.getTotalCount = () => {
		return $http ({
			method: 'GET',
			url: '/getTotalCount'
		})
	};
	
	this.increment = (today, total, day, currentDay, week, weekDay, month, year, hour) => {
		return $http({
			method: 'POST',
			url: '/incrementCount',
			data: {
				'today' : today,
				'total' : total,
				'day' : day,
				'currentDay' : currentDay,
				'week' : week,
				'weekDay' : weekDay,
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
	
	this.getResetCount = (year, month, day) => {
		return $http({
			method: 'GET',
			url: '/getResetCount',
			params: {
				'year' : year,
				'month' : month,
				'day' : day
			}
		})
	};
	
	this.resetCounter = (day, month, year) => {
		return $http({
			method: 'PUT',
			url: '/resetCounter',
			data: {
				'day': day,
				'month': month,
				'year': year
			}
		})
	};
});