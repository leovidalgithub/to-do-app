var express     = require('express'),
	app         = express(),
	MongoClient = require('mongodb').MongoClient,
	bodyParser  = require( 'body-parser'),
	url         = 'mongodb://to-do-user:pqowpqow@ds153815.mlab.com:53815/to-do-app';

	var getRouterTasks = require('./routes/tasks');

// PREGUNTAS **********************************************************************************
// Para hacer el toggle de completed puedo usar { $bit: { favorite: { xor: NumberInt(1) } } }
// Todo esto dónde lo pongo? 
// PREGUNTAS **********************************************************************************
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	app.get('/', function(req,res,next) {
		res.redirect('/tasks');
		next();
	});

	var db = MongoClient.connect( url );
	db.then( function( db ) {

			app.use('/', getRouterTasks( db ) );

			app.listen( 3000, function() {
				console.log ( "listening to port 3000" );
			})
	})
	.catch(function( err ) {
		throw new Error( "something failed in the connection" );
	})


	

