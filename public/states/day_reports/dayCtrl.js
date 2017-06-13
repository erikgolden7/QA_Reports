angular.module('qaApp').controller('dayCtrl', function($scope, dayService) {
	
	$scope.test = "Reports: Today";
	
	// var one = [];
	
	let day = () => {
		const date = new Date;
		const day = date.getDate(); //day of the month (1-31)
		dayService.getDayData(day).then((res, err) => {
			console.log(res);
			// sortHours(res.data, day);
			$scope.dayData = res;
			// for (key in res.data) {
			// 	console.log(res.data[key].day, day);
			// 	if (res.data[key].day === day) {
			// 		one.push(res.data[key].day);
			// 	}
			// }

			// console.log(one);
			return one;
		})
	};
	day();
	
	
	// let sortHours = (data, day) => {
	// 	for (key in data) {
	// 		console.log(data[key].day, day);
	// 		if (data[key].day === day) {
	// 			one.push(data[key].day);
	// 		}
	// 	}
	// 	return one;
	// 	// for(let i = 0; i < data.length; i++) {
	// 	// 	if (data[i].hour !== 9) {
	// 	// 		one.push(data[i].hour);
	// 	// 	}
	// 	// }
	// };
	// console.log(one);
	var one = dayService.one;
	
	
	
	function convertToArray(obj) {
		return Object.keys(obj).map(function(key) {
			// console.log(obj[key]);
			return obj[key];
		});
	}
	
	
	var xAxis = JSON.parse('{"0":"name1","2":"name2","3":"name3","4":"name4"}');
	var yAxis = JSON.parse('{"0":"8.4113","2":"9.5231","3":"9.0655","4":"7.8400"}');
	
	yAxis = convertToArray(yAxis);
	xAxis = convertToArray(xAxis);
	
	var ctx = document.getElementById("dayChart");
	var dayChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
			datasets: [{
				label: 'Bugs Found',
				data: day(),
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

