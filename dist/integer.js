'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skipEmpty = require('./util/skipEmpty');

var _skipEmpty2 = _interopRequireDefault(_skipEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests that a value is an integer
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
var integer = function integer(value) {
  return !(Number.isInteger(parseInt(value, 10)) && parseInt(value, 10) === parseFloat(value)) && 'Must be an integer';
};

exports.default = (0, _skipEmpty2.default)(integer);