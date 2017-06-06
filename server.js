const express = require('express');
const bodyParser = require('body-parser');
// const massive = require('massive');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const githubStrategy = require('passport-github2').Strategy;
// const config = require('./config.js');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
//
//
const app = module.exports = express();
// app.use(bodyParser.json());
//
//
// app.use(session({
// 	secret: config.secret,
// 	saveUninitialized: false,
// 	resave: true,
// 	expiration: 1000*60*60*60*24*14
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(__dirname + '/public'));


var port = 3000;
app.listen(port, function() {
	console.log('Listening to port:', port)
});
