var express = require('express');
var router = express.Router();

// var params = require('../_params');

var getPendingTasks = require('./handlers/getPendingTasks');
var addOneTask = require('./handlers/addOneTask');
var getCompletedTasks = require('./handlers/getCompletedTasks');
var toggleCompletedTasks = require('./handlers/toggleCompletedTasks');
var removeOneTask = require('./handlers/removeOneTask');

function getRouter( db ) {

	// router.use( params )
	router.get( '/tasks', function( req, res ) {
		getPendingTasks( db, req, res )
	})
	
	router.post( '/tasks', addOneTask.bind( null, db ) )
 	router.get( '/completed', function( req, res ) { getCompletedTasks( db, req, res ) } )
	router.put( '/tasks/:id', function( req, res ) { toggleCompletedTasks( db, req, res, false ) } )
	router.put( '/completeAll', function( req, res ) { toggleCompletedTasks( db, req, res, true ) } )
	router.delete( '/tasks/:id', function( req, res ) { removeOneTask( db, req, res ) } )

	return router;
}
module.exports = getRouter;