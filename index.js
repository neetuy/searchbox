const express = require('express');
const bodyParser = require('body-parser');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash    = require('connect-flash');


const app = express();
// tell the app to look for static files in these directories
require('./server/config/passport')(passport);	
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));


app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

require('./server/routes/auth.js')(app, passport);

// routes
// const authRoutes = require('./server/routes/auth');
// app.use('/auth', authRoutes);

// start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000 or http://127.0.0.1:4000');
});

