var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var acercaRouter = require('./routes/acerca'); 


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/acerca', acercaRouter)

//ejemplo de la profesora
app.get('/prueba', function(req,res){
  res.send('Hola soy la paquina de prueba')
})
//ruta 1: Página de inicio
app.get('/home', (req, res) => {
  res.send('¡Bienvenido a la página de inicio!');
});

// Ruta 2: Página galeria
app.get('/galeria', (req, res) => {
  res.send('Esta es la página galeria de mi aplicación.');
});

// Ruta 3: Página de contacto
app.get('/contacto', (req, res) => {
  res.send('Ponte en contacto con nosotros');
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
