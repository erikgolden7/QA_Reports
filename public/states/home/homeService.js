angular.module('qaApp').service('homeService', function($http, $q) {
	
	this.updateCounter = (count, date) => {
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