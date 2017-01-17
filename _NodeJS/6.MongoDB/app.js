var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Person = require('./models/person.js');


mongoose.connect('mongodb://Niklaso:Mongoboy1#@ds111489.mlab.com:11489/addressbook');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


htmlController(app);

apiController(app);

app.listen(port);