'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skipEmpty = require('./util/skipEmpty');

var _skipEmpty2 = _interopRequireDefault(_skipEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

/**
 * Tests that a string is formatted as an email
 * @param  {string} value - string to check
 * @return {string|undefined} error message if invalid
 */
var email = function email(value) {
  return !EMAIL_REGEX.test(value) && 'Invalid email address';
};

exports.default = (0, _skipEmpty2.default)(email);