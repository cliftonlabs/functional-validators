'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty = require('./util/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests that a value has less than or equal to maximum length
 * @param  {integer} max - maximum length
 * @return {function} function that tests if value has length less than or equal to max
 */
function maxLength(max) {
  if (typeof max === 'undefined') {
    throw new Error('You must specify a maximum length when validating with maxLength');
  }
  return function (value) {
    if (!(0, _isEmpty2.default)(value) && value.length > max) {
      return 'Must be no more than ' + max + ' characters';
    }
  };
}

exports.default = maxLength;