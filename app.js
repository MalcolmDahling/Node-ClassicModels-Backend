var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');

const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');
const contactRouter = require('./routes/contact');


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
app.use('/contact', contactRouter);

module.exports = app;
