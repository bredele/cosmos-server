
/**
 * Module dependencies.
 * @api private
 */

var feathers = require('feathers');
var http = require('http');
var https = require('https');
var mixin = require('./utils').mixin;


/**
 * Cosmos factory.
 * @api private
 */

module.exports = Cosmos;


/**
 * Cosmos constructor.
 * @api public
 */

function Cosmos(options, app) {
	var server = http.createServer(app);
	mixin(this, app);

	//backup feathers use and listen
	this.service = app.use;
	//NOTE: this is ugly																				
	this.listen = function(port) {
		server.listen(port || 80);
	};
}


/**
 * Use cosmos servers.
 * @return {[type]} [description]
 */

Cosmos.prototype.use = function(channel, /* route,*/ app) {
	//need instance of Cosmos
};
