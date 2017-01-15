var express = require('express');
var quotes = require('./quotes'); 
var wiki = require('./wiki.js'); 

var app = express();

// Routing
app.get('/quotes', function (req, res) {
  res.send(quotes[Math.floor(Math.random()*quotes.length)]);
});

// Routing with express router
app.use('/wiki', wiki);

// Static Files
app.use(express.static('public'));

// Error Hanfling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

//
app.listen(3000, function () {
  console.log('listening on port 3000!');
});