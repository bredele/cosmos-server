
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
	mixin(this, app);
	//backup feathers use
	this.service = app.use;

}


/**
 * Use cosmos servers.
 * @return {[type]} [description]
 */

Cosmos.prototype.use = function(channel, /* route,*/ app) {
	//need instance of Cosmos
};


Cosmos.prototype.listen = function(port) {
	//this.server.listen(port || 80);
};