var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');

var indexRouter = require('./routes/index');
var carsRouter = require('./routes/cars');

var app = express();

app.locals.con = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'dev',
    password: 'hallon',
    database: 'classicmodels'
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cars', carsRouter);

module.exports = app;
