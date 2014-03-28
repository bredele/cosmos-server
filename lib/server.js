
/**
 * Module dependencies.
 * @api private
 */

var feathers = require('feathers');
var cosmos = require('./app');
var mixin = require('./utils').mixin;

/**
 * Expose 'server'
 */

module.exports = server;


/**
 * server constructor.
 * @api public
 */

function server(options) {
	var app = feathers();
	return cosmos(options, app);
}


//expose express api

mixin(server, feathers);


//version

server.version = require('../package.json').version;