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
 * Tests that a value is a valid latitude
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
var latitude = function latitude(value) {
  return (0, _number2.default)(value) || (value > 90 || value < -90) && 'Must be a valid latitude';
};

exports.default = (0, _skipEmpty2.default)(latitude);