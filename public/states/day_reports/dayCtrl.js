angular.module('qaApp').controller('dayCtrl', function($scope) {
	
	$scope.test = "Reports: Today";
	
	// $scope.date = moment().format('L');
	
	// var sql = cartodb.SQL({ user: 'andrew' });
	// sql.execute("SELECT date_part('Month', t.date) as month, count(*) total, sum(damage)  damage FROM tornados t GROUP BY date_part('Month', t.date) ORDER BY date_part('Month', t.date) ASC").done(function(data) {
	// 	console.log(data)
	// 	var total = [];
	// 	var damage = [];
	// 	for (i in data.rows){
	// 		total.push(data.rows[i].total)
	// 		damage.push(data.rows[i].damage)
	// 	}
	// 	console.log(data);
	//
	
	let date = new Date;
	let day = date.getDay(); //day of the week (0-6)
	let day2 = date.getDate(); //day of the month (1-31)
	let month = date.getMonth(); //month of the year (0-11)
	
	console.log(day, day2, month); //3, 7, 5
	
	
	
	
		
		// $scope.getDayData = () => {
		// 	dayService.getDayData().then(function(res, err){
		// 		console.log("homeCtrl", res, err);
		// 		$scope.dayCount = res.data[0].totalcount;
		// 	});
		// };
		// getTotalCount();
	
		
		
	var ctx = document.getElementById("dayChart");
	var dayChart = new Chart(ctx, {
		type: 'line',
		responsive: true,
		maintainAspectRatio: true,
		data: {
			labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
			datasets: [{
				label: 'Bugs Found',
				data: [2, 159, 343, 486, 274, 433, 413, 553, 447, 355, 646, 443, 244, 159, 343, 386, 524, 733, 413, 553, 447, 355, 646, 43],
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

