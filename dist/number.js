'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skipEmpty = require('./util/skipEmpty');

var _skipEmpty2 = _interopRequireDefault(_skipEmpty);

var _lodash = require('lodash.tonumber');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isfinite');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests that a value is a number (int or float))
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
var number = function number(value) {
  return !(0, _lodash4.default)((0, _lodash2.default)(value)) && 'Must be a number';
};

exports.default = (0, _skipEmpty2.default)(number);