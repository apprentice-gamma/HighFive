// var express = require('express'),
//     app = express();

// app.use(express.static(__dirname + ''));

// app.listen(8080)
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});