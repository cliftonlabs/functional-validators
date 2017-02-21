'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joinRules = require('./joinRules');

var _joinRules2 = _interopRequireDefault(_joinRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getErrors(rules, data) {
  var errors = {};
  Object.keys(rules).forEach(function (key) {
    var rule = (0, _joinRules2.default)([].concat(rules[key])); // concat enables both functions and arrays of functions
    var error = rule(data[key], data);
    if (error) {
      if (Array.isArray(error) && Array.isArray(errors[key])) {
        console.log('merging errors');
        errors[key] = error.map(function (err, index) {
          return errors[key][index] || err;
        });
      } else {
        errors[key] = error;
      }
    }
  });
  return errors;
}

/**
 * Creates a validator function given a list of rules.
 * Pass an object of keys associated with a function or array of functions that accept value and data.
 * Value will be the value at that key on the object being validated.
 * Data will be the entire object being validated.
 *
 * @example
 * rules = {
 *   name: [v => if (!v) { return 'Required' }], // require to be truthy
 *   confirmName: [(v, d) => if (v !== d.name) { return 'Does not match' }] // require to match name
 * };
 * validator = createValidator(rules);
 * values = { name: '', confirmName: 'foo' };
 * results = validator(values);
 * // results == { name: 'Required', confirmName: 'Does not match' }
 *
 * @param  {Object} rules - object of keys associated with a function or array of functions.
 * @return {function} - function that accepts values and returns a keyed error object
 */
function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return getErrors(rules, data);
  };
}

exports.default = createValidator;