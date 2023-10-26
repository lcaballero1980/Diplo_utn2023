var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require ('dotenv').config();
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/**
 * Select
 */
pool.query("select nombre, edad from empleados").then(function (resultados) {
    console.log(resultados)
});

/**
 * ingresando un nuevo empleados 
 */
// var obj = {
//     nombre: 'Juan',
//     apellido: 'Lopez',
//     trabajo: 'docente',
//     edad: 38,
//     salario: 1500,
//     email:'juanlopez@gmail.com'
// }
// pool.query("insert into empleados set ?", [obj]).then(function (resultados) {
//     console.log(resultados)
// });

/**
 * Update
 */
// var id = 32;
// var obj = {
//     nombre: 'Pablo',
//     apellido: 'Gomez'
// }
// pool.query('update empleados set ? where id_empleados=?', [obj , id]).then(function (resultados) {
//       console.log(resultados)
// });


/**
 * 
 */

module.exports = app;
