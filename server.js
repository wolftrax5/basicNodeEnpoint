var express = require('express'),
  app = express(),
  port = process.env.PORT || 3005;

let allowCrossDomain = function(req, res, next) {
res.header('Access-Control-Allow-Origin', "*");
res.header('Access-Control-Allow-Headers', "*");
next();
}
app.use(allowCrossDomain);
app.use(express.json());

var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
