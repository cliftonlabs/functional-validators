'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joinRules = require('./util/joinRules');

var _joinRules2 = _interopRequireDefault(_joinRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Makes a field validator only run if a condition is met.
 *
 * @example
 * const tester = when((val, data) => data.id, required);
 * const validate = createValidator({ password: when((val, data) => data.id, required) });
 * validate({ password: undefined }) // {}
 * validate({ password: undefined, id: 123 }) // { password: 'Required' }
 *
 * @param  {function} conditionFn - function that receives value and data, returns truthy if condition met
 * @param  {function|Array} validator - validator function or array of validator functions that receives value and data, returns error
 * @return {function} function that runs validator if condition is met
 */
var when = function when(conditionFn, rules) {
  var validator = Array.isArray(rules) ? (0, _joinRules2.default)(rules) : rules;

  return function (value, data) {
    return conditionFn(value, data) && validator(value, data);
  };
};

exports.default = when;