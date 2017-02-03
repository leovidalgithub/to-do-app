var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

function removeOneTask( db, req, res ) {

		var idTaskToDelete = req.params.id;
		db.collection( 'tasks' ).remove( { _id : new ObjectID( idTaskToDelete ) }, function( err, removed ) {
			if(err) throw err;
			console.dir( 'Successfully removed ' + removed );
			res.send('Remove Done!');
		});
}

module.exports = removeOneTask;




