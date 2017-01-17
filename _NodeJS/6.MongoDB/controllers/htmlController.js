var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var Person = require('../models/person.js');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
	
		// get all the users
		Person.find({}, function(err, users) {
			if (err) throw err;
			res.render('index', {users: users});
		});
	});
	
	app.get('/person/:id', function(req, res) {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	});
	
	app.post('/person', urlencodedParser, function(req, res) {

       	var person = Person({
		  firstname: req.body.firstname,
		  lastname: req.body.lastname,
		  address: '555 Main St.'
		})

		person.save(function(err) {
			if (err) throw err;
			res.send('person saved!');
		});
	});	
}