'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty = require('./util/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _requireParam = require('./util/requireParam');

var _requireParam2 = _interopRequireDefault(_requireParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests that a value has a specified minimum length
 * @param  {integer} min - required length
 * @return {function} function that tests if value has required length
 */
function minLength() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _requireParam2.default)('You must specify a minimum length when validating with minLength');

  return function (value) {
    if (!(0, _isEmpty2.default)(value) && value.length < min) {
      return Array.isArray(value) ? 'At least ' + min + ' item(s) required' : 'Must be at least ' + min + ' characters';
    }
  };
}

exports.default = minLength;