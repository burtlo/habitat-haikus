var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var nconf = require('nconf');
const nconf_file = process.env.APP_CONFIG || './default-config.json';
nconf.file({ file: nconf_file });

console.log("Loading Configuration");

console.log(nconf.get('mongo'));
var dbConnectionString = 'mongodb://' + nconf.get('mongo')['host'] + ':' + nconf.get('mongo')['port'] + "/haikus'";
console.log(dbConnectionString);

console.log("Connecting to Database");

var mongoose = require('mongoose');
mongoose.connect(dbConnectionString, { useMongoClient: true });

console.log("Creating routes");

var index = require('./routes/index');
var haikus = require('./routes/haikus');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/haikus', haikus);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
