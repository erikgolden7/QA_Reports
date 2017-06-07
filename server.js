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
const massiveInstance = massive.connectSync({connectionString: `postgres://${config.postgresUser}:${config.postgresPass}@localhost/postgres`});

app.set('db', massiveInstance);
const db = app.get('db');


app.get('/getTodayCount', function(req, res) {
	db.getTodayCount(function(err, count) {
		console.log(count[0].daycount, err);
		res.send(count);
	})
});

app.get('/getTotalCount', function(req, res) {
	db.getTotalCount(function(err, count) {
		console.log(count[0].totalcount, err);
		res.send(count);
	})
});

app.put('/incrementCount', function(req, res) {
	db.incrementCount([req.body.today, req.body.total, req.body.date], (err, result) => {
		res.send(result)
	})
});

app.put('/decrementCount', function(req, res) {
	db.decrementCount([req.body.today, req.body.total, req.body.date], (err, result) => {
		res.send(result)
	})
});

app.get('/getDayData', function(req, res) {
	db.getDayData(function(err, data) {
		res.send(data);
	})
});


var port = 3000;
app.listen(port, function() {
	console.log('Listening to port:', port)
});
