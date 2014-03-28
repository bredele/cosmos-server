
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
  var server = create(options, app);
  mixin(this, app);

  //backup feathers use and listen
  this.service = app.use;
  //NOTE: this is ugly                                        
  this.listen = function(port) {
    server.listen(port || 80);
  };
}


/**
 * Create http(s) server according
 * the options (key and cert).
 * 
 * @param  {Object} options
 * @param  {Express} app
 * @return {HttpServer}
 * @api private
 */

function create(options, app) {
  // var httpServer = http.createServer(app);
  // var httpsServer = https.createServer(credentials, app);

  // httpServer.listen(80);
  // httpsServer.listen(443);
  return http.createServer(app);
}


/**
 * Use cosmos servers.
 * @return {Cosmos}
 */

Cosmos.prototype.use = function(channel, /* route,*/ app) {
  //need instance of Cosmos
  if(app instanceof Cosmos) {

  } else {
    this.service(channel, app);
  }
  return this;
};
