var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view fie

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});



app.listen(port);
console.log('Server listening on ' + port);



























