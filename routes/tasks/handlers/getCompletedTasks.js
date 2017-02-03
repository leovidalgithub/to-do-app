function getCompletedTasks( db, req, res ) {

	db.collection( 'tasks' )
		.find( { completed : true } )
		.toArray( function( err, docs ) {
			if ( err ) throw err;
			res.render( 'completedTasks', { title : 'COMPLETED TASKS', tasks : docs } );
		})
}

module.exports = getCompletedTasks;


