'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requireParam = require('./util/requireParam');

var _requireParam2 = _interopRequireDefault(_requireParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paramMissing = 'You must specify a field to match when validating with match';

/**
 * Tests that a value is equal to another field
 * @param  {string} field     [description]
 * @param  {string} fieldName [description]
 * @return {function} Function that tests if values are equal
 */
var match = function match() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _requireParam2.default)(paramMissing);
  var fieldName = arguments[1];
  return function (value, data) {
    return data && value !== data[field] && 'Does not match' + (fieldName ? ' ' + fieldName : '');
  };
};

exports.default = match;