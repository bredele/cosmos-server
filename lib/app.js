
/**
 * Module dependencies.
 * @api private
 */

var feathers = require('feathers');
var http = require('http');
var https = require('https');
var merge = require('./utils').merge;
var service = require('./service');


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

  merge(this, app);

  //backup feathers use and listen
  this._use = app.use;
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
  // var httpsServer = https.createServer(options, app);

  // httpServer.listen(80);
  // httpsServer.listen(443);
  return http.createServer(app);
}


/**
 * Use middle
 * @return {Cosmos}
 */

Cosmos.prototype.use = function(channel, app) {
  if(app instanceof Cosmos) {
    this._use('/' + channel, service());
  }
  this._use(channel, app);
  return this;
};
