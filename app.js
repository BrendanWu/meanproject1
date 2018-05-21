<<<<<<< HEAD
require('./api/data/dbconnection.js').open();
=======
>>>>>>> 6e954cb902c409d7bca94a1751dc43ba533886f3
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

// Define the port to run on
app.set('port', 3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));

// Add some routing
app.use('/api', routes);

=======
// Add some routing
app.use('/api', routes);

>>>>>>> 6e954cb902c409d7bca94a1751dc43ba533886f3
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
