var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var UsersRoute = require('./routes/UsersRoute');
var GoodsRoute = require('./routes/GoodsRoute');
var RecgoodsRoute = require('./routes/RecgoodsRoute');
var LimitgoodsRoute = require('./routes/LimitgoodsRoute');
var TwoareagoodsRoute = require('./routes/TwoareagoodsRoute');
var OrderRoute = require('./routes/OrderRoute');
var shopcarRoute = require('./routes/ShopcarRoute');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:"fdfdfad ",                         //加密的方式；
  resave:true,
  saveUninitializd:true
  //cookie:{magAge:1000*60*60*60}         //由于cookie是临时存放的，这条代码是设置cookie的缓存时间；
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/*',function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Access-Control-Allow-Method","GET,POST");
	next();
});



app.use('/', routes);
app.use('/users', UsersRoute);
app.use('/goods', GoodsRoute);
app.use('/recgoods', RecgoodsRoute);
app.use('/limitgoods', LimitgoodsRoute);
app.use('/twoareagoods', TwoareagoodsRoute);
app.use('/order', OrderRoute);
app.use('/shopcar', shopcarRoute);
// catch 404 and forward to error handler



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//启动服务器的代码；
var server = app.listen(3005, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;
