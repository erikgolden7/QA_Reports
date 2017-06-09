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
	db.incrementCount([req.body.today, req.body.total, req.body.day, req.body.month, req.body.year, req.body.hour], (err, result) => {
		res.send(result)
	})
});

app.delete('/decrementCount', function(req, res) {
	db.decrementCount( (err, result) => {
		res.send("it worked")
	})
});



app.listen(config.port, function() {
	console.log('Listening to port:', config.port)
});
