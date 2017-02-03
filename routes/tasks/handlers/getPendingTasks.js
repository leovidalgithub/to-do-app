function getPendingTasks( db, req, res ) {

	db.collection( 'tasks' )
		.find( { completed : false } )
		.toArray( function( err, docs ) {
			if ( err ) throw err;
			res.render( 'pendingTasks', { title : 'PENDING TASKS', tasks : docs } );
		})
}

module.exports = getPendingTasks;