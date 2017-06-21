const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./config.js');

const app = module.exports = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

const massiveInstance = massive.connectSync({connectionString: `postgres://${config.postgresUser}:${config.postgresPass}@pellefant.db.elephantsql.com/${config.postgresUser}`});

app.set('db', massiveInstance);
const db = app.get('db');

// db.createTable([],(err, result) => {
// 	if(err){
// 		console.log(err);
// 	}
// });

app.get('/getTodayCount', function(req, res) {
	db.getTodayCount([req.query.day, req.query.month, req.query.year], function(err, data) {
		res.send(data);
	})
});

app.get('/getTotalCount', function(req, res) {
	db.getTotalCount(function(err, count) {
		res.send(count);
	})
});

app.post('/incrementCount', function(req, res) {
	let body = req.body;
	db.incrementCount([body.today, body.total, body.day, body.currentDay, body.week, body.weekDay, body.month, body.year, body.hour], (err, result) => {
		res.send(result)
	})
});

app.delete('/decrementCount', function(req, res) {
	db.decrementCount((err, result) => {
		res.send(result)
	})
});

app.get('/getDayData', function(req, res) {
	db.getDayData([req.query.day], (err, result) => {
		res.send(result);
	})
});

app.get('/getInputDayData', function(req, res) {
	db.getInputDayData([req.query.inputDay, req.query.inputMonth, req.query.inputYear], (err, result) => {
		res.send(result);
	})
});

app.get('/getPreviousDayData', function(req, res) {
	db.getPreviousDayData([req.query.day], (err, result) => {
		res.send(result);
	})
});

app.get('/getWeekData', function(req, res) {
	db.getWeekData([req.query.week], (err, result) => {
		res.send(result);
	})
});

app.get('/getMonthData', function(req, res) {
	db.getMonthData([req.query.month], (err, result) => {
		res.send(result);
	})
});

app.get('/getYearData', function(req, res) {
	db.getYearData([req.query.month], (err, result) => {
		res.send(result);
	})
});

app.listen(config.port, function() {
	console.log('Listening to port:', config.port)
});
