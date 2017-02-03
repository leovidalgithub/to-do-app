var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

function toggleCompletedTasks( db, req, res, setAllToCompleted ) {

		var query = {};
		var set = true;
		var options = { 'multi' : true };

		if ( !setAllToCompleted ) { // ---------------------> ONE TASK COMPLETED TOGGLE
			var idToSetCompleted = req.params.id;
			console.log('idToSetCompleted ' + idToSetCompleted);
			query = { _id : new ObjectID( idToSetCompleted ) };
		}

		db.collection( 'tasks' ).find( query )
			.toArray( function( err, docs ) {

				if ( !setAllToCompleted ) { // --------------> ONE TASK COMPLETED TOGGLE
					set = !docs[0].completed;
				}
					
				db.collection( 'tasks' )
					.update( query ,
				 			{ $set : { completed : set } } , options, function( err, updated ) {
								if( err ) throw err;
									console.dir( 'Successfully updated ' + updated );
									res.send( 'Done!' );
				 	})
		})

}
module.exports = toggleCompletedTasks;
