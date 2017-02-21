'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty = require('./util/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests that a value is equal to one of an array of values
 * @param  {Array} enumeration - array of possible values
 * @return {function} function that tests if value matches one of the given values
 */
function oneOf(enumeration) {
  if (!Array.isArray(enumeration)) {
    throw new Error('You must specify an array of values when validating with oneOf');
  }
  return function (value) {
    if (!(0, _isEmpty2.default)(value) && enumeration.indexOf(value) === -1) {
      return 'Must be one of: ' + enumeration.join(', ');
    }
  };
}

exports.default = oneOf;