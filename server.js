const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./config.js');

const app = module.exports = express();
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

/////////////
// DATABASE //
/////////////
const massiveInstance = massive.connectSync({connectionString: `postgres://${config.postgresUser}:${config.postgresPass}@localhost/qa_reports`});

app.set('db', massiveInstance);
const db = app.get('db');


app.get('/getTodayCount', function(req, res) {
	console.log(req.query.day, req.query.month, req.query.year);
	db.getTodayCount([req.query.day, req.query.month, req.query.year], function(err, data) {
		console.log("today count", data, err);
		res.send(data);
	})
});

app.get('/getTotalCount', function(req, res) {
	db.getTotalCount(function(err, count) {
		// console.log(count[0].totalcount, err);
		res.send(count);
	})
});

app.post('/incrementCount', function(req, res) {
	db.incrementCount([req.body.today, req.body.total, req.body.day, req.body.month, req.body.year, req.body.hour], (err, result) => {
		res.send(result)
	})
});

app.delete('/decrementCount', function(req, res) {
	console.log("server");
	db.decrementCount(function (err, res) {
		if (!err) {
			console.log("removed");
			res.send(status(200))
		}
		else {
			console.log(err);
		}
	})
});

// app.get('/getDayData', function(req, res) {
// 	db.getDayData(function(err, data) {
// 		res.send(data);
// 	})
// });


var port = 3000;
app.listen(port, function() {
	console.log('Listening to port:', port)
});
