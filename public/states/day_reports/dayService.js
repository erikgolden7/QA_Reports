angular.module('qaApp').service('dayService', function($http) {

this.getDayData = ((day) => {
	return $http ({
		method: 'GET',
		url: '/getDayData',
		params: {
			'day': day
		}
	})
})


});