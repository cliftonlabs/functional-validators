'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _number = require('./number');

var _number2 = _interopRequireDefault(_number);

var _skipEmpty = require('./util/skipEmpty');

var _skipEmpty2 = _interopRequireDefault(_skipEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests that a value is a valid longitude
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
var longitude = function longitude(value) {
  return (0, _number2.default)(value) || (value > 180 || value < -180) && 'Must be a valid longitude';
};

exports.default = (0, _skipEmpty2.default)(longitude);