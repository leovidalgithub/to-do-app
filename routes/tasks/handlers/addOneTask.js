var dateFormat  = require('dateformat');
    // counter     = 0;

function addOneTask( db, req, res ) {

		if ( !req.body || !req.body.task || req.body.task.trim().length == 0  ) res.send( 'Error POST AddTasks' );
		
		var newTask = {
			// id : ++counter,
			task : req.body.task,
			taskDate: dateFormat( new Date(), "yyyy/mm/dd hh:MM" ),
			completed: false
		}

		db.collection( 'tasks' )
			.insert( newTask, function( err, inserted ) {
				if(err) throw err;
				console.dir( "Successfully inserted: " + JSON.stringify( inserted ) );
				res.redirect('/tasks');
			});
}

module.exports = addOneTask;



