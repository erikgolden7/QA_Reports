angular.module('qaApp').service('dayService', function($http) {

	var one=[];
	
this.getDayData = ((day) => {
	// console.log("service");
	return $http ({
		method: 'GET',
		url: '/getDayData',
		params: {
			'day': day
		}
	}).then(function successCallback(res) {
		console.log("success");
		var max = 24;
		for (key in res.data) {
			// console.log(res.data[key].day, day);
			if (res.data[key].day === day) {
				one.push(res.data[key].day);
			}
		}
		// console.log(one);
		return one;
	}, function errorCallback() {
		console.log("Error");
	});
});



});