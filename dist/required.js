'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty = require('./util/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests that a value is not blank (null, undefined, empty string)
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
var required = function required(value) {
  return (0, _isEmpty2.default)(value) && 'Required';
};

exports.default = required;