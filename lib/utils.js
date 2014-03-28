//NOTE: may be use uberproto

/**
 * Mixin two object.
 * example:
 *
 *   utils.mixin(to, from);
 *
 * @param {Object} to destination
 * @param {Object} from source
 * @param {Object} to 
 * @api public
 */

module.exports.mixin = function(to, from) {
  for (var key in from) {
    if (from.hasOwnProperty(key)) {
      to[key] = from[key];
    }
  }
  return to;
};


/**
 * Merge two object.
 * example:
 *
 *   utils.merge(to, from);
 *
 * @param {Object} to destination
 * @param {Object} from source
 * @param {Object} to 
 * @api public
 */

module.exports.merge = function(to, from) {
  for (var key in from) {
    if (from.hasOwnProperty(key) && !to[key]) {
      to[key] = from[key];
    }
  }
  return to;
};