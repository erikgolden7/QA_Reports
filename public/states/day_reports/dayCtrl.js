angular.module('qaApp').controller('dayCtrl', function($scope, dayService) {
	
	$scope.test = "Reports: Today";
	
	
	let day = () => {
		const date = new Date;
		const day = date.getDate(); //day of the month (1-31)
		dayService.getDayData(day).then((res, err) => {
			$scope.dayData = res.data;
			sortHours($scope.dayData);
		})
	};
	day();
	
	
	let sortHours = (data) => {
	const one = [];
		for(let i = 0; i < data.length; i++) {
			if (data[i].hour !== 9) {
				one.push(data[i].hour);
			}
		}
	};
	// console.log(one);
		
	var ctx = document.getElementById("dayChart");
	var dayChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
			datasets: [{
				label: 'Bugs Found',
				data: [79, 159, 343, 486, 274, 433, 413, 553, 447, 355, 646, 443, 244, 159, 343, 386, 524, 733, 413, 553, 447, 355, 646, 43],
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

