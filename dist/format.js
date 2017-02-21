'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Tests if a value matches a regular expression
 * @param  {RegExp} regex - regular expression to match
 * @return {function} function that tests if value matches given regex
 */
var format = function format(regex) {
  if (!(regex instanceof RegExp)) {
    throw new Error('You must provide a regular expression to match when validating with format');
  }

  return function (value) {
    return !regex.test(value) && 'Invalid format';
  };
};

exports.default = format;