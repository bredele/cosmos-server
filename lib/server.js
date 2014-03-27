
/**
 * Module dependencies.
 * @api private
 */

var feathers = require('feathers');
var mixin = require('./utils').mixin;


/**
 * Expose 'server'
 */

module.exports = server;


/**
 * server constructor.
 * @api public
 */

function server() {
	var app = feathers();
	return app;
}


//expose express api

mixin(server, feathers);


//version

server.version = require('../package.json').version;