
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

module.exports = function(options, app) {

  /**
   * Backup feathers middleware engine.
   * @type {Function}
   * @api private
   */
  
  var use = app.use.bind(app);


  /**
   * Set express app type.
   * It is use internally to configure used cosmos app
   * (instanceof doesn't work).
   * 
   * @type {String}
   * @api private
   */
  
  app._type = 'cosmos';


  /**
   * Use middleware.
   * 
   * @param  {[type]} channel [description]
   * @param  {[type]} child   [description]
   * @return {[type]}         [description]
   * @api public
   */
  
  app.use = function(channel, child) {
    if(child && child._type === 'cosmos') {
      console.log(channel);
      use(channel, service());
    }
    use(channel, child);
  };

  return app;

};


/**
 * Cosmos constructor.
 * @api public
 */

// function Cosmos(options, app) {
//   var server = create(options, app);
//   merge(this, app);
//   //backup feathers use and listen
//   this._use = app.use;

//   //NOTE: this is ugly                                        
//   this.listen = function(port) {
//     server.listen(port || 80);
//   };
// }


/**
 * Create http(s) server according
 * the options (key and cert).
 * 
 * @param  {Object} options
 * @param  {Express} app
 * @return {HttpServer}
 * @api private
 */

// function create(options, app) {
//   // var httpServer = http.createServer(app);
//   // var httpsServer = https.createServer(options, app);

//   // httpServer.listen(80);
//   // httpsServer.listen(443);
//   return http.createServer(app);
// }


/**
 * Use middle
 * @return {Cosmos}
 */

// Cosmos.prototype.use = function(channel, app) {
//   if(app instanceof Cosmos) {
//     //this._use(channel, service());
//   }
//   this._use(channel, app);
//   return this;
// };
