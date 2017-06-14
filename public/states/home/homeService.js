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
	
	this.increment = (today, total, day, weekDay, month, year, hour) => {
		return $http({
			method: 'POST',
			url: '/incrementCount',
			data: {
				'today' : today,
				'total' : total,
				'day' : day,
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
	
	
	
	
	// this.getWeekData = (day) => {
	// 	return $http ({
	// 		method: 'GET',
	// 		url: '/getWeekData',
	// 		params: {
	// 			'day': day
	// 		},
	// 	})
	// };
	//
	//
	//
	//
	// this.testing = (date) => {
	// 	const test = date / 7;
	//
	// 	if (test > 0 && test <= 1.107) {
	// 		console.log("1")
	// 		return 1;
	// 	}
	// 	else if (test > 1.107 && test <= 2.2) {
	// 		console.log("2")
	// 		return 2;
	// 	}
	// 	else if (test > 2.2 && test <= 3.32) {
	// 		console.log("3")
	// 		return 3;
	// 	}
	// 	else if (test > 3.32 && test <= 4.428) {
	// 		console.log("14")
	// 		return 4;
	// 	}
	// };
	

});