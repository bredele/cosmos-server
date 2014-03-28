
/**
 * Module dependencies.
 * @api private
 */

var feathers = require('feathers');
var Cosmos = require('./app');
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
	return new Cosmos(options, feathers());
}


//expose express api

mixin(server, feathers);


//version

server.version = require('../package.json').version;